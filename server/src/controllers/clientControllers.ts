import { Request, Response } from "express";
import { ClientsCreateInput } from "src/config/types";
import {
  getClientsByUserId,
  saveClientWithAddresses,
} from "../models/clientModel";
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
    //@ts-ignore
    if (!req.session.userdata || !req.session.userdata.id) {
      return res.status(500).json({ message: "User ID not found in session" });
    }

    //@ts-ignore
    const belongs_to_id = req.session.userdata.id;
    const clientDetails: ClientsCreateInput = req.body.clientDetails;
    const response = await saveClientWithAddresses(
      clientDetails,
      belongs_to_id
    );
    console.log(response);

    //save property address
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
