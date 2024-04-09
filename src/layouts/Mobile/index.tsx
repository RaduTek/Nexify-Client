import { Outlet } from "react-router-dom";
import MobileNavbar from "../../components/MobileNavbar";

export default function MobileLayout() {
  return (
    <>
      <Outlet />
      <MobileNavbar />
    </>
  );
}
