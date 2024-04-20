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

export const validateSession = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //@ts-ignore
  if (req.session && req.session.authenticated) {
    console.log("session authenticated");
    next();
  } else {
    console.log("session invalid");
    // res.status(403).json({ message: "session invalid" });
    next();
  }
};
