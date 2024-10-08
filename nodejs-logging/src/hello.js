import express from "express";

const app = express();
const NAME = "cakapbagus";

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/profile", (req, res) => {
    res.send(`Hallo nama saya ${NAME}`);
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});
