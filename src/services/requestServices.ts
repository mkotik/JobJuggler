import axios from "axios";
import config from "../config";

export const getRequests = async () => {
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/api/requests/get-all-requests`,
      {
        withCredentials: true, // Add credentials option
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
