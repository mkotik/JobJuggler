import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { RequestType } from "../../config/types";
import { getRequests } from "../../services/requestServices";

const Requests = () => {
  const [requests, setRequests] = useState<RequestType[]>([]);
  useEffect(() => {
    const loadRequests = async () => {
      const data: RequestType[] = await getRequests();
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
