const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    marks: Number,
});

module.exports = mongoose.model("user", userSchema);
