import { ArrowBack, Search } from "@mui/icons-material";
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

export default function DesktopPageHeader(props: HeaderProps) {
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar sx={{ px: 1 }}>
          {!props.noBackButton && (
            <Tooltip title="Back">
              <IconButton>
                <ArrowBack />
              </IconButton>
            </Tooltip>
          )}
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
