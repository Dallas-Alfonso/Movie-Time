import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDalR8teBk1hbZDsrGWkhWaHOYoT4-gcMA",
  authDomain: "movie-85e61.firebaseapp.com",
  projectId: "movie-85e61",
  storageBucket: "movie-85e61.appspot.com",
  messagingSenderId: "610243243216",
  databaseURL: "https://movie-85e61-default-rtdb.firebaseio.com/",
  appId: "1:610243243216:web:287da1c4d056b8afd402d5",
  measurementId: "G-4V90K23157"
};

firebase.initializeApp(firebaseConfig);

export default firebase;