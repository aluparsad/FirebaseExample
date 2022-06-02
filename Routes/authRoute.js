const express = require("express");
const bodyParser = require("body-parser");
const { registerUser, loginUser } = require("../Utils/FirebaseAuth");

const router = express.Router();


router.post("/login", (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    loginUser(email, pass, (creds) => {
        res.json(creds.user.email);
    }, err => res.send(err.message));
})

router.post("/register", (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;

    registerUser(email, pass, (creds) => {
        res.send(creds);
    },
        err => res.send(err.message));

})

module.exports = router;