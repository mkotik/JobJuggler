import { useState } from "react";
import {
  TextField,
  FormControlLabel,
  Select,
  MenuItem,
  FormGroup,
  Container,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ClientsCreateInput } from "../../config/types";
import AdditionalDetailsSection from "./FormComponents/AdditionalDetailsSection";
import NameSection from "./FormComponents/NameSection";
import AddressSection from "./FormComponents/AddressSection";
import ContactInfoSection from "./FormComponents/ContactInfoSection";
import NotificationSection from "./FormComponents/NotificationsSection";

const AddClientForm = () => {
  const [clientDetails, setClientDetails] = useState<ClientsCreateInput>({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    company_name: "",
    billing_address_same_as_property: true,
  });

  return (
    <Container maxWidth="xl">
      <Box display="flex" gap="10px">
        <Box sx={{ flex: 1 }} display="flex" flexDirection="column" gap="10px">
          <div className="client-details-header">
            <div className="client-details-icon">
              <AccountCircleIcon fontSize="large" />
            </div>
            <h2>Client details</h2>
          </div>
          <NameSection />
          <ContactInfoSection />
          <NotificationSection />
          <AdditionalDetailsSection />
        </Box>
        <Box sx={{ flex: 1 }} display="flex" flexDirection="column" gap="10px">
          <div className="client-details-header">
            <div className="client-details-icon">
              <AccountCircleIcon fontSize="large" />
            </div>
            <h2>Property details</h2>
          </div>
          <AddressSection />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Billing address is the same as property address"
          />
          {!clientDetails.billing_address_same_as_property && (
            <AddressSection />
          )}
          <Button sx={{ width: "200px" }} variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddClientForm;
