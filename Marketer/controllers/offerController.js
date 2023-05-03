import asyncHandler from "express-async-handler";
import produce from "../producers/marketerProducer.js";
import Offer from "../models/offerModel.js";

export const createOffer = asyncHandler(async (req, res) => {
  const offerBody = req.body.offer;
  const amountBody = req.body.amount;
  if (!offerBody || !amountBody) {
    res.status(400);
    throw new Error("Please add an offer and amount to create an offer");
  }
  const offer = new Offer(offerBody, amountBody);
  produce(offer, false);
  res.status(200).json(offer);
});

export const deleteOffer = asyncHandler(async (req, res) => {
  const offerBody = req.body.offer;
  const amountBody = req.body.amount;
  if (!offerBody || !amountBody) {
    res.status(400);
    throw new Error("Please add an offer and amount to delete");
  }
  const offer = new Offer(offerBody, amountBody);
  produce(offer, true);
  res.status(200).json(offer);
});
