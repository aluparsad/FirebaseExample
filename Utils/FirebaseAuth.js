const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseConfig = require("../Constants/firebaseConfig.json");

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

exports.firebaseApp;
exports.firebaseAuth;

exports.registerUser = (email, password, resp) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(creds => resp(creds))
    .catch(error => resp(error));
}

exports.loginUser = (email, password, resp) => {
    signInWithEmailAndPassword(email, password)
    .then(creds => resp(creds))
    .catch(error => resp(error));
}