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

const comicRoutes = require("./routes/comic");
app.use(comicRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const characterRoutes = require("./routes/character");
app.use(characterRoutes);

app.all("*", (req, res) => {
    res.status(400).json({ message: "Page not found" });
});

if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
        console.log("Server startedddddd");
    });
} else {
    app.listen(3001, () => {
        console.log("Server startedssssss");
    });
}

app.listen(process.env.PORT || 3001, () => {
    console.log("Server startedqqqqqq");
});
