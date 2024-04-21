import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { JobType } from "../../config/types";
import { getJobs } from "../../services/jobServices";
import JobTable from "./JobTable";
import "./jobs.scss";
const Jobs = () => {
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
      <JobTable jobs={jobs} />
    </Box>
  );
};

export default Jobs;
