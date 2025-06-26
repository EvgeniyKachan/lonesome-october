import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import classes from "../Authorization.module.scss";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";

const schema = yup
  .object({
    username: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data): void => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="You Username"
        name="username"
        register={register}
        className={classes.input}
        placeholder="Username"
      />
      <p>{errors.username?.message}</p>
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
        register={register}
        autocomplete="password"
        className={classes.input}
        placeholder="Password"
      />
      <p>{errors.password?.message}</p>

      <Button type="submit"> Sign up</Button>
    </form>
  );
}
