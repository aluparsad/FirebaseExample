const {fAuth} = require("./Modules")
const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");

exports.registerUser = (email, password, success, err) => {
    createUserWithEmailAndPassword(fAuth, email, password)
    .then(creds => success(creds))
    .catch(error => err(error));
}

exports.loginUser = (email, password, success, err) => {
    signInWithEmailAndPassword(fAuth, email, password)
    .then(creds => success(creds))
    .catch(error => err(error));
}
