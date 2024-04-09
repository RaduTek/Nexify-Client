import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const ExpandDesktopSidebar = atomWithStorage(
  "ExpandDesktopSidebar",
  false
);
