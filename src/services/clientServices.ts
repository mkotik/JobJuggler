import axios from "axios";
import config from "../config";

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
