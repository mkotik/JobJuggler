import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormGroup,
  Box,
  TextField,
} from "@mui/material";
import { ClientsCreateInput } from "../../../config/types";

const AdditionalDetailsSection = ({
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
    <Accordion sx={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">Additonal client details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <Box display="flex" flexDirection="row" flexWrap="nowrap">
            <Box flex="2">
              <Typography variant="subtitle1">Referred By</Typography>
            </Box>
            <Box flex="3">
              <TextField
                sx={{ width: "100%" }}
                placeholder="Referred By"
                onChange={onTextInputChange}
                value={clientDetails.referred_by}
                name="referred_by"
              />
            </Box>
          </Box>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default AdditionalDetailsSection;
