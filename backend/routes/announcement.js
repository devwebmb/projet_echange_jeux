const express = require("express");
const multer = require("../middlewares/multer-config");
const router = express.Router();

const announcementCtrl = require("../controllers/announcement");

router.get("/", announcementCtrl.getAllAnnouncements);
router.get("/:id", announcementCtrl.getOneAnnouncement);
router.post("/", multer, announcementCtrl.addAnnouncement);
router.delete("/:id", announcementCtrl.deleteAnnouncement);

module.exports = router;
