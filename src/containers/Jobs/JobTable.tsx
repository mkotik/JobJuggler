import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Address, JobType } from "../../config/types";

const getClientName = (row: any) => {
  const { first_name, last_name } = row;
  const fullName = `${first_name} ${last_name}`;
  return fullName;
};

const generateAddressString = (address: Address | undefined) => {
  if (!address) return;
  const { city, country, state, street1, street2, zip_code } = address;
  const outputStr = street1 + ", " + city + ", " + state + "" + zip_code;
  return outputStr;
};

function Row(props: { row: JobType }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {getClientName(row.client)}
        </TableCell>
        <TableCell align="left">{row.number}</TableCell>
        <TableCell align="left">
          {row.client.property_address
            ? generateAddressString(row.client.property_address)
            : ""}
        </TableCell>
        <TableCell align="left">{JSON.stringify(row.start_date)}</TableCell>
        <TableCell align="left">{row.status}</TableCell>
        <TableCell align="left">$1000.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const CollapsibleTable = ({ jobs }: { jobs: JobType[] }) => {
  return (
    <TableContainer component={Paper} className="jobs-table">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Client</TableCell>
            <TableCell align="left">Job Number</TableCell>
            <TableCell align="left">Property</TableCell>
            <TableCell align="left">Schedule</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Total</TableCell>
            {/* <TableCell align="left">Last Activity</TableCell> */}
          </TableRow>
        </TableHead>
        {jobs.length > 0 && (
          <TableBody>
            {jobs.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
