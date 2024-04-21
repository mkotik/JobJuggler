import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { ClientType } from "../Clients/clientsTypes";
import { getRequests } from "../../services/requestServices";

const Requests = () => {
  const [requests, setRequests] = useState<ClientType[]>([]);
  useEffect(() => {
    const loadRequests = async () => {
      const data: ClientType[] = await getRequests();
      setRequests(data);
    };
    loadRequests();
  }, []);
  return (
    <Box>
      <p>Requests</p>
    </Box>
  );
};

export default Requests;
