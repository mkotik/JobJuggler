import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getClients } from "../../services/clientServices";
import { ClientType } from "./clientsTypes";
import ClientTable from "./ClientTable";
import "./clients.scss";

const Clients = () => {
  const [clients, setClients] = useState<ClientType[]>([]);
  useEffect(() => {
    const loadClients = async () => {
      const data: ClientType[] = await getClients();
      setClients(data);
    };
    loadClients();
  }, []);

  return (
    <Box width="100%" padding="20px">
      <ClientTable clients={clients} />
      {/* {clients.map((client) => {
          return (
            <div>
              <p>hi</p>
            </div>
          );
        })} */}
    </Box>
  );
};

export default Clients;
