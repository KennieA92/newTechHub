import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { ref as firebaseRef, getStorage } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
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

// const testimonialCollection = db.collection('testimonials')
// const galleryImageCollection = db.collection('galleryImages')

// create an event by using the add prototype from firebase
// Add a event to the event collection

// Image

export const uploadImage = async (e) => {
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  // Create a storage reference from our storage service
  const storageRef = firebaseRef(storage, 'images');
  console.log(storageRef);

  const file = e.dataTransfer.files[0];
  const storageUpload = firebase.storage().ref();
  const fileRef = storageUpload.child('images/' + file.name);
  const task = fileRef.put(file);

  setDoc(doc(db, 'images', file.name), {
    path: 'images/' + file.name,
  });
  task.on(
    'state_changed',
    (snapshot) => {
      console.log(snapshot._delegate.state);

      /* progress */
    },
    (error) => {
      console.log(error);
      /* error */
    },
    () => {
      console.log('amazing');
      /* complete */
    }
  );
};
// 'file' comes from the Blob or File API

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
// export const createTestimonial = testimonial => {
//     return testimonialCollection.add(testimonial)
// }

// export const getTestimonial = async id => {
//     const testimonial = await testimonialCollection.doc(id).get()
//     return testimonial.exists ? testimonial.data() : null
// }

// export const updateTestimonial = (id, testimonial) => {
//     return testimonialCollection.doc(id).update(testimonial)
// }

// export const deleteTestimonial = id => {
//     return testimonialCollection.doc(id).delete()
// }

// export const useLoadTestimonial = () => {
//     const testimonials = ref([])
//     const close = testimonialCollection.onSnapshot(snapshot => {
//         testimonials.value = snapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }))
//     })
//     onUnmounted(close)
//     return testimonials
// }

// /* Gallery Images Crud */
// export const createGalleryImage = galleryImage => {
//     return galleryImageCollection.add(galleryImage)
// }

// export const getGalleryImage = async id => {
//     const galleryImage = await galleryImageCollection.doc(id).get()
//     return galleryImage.exists ? galleryImage.data() : null
// }

// export const updateGalleryImage = (id, galleryImage) => {
//     return galleryImageCollection.doc(id).update(galleryImage)
// }

// export const deleteGalleryImage = id => {
//     return galleryImageCollection.doc(id).delete()
// }

// export const useLoadGalleryImage = () => {
//     const galleryImages = ref([])
//     const close = galleryImageCollection.onSnapshot(snapshot => {
//         galleryImages.value = snapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }))
//     })
//     onUnmounted(close)
//     return galleryImages
// }
