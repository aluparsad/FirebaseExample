const { initializeApp } = require("firebase/app");
const firebaseConfig = require("../Constants/firebaseConfig.json");


const firebaseApp = initializeApp(firebaseConfig);

module.exports = firebaseApp;