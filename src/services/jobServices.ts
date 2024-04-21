import axios from "axios";
import config from "../config";

export const getJobs = async () => {
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/api/jobs/get-all-jobs`,
      {
        withCredentials: true, // Add credentials option
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
