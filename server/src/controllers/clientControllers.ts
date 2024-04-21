import { Request, Response } from "express";
import { getClientsByUserId } from "../models/clientModel";
export const getAllClients = async (req: Request, res: Response) => {
  const userData = res.locals?.session?.userdata;
  if (!userData) {
    res.status(401).json({ message: "user is unauthenticated" });
    return;
  }
  const userId = userData.id;
  const clients = await getClientsByUserId(userId);

  res.status(200).json({ data: clients });
};