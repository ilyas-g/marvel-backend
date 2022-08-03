const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/comics", async (req, res) => {
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`);
        console.log("route log comics");
        // console.log(response.data);
        res.json(response.data);

    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
