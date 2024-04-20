import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./login.scss";

const Login = () => {
  return (
    <Box className="login-form">
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        className="input"
      />
      <TextField
        className="input"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button variant="contained" className="submit-btn">
        Log in
      </Button>
    </Box>
  );
};

export default Login;
