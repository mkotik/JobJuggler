import express from "express";
import {
  createUser,
  login,
  isSessionValid,
} from "../controllers/userControllers";
import {
  emailExists,
  validateSession,
  getUserSession,
} from "../middleware/userValidations";

const router = express.Router();

// "/api/users"
router.post("/create-user", createUser);
router.get("/is-session-valid", getUserSession, isSessionValid);
router.post("/login", emailExists, login);

export default router;
