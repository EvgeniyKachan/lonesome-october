import type { ReactNode } from "react";
import classes from "./PageLayout.module.scss";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className={classes.layout}>{children}</div>;
};

export default PageLayout;
