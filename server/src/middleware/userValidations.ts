import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import { getUserByEmail } from "../models/userModel";
import { store } from "../index";

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

export const getUserSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("In /middleware/userValidations.ts getUserSession");
  try {
    const { sessionId } = req.cookies;
    if (!sessionId) {
      res.status(403).json({ status: "invalid sessionId" });
      return;
    }
    const sessionIdKey = sessionId.split(".")[0].substring(2);
    const sessions = await new Promise<any>((resolve, reject) => {
      store.all((error: any, sessions: any) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(sessions);
      });
    });

    const session = sessions[sessionIdKey];
    res.locals.session = session;
    next();
  } catch (err: unknown) {
    res.status(403).json({ message: "unable to find session" });
  }
};
