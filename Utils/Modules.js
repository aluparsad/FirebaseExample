const firebaseConfig = require("../Constants/firebaseConfig.json");
const { initializeApp } = require("firebase/app");
const {getAuth} = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");
const {getStorage} = require("firebase/storage");

const fApp = initializeApp(firebaseConfig);
const fAuth = getAuth(fApp);
const firestore = getFirestore(fApp);
const storage = getStorage(fApp);


exports.fApp;
exports.fAuth;
exports.firestore;
exports.storage;