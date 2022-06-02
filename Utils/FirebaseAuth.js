// const firebaseApp = require("./FirebaseApp");
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("./FirebaseApp")

const firebaseAuth = getAuth(firebaseApp);
exports.firebaseAuth;


exports.registerUser = (email, password, success, err) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(creds => success(creds))
    .catch(error => err(error));
}

exports.loginUser = (email, password, success, err) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
    .then(creds => success(creds))
    .catch(error => err(error));
}
