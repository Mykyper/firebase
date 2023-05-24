import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDeHC8dlF9xWzk6ewhpHr9p35eMdUo3gQo",
    authDomain: "miaou-80113.firebaseapp.com",
    databaseURL: "https://miaou-80113-default-rtdb.firebaseio.com",
    projectId: "miaou-80113",
    storageBucket: "miaou-80113.appspot.com",
    messagingSenderId: "223998627306",
    appId: "1:223998627306:web:5496d724ae0a6e0fbdb693",
    measurementId: "G-EF7JJP2P5S"
};
  

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);
const auth = getAuth(app)

export { fireDb };