import {
  Box,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { AddressCreateInput, ClientsCreateInput } from "../../../config/types";

const AddressSection = ({
  setClientDetails,
  clientDetails,
  addressType,
}: {
  setClientDetails: any;
  clientDetails: ClientsCreateInput;
  addressType: "property" | "billing";
}) => {
  const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientDetails({
      ...clientDetails,
      [`${addressType}_address`]: {
        ...clientDetails[`${addressType}_address`],
        [name]: value,
      },
    });
  };

  const onSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setClientDetails({
      ...clientDetails,
      [`${addressType}_address`]: {
        ...clientDetails[`${addressType}_address`],
        [name]: value,
      },
    });
  };
  return (
    <Box display="flex" flexDirection="column" gap="15px">
      <TextField
        placeholder="Street 1"
        onChange={onTextInputChange}
        name="street1"
        value={clientDetails[`${addressType}_address`]?.street1}
        sx={{
          width: "100%",
          input: {
            height: "40px",
            padding: "0 14px", // Adjust padding as needed to align text properly
          },
        }}
      />
      <TextField
        placeholder="Street 2"
        onChange={onTextInputChange}
        value={clientDetails[`${addressType}_address`]?.street2}
        name="street2"
        sx={{
          width: "100%",
          input: {
            height: "40px",
            padding: "0 14px", // Adjust padding as needed to align text properly
          },
        }}
      />
      <Box display="flex" gap="15px">
        <TextField
          placeholder="City"
          name="city"
          onChange={onTextInputChange}
          value={clientDetails[`${addressType}_address`]?.city}
          sx={{
            width: "100%",
            input: {
              height: "40px",
              padding: "0 14px", // Adjust padding as needed to align text properly
            },
          }}
        />
        <TextField
          placeholder="State"
          name="state"
          onChange={onTextInputChange}
          value={clientDetails[`${addressType}_address`]?.state}
          sx={{
            width: "100%",
            input: {
              height: "40px",
              padding: "0 14px", // Adjust padding as needed to align text properly
            },
          }}
        />
      </Box>
      <Box display="flex" flexDirection="row" gap="15px">
        <TextField
          name="zip_code"
          placeholder="Zip Code"
          onChange={onTextInputChange}
          value={clientDetails[`${addressType}_address`]?.zip_code}
          sx={{
            width: "100%",
            flex: "1",
            input: {
              flex: "1",
              height: "40px",
              padding: "0 14px", // Adjust padding as needed to align text properly
            },
          }}
        />
        <Box flex="1">
          <Select
            onChange={onSelectChange}
            sx={{
              width: "100%",
              input: {
                height: "40px",
                padding: "0 14px", // Adjust padding as needed to align text properly
              },
            }}
            name="country"
            id="country-select"
            value={clientDetails[`${addressType}_address`]?.country}
            placeholder="Country"
          >
            <MenuItem value="US">United States</MenuItem>
            <MenuItem value="CA">Canada</MenuItem>
            <MenuItem value="MX">Mexico</MenuItem>
            <MenuItem value="UK">United Kingdom</MenuItem>
            <MenuItem value="DE">Germany</MenuItem>
            <MenuItem value="FR">France</MenuItem>
            {/* Add more countries as needed */}
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default AddressSection;
