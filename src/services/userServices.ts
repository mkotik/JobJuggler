import axios from "axios";
import config from "../config";

export const login = async (loginData: { email: string; password: string }) => {
  try {
    const response = await axios.post(
      `${config.loginUrl}/api/users/login`,
      loginData,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const isSessionValid = async () => {
  try {
    const response = await axios.get(
      `${config.loginUrl}/api/users/is-session-valid`,
      {
        withCredentials: true, // Add credentials option
      }
    );
    return response.data.status === "valid";
  } catch (err) {
    console.log(err);
  }
};
