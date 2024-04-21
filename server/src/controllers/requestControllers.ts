import { Request, Response } from "express";
import { getRequestsByUserId } from "../models/requestModel";
export const getAllRequests = async (req: Request, res: Response) => {
  const userData = res.locals?.session?.userdata;
  if (!userData) {
    res.status(401).json({ message: "user is unauthenticated" });
    return;
  }
  const userId = userData.id;
  const requests = await getRequestsByUserId(userId);

  res.status(200).json({ data: requests });
};
