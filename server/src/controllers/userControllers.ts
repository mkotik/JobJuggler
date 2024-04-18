import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email } = req.body;

  try {
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
