import { ArrowBack, Close, Search } from "@mui/icons-material";
import {
  AppBar,
  Divider,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import HeaderProps from "./headerProps";
import ElevationScroll from "../ElevationScroll";

export default function MobilePageHeader(props: HeaderProps) {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  return (
    <ElevationScroll>
      <AppBar>
        {searchBoxOpen ? (
          <Toolbar sx={{ px: 1, gap: 1 }}>
            <Tooltip title="Close search">
              <IconButton
                onClick={() => {
                  setSearchBoxOpen(false);
                }}
              >
                <Close />
              </IconButton>
            </Tooltip>
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
          </Toolbar>
        ) : (
          <Toolbar sx={{ px: 1 }}>
            {!props.noBackButton && (
              <Tooltip title="Back">
                <IconButton>
                  <ArrowBack />
                </IconButton>
              </Tooltip>
            )}
            <Typography variant="h5" sx={{ flexGrow: 1, px: 1 }}>
              {props.title}
            </Typography>
            <Stack sx={{ flexDirection: "row", gap: 1 }}>
              {props.children}
              {!props.noSearch && (
                <Tooltip title="Search">
                  <IconButton
                    onClick={() => {
                      setSearchBoxOpen(true);
                    }}
                  >
                    <Search />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          </Toolbar>
        )}
        <Divider />
      </AppBar>
    </ElevationScroll>
  );
}
