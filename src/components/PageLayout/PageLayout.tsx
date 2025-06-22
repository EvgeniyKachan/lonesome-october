import type { ReactNode } from "react";
import classes from "./PageLayout.module.scss";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return <div className={classes.layout}>{children}</div>;
}
