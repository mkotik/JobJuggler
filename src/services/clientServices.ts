import axios from "axios";
import config from "../config";
import { ClientsCreateInput } from "../config/types";

export const getClients = async () => {
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/api/clients/get-all-clients`,
      {
        withCredentials: true, // Add credentials option
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const createClient = async (clientDetails: ClientsCreateInput) => {
  try {
    const response = await axios.post(
      `${config.apiBaseUrl}/api/clients/create-client`,
      {
        clientDetails,
      },
      {
        withCredentials: true, // Add credentials option
      }
    );
    // return response.data.data;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
