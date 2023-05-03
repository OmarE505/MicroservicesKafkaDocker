import asyncHandler from "express-async-handler";
import Offer from "../models/offerModel.js";

export const getOffers = asyncHandler(async (req, res) => {
  console.log("======================================");
  console.log("GET OFFERS");
  console.log("======================================");
  const offers = await Offer.find({});
  res.status(200).json(offers);
});

export const createOffer = asyncHandler(async (req, res) => {
  if (!req.body.offer || !req.body.amount) {
    res.status(400);
    throw new Error("Please add an offer and amount to add an offer");
  }

  const offer = await Offer.create({
    offer: req.body.offer,
    amount: req.body.amount,
  });

  res.status(200).json(offer);
});

export const getOffer = asyncHandler(async (req, res) => {
  let offer = null;
  try {
    offer = await Offer.findById(req.params.id);
  } catch (err) {
    console.log(err);
    res.status(400);
    throw new Error("There is no offer with id = " + req.params.id);
  }

  res.status(200).json(offer);
});

export const updateOffer = asyncHandler(async (req, res) => {
  let offer = null;
  try {
    offer = await Offer.findById(req.params.id);
  } catch (err) {
    res.status(400);
    throw new Error("There is no offer with id = " + req.params.id);
  }

  const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, {
    offer: req.body.offer,
    amount: req.body.amount,
  });

  res.status(200).json({ offer: req.body.offer, amount: req.body.amount });
});

export const deleteOffer = asyncHandler(async (req, res) => {
  let offer = null;
  try {
    offer = await Offer.findById(req.params.id);
  } catch (err) {
    res.status(400);
    throw new Error("There is no offer with id = " + req.params.id);
  }

  await offer.deleteOne();

  res.status(200).json({ id: req.params.id });
});
