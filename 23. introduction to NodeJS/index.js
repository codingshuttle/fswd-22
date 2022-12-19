const express = require("express");

const app = express();

app.use(express.json());

app.get("/user", (req, res) => {
    console.log("User was called");
    // res.send("Hello User updated");
    res.json({
        name: "Anuj",
        age: 26,
    });
});

app.post("/user", (req, res) => {
    console.log(req.body);

    res.json({
        name: "Shivam",
        age: 23,
        multiplyResult: req.body.a * req.body.b,
    });
});

app.get("/", (req, res) => {
    // res.send("server is now working");
    // res.sendFile(__dirname + "/index.html");
    res.json({
        success: true,
    });
    // res.send({
    //     success: true,
    // });
});

app.listen(4000, () => {
    console.log("Listening on port: 4000");
});
