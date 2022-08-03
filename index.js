require('dotenv').config();
const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Welcome on Marvel Api ! 🎉");
});

app.all("*", (req, res) => {
    res.status(400).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
    console.log("Server has started !!");
});
