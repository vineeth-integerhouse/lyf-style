export interface IEmail {
  email: string;
}

export interface ILogin extends IEmail {
  password: string;
}

export interface ISignup extends ILogin {
  name: string;
  phoneNumber: string;
  confirmPassword: string;
}
