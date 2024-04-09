import { ReactNode } from "react";

export default interface HeaderProps {
  children?: ReactNode;
  title: string;
  noBackButton?: boolean;
  noSearch?: boolean;
}
