const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const authRoute = require("./Routes/authRoute");
const storageRoute = require("./Routes/UserRoute");

// Define Server's port number
const PORT = process.env.PORT || 3000;

// Initialize Server 
const app = express();

                                                        // configure app
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// static route
app.use(express.static(path.join(__dirname, "Home")));

                                                        // Routes
// login user request
app.use("/auth", authRoute);

app.use("/storage", storageRoute);

// Start Listening on given PORT
app.listen(PORT, () => console.log(`Server Started on PORT : ${PORT}`));

