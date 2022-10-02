import { gql } from "@apollo/client";

export const NotificationQuery =
  gql(`query Notifications($input: NotificationInput!) {
  notifications(input: $input) {
    message
    status
    data {
      id
      type
      receiverId
      projectId
      projectSlug
      content
      viewed
      createdAt
      sender {
        avatar
        username
      }
    }
  }
}`);

export const ViewNotificationMutation =
  gql(`mutation ViewNotification($input: ViewNotificationInput!) {
  viewNotification(input: $input) {
    message
    status
  }
}`);
