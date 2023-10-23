import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Dashboard, Settings } from "@mui/icons-material";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <Link href={`/dashboard`}>
      <ListItemButton
        sx={{
          padding: {
            xs: "8px",
            md: "8px 16px",
          },
        }}
        style={{ borderBottom: "1px solid #259FD9" }}
      >
        <ListItemIcon>
          <Dashboard className="text-[#259FD9]" />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ fontSize: "15px" }}
          primary="Dashboard"
        />
      </ListItemButton>
    </Link>
    <Link href={`/setting`}>
      <ListItemButton
        sx={{
          padding: {
            xs: "8px",
            md: "8px 16px",
          },
        }}
        style={{ borderBottom: "1px solid #259FD9" }}
      >
        <ListItemIcon>
          <Settings className="text-[#259FD9]" />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ fontSize: "15px" }}
          primary="Settings"
        />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
