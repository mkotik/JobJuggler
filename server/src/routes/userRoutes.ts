import express from "express";
import { createUser, login } from "../controllers/userControllers";
import { emailExists } from "../middleware/userValidations";

const router = express.Router();

// "/api/users"
router.post("/create-user", createUser);
router.post("/login", emailExists, login);

export default router;
