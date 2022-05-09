var express = require("express");
const skillsCtrl = require("../controllers/skills");
var router = express.Router();

/* GET home page. */
router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.newSkill);
router.get("/:id", skillsCtrl.show);
router.get("/:id/edit", skillsCtrl.editForm);

router.post("/", skillsCtrl.create);
router.delete("/:id", skillsCtrl.deleteSkill);
router.put("/:id", skillsCtrl.editSkill);

module.exports = router;
