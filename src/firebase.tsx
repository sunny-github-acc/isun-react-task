import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBQ3HZL-KIcMKdMnXSssS0ObZ6SUQEN67U",
  authDomain: "isun-task-dev.firebaseapp.com",
  projectId: "isun-task-dev",
  storageBucket: "isun-task-dev.appspot.com",
  messagingSenderId: "53001474601",
  appId: "1:53001474601:web:32eccb1d6c96458296c238",
});

export const auth = app.auth();
export default app;
