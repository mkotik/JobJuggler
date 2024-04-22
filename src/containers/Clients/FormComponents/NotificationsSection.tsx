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
} from "@mui/material";

const NotificationsSection = () => {
  return (
    <Accordion defaultExpanded sx={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">Automated notifications</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <Box display="flex" flexDirection="row" flexWrap="nowrap">
            <Box flex="6">
              <Typography variant="subtitle1">Quote follow-up</Typography>
              <Typography variant="body2">
                Follow up on an outstanding quote.{" "}
                <Link href="#" color="primary">
                  Settings
                </Link>
              </Typography>
            </Box>
            <Box flex="1">
              <Switch checked />
            </Box>
          </Box>

          <Box display="flex">
            <Box flex="6">
              <Typography variant="subtitle1">
                Assessment and visit reminders
              </Typography>
              <Typography variant="body2">
                Remind your client of an upcoming assessment or visit.{" "}
                <Link href="#" color="primary">
                  Settings
                </Link>
              </Typography>
            </Box>
            <Box flex="1">
              <Switch checked />
            </Box>
          </Box>

          <Box display="flex">
            <Box flex="6">
              <Typography variant="subtitle1">Job follow-up</Typography>
              <Typography variant="body2">
                Follow up when you close a job.{" "}
                <Link href="#" color="primary">
                  Settings
                </Link>
              </Typography>
            </Box>
            <Box flex="1">
              <Switch checked />
            </Box>
          </Box>

          <Box display="flex">
            <Box flex="6">
              <Typography variant="subtitle1">Invoice follow-up</Typography>
              <Typography variant="body2">
                Follow up on an overdue invoice.{" "}
                <Link href="#" color="primary">
                  Settings
                </Link>
              </Typography>
            </Box>
            <Box flex="1">
              <Switch checked />
            </Box>
          </Box>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default NotificationsSection;
