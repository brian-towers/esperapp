import { cognito } from "./cognito";

interface authentication {
  login(credentials: { username: string; password: string }): Promise<any>;
  register(userData: { email: string; password: string }): Promise<void>;
  logout(): Promise<any>;
  resendConfirmationCode(): Promise<any>;
  confirmRegistration(): Promise<any>;
}

let auth: authentication;

switch (process.env.AUTH_SERVICE) {
  case "COGNITO":
    auth = cognito;
    break;
  default:
    auth = cognito;
    break;
}

export default auth;
