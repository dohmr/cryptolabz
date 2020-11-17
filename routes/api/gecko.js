const router = require("express").Router();
const geckoController = require("../../controllers/geckocontroller");

// Matches with "/api/google"
router
  .route("/")
  .get(geckoController.findAll);

module.exports = router;