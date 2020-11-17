const router = require("express").Router();
const coinRoutes = require("./coins");

// Book routes
router.use("/coins", coinRoutes);

module.exports = router;
