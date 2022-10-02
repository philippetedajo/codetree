import { gql } from "@apollo/client";

export const ProjectsQuery = gql(`query Projects($input: ProjectsInput!) {
  projects(input: $input) {
    data {
      id
      createdAt
      title
      slug
      description
      content
      updatedAt
      hasvoted
      isProjectOwner
      files
      tags {
        id
        value
      }
      _count {
        votes
        comments
      }
      author {
        id
        username
        avatar
      }
      comments {
        author {
          id
          username
          avatar
        }
      }
    }
    message
    status
  }
}`);

export const ProjectsIDsQuery = gql(`query Projects($input: ProjectsInput!) {
  projects(input: $input) {
    data {
      id
    }
    message
    status
  }
}`);

export const ProjectQuery = gql(`query Project($input: ProjectInput!) {
  project(input: $input) {
    message
    status
    data {
      id
      title
      slug
      description
      content
      files
      author {
        id
        username
        avatar
      }
      tags {
        id
        value
      }
      _count {
        votes
        comments
      }
      createdAt
      updatedAt
      hasvoted
      isProjectOwner
      votes {
        author {
          id
          username
          avatar
        }
      }
    }
  }
  usersWhoComment(input: $input) {
    data {
      id
      email
      username
      avatar
    }
    message
    status
  }
}`);

export const HasVotedProjectQuery =
  gql(`query HasVotedProjectQuery($input: ProjectInput!) {
  project(input: $input) {
    data {
      hasvoted
      _count {
        votes
      }
    }
    message
    status
  }
}`);

export const CreateProjectMutation =
  gql(`mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    message
    status
    data {
      id
      title
      slug
      description
      content
      files
    }
  }
}`);

export const UpdateProjectMutation =
  gql(`mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    message
    status
  }
}`);

export const DeleteProjectMutation =
  gql(`mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    data {
      id
    }
    message
    status
  }
}`);
