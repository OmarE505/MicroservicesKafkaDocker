const Offer = require("../models/offerModel");

const deleteOffer = async (offerName, amountValue) => {
  const offer = await Offer.findOneAndDelete({ offer: offerName, amount: amountValue });
  console.log(offer);
};

const createOffer = async (offerName, amountValue) => {
  await Offer.create({ offer: offerName, amount: amountValue });
};

module.exports = {
  deleteOffer,
  createOffer,
};
