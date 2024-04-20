import axios from "axios";
import config from "../config";

export const login = async (loginData: { email: string; password: string }) => {
  const response = await axios.post(
    `${config.loginUrl}/api/users/login`,
    loginData
  );

  console.log(response);
};
