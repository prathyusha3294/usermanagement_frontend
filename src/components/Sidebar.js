import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WorkIcon from "@mui/icons-material/Work";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import StorageIcon from "@mui/icons-material/Storage";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#1e1e2d", // Sidebar color
          color: "#fff",
        },
      }}
    >
      <List>
        {/* Workspace Name */}
        <Typography variant="h6" sx={{ padding: 2, color: "#F57600" }}>
          Devias
        </Typography>

        {/* Dashboards Section */}
        <Typography
          variant="subtitle2"
          sx={{ paddingLeft: 2, paddingTop: 1, color: "#909090" }}
        >
          Dashboards
        </Typography>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Hire Admin Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Recruiter Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Budgeting" />
        </ListItem>

        <Divider sx={{ backgroundColor: "#30334E", marginY: 2 }} />

        {/* General Section */}
        <Typography
          variant="subtitle2"
          sx={{ paddingLeft: 2, paddingTop: 1, color: "#909090" }}
        >
          General
        </Typography>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon style={{ color: "#8A85FF" }} />
          </ListItemIcon>
          <ListItemText primary="Customer Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Candidates" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Checks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReceiptIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Cost Invoice" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalShippingIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Logistics" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Academy" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Social" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StorageIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="File Storage" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChatIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
