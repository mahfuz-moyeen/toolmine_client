import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId

    //   apiKey: "AIzaSyDBsWB3zttNrFXdAhox5imjvyicu_hUHis",
    //   authDomain: "toolmine-a071b.firebaseapp.com",
    //   projectId: "toolmine-a071b",
    //   storageBucket: "toolmine-a071b.appspot.com",
    //   messagingSenderId: "706492042453",
    //   appId: "1:706492042453:web:fa9cdc40f011695e26a65c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;