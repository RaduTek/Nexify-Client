import { AppBar, BottomNavigation, Divider } from "@mui/material";
import { AccountCircle, Home, LibraryMusic } from "@mui/icons-material";
import BottomNavLink from "./BottomNavLink";

const NavbarActions = [
  {
    name: "Home",
    icon: <Home />,
    target: "/home",
  },
  {
    name: "Library",
    icon: <LibraryMusic />,
    target: "/library",
  },
  {
    name: "Account",
    icon: <AccountCircle />,
    target: "/account",
  },
];

export default function MobileNavbar() {
  return (
    <>
      <AppBar sx={{ bottom: 0, top: "auto" }}>
        <Divider />
        <BottomNavigation>
          {NavbarActions.map((action, index) => (
            <BottomNavLink key={index} action={action} />
          ))}
        </BottomNavigation>
      </AppBar>
      <BottomNavigation></BottomNavigation>
    </>
  );
}
