const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/characters", async (req, res) => {
    try {
        const { page } = req.query;
        const offset = page * 100 - 100;

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&skip=${offset}&limit=100`
        );
        // if (req.query.limit < 1 || req.query.limit > 100) {
        //     res.status(400).json({ message: "Limit must be between 1 and 100" });
        // } else {
        console.log("route log characters");
        // console.log(response.data);
        res.json(response.data);
        // }
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
