import { gql } from "@apollo/client";

export const CommentsQuery = gql(`query Comments($input: CommentsInput!) {
  comments(input: $input) {
    data {
      id
      message
      parentId
      authorId
      createdAt
      updatedAt
      author {
        id
        email
        username
        avatar
      }
    }
    message
    status
  }
}`);

export const CreateCommentMutation =
  gql(`mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    data {
      id
      message
      parentId
      authorId
      createdAt
      updatedAt
      author {
        id
        email
        username
        avatar
      }
    }
    message
    status
  }
}`);

export const UpdateCommentMutation =
  gql(`mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    data {
      id
      message
      parentId
      authorId
      createdAt
      updatedAt
      author {
        id
        email
        username
        avatar
      }
    }
    message
    status
  }
}`);

export const DeleteCommentMutation =
  gql(`mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    data {
      id
    }
    message
    status
  }
}`);

export const CommentCreatedSubscription = gql(`subscription CommentCreated {
  commentCreated {
    type
    message
    data {
      id
      type
      receiverId
      projectId
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
