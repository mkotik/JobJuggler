import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { JobType } from "../../config/types";
import { getJobs } from "../../services/jobServices";
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
    <Box>
      <p>Jobs</p>
    </Box>
  );
};

export default Jobs;
