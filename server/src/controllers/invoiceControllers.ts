import { Request, Response } from "express";
import { getInvoicesByUserId } from "../models/invoiceModel";
export const getAllInvoices = async (req: Request, res: Response) => {
  const userData = res.locals?.session?.userdata;
  if (!userData) {
    res.status(401).json({ message: "user is unauthenticated" });
    return;
  }
  const userId = userData.id;
  const invoices = await getInvoicesByUserId(userId);

  res.status(200).json({ data: invoices });
};
