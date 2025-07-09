import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../../components/shared/Input/Input";
import classes from "../Authorization.module.scss";
import Button from "../../../components/shared/Button/Button";
import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";
import ErrorModal from "../../../components/shared/ErrorModal/ErrorModal";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

type LoginFormProps = {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
  error: Error | null;
};

const LoginForm = ({ onSubmit, isLoading, error }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="You Email"
        name="email"
        register={register}
        autocomplete="email"
        className={classes.input}
        placeholder="Email"
      />
      <p>{errors.email?.message}</p>

      <Input
        label="You Password"
        name="password"
        type="password"
        register={register}
        className={classes.input}
        placeholder="Password"
      />
      <p>{errors.password?.message}</p>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Loading…" : "Log In"}
      </Button>
      {error && <ErrorModal error={error.message} />}
      {isLoading && <LoadingSpinner />}
    </form>
  );
};

export default LoginForm;
