import { gql } from "@apollo/client";

export const TagsQuery = gql(`query Tags {
  tags {
    data {
      id
      value
    }
    message
    status
  }
}`);
