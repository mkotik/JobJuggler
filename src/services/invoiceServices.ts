import axios from "axios";
import config from "../config";

export const getInvoices = async () => {
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/api/invoices/get-all-invoices`,
      {
        withCredentials: true, // Add credentials option
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
