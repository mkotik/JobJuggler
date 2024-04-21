import express from "express";
import { getAllQuotes } from "../controllers/quoteControllers";
import { getUserSession } from "../middleware/userValidations";

const router = express.Router();

// "/api/quotes"
router.get("/get-all-quotes", getUserSession, getAllQuotes);

export default router;
