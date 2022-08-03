const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/comic/:characterId", async (req, res) => {
    console.log(req.params.characterId);
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.characterId}?apiKey=${process.env.API_KEY}`);
        // console.log(response.data);
        console.log("ID CHARACTER : " + req.params.name);
        res.json(response.data);

    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
