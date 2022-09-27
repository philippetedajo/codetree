import { gql } from "@apollo/client";

export const PageViewQuery = gql(`query pageViews {
  pageViews {
    data {
      id
      ip
      createdAt
      updatedAt
    }
    message
    status
  }
}`);
