import { BottomNavigationAction } from "@mui/material";
import { ReactNode } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import handleLinkClick from "../../utils/handleLinkClick";

export default function BottomNavLink({
  action,
}: {
  action: {
    name: string;
    icon: ReactNode;
    activeIcon?: ReactNode;
    target: string;
    end?: boolean;
  };
}) {
  const pathMatching = useMatch(action.target + (action.end ? "" : "/*"));
  const navigate = useNavigate();

  return (
    <BottomNavigationAction
      showLabel
      component="a"
      href={action.target}
      label={action.name}
      icon={pathMatching && action.activeIcon ? action.activeIcon : action.icon}
      className={pathMatching ? "Mui-selected" : ""}
      onClick={handleLinkClick(navigate)}
    />
  );
}
