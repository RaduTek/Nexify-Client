import { Menu, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import HeaderProps from "./headerProps";
import ElevationScroll from "../ElevationScroll";
import { ExpandDesktopSidebar } from "../../atoms";
import { useAtom } from "jotai";

export default function DesktopPageHeader(props: HeaderProps) {
  const [sidebarExpanded, setSidebarExpanded] = useAtom(ExpandDesktopSidebar);
  const handleSidebarToggle = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar sx={{ pl: "12px !important" }}>
          <Tooltip title="Show/Hide Sidebar">
            <IconButton onClick={handleSidebarToggle}>
              <Menu />
            </IconButton>
          </Tooltip>
          <Typography variant="h5" sx={{ flex: 1, px: 1 }}>
            {props.title}
          </Typography>
          {!props.noSearch && (
            <Stack sx={{ flexDirection: "row", flex: 1.5, gap: 1 }}>
              <TextField
                placeholder="Search"
                size="small"
                sx={{ flexGrow: 1 }}
              ></TextField>
              <Tooltip title="Search">
                <IconButton>
                  <Search />
                </IconButton>
              </Tooltip>
            </Stack>
          )}
          <Box sx={{ flex: 1 }} />
          <Stack sx={{ flexDirection: "row", gap: 1 }}>{props.children}</Stack>
        </Toolbar>
        <Divider />
      </AppBar>
    </ElevationScroll>
  );
}
