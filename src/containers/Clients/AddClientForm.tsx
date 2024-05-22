import React, { useState, useEffect, Dispatch } from "react";
import { FormControlLabel, Container, SelectChangeEvent } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { AddressCreateInput, ClientsCreateInput } from "../../config/types";
import AdditionalDetailsSection from "./FormComponents/AdditionalDetailsSection";
import NameSection from "./FormComponents/NameSection";
import AddressSection from "./FormComponents/AddressSection";
import ContactInfoSection from "./FormComponents/ContactInfoSection";
import NotificationSection from "./FormComponents/NotificationsSection";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import { createClient } from "../../services/clientServices";
const AddClientForm = () => {
  const [clientDetails, setClientDetails] = useState<ClientsCreateInput>({
    title: "n/a",
    first_name: "",
    last_name: "",
    email: "",
    company_name: "",
    billing_address_same_as_property: true,
    use_company_name_as_primary: false,
    phone_type: "mobile",
    email_type: "main",
    receives_texts: true,
    quote_follow_up: true,
    job_follow_up: true,
    upcoming_visit_reminder: true,
    invoice_follow_up: true,
    referred_by: "",
    property_address: {
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip_code: "",
      country: "US",
    },
    billing_address: {
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip_code: "",
      country: "",
    },
  });

  const onSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setClientDetails((currentClientDetails) => ({
      ...currentClientDetails,
      [name]: value,
    }));
  };

  const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientDetails((currentClientDetails) => ({
      ...currentClientDetails,
      [name]: value,
    }));
  };

  const onCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    setClientDetails((currentClientDetails) => ({
      ...currentClientDetails,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    createClient(clientDetails);
    console.log(clientDetails);
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
      <Box display="flex" gap="10px">
        <Box sx={{ flex: 1 }} display="flex" flexDirection="column" gap="10px">
          <div className="client-details-header">
            <div className="client-details-icon">
              <AccountCircleIcon fontSize="large" />
            </div>
            <h2>Client details</h2>
          </div>
          <NameSection
            clientDetails={clientDetails}
            onCheckbox={onCheckbox}
            onSelectChange={onSelectChange}
            onTextInputChange={onTextInputChange}
          />
          <ContactInfoSection
            clientDetails={clientDetails}
            onCheckbox={onCheckbox}
            onSelectChange={onSelectChange}
            onTextInputChange={onTextInputChange}
          />
          <NotificationSection
            clientDetails={clientDetails}
            onCheckbox={onCheckbox}
            onSelectChange={onSelectChange}
            onTextInputChange={onTextInputChange}
          />
          <AdditionalDetailsSection
            clientDetails={clientDetails}
            onCheckbox={onCheckbox}
            onSelectChange={onSelectChange}
            onTextInputChange={onTextInputChange}
          />
        </Box>
        <Box sx={{ flex: 1 }} display="flex" flexDirection="column" gap="10px">
          <div className="client-details-header">
            <div className="client-details-icon">
              <HouseOutlinedIcon fontSize="large" />
            </div>
            <h2>Property details</h2>
          </div>
          <AddressSection
            setClientDetails={setClientDetails}
            clientDetails={clientDetails}
            addressType="property"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="billing_address_same_as_property"
                value={clientDetails.billing_address_same_as_property}
                defaultChecked
                onChange={onCheckbox}
              />
            }
            label="Billing address is the same as property address"
          />
          {!clientDetails.billing_address_same_as_property && (
            <AddressSection
              setClientDetails={setClientDetails}
              clientDetails={clientDetails}
              addressType="billing"
            />
          )}
          <Button
            sx={{ width: "200px", height: "40px" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddClientForm;
