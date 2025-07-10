import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useMemo,
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
import useLocalStorageState from "./useLocalStorageState";
import { useNavigate } from "react-router";

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

  resetLoginError: () => void;
  resetRegisterError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useLocalStorageState("token", null);
  const [userId, setUserId] = useLocalStorageState("userId", null);

  const qc = useQueryClient();
  const navigate = useNavigate();

  const loginMutation = useMutation<LoginResponse, Error, LoginFormProps>({
    mutationFn: loginApi,
    onSuccess(data) {
      setToken(data.token);
      setUserId(data.user.id);
      qc.setQueryData(["user"], data.user);
    },
  });

  const registerMutation = useMutation<LoginResponse, Error, RegisterFormProps>(
    {
      mutationFn: registerApi,
      onSuccess(data) {
        setToken(data.token);
        setUserId(data.user.id);
        qc.setQueryData(["user"], data.user);
      },
    }
  );

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    navigate("/", { replace: true });
  }, [setToken, setUserId]);

  const login = useCallback(
    async (creds: LoginFormProps) => {
      await loginMutation.mutateAsync(creds);
    },
    [loginMutation]
  );

  const register = useCallback(
    async (creds: RegisterFormProps) => {
      await registerMutation.mutateAsync(creds);
    },
    [registerMutation]
  );

  const resetLoginError = useCallback(() => {
    loginMutation.reset();
  }, [loginMutation]);

  const resetRegisterError = useCallback(() => {
    registerMutation.reset();
  }, [registerMutation]);

  const ctxValue = useMemo(
    () => ({
      isLoggedIn: Boolean(token),
      userId,
      token,
      login,
      register,
      logout,
      isLoginLoading: loginMutation.isPending,
      loginError: loginMutation.error,
      isRegisterLoading: registerMutation.isPending,
      registerError: registerMutation.error,
      resetLoginError,
      resetRegisterError,
    }),
    [
      token,
      userId,
      login,
      register,
      logout,
      loginMutation,
      registerMutation,
      resetLoginError,
      resetRegisterError,
    ]
  );

  return createElement(AuthContext.Provider, { value: ctxValue }, children);
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
