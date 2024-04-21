import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getClients } from "../../services/clientServices";
import { Clients as ClientsType } from "../../../server/node_modules/@prisma/client/default.d";
import ClientTable from "./ClientTable";
import "./clients.scss";

const Clients = () => {
  const [clients, setClients] = useState<ClientsType[]>([]);
  useEffect(() => {
    const loadClients = async () => {
      const data: ClientsType[] = await getClients();
      setClients(data);
    };

    loadClients();
  }, []);

  return (
    <Box width="100%" padding="20px">
      <ClientTable />
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
