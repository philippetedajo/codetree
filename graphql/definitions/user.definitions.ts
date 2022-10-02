import { gql } from "@apollo/client";

export const UsersIDsQuery = gql(`query UsersIDsQuery($input: UsersInput!) {
  users(input: $input) {
    message
    status
    data {
      username
    }
  }
}`);

export const UserQuery = gql(`query User($input: UserInput!) {
  user(input: $input) {
    message
    status
    data {
      id
      email
      username
      firstname
      lastname
      avatar
      bio
      website
      jobTitle
      country
      showProfession
      points
      projects {
        id
        title
        slug
        tags {
          id
          value
        }
      }
    }
  }
}`);

export const MostActiveUsersQuery = gql(`query MostActiveUsers {
  mostActiveUsers {
    status
    message
    data {
      id
      avatar
      username
      bio
    }
  }
}`);
