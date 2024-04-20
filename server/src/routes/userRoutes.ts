import express from "express";
import { createUser, login } from "../controllers/userControllers";

const router = express.Router();

// "/api/users"
router.post("/create-user", createUser);
router.post("/login", login);

export default router;
