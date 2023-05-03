import { Router } from "express";
import { getOffers, createOffer, updateOffer, deleteOffer, getOffer } from "../controllers/offerController.js";

const router = Router();

router.route("/").get(getOffers).post(createOffer);

router.route("/:id").put(updateOffer).delete(deleteOffer).get(getOffer);

export default router;
