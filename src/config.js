import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBMP0ObHilYetuXtiOrIV35FYDK6UfV8jc",
    authDomain: "tedxkiwebsite.firebaseapp.com",
    projectId: "tedxkiwebsite",
    databaseURL: "https://tedxkiwebsite.firebaseio.com",
    storageBucket: "tedxkiwebsite.appspot.com",
    messagingSenderId: "497910017253",
    appId: "1:497910017253:web:63c49a293b55f75936b80c",
    measurementId: "G-ZKSGBDTKXD"
};

firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
export default firebase