import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const drawerWidth = 170;

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <DrawerContainer variant="permanent" anchor="left">
      <List>
        {[
          { label: "Home", key: "" },
          { label: "Clients", key: "clients" },
          { label: "Requests", key: "requests" },
          { label: "Quotes", key: "quotes" },
          { label: "Jobs", key: "jobs" },
          { label: "Invoices", key: "invoices" },
        ].map((item, index) => (
          <ListItem
            button
            key={item.label}
            onClick={() => navigate(`/${item.key}`)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </DrawerContainer>
  );
};

export default Navbar;
