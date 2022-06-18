import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {
  getDownloadURL,
} from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { ref, onUnmounted } from 'vue';

const config = {
  apiKey: 'AIzaSyDqktGxT3HbPiNLI0cpIwka2LhDSmiCo_M',
  authDomain: 'techhub-exam.firebaseapp.com',
  projectId: 'techhub-exam',
  storageBucket: 'techhub-exam.appspot.com',
  messagingSenderId: '267087070424',
  appId: '1:267087070424:web:2558b99579bbbf59ae83ad',
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const techEventCollection = db.collection('techEvents'); // grab the collection from firestore
const testimonialCollection = db.collection('testimonials');
const galleryImageCollection = db.collection('galleryImages');


// Adding images to the gallery
export const uploadImage = async (e) => {
  // Get a reference to the storage service, which is used to create references in your storage bucket

  // Create a storage reference from our storage service
  const file = e.dataTransfer.files[0];

  const storageUpload = firebase.storage().ref(); // Bucket Root returned.
  const fileRef = storageUpload.child(file.name); // The Path to this file in the bucket
  await fileRef.put(file); // Upload the file to this path in the bucket
  const task = fileRef.put(file);

  task.on(
    'state_changed',
    (snapshot) => {
      console.log(snapshot.bytesTransferred); // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    },
    (error) => {
      console.log(error);
      /* error */
    },
    () => {
      console.log('Success'); // Successfully uploaded
      getDownloadURL(fileRef) // Get the download URL for the fileRef from the storage bucket
        .then((url) => { // Add the image(file) to the galleryImages database.
          addDoc(collection(db, 'galleryImages/'), { // Assign the image to the galleryImages collection and give it an id automatically.
            img: file.name,
            url: url,
          });
        })
        .catch((error) => {
          // https://firebase.google.com/docs/storage/web/handle-errors
          console.log(error);
        });
    }
  );
};

export const getImages = () => {
  const images = ref([]);
  const close = galleryImageCollection.onSnapshot((snapshot) => {
    images.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return images;
};

export const createTechEvent = (techEvent) => {
  return techEventCollection.add(techEvent);
};

// accept event id and return the documentation if it exist in the event collection
export const getTechEvent = async (id) => {
  const techEvent = await techEventCollection.doc(id).get();
  return techEvent.exists ? techEvent.data() : null; // firebase exist method (like include/contains)
  // Link: https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#exists (Read this Kaloyan)
};

// accepts event + id (through the v-for) and updates the correct event based in id
export const updateTechEvent = (id, techEvent) => {
  return techEventCollection.doc(id).update(techEvent);
};

// accepts id => deletes
export const deleteTechEvent = (id) => {
  return techEventCollection.doc(id).delete();
};

// composition hook, that will return a ref to an array of events from the database
// to do this we add a listener(onSnapshot) on eventCollections so
// it updates whenever a change is detected

export const useLoadTechEvents = () => {
  const techEvents = ref([]);
  const close = techEventCollection.onSnapshot((snapshot) => {
    techEvents.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  // Creating this listener, will return us a clean-up function(onUnmounted,
  // Creating this listener, will return us a clean-up function(onUnmounted,
  // Creating this listener, will return us a clean-up function(onUnmounted,
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(close);
  return techEvents;
};

// /* Testimonial Crud */
export const createTestimonial = (testimonial) => {
  return testimonialCollection.add(testimonial);
};

export const getTestimonial = async (id) => {
  const testimonial = await testimonialCollection.doc(id).get();
  return testimonial.exists ? testimonial.data() : null;
};

export const updateTestimonial = (id, testimonial) => {
  return testimonialCollection.doc(id).update(testimonial);
};

export const deleteTestimonial = (id) => {
  return testimonialCollection.doc(id).delete();
};

export const useLoadTestimonials = () => {
  const testimonials = ref([]);
  const close = testimonialCollection.onSnapshot((snapshot) => {
    testimonials.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return testimonials;
};
