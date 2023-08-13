import { cognito } from './cognito';

const AUTH_SERVICE = 'COGNITO'; // set to an env variable

interface authentication {
  login(email: string, password: string): Promise<string>;
  register(userData: { email: string; password: string }): Promise<string>;
  logout(): Promise<any>;
  confirmRegistration(email: string, code: string): Promise<any>;
  resetPassword(email: string): Promise<any>;
  confirmPassword(email: string, code: string, password: string): Promise<any>;
}

let auth: authentication;

switch (AUTH_SERVICE) {
  case 'COGNITO':
    auth = cognito;
    break;
  default:
    auth = cognito;
    break;
}

export default auth;
