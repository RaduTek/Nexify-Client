import useScrollTrigger from "@mui/material/useScrollTrigger";
import { cloneElement } from "react";

interface ElevationScrollProps {
  children: React.ReactElement;
}

export default function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
