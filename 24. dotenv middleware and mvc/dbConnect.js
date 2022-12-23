const mongoose = require("mongoose");

module.exports = () => {
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
};
