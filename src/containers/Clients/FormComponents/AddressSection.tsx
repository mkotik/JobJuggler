import { Box, TextField, InputLabel, Select, MenuItem } from "@mui/material";

const AddressSection = () => {
  return (
    <Box display="flex" flexDirection="column" gap="15px">
      <TextField
        label="Street 1"
        sx={{
          width: "100%",
          input: {
            height: "40px",
            padding: "0 14px", // Adjust padding as needed to align text properly
          },
        }}
      />
      <TextField
        label="Street 2"
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
          label="City"
          sx={{
            width: "100%",
            input: {
              height: "40px",
              padding: "0 14px", // Adjust padding as needed to align text properly
            },
          }}
        />
        <TextField
          label="State"
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
          label="Zip Code"
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
            sx={{
              width: "100%",
              input: {
                height: "40px",
                padding: "0 14px", // Adjust padding as needed to align text properly
              },
            }}
            id="country-select"
            // value={country}
            placeholder="Country"
            label="Country"
            // onChange={handleChange}
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
