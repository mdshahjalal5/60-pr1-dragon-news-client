import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAT7J2hx_IaoSD5whaVisp4wlJJA6FXAyM",
    authDomain: "dragon-news-client-82eb1.firebaseapp.com",
    projectId: "dragon-news-client-82eb1",
    storageBucket: "dragon-news-client-82eb1.appspot.com",
    messagingSenderId: "206049020914",
    appId: "1:206049020914:web:971b580ac05f83ddd2f96b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth}; 

