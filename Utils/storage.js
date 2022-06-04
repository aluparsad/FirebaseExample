const { storage } = require("./Modules");
const { ref , uploadBytes, getDownloadURL} = require("firebase/storage");
const constants = require("../Constants/constants.json");

exports.setProfilePic = (uid, file, success, error) => {
    const userRef = ref(storage, `${constants.users}/${uid}.jpg`);
    
    uploadBytes(userRef, file)
    .then(snapshot => success(snapshot))
    .catch(err => error(err));
}

exports.getProfilePic = (uid, success, error) => {
    const userRef = ref(storage, `${constants.users}/${uid}.jpg`);

    getDownloadURL(userRef)
    .then(url => success(url))
    .catch(err => error(err));
}