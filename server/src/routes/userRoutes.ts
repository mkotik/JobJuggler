import express from "express";
import {
  createUser,
  login,
  isSessionValid,
} from "../controllers/userControllers";
import { emailExists, validateSession } from "../middleware/userValidations";

const router = express.Router();

// "/api/users"
router.post("/create-user", createUser);
router.get("/is-session-valid", isSessionValid);
router.post("/login", emailExists, validateSession, login);

export default router;
