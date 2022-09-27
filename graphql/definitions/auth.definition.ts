import { gql } from "@apollo/client";

export const meQuery = gql(`query Me {
  me {
    data {
      id
      username
      email
      avatar
      bio
      website
      verifiedAt
      createdAt
      updatedAt
      showProfession
      projects {
        id
        title
        description
      }
      firstname
      lastname
      jobTitle
      country
    }
    message
    status
  }
}`);

export const registerMutation =
  gql(`mutation Register($input: UserRegisterInput!) {
  register(input: $input) {
    data {
      id
      email
      username
      avatar
      bio
      website
      verifiedAt
      createdAt
      updatedAt
    }
    token
    message
    status
  }
}`);

export const loginMutation = gql(`mutation Login($input: UserLoginInput!) {
  login(input: $input) {
    data {
      id
      email
      username
      avatar
      bio
      website
      verifiedAt
      createdAt
      updatedAt
    }
    token
    message
    status
  }
}`);

export const verifiedUserMutation =
  gql(`mutation VerifyUser($input: UserVerifyInput!) {
  verifyUser(input: $input) {
    message
    status
  }
}`);

export const googleOauthMutation =
  gql(`mutation Mutation($input: GoogleAuthInput!) {
  googleOauth(input: $input) {
    data {
      id
      email
      username
      avatar
      bio
      website
      verifiedAt
      createdAt
      updatedAt
    }
    token
    message
    status
  }
}`);

export const updateProfileMutation =
  gql(`mutation UpdateProfile($input: UpdateProfileInput) {
  updateProfile(input: $input) {
    data {
      avatar
      username
    }
    message
    status
  }
}`);

export const resetPasswordMutation =
  gql(`mutation ResetPassword($input: UserResetPasswordInput!) {
  resetPassword(input: $input) {
    status
    message
    data {
      id
      email
      token
      expiredAt
      createdAt
      updatedAt
    }
  }
}`);

export const forgotPasswordMutation =
  gql(`mutation ForgotPassword($input: UserForgotPasswordInput!) {
  forgotPassword(input: $input) {
    message
    status
  }
}`);
