require('dotenv').config();
const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Welcome on Marvel Api ! 🎉");
});

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

app.all("*", (req, res) => {
    res.status(400).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
    console.log("Server has started !!");
});
