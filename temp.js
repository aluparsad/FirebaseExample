const initializeApp = require("firebase/app");
const { createUserWithEmailAndPassword } = require("firebase/auth");
const getAuth = require("firebase/auth");
const firebaseConfig = require("./Constants/firebaseConfig.json");


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


createUserWithEmailAndPassword(auth, email, password)
    .then(userCreds => {
        const user = userCreds.user;
        console.log(user);
    })
    .catch(error => console.log(error.message))