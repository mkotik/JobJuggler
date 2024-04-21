import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ClientType } from "../Clients/clientsTypes";
import { getJobs } from "../../services/jobServices";
const Jobs = () => {
  const [jobs, setJobs] = useState<ClientType[]>([]);
  useEffect(() => {
    const loadJobs = async () => {
      const data: ClientType[] = await getJobs();
      setJobs(data);
    };
    loadJobs();
  }, []);
  return (
    <Box>
      <p>Jobs</p>
    </Box>
  );
};

export default Jobs;
