import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Switch,
  Link,
  FormGroup,
  FormControlLabel,
  Grid,
  Box,
  TextField,
} from "@mui/material";

const AdditionalDetailsSection = () => {
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
              <TextField sx={{ width: "100%" }} label="Referred By" />
            </Box>
          </Box>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default AdditionalDetailsSection;
