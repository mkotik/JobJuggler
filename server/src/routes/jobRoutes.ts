import express from "express";
import { getAllJobs } from "../controllers/jobControllers";
import { getUserSession } from "../middleware/userValidations";

const router = express.Router();

// "/api/jobs"
router.get("/get-all-jobs", getUserSession, getAllJobs);

export default router;
