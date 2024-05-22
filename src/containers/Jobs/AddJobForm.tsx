import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

const AddJobForm = () => {
  const [jobDetails, setJobDetails] = React.useState({
    clientName: "",
    needs: "",
    type: "",
    schedule: false,
    startDate: new Date().toLocaleDateString(),
    endDate: "",
    startTime: "",
    endTime: "",
    team: "",
    emailTeam: false,
    invoice: false,
    lineItems: [{ description: "", cost: 0.0 }],
    notes: "",
  });

  const handleAddNewLineItem = () => {
    setJobDetails((prevJobDetails) => ({
      ...prevJobDetails,
      lineItems: [...prevJobDetails.lineItems, { description: "", cost: 0.0 }],
    }));
  };

  return (
    <Box
      component="form"
      // onSubmit={handleSubmit}
      noValidate
      sx={{ display: "flex", flexWrap: "wrap" }}
    >
      <Box sx={{ width: "100%", mb: 2 }}>
        <RouterLink to={"/"}>
          <Button variant="contained">Back</Button>
        </RouterLink>
      </Box>
      <Box sx={{ width: "100%" }}>
        <h2>Job for Client Name</h2>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Job Title"
          variant="outlined"
          name="clientName"
          value={jobDetails.clientName}
          // onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          label="Needs"
          variant="outlined"
          multiline
          rows={4}
          name="needs"
          value={jobDetails.needs}
          // onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          label="Type"
          variant="outlined"
          name="type"
          value={jobDetails.type}
          // onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={jobDetails.schedule}
              // onChange={handleChange}
              name="schedule"
            />
          }
          label="Schedule"
          sx={{ mb: 2 }}
        />
        {jobDetails.schedule && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Start Date"
              variant="outlined"
              name="startDate"
              type="date"
              value={jobDetails.startDate}
              // onChange={handleChange}
              sx={{ width: "100%", mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="End Date"
              variant="outlined"
              name="endDate"
              type="date"
              value={jobDetails.endDate}
              // onChange={handleChange}
              sx={{ width: "100%", mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <Box sx={{ display: "flex" }}>
              <TextField
                label="Start Time"
                variant="outlined"
                name="startTime"
                type="time"
                value={jobDetails.startTime}
                // onChange={handleChange}
                sx={{ width: "48%", mr: 1 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="End Time"
                variant="outlined"
                name="endTime"
                type="time"
                value={jobDetails.endTime}
                // onChange={handleChange}
                sx={{ width: "48%" }}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>
        )}
        <TextField
          label="Team"
          variant="outlined"
          name="team"
          value={jobDetails.team}
          // onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={jobDetails.emailTeam}
              // onChange={handleChange}
              name="emailTeam"
            />
          }
          label="Email Team"
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={jobDetails.invoice}
              // onChange={handleChange}
              name="invoice"
            />
          }
          label="Create Invoice"
          sx={{ mb: 2 }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <h2>Line Items</h2>
        {jobDetails.lineItems.map((lineItem, index) => (
          <Box
            key={index}
            sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
          >
            <TextField
              label="Description"
              variant="outlined"
              name="description"
              value={lineItem.description}
              // onChange={(event) => handleLineItemChange(event, index)}
              sx={{ width: "60%" }}
            />
            <TextField
              label="Cost"
              variant="outlined"
              name="cost"
              type="number"
              value={lineItem.cost}
              // onChange={(event) => handleLineItemChange(event, index)}
              sx={{ width: "30%" }}
            />
            <Button
              variant="outlined"
              color="error"
              size="small"
              // onClick={() => handleDeleteLineItem(index)}
            >
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="contained" size="small" onClick={handleAddNewLineItem}>
          Add Line Item
        </Button>
      </Box>
      <TextField
        label="Notes"
        variant="outlined"
        multiline
        rows={4}
        name="notes"
        value={jobDetails.notes}
        // onChange={handleChange}
        sx={{ width: "100%", mb: 2 }}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" type="submit">
          Save Job
        </Button>
      </Box>
    </Box>
  );
};

export default AddJobForm;
