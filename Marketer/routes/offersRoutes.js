const express = require("express");
const { createOffer, deleteOffer } = require("../controllers/offerController");

const router = express.Router();

router.post("/", createOffer);

router.delete("/", deleteOffer);

module.exports = router;
