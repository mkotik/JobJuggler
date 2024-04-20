import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./login.scss";
import { login } from "../../services/userServices";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onHandleSubmit = async () => {
    await login({ email, password });
  };
  return (
    <Box className="login-form">
      <TextField
        label="Email"
        variant="outlined"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className="input"
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        className="submit-btn"
        onClick={onHandleSubmit}
      >
        Log in
      </Button>
    </Box>
  );
};

export default Login;
