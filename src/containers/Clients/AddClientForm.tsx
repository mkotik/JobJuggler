import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

const AddClientForm = () => {
  const theme = useTheme();

  const [clientDetails, setClientDetails] = React.useState({
    title: "",
    companyName: "",
    useCompanyNameAsPrimary: false,
    firstName: "",
    lastName: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    mainPhone: "",
    receivesTextMessages: false,
    mainEmail: "",
    referredBy: "",
  });

  const handleChange = (event: Event) => {
    //@ts-ignore
    const { name, value, checked } = event.target;
    setClientDetails((prevClientDetails) => ({
      ...prevClientDetails,
      [name]: value === false ? checked : value,
    }));
  };

  const handleSaveAndCreateAnother = () => {
    // Implement logic to handle form submission and potentially reset the form
  };

  const handleSaveClient = () => {
    // Implement logic to handle form submission
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{ display: "flex", flexWrap: "wrap" }}
      width="100%"
      padding="20px"
    >
      <Box sx={{ width: "100%", mb: 2 }}>
        <Button variant="contained" href={"/clients"}>
          Back to: Clients
        </Button>
      </Box>
      <Box sx={{ width: "100%" }}>
        <h2>Client Details</h2>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Title"
          variant="outlined"
          name="title"
          value={clientDetails.title}
          //   onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          label="Company Name"
          variant="outlined"
          name="companyName"
          value={clientDetails.companyName}
          //   onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={clientDetails.useCompanyNameAsPrimary}
              //   onChange={handleChange}
              name="useCompanyNameAsPrimary"
            />
          }
          label="Use company name as the primary name"
          sx={{ mb: 2 }}
        />
        <TextField
          label="First Name"
          variant="outlined"
          name="firstName"
          value={clientDetails.firstName}
          //   onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          name="lastName"
          value={clientDetails.lastName}
          //   onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Street 1"
          variant="outlined"
          name="street1"
          value={clientDetails.street1}
          //   onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          label="Street 2"
          variant="outlined"
          name="street2"
          value={clientDetails.street2}
          //   onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          label="City"
          variant="outlined"
          name="city"
          value={clientDetails.city}
          //   onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <TextField
            label="State"
            variant="outlined"
            name="state"
            value={clientDetails.state}
            // onChange={handleChange}
            sx={{ width: "48%" }}
          />

          <TextField
            label="Zip Code"
            variant="outlined"
            name="zipCode"
            value={clientDetails.zipCode}
            // onChange={handleChange}
            sx={{ width: "48%" }}
          />
        </Box>
        <TextField
          select
          label="Country"
          value={clientDetails.country}
          //   onChange={handleChange}
          name="country"
          sx={{ width: "100%", mb: 2 }}
        >
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          {/* Add more countries as needed */}
        </TextField>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Main Phone Number"
            variant="outlined"
            name="mainPhone"
            value={clientDetails.mainPhone}
            // onChange={handleChange}
            sx={{ width: "100%", mb: 2 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={clientDetails.receivesTextMessages}
                // onChange={handleChange}
                name="receivesTextMessages"
              />
            }
            label="Receives Text Messages"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Main Email Address"
            variant="outlined"
            name="mainEmail"
            value={clientDetails.mainEmail}
            // onChange={handleChange}
            sx={{ width: "100%", mb: 2 }}
          />
          <TextField
            label="Referred By"
            variant="outlined"
            name="referredBy"
            value={clientDetails.referredBy}
            // onChange={handleChange}
            sx={{ width: "100%", mb: 2 }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleSaveAndCreateAnother}>
            Save and Create Another
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveClient}
          >
            Save Client
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddClientForm;
