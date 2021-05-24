export interface UpdateProfileForm {
  name: string;
  username: string;
  description: string;
  status: string;
}

export interface UpdatePasswordForm {
  last_password: string;
  password: string;
}

export interface UpdateEmailForm {
  email: string;
}
