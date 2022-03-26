import { initializeApp } from "firebase/app";

const FirebaseInitialization = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAe5K0s2N844yB220-rnhbgFOsv8OgoNuM",
        authDomain: "unitymart-c522a.firebaseapp.com",
        projectId: "unitymart-c522a",
        storageBucket: "unitymart-c522a.appspot.com",
        messagingSenderId: "115333149166",
        appId: "1:115333149166:web:e82a96f86cd1350b4edeff"

        // apiKey: "AIzaSyDIOzENohxiYXJHnI6SFauseoUTI2Fu6eg",
        // authDomain: "multi-vendor-888c3.firebaseapp.com",
        // projectId: "multi-vendor-888c3",
        // storageBucket: "multi-vendor-888c3.appspot.com",
        // messagingSenderId: "970063433111",
        // appId: "1:970063433111:web:d07ecec1fd360df24008d2",
        // measurementId: "G-N12SDFGC99"
    };

    initializeApp(firebaseConfig);
}

export default FirebaseInitialization;