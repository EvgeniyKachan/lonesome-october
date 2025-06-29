export type LoginFormProps = {
  email: string;
  password: string;
};

export type RegisterFormProps = {
  username: string;
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: { id: string; username: string; email: string };
};

export async function loginApi({
  email,
  password,
}: LoginFormProps): Promise<LoginResponse> {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Error ${res.status}`);
  }
  return res.json(); // { token, user }
}

export async function registerApi({
  username,
  email,
  password,
}: RegisterFormProps): Promise<LoginResponse> {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Error ${res.status}`);
  }
  return res.json(); // { token, user }
}
