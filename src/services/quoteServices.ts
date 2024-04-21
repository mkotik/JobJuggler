import axios from "axios";
import config from "../config";

export const getQuotes = async () => {
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/api/quotes/get-all-quotes`,
      {
        withCredentials: true, // Add credentials option
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
