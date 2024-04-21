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
import { ClientType, AddressType } from "./clientsTypes";

const getClientName = (row: any) => {
  const { first_name, last_name } = row;
  const fullName = `${first_name} ${last_name}`;
  return fullName;
};

const generateAddressString = (address: AddressType | undefined) => {
  if (!address) return;
  const { city, country, state, street1, street2, zip_code } = address;
  const outputStr = street1 + ", " + city + ", " + state + "" + zip_code;
  return outputStr;
};

function Row(props: { row: ClientType }) {
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
          {getClientName(row)}
        </TableCell>
        <TableCell align="left">
          {generateAddressString(row.property_address)}
        </TableCell>
        <TableCell align="left">
          {row.tags ? Object.keys(row.tags) : null}
        </TableCell>
        <TableCell align="left">{row.status}</TableCell>
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

const CollapsibleTable = ({ clients }: { clients: ClientType[] }) => {
  return (
    <TableContainer component={Paper} className="clients-table">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Tags</TableCell>
            <TableCell align="left">Status</TableCell>
            {/* <TableCell align="left">Last Activity</TableCell> */}
          </TableRow>
        </TableHead>
        {clients.length > 0 && (
          <TableBody>
            {clients.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
