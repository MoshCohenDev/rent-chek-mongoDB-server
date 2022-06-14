const mongoose = require("mongoose");

const contractSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    generalDetails: {
      nameOwner: { type: String, required: true },
      emailOwner: { type: String, required: true },
      addressOwner: { type: String, required: true },
      idOwner: { type: Number, required: true },
      rooms: { type: Number, required: true },
      nameRenter: { type: String, required: true },
      emailRenter: { type: String, required: true },
      addressRenter: { type: String, required: true },
      extension: {},
      idRenter: { type: Number, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      noHome: { type: Number, required: true },
      apartmentNumber: { type: Number, required: true },
      dateStart: { type: String, required: true },
      dateEnd: { type: String, required: true },
    },
    payments: {
      collateral: {},
      pricePayments: { type: Number, required: true },
      datePayments: { type: Number, required: true },
      morePayments: {},
    },
    additionalSections: {
      animals: { type: Boolean, required: true, default: false },
      painting: { type: Boolean, required: true, default: false },
      listContents: {},
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("contract", contractSchema);
