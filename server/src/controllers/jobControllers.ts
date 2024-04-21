import { Request, Response } from "express";
import { getJobsByUserId } from "../models/jobModel";
export const getAllJobs = async (req: Request, res: Response) => {
  const userData = res.locals?.session?.userdata;
  if (!userData) {
    res.status(401).json({ message: "user is unauthenticated" });
    return;
  }
  const userId = userData.id;
  const jobs = await getJobsByUserId(userId);

  res.status(200).json({ data: jobs });
};
