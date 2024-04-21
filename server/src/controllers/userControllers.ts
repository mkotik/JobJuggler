import { Request, Response } from "express";
const bcrypt = require("bcryptjs");
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

export const login = async (req: Request, res: Response) => {
  const { password } = req.body;

  const storedPassword = res.locals.user.password;

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);

  const isPasswordValid = await bcrypt.compare(password, storedPassword);
  if (isPasswordValid) {
    //@ts-ignore
    req.session.authenticated = true;
    //@ts-ignore
    req.session.userdata = res.locals.user;
    res.status(200).json({ message: "login successful" });
  } else {
    res.status(401).json({ message: "invalid password" });
  }
};

export const isSessionValid = async (req: Request, res: Response) => {
  const session = res.locals.session;

  if (session && session.authenticated) {
    res.status(200).json({ status: "valid" });
  } else {
    res.status(403).json({ status: "invalid" });
  }
};
