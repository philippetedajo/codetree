//interfaces
export interface LoginForm {
  email: string;
  min: string;
}

export interface RegisterForm {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface ForgotPasswordForm {
  email: string;
}

export interface ResetPasswordForm {
  password: string;
  confirm_password: string;
}
