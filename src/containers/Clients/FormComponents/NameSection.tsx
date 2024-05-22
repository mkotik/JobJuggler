import {
  FormGroup,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Select,
} from "@mui/material";
import { ClientsCreateInput } from "../../../config/types";

const NameSection = ({
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
  // const {setClientDetails} = props

  return (
    <FormGroup>
      <div className="client-details-fields">
        <Select
          placeholder="title"
          defaultValue=""
          variant="outlined"
          fullWidth
          className="client-details-select"
          onChange={onSelectChange}
          name="title"
          value={clientDetails.title}
        >
          <MenuItem value="n/a">No title</MenuItem>
          <MenuItem value="mr">Mr.</MenuItem>
          <MenuItem value="ms">Ms.</MenuItem>
          <MenuItem value="mrs">Mrs.</MenuItem>
          <MenuItem value="dr">Dr.</MenuItem>
        </Select>
        <TextField
          value={clientDetails.first_name}
          name="first_name"
          placeholder="First name"
          // label="First name"
          variant="outlined"
          fullWidth
          size="small"
          className="client-details-textfield"
          onChange={onTextInputChange}
        />
        <TextField
          value={clientDetails.last_name}
          name="last_name"
          placeholder="Last name"
          variant="outlined"
          fullWidth
          size="small"
          className="client-details-textfield"
          onChange={onTextInputChange}
        />
      </div>
      <TextField
        value={clientDetails.company_name}
        name="company_name"
        placeholder="Company name"
        variant="outlined"
        fullWidth
        size="small"
        margin="normal"
        className="client-details-company"
        onChange={onTextInputChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={onCheckbox}
            name="use_company_name_as_primary"
            value={clientDetails.use_company_name_as_primary}
          />
        }
        label="Use company name as the primary name"
        className="client-details-checkbox"
      />
    </FormGroup>
  );
};

export default NameSection;
