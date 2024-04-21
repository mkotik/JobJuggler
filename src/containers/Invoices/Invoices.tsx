import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getInvoices } from "../../services/invoiceServices";
import { InvoiceType } from "../../config/types";

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
    <Box>
      <p>Invoices</p>
    </Box>
  );
};

export default Invoices;
