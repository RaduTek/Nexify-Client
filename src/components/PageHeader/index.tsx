import HeaderProps from "./headerProps";
import { Toolbar, useMediaQuery, useTheme } from "@mui/material";
import MobilePageHeader from "./MobilePageHeader";
import DesktopPageHeader from "./DesktopPageHeader";

export default function PageHeader(props: HeaderProps) {
  const theme = useTheme();
  const mobileSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {mobileSize ? (
        <MobilePageHeader {...props} />
      ) : (
        <DesktopPageHeader {...props} />
      )}
      <Toolbar />
    </>
  );
}
