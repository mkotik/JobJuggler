import express from "express";
import { createUser, login } from "../controllers/userControllers";
import { emailExists, isSessionValid } from "../middleware/userValidations";

const router = express.Router();

// "/api/users"
router.post("/create-user", createUser);
router.post("/login", emailExists, isSessionValid, login);

export default router;
