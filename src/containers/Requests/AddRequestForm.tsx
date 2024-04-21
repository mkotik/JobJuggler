import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";

function AddRequestForm() {
  const navigate = useNavigate();
  // States for form fields
  const [requestTitle, setRequestTitle] = useState("");
  const [serviceDetails, setServiceDetails] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [alternativeDay, setAlternativeDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [noteDetails, setNoteDetails] = useState("");

  // Dummy values for select inputs
  const times = ["Any time", "Morning", "Afternoon", "Evening"];

  return (
    <Container maxWidth="sm">
      <Button variant="contained" onClick={() => navigate("/requests")}>
        Back to Requests
      </Button>
      <Typography variant="h5">Request for Client Name</Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Request title"
          value={requestTitle}
          onChange={(e) => setRequestTitle(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Service Details"
          value={serviceDetails}
          onChange={(e) => setServiceDetails(e.target.value)}
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="preferred-day-label">
            Which day would be best for an assessment of the work?
          </InputLabel>
          <Select
            labelId="preferred-day-label"
            value={preferredDay}
            onChange={(e) => setPreferredDay(e.target.value)}
          >
            {/* Generate MenuItems based on data */}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="alternative-day-label">
            What is another day that works for you?
          </InputLabel>
          <Select
            labelId="alternative-day-label"
            value={alternativeDay}
            onChange={(e) => setAlternativeDay(e.target.value)}
          >
            {/* Generate MenuItems based on data */}
          </Select>
        </FormControl>
        <FormGroup>
          {times.map((time) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferredTime === time}
                  onChange={(e) =>
                    setPreferredTime(e.target.checked ? time : "")
                  }
                />
              }
              label={time}
              key={time}
            />
          ))}
        </FormGroup>
        <FormControlLabel
          control={<Switch checked={true} />}
          label="On-site assessment required"
        />
        <TextField
          label="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Start date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="End date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <FormControlLabel control={<Checkbox />} label="Schedule later" />
        <TextField
          label="Note details"
          value={noteDetails}
          onChange={(e) => setNoteDetails(e.target.value)}
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
        {/* Add file upload component */}
        <Button variant="contained" color="primary">
          Select Client
        </Button>
      </form>
    </Container>
  );
}

export default AddRequestForm;
