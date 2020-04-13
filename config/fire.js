import { firebase } from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBt2bqhD8hNoUz2dVBr3lq8Fgk78JF3X64",
    authDomain: "appone-fa3b8.firebaseapp.com",
    databaseURL: "https://appone-fa3b8.firebaseio.com",
    projectId: "appone-fa3b8",
    storageBucket: "appone-fa3b8.appspot.com",
    messagingSenderId: "615684126091",
    appId: "1:615684126091:web:86da62cf049f1c8320ab8e",
    measurementId: "G-31LWLS5CVT"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;