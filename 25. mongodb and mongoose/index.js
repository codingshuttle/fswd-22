const mongoose = require("mongoose");
const User = require("./models/User");

const mongoUri =
    "mongodb+srv://anuj:QVMUERzI7WeymtSo@cluster0.sq3in0j.mongodb.net/?retryWrites=true&w=majority";

try {
    mongoose.connect(
        mongoUri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        () => {
            console.log("mongodb connected");
        }
    );
} catch (e) {
    console.log(e);
}

async function createUser(newUser) {
    const user = new User(newUser); //in memory user document created

    // user.save().then((data) => {
    //     console.log("user added");
    // });

    const data = await user.save(); // user saved inside database
    console.log("user", user);
    console.log("data", data);
}

async function findUser() {
    // const users = await User.find();
    // const user = await User.findById("63a5d3fc24dafdeef44aac7d");
    // const user = await User.find({ email: "anuj@gmail.com" });
    // const user = await User.find({ marks: { $gte: 49 } });
    const user = await User.find({ email: { $regex: "u" } });
    console.log(user);
    return user;
}

async function updateMarks(userId, marks) {
    const user = await User.findById(userId);
    user.marks = marks;
    const updatedUser = user.save();
    console.log(updatedUser);
}

async function deleteUser(userId) {
    const user = await User.findById(userId);
    if (!user) return;
    await user.delete();
    console.log("user has been deleted");
}

deleteUser("63a5d98f6ac52b933189de57");

// updateMarks("63a5d97d1df9eb2318b54fcc", 92);

// findUser();

// createUser({
//     email: "shivam@gmail.com",
//     password: "12345",
//     marks: 49,
// });
