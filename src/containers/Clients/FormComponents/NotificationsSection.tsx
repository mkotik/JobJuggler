import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Switch,
  FormGroup,
  Box,
} from "@mui/material";

import { ClientsCreateInput } from "../../../config/types";
const NotificationsSection = ({
  clientDetails,
  onCheckbox,
}: {
  clientDetails: ClientsCreateInput;
  onSelectChange: any;
  onTextInputChange: any;
  onCheckbox: any;
}) => {
  return (
    <Accordion sx={{ boxShadow: "none" }} className="notifications-accordion">
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
                {/* <Link href="#" color="primary">
                  Settings
                </Link> */}
              </Typography>
            </Box>
            <Box flex="1">
              <Switch
                checked={clientDetails.quote_follow_up}
                name="quote_follow_up"
                onChange={onCheckbox}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </Box>

          <Box display="flex" sx={{ marginTop: "15px" }}>
            <Box flex="6">
              <Typography variant="subtitle1">
                Assessment and visit reminders
              </Typography>
              <Typography variant="body2">
                Remind your client of an upcoming assessment or visit.{" "}
                {/* <Link href="#" color="primary">
                  Settings
                </Link> */}
              </Typography>
            </Box>
            <Box flex="1">
              <Switch
                onChange={onCheckbox}
                checked={clientDetails.upcoming_visit_reminder}
                name="upcoming_visit_reminder"
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </Box>

          <Box display="flex" sx={{ marginTop: "15px" }}>
            <Box flex="6">
              <Typography variant="subtitle1">Job follow-up</Typography>
              <Typography variant="body2">
                Follow up when you close a job.{" "}
                {/* <Link href="#" color="primary">
                  Settings
                </Link> */}
              </Typography>
            </Box>
            <Box flex="1">
              <Switch
                checked={clientDetails.job_follow_up}
                name="job_follow_up"
                onChange={onCheckbox}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </Box>

          <Box display="flex" sx={{ marginTop: "15px" }}>
            <Box flex="6">
              <Typography variant="subtitle1">Invoice follow-up</Typography>
              <Typography variant="body2">
                Follow up on an overdue invoice.{" "}
                {/* <Link href="#" color="primary">
                  Settings
                </Link> */}
              </Typography>
            </Box>
            <Box flex="1">
              <Switch
                checked={clientDetails.invoice_follow_up}
                name="invoice_follow_up"
                onChange={onCheckbox}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </Box>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default NotificationsSection;
