import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import { getUserByEmail } from "../models/userModel";

export const emailExists: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUserByEmail(req.body.email);
  if (user) {
    res.locals.user = user;
    next();
  } else {
    res.status(401).json({ message: "email not found" });
  }
};
