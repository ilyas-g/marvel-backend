const express = require("express");
const router = express.Router();

router.get("/characters", async (req, res) => {
    try {
        console.log("route log characters");
        res.json("route characters");

    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
