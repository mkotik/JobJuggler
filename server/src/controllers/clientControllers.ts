import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { getClientsByUserId, saveClient } from "../models/clientModel";
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

export const createClient = async (req: Request, res: Response) => {
  try {
    const userData: Prisma.ClientsCreateInput = req.body;
    const newUserId = await saveClient(userData);
    res.status(201).json({ message: "user successfully created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
