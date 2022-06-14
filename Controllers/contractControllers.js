const asyncHandler = require("express-async-handler");
const Contract = require("../model/contractModels");
const mongoose = require("mongoose");

const getContract = asyncHandler(async (req, res) => {
  const contracts = await Contract.find();
  res.status(200).json(contracts);
});

const setContract = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const { generalDetails, payments, additionalSections } = req.body;
  const contract = await new Contract({
    _id: new mongoose.Types.ObjectId(),
    generalDetails,
    payments,
    additionalSections,
  });
  await contract.save();
  res.status(200).json(contract);
});

const updateUser = asyncHandler(async (req, res) => {
  const contract = await Contract.findById(req.params.id);
  if (!contract) {
    res.status(400);
    throw new Error("user not found");
  }
  const updatedUser = await Contract.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const contract = await Contract.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }

  await contract.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getContract, setContract, updateUser, deleteUser };
