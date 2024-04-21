import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getInvoices } from "../../services/invoiceServices";
import { ClientType } from "../Clients/clientsTypes";

const Invoices = () => {
  const [invoices, setInvoices] = useState<ClientType[]>([]);
  useEffect(() => {
    const loadInvoices = async () => {
      const data: ClientType[] = await getInvoices();
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
