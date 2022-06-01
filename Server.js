const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {loginRoute, createUserRoute} = require("./Routes/authRoute");

// Define Server's port number
const PORT = process.env.PORT || 3000;

// Initialize Server 
const app = express();

// configure app
app.use(express.urlencoded({ extended: true }))

// static route
app.use(express.static(path.join(__dirname, "Home")));

// handle requests
app.post("/login", loginRoute);

app.get("/authtest", createUserRoute);



// Start Listening on given PORT
app.listen(PORT, () => console.log(`Server Started on PORT : ${PORT}`));

