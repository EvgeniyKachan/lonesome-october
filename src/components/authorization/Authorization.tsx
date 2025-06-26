import Card from "../shared/Card/Card";
import RegisterForm from "./forms/RegisterForm";

import classes from "./Authorization.module.scss";
import { useState } from "react";
import LoginForm from "./forms/LoginForm";
import Button from "../shared/Button/Button";

export default function Authorization() {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  return (
    <div className={classes.login_wrapper}>
      <Card className={classes.login_card}>
        {isLoginForm ? <LoginForm /> : <RegisterForm />}
        <Button
          className={classes.toggle_button}
          onClick={() => setIsLoginForm((prev) => !prev)}
        >
          {isLoginForm ? "Sign up" : "Login"}
        </Button>
      </Card>
    </div>
  );
}
