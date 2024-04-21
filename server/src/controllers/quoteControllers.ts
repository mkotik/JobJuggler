import { Request, Response } from "express";
import { getQuotesByUserId } from "../models/quoteModel";
export const getAllQuotes = async (req: Request, res: Response) => {
  const userData = res.locals?.session?.userdata;
  if (!userData) {
    res.status(401).json({ message: "user is unauthenticated" });
    return;
  }
  const userId = userData.id;
  const quotes = await getQuotesByUserId(userId);

  res.status(200).json({ data: quotes });
};
