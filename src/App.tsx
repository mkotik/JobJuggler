import { Box } from "@mui/material";
import { useCheckSession } from "./utils/customHooks";
import { ReactNode } from "react";
import Navbar from "./components/NavBar";
const App = ({ children }: { children: ReactNode }) => {
  useCheckSession();
  return (
    <Box display="flex">
      <Navbar />
      {children}
    </Box>
  );
};

export default App;
