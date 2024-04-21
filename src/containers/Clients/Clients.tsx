import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getClients } from "../../services/clientServices";
import { ClientType } from "../../config/types";
import ClientTable from "./ClientTable";
import "./clients.scss";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const [clients, setClients] = useState<ClientType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const loadClients = async () => {
      const data: ClientType[] = await getClients();
      setClients(data);
    };
    loadClients();
  }, []);

  return (
    <Box width="100%" padding="20px">
      <Button variant="contained" onClick={() => navigate("add-client")}>
        New Client
      </Button>
      <ClientTable clients={clients} />
    </Box>
  );
};

export default Clients;
