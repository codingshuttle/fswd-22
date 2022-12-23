// const users = [{
//     id: '134',
//     email: 'anuj@gmail.com',
//     password: '1234'
// }, {
//     id: '761',
//     email: 'rajsaroj@gmail.com',
//     password: '4321'
// }]

// module.exports = users;

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: String,
        marks: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
