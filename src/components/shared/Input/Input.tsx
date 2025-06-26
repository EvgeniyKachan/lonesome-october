import type { FieldValues, UseFormRegister, Path } from "react-hook-form";
import classes from "./Input.module.scss";
import type { ComponentPropsWithoutRef } from "react";

type InputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  autocomplete?: string;
  className?: string;
} & ComponentPropsWithoutRef<"input">;

const Input = <T extends FieldValues>({
  label,
  name,
  register,
  required,
  className,
  autocomplete,
  ...props
}: InputProps<T>) => (
  <div className={classes.input_wrapper}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      {...register(name, { required })}
      autoComplete={autocomplete}
      className={className}
      {...props}
    />
  </div>
);

export default Input;
