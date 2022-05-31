import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {
  ref as firebaseRef,
  getStorage,
  getDownloadURL,
} from 'firebase/storage';
import { collection, addDoc, storage } from 'firebase/firestore';
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

const storageRef = getStorage(storage);

// Adding images to the gallery
export const uploadImage = async (e) => {
  // Get a reference to the storage service, which is used to create references in your storage bucket

  // Create a storage reference from our storage service
  const imagesRef = firebaseRef(storageRef, 'gallery');
  console.log(imagesRef);
  const file = e.dataTransfer.files[0];

  const storageUpload = firebase.storage().ref();
  const fileRef = storageUpload.child(file.name);
  await fileRef.put(file);
  const task = fileRef.put(file);

  task.on(
    'state_changed',
    (snapshot) => {
      console.log(snapshot.bytesTransferred);
    },
    (error) => {
      console.log(error);
      /* error */
    },
    () => {
      console.log('Success');
      getDownloadURL(fileRef)
        .then((url) => {
          addDoc(collection(db, 'galleryImages/'), {
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
