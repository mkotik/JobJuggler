import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getInvoices } from "../../services/invoiceServices";
import { InvoiceType } from "../../config/types";
import InvoiceTable from "./InvoiceTable";
import "./invoices.scss";

const Invoices = () => {
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
      <InvoiceTable invoices={invoices} />
    </Box>
  );
};

export default Invoices;
