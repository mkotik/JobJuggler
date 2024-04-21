import { Request, Response } from "express";
import prisma from "../prisma/config";
export const getAllClients = async (req: Request, res: Response) => {
  const userData = res.locals?.session?.userdata;
  if (!userData) {
    res.status(401).json({ message: "user is unauthenticated" });
    return;
  }
  const userId = userData.id;
  const clients = await prisma.clients.findMany({
    where: {
      belongs_to_id: userId,
    },
    include: {
      property_address: true,
      billing_address: true,
    },
  });

  res.status(200).json({ data: clients });
};
