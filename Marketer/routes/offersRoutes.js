import { Router } from "express";
import { createOffer, deleteOffer } from "../controllers/offerController.js";

const router = Router();

router.post("/", createOffer);

router.delete("/", deleteOffer);

export default router;
