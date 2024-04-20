import axios from "axios";

export const login = async () => {
  const response = await axios.post("http://localhost:5500/api/users/login", {
    email: "user1@example.com",
    password: "password1",
  });

  console.log(response);
};
