const log = require("../middlewares/Logger");
const User = require("../models/User");

const signupController = async (req, res) => {
    console.log("signupcontroller called");

    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(403).send("Email and Password are required");
        return;
    }

    // const id = Math.floor(Math.random()*1000);

    // check if the user email is already present or not

    const user = await User.findOne({ email });
    if (user) {
        res.status(403).send("Email already registered");
        return;
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(200).json(newUser);
};

const loginController = async (req, res) => {
    console.log("loginController called");

    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(403).send("Email and Password are required");
        return;
    }
    // const user = users.find((item) => item.email === email);

    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).send("User not found");
        return;
    }

    console.log(user);

    if (user.password !== password) {
        res.status(401).send("Incorrect Password");
        return;
    }

    res.status(200).json({
        email: user.email,
    });
};

const getUserController = (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.status(403).send("User id is required");
        return;
    }

    const user = users.find((item) => item.id == id);

    console.log(id, user);

    res.status(200).json(user);
};

module.exports = {
    signupController,
    loginController,
    getUserController,
};
