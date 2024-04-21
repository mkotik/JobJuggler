import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { JobType } from "../../config/types";
import { getJobs } from "../../services/jobServices";
import JobTable from "./JobTable";
import { useNavigate } from "react-router-dom";
import "./jobs.scss";
const Jobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobType[]>([]);
  useEffect(() => {
    const loadJobs = async () => {
      const data: JobType[] = await getJobs();
      setJobs(data);
    };
    loadJobs();
  }, []);
  return (
    <Box padding="20px">
      <Button variant="contained" onClick={() => navigate("add-job")}>
        New Job
      </Button>
      <JobTable jobs={jobs} />
    </Box>
  );
};

export default Jobs;
