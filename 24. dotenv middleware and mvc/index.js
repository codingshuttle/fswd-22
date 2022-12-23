const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const mainRouter = require("./routes/");

const app = express();
app.use(express.json());

const dbConnect = require("./dbConnect");

// function middleware1(req, res, next) {

// }

app.use((req, res, next) => {
    console.log(req.method, req.url, new Date().toTimeString());
    next();

    // if(req.body && req.body.name === 'Anuj') {
    //     next();
    // } else {
    //     res.send('Not allowed')
    // }
});

// app.use(middleware1)

app.use("/api", mainRouter);

app.get("/", (req, res) => {
    res.send({
        data: "ok",
    });
});

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => {
    console.log("started listening on port:", PORT);
});
