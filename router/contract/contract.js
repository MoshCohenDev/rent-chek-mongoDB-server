const express = require("express");
const router = express.Router();
const {
  getContract,
  setContract,
  // updateUser,
  // deleteUser,
} = require("../../Controllers/contractControllers");

router.get("/", getContract);
router.post("/", setContract);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;
