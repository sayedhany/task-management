export interface login {
  email: string;
  password: string;
  role: string;
}
export interface LoginRes {
  token: string;
  userId: string;
}
