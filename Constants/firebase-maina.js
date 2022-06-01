// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = require("./firebaseConfig.json");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyBZjHS7GxiLzERxZM97azlzXFbrC0BjrFk",
//   authDomain: "myfirstwebproject-93544.firebaseapp.com",
//   projectId: "myfirstwebproject-93544",
//   storageBucket: "myfirstwebproject-93544.appspot.com",
//   messagingSenderId: "223760173484",
//   appId: "1:223760173484:web:00b9b36257dca8f5715209",
//   measurementId: "G-QT81ZX40S5"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);