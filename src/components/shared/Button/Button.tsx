import type { ComponentPropsWithoutRef } from "react";

import classes from "./Button.module.scss";
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <div className={className ? className : ""}>
      <button className={`${classes.button} `} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
