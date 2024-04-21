import express from "express";
import { getAllClients, createClient } from "../controllers/clientControllers";
import { getUserSession } from "../middleware/userValidations";

const router = express.Router();

// "/api/clients"
router.get("/get-all-clients", getUserSession, getAllClients);
router.post("/create-client", getUserSession, createClient);

export default router;
