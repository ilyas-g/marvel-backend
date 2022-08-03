const express = require("express");
const router = express.Router();

router.get("/comics", async (req, res) => {
    try {
        console.log("route log comics");
        res.json("route comics");
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
