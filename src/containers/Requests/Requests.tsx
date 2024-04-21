import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RequestType } from "../../config/types";
import { getRequests } from "../../services/requestServices";
import RequestTable from "./RequestTable";
import "./requests.scss";

const Requests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<RequestType[]>([]);
  useEffect(() => {
    const loadRequests = async () => {
      const data: RequestType[] = await getRequests();
      setRequests(data);
    };
    loadRequests();
  }, []);
  return (
    <Box padding="20px">
      <Button variant="contained" onClick={() => navigate("add-request")}>
        New Request
      </Button>
      <RequestTable requests={requests} />
    </Box>
  );
};

export default Requests;
