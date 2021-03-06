const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/").get(controllers.getAllFighters);
router.route("/name").get(controllers.getFightersByName);
router.route("/nickname").get(controllers.getFightersByNickname);
router.route("/height").get(controllers.getFightersByHeight);
router.route("/weight").get(controllers.getFightersByWeight);
router.route("/heightrange").get(controllers.getFightersByHeightRange);
router.route("/weightrange").get(controllers.getFightersByWeightRange);
router.route("/country").get(controllers.getFightersByCountry);

module.exports = router;

