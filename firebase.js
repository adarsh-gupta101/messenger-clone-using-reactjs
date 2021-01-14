import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDbZHmpVS5yDsG4BRTVolpIhc-MqY_w2UA",
    authDomain: "adarsh-chit-chat.firebaseapp.com",
    databaseURL: "https://adarsh-chit-chat-default-rtdb.firebaseio.com",
    projectId: "adarsh-chit-chat",
    storageBucket: "adarsh-chit-chat.appspot.com",
    messagingSenderId: "535615422296",
    appId: "1:535615422296:web:33f35a64dfd7d95597ef2d",
    measurementId: "G-F9ZHK2F68K"
})




const db=firebaseApp.firestore();
export default db