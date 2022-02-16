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


        apiKey: "AIzaSyAe5K0s2N844yB220-rnhbgFOsv8OgoNuM",
        authDomain: "unitymart-c522a.firebaseapp.com",
        projectId: "unitymart-c522a",
        storageBucket: "unitymart-c522a.appspot.com",
        messagingSenderId: "115333149166",
        appId: "1:115333149166:web:e82a96f86cd1350b4edeff"
    };

    initializeApp(firebaseConfig);
}

export default FirebaseInitialization;