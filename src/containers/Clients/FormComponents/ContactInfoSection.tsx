import {
  Box,
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ContactInfoSection = () => {
  return (
    <Box marginTop="17px">
      <Box display="flex" width="100%" gap="15px">
        <Box flex="1">
          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
          <Select
            // value={age}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ width: "100%" }}
          >
            <MenuItem value={"mobile"}>Mobile</MenuItem>
            <MenuItem value={"work"}>Work</MenuItem>
          </Select>
        </Box>
        <TextField sx={{ flex: "3" }} label="Phone Number" />
      </Box>
      <Box display="flex" flexDirection="column">
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Receives text messages"
        />
        <Button sx={{ width: "161px" }}>Add Phone Number</Button>
      </Box>
      <Box display="flex" width="100%" gap="15px">
        <Box flex="1">
          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
          <Select
            // value={age}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ width: "100%" }}
          >
            <MenuItem value={"mobile"}>Main</MenuItem>
            <MenuItem value={"work"}>Work</MenuItem>
          </Select>
        </Box>
        <TextField sx={{ flex: "3" }} label="Email address" />
      </Box>
      <Button sx={{ width: "auto", marginY: "20px" }}>Add Email</Button>
    </Box>
  );
};

export default ContactInfoSection;
