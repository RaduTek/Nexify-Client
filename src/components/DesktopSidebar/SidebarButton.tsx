import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactNode } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import handleLinkClick from "../../utils/handleLinkClick";

export default function SidebarButton({
  action,
  open,
}: {
  action: { name: string; icon: ReactNode; target: string; end?: boolean };
  open: boolean;
}) {
  const pathMatching = useMatch(action.target + (action.end ? "" : "/*"));
  const navigate = useNavigate();

  return (
    <ListItem
      component="a"
      href={action.target}
      disablePadding
      sx={{ display: "block", color: "inherit" }}
      onClick={handleLinkClick(navigate)}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        selected={pathMatching != null}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {action.icon}
        </ListItemIcon>
        <ListItemText primary={action.name} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}
