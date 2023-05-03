import Offer from "../models/offerModel.js";

export const deleteOffer = async (offerName, amountValue) => {
  const offer = await Offer.findOneAndDelete({
    offer: offerName,
    amount: amountValue,
  });
  console.log(offer);
};

export const createOffer = async (offerName, amountValue) => {
  await Offer.create({ offer: offerName, amount: amountValue });
};
