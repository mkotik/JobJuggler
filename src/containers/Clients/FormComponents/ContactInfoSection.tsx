import {
  Box,
  TextField,
  FormControlLabel,
  Switch,
  Select,
  MenuItem,
} from "@mui/material";
import { ClientsCreateInput } from "../../../config/types";

const ContactInfoSection = ({
  clientDetails,
  onSelectChange,
  onTextInputChange,
  onCheckbox,
}: {
  clientDetails: ClientsCreateInput;
  onSelectChange: any;
  onTextInputChange: any;
  onCheckbox: any;
}) => {
  return (
    <Box marginTop="17px">
      <Box display="flex" width="100%" gap="15px">
        <Box flex="1">
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ width: "100%" }}
            onChange={onSelectChange}
            value={clientDetails.phone_type}
            name="phone_type"
          >
            <MenuItem value={"mobile"}>Mobile</MenuItem>
            <MenuItem value={"work"}>Work</MenuItem>
          </Select>
        </Box>
        <TextField
          sx={{ flex: "3" }}
          placeholder="Phone Number"
          onChange={onTextInputChange}
          name="mobile_phone_number"
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              onChange={onCheckbox}
              name="receives_texts"
              value={clientDetails.receives_texts}
            />
          }
          label="Receives text messages"
        />
        {/* <Button sx={{ width: "161px" }}>Add Phone Number</Button> */}
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
            onChange={onSelectChange}
            name="email_type"
            value={clientDetails.email_type}
          >
            <MenuItem value={"main"}>Main</MenuItem>
            <MenuItem value={"work"}>Work</MenuItem>
          </Select>
        </Box>
        <TextField
          sx={{ flex: "3" }}
          placeholder="Email address"
          name="email"
          value={clientDetails.email}
          onChange={onTextInputChange}
        />
      </Box>
      {/* <Button sx={{ width: "auto", marginY: "20px" }}>Add Email</Button> */}
    </Box>
  );
};

export default ContactInfoSection;
