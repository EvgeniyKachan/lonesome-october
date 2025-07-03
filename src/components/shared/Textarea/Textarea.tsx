import type {
  FieldValues,
  UseFormRegister,
  Path,
  FieldError,
} from "react-hook-form";
import classes from "./Textarea.module.scss";
import type { ComponentPropsWithoutRef } from "react";

type InputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  autocomplete?: string;
  className?: string;
  error?: FieldError;
} & ComponentPropsWithoutRef<"textarea">;

const Textarea = <T extends FieldValues>({
  label,
  name,
  register,
  required,
  className,
  autocomplete,
  error,
  ...props
}: InputProps<T>) => (
  <div className={classes.textarea_wrapper}>
    <label htmlFor={name} className={classes.label}>
      {label}
    </label>
    <textarea
      id={name}
      {...register(name, { required })}
      autoComplete={autocomplete}
      className={`${classes.textarea} ${className ? className : ""}`}
      {...props}
    />
    {error && <p className={classes.error}>{error.message}</p>}
  </div>
);

export default Textarea;
