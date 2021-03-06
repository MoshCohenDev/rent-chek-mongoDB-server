const express = require("express");
const router = express.Router();
const {
  getUsers,
  setUser,
  updateUser,
  deleteUser,
} = require("../../Controllers/userControllers");

router.get("/", getUsers);
router.post("/", setUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
