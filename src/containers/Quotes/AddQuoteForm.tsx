import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  IconButton,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { Add, Delete, AddCircleOutline, Create } from "@mui/icons-material";

function AddQuoteForm() {
  const navigate = useNavigate();

  // States for form fields
  const [jobTitle, setJobTitle] = useState("");
  const [lineItems, setLineItems] = useState([
    { name: "", description: "", qty: 1, unitPrice: 0 },
  ]);
  const [clientMessage, setClientMessage] = useState("");
  const [noteDetails, setNoteDetails] = useState("");

  // Dummy function to add line item
  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { name: "", description: "", qty: 1, unitPrice: 0 },
    ]);
  };

  // Dummy function to remove line item
  const removeLineItem = (index: any) => {
    const newLineItems = [...lineItems];
    newLineItems.splice(index, 1);
    setLineItems(newLineItems);
  };

  // Back to quotes
  const backToQuotes = () => {
    navigate("/quotes");
  };

  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Quote for Client Name</Typography>
        <Button variant="outlined" onClick={backToQuotes}>
          Back to Quotes
        </Button>
      </Box>
      <form noValidate autoComplete="off">
        <TextField
          label="Job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product / Service</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lineItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <TextField
                      value={item.name}
                      onChange={(e) => {
                        const newLineItems = [...lineItems];
                        newLineItems[index].name = e.target.value;
                        setLineItems(newLineItems);
                      }}
                      fullWidth
                      placeholder="Name"
                    />
                    <TextField
                      value={item.description}
                      onChange={(e) => {
                        const newLineItems = [...lineItems];
                        newLineItems[index].description = e.target.value;
                        setLineItems(newLineItems);
                      }}
                      fullWidth
                      placeholder="Description"
                      margin="normal"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      value={item.qty}
                      type="number"
                      // onChange={(e) => {
                      //   const newLineItems = [...lineItems];
                      //   newLineItems[index].qty = e.target.value;
                      //   setLineItems(newLineItems);
                      // }}
                      inputProps={{ min: "1" }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      value={item.unitPrice}
                      type="number"
                      // onChange={(e) => {
                      //   const newLineItems = [...lineItems];
                      //   newLineItems[index].unitPrice = e.target.value;
                      //   setLineItems(newLineItems);
                      // }}
                      InputProps={{ startAdornment: "$" }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {item.qty * item.unitPrice}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button startIcon={<Add />} onClick={addLineItem}>
          Add Line Item
        </Button>
        {/* Add buttons for "Add Optional Line Item" and "Add Text" similarly */}

        {/* Additional form fields like Client Message, Discounts, Taxes, Total, etc. */}
        {/* ... */}

        <TextField
          label="Internal notes & attachments"
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

export default AddQuoteForm;
