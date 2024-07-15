import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBAKmBE0nxo51O2eBTcxOKcqU6gvjKV2O4",
    authDomain: "kechex-87535.firebaseapp.com",
    projectId: "kechex-87535",
    storageBucket: "kechex-87535.appspot.com",
    messagingSenderId: "41286000307",
    appId: "1:41286000307:web:e12a56b2b9f54996da1ac6",
    measurementId: "G-1LGMEDPFB4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const storageRef = ref(storage, 'path/to/file');

export { app, db, storage };