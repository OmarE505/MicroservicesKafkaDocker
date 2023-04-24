const asyncHandler = require("express-async-handler");
const Offer = require("../models/offerModel");

const getOffers = asyncHandler(async (req, res) => {
  console.log("======================================");
  console.log("GET OFFERS");
  console.log("======================================");
  const offers = await Offer.find({});
  res.status(200).json(offers);
});

const createOffer = asyncHandler(async (req, res) => {
  if (!req.body.offer || !req.body.amount) {
    res.status(400);
    throw new Error("Please add an offer or amount");
  }

  const offer = await Offer.create({
    offer: req.body.offer,
    amount: req.body.amount,
  });

  res.status(200).json(offer);
});

const getOffer = asyncHandler(async (req, res) => {
  const offer = await Offer.findById(req.params.id);
  if (!offer) {
    res.status(400);
    throw new Error("There is no offer with id = " + req.params.id);
  }

  res.status(200).json(offer);
});

const updateOffer = asyncHandler(async (req, res) => {
  const offer = await Offer.findById(req.params.id);
  if (!offer) {
    res.status(400);
    throw new Error("There is no offer with id = " + req.params.id);
  }

  const updatedOffer = await Offer.findByIdAndUpdate(
    req.params.id,
    {
      offer: req.body.offer,
      amount: req.body.amount,
    },
    { new: true }
  );

  res.status(200).json(updatedOffer);
});

const deleteOffer = asyncHandler(async (req, res) => {
  const offer = await Offer.findById(req.params.id);
  if (!offer) {
    res.status(400);
    throw new Error("There is no offer with id = " + req.params.id);
  }

  await offer.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getOffers,
  createOffer,
  updateOffer,
  deleteOffer,
  getOffer,
};
