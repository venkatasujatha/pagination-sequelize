const router = require("express").Router();
const studentController = require("../controller/studentController");

router.post('/student',studentController.bulkCreateStudent);
router.post('/studentPagination', studentController.getPagination)

module.exports = router