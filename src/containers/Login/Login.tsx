import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./login.scss";
import { login } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onHandleSubmit = async () => {
    const response = await login({ email, password });
    if (response && response.status === 200) {
      navigate("/");
    }
  };
  return (
    <Box className="login-form">
      <TextField
        placeholder="Email"
        variant="outlined"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className="input"
        placeholder="Password"
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
