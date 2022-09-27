import { gql } from "@apollo/client";

export const uploadFileMutation =
  gql(`mutation UploadFile($input: UploadInput!) {
  uploadFile(input: $input) {
    url
    message
    status
  }
}`);
