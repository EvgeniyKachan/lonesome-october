import {
  createContext,
  createElement,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  loginApi,
  registerApi,
  type LoginFormProps,
  type LoginResponse,
  type RegisterFormProps,
} from "../../api/auth";

export interface AuthContextType {
  isLoggedIn: boolean;
  userId: string | null;
  token: string | null;
  login: (creds: LoginFormProps) => Promise<void>;
  register: (creds: RegisterFormProps) => Promise<void>;
  logout: () => void;

  isLoginLoading: boolean;
  loginError: Error | null;

  isRegisterLoading: boolean;
  registerError: Error | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const qc = useQueryClient();
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );
  const [userId, setUserId] = useState<string | null>(() =>
    localStorage.getItem("userId")
  );

  const {
    mutateAsync: loginMutate,
    isPending: isLoginLoading,
    error: loginError,
  } = useMutation<LoginResponse, Error, LoginFormProps>({
    mutationFn: loginApi,
    onSuccess(data) {
      setToken(data.token);
      setUserId(data.user.id);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);
      qc.setQueryData(["user"], data.user);
    },
  });

  const {
    mutateAsync: registerMutate,
    isPending: isRegisterLoading,
    error: registerError,
  } = useMutation<LoginResponse, Error, RegisterFormProps>({
    mutationFn: registerApi,
    onSuccess(data) {
      setToken(data.token);
      setUserId(data.user.id);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);
      qc.setQueryData(["user"], data.user);
    },
  });

  async function login(creds: LoginFormProps) {
    await loginMutate(creds);
  }

  async function register(creds: RegisterFormProps) {
    await registerMutate(creds);
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setToken(null);
    setUserId(null);
  };

  return createElement(
    AuthContext.Provider,
    {
      value: {
        isLoggedIn: Boolean(token),
        userId,
        token,
        login,
        register,
        logout,
        isLoginLoading,
        loginError: loginError as Error | null,
        isRegisterLoading,
        registerError: registerError as Error | null,
      },
    },
    children
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("Error in auth");
  }
  return ctx;
};
