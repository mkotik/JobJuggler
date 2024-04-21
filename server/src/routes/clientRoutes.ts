import express from "express";
import { getAllClients } from "../controllers/clientControllers";
import { getUserSession } from "../middleware/userValidations";

const router = express.Router();

// "/api/users"
router.get("/get-all-clients", getUserSession, getAllClients);

export default router;
