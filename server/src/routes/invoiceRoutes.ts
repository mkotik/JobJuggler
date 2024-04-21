import express from "express";
import { getAllInvoices } from "../controllers/invoiceControllers";
import { getUserSession } from "../middleware/userValidations";

const router = express.Router();

// "/api/invoices"
router.get("/get-all-invoices", getUserSession, getAllInvoices);
export default router;
