import {
  Box,
  FormGroup,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const NameSection = () => {
  return (
    <FormGroup>
      <div className="client-details-fields">
        <TextField
          select
          label="No title"
          defaultValue=""
          variant="outlined"
          fullWidth
          size="small"
          className="client-details-select"
        >
          <MenuItem value="">No title</MenuItem>
          <MenuItem value="mr">Mr.</MenuItem>
          <MenuItem value="ms">Ms.</MenuItem>
          <MenuItem value="mrs">Mrs.</MenuItem>
          <MenuItem value="dr">Dr.</MenuItem>
        </TextField>
        <TextField
          label="First name"
          variant="outlined"
          fullWidth
          size="small"
          className="client-details-textfield"
        />
        <TextField
          label="Last name"
          variant="outlined"
          fullWidth
          size="small"
          className="client-details-textfield"
        />
      </div>
      <TextField
        label="Company name"
        variant="outlined"
        fullWidth
        size="small"
        margin="normal"
        className="client-details-company"
      />
      <FormControlLabel
        control={<Checkbox name="useCompanyName" />}
        label="Use company name as the primary name"
        className="client-details-checkbox"
      />
    </FormGroup>
  );
};

export default NameSection;
