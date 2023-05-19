// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqwhKLSafPagPrxThEHowHfV1TFqUqPAs",
    authDomain: "kidolls-client.firebaseapp.com",
    projectId: "kidolls-client",
    storageBucket: "kidolls-client.appspot.com",
    messagingSenderId: "165134397725",
    appId: "1:165134397725:web:6294ecbfcc8fed51d4b1f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;