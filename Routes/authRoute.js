const { registerUser, loginUser } = require("../Utils/FirebaseAuth");

exports.loginRoute = (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    if (email && pass) {
        loginUser(email, pass, response => {
            console.log(response);
            res.status(202);
        });
    }
};

exports.createUserRoute = (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    if (email && pass) {
        registerUser(email, password, response => {
            console.log(response);
            res.status(202);
        });
    }
};

// module.exports = loginRoute;