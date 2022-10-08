const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/characters", async (req, res) => {
    try {
        const page = req.query;
        const skip = page * 100 - 100;

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&limit=100&skip=${skip}`
        );
        // if (req.query.limit <= 10) req.query.limit = 10;
        console.log("route log characters");
        // console.log(response.data);
        res.json(response.data);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
