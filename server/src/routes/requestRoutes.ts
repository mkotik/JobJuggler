import express from "express";
import { getUserSession } from "../middleware/userValidations";
import { getAllRequests } from "../controllers/requestControllers";

const router = express.Router();

// "/api/requests"
router.get("/get-all-requests", getUserSession, getAllRequests);

export default router;
