import { initializeApp } from "firebase/app";

const FirebaseInitialization = () => {
    const firebaseConfig = {
        // apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
        // authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
        // projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
        // storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
        // messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
        // appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
        // measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,


        apiKey: "AIzaSyDIOzENohxiYXJHnI6SFauseoUTI2Fu6eg",
        authDomain: "multi-vendor-888c3.firebaseapp.com",
        projectId: "multi-vendor-888c3",
        storageBucket: "multi-vendor-888c3.appspot.com",
        messagingSenderId: "970063433111",
        appId: "1:970063433111:web:d07ecec1fd360df24008d2",
        measurementId: "G-N12SDFGC99"
    };

    initializeApp(firebaseConfig);
}

export default FirebaseInitialization;