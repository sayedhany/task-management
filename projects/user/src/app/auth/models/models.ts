export interface login {
  email: string;
  password: string;
  role: string;
}
export interface Register {
  email: string;
  password: string;
  role: string;
  username: string;
}
export interface LoginRes {
  token: string;
  userId: string;
}
