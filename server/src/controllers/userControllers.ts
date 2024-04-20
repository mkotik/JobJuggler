import { Request, Response } from "express";
import { xDaysFromNow } from "../utils/dateUtils";
import config from "../config/config";
import prisma from "../prisma/config";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newUserId = await prisma.users.create({
      data: {
        ...req.body,
        free_trial_expiration_date: xDaysFromNow(config.subscriptionLength),
      },
    });
    res.status(201).json(newUserId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
