const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, "./images/")
        },

        filename: (req, file, cb) => {
            console.log(file);
            cb(null, Date.now() + path.extname(file.originalname))
        }
    });

const upload = multer({ storage });
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Test/index.html"));
})

router.post("/", upload.single('image'), (req, res) => {
    res.redirect("/storage");
})


module.exports = router;