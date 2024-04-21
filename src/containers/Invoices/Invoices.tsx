import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getInvoices } from "../../services/invoiceServices";
import { InvoiceType } from "../../config/types";
import InvoiceTable from "./InvoiceTable";
import { useNavigate } from "react-router-dom";
import "./invoices.scss";

const Invoices = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  useEffect(() => {
    const loadInvoices = async () => {
      const data: InvoiceType[] = await getInvoices();
      setInvoices(data);
    };
    loadInvoices();
  }, []);
  return (
    <Box width="100%" padding="20px">
      <Button variant="contained" onClick={() => navigate("add-invoice")}>
        New Invoice
      </Button>
      <InvoiceTable invoices={invoices} />
    </Box>
  );
};

export default Invoices;
