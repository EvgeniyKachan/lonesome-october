import Card from "../../components/shared/Card/Card";
import RegisterForm from "./forms/RegisterForm";

import classes from "./Authorization.module.scss";
import { useEffect, useState } from "react";
import LoginForm from "./forms/LoginForm";
import Button from "../../components/shared/Button/Button";
import { useAuth } from "../../hooks/auth/useAuth";
import { useNavigate } from "react-router";

const Authorization = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const {
    login,
    register,
    isLoginLoading,
    isRegisterLoading,
    loginError,
    registerError,
    resetLoginError,
    resetRegisterError,
  } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (data: { email: string; password: string }) => {
    await login(data);
    navigate("/", { replace: true });
  };

  const handleRegister = async (data: {
    email: string;
    username: string;
    password: string;
  }) => {
    await register(data);
    navigate("/", { replace: true });
  };

  const handleToggleForm = () => {
    setIsLoginForm((prev) => !prev);
    resetLoginError();
    resetRegisterError();
  };

  useEffect(() => {
    if (isLoginForm) resetLoginError();
    else resetRegisterError();
  }, []);

  return (
    <div className={classes.login_wrapper}>
      <Card className={classes.login_card}>
        {isLoginForm ? (
          <LoginForm
            onSubmit={handleLogin}
            isLoading={isLoginLoading}
            error={loginError}
          />
        ) : (
          <RegisterForm
            onSubmit={handleRegister}
            isLoading={isRegisterLoading}
            error={registerError}
          />
        )}
        <Button className={classes.toggle_button} onClick={handleToggleForm}>
          {isLoginForm ? "Sign up" : "Login"}
        </Button>
      </Card>
    </div>
  );
};

export default Authorization;
