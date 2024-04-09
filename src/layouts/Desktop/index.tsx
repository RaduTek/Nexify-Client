import { Outlet } from "react-router-dom";
import DesktopSidebar from "../../components/DesktopSidebar";
import { Box, Stack } from "@mui/material";

export default function DesktopLayout() {
  return (
    <>
      <Stack flexDirection="row">
        <DesktopSidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Stack>
    </>
  );
}
