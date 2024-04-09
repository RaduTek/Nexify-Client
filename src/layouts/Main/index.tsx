import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopLayout from "../Desktop";
import MobileLayout from "../Mobile";

export default function MainLayout() {
  const theme = useTheme();
  const mobileSize = useMediaQuery(theme.breakpoints.down("sm"));

  return mobileSize ? <MobileLayout /> : <DesktopLayout />;
}
