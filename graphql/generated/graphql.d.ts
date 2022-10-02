import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuthResponse = Response & {
  __typename?: 'AuthResponse';
  data?: Maybe<User>;
  exp?: Maybe<Scalars['DateTime']>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  authorId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentResponse = Response & {
  __typename?: 'CommentResponse';
  data?: Maybe<Comment>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type CommentSubscriptionResponse = {
  __typename?: 'CommentSubscriptionResponse';
  data?: Maybe<Notification>;
  message?: Maybe<Scalars['String']>;
  type?: Maybe<PushNotificationType>;
};

export type CommentsInput = {
  projectId: Scalars['String'];
};

export type CommentsResponse = Response & {
  __typename?: 'CommentsResponse';
  data?: Maybe<Array<Maybe<Comment>>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type CreateCommentInput = {
  mentions?: InputMaybe<Array<InputMaybe<MentionsInput>>>;
  message?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['String'];
};

export type CreatePageViewInput = {
  ip: Scalars['String'];
};

export type CreateProjectInput = {
  content?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type DeleteCommentInput = {
  commentId: Scalars['Int'];
};

export type DeleteProjectInput = {
  projectId: Scalars['String'];
};

export type GithubAuthInput = {
  code?: InputMaybe<Scalars['String']>;
};

export type GoogleAuthInput = {
  authuser?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  prompt?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
};

export type MentionsInput = {
  email?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CommentResponse;
  createProject: ProjectResponse;
  deleteComment: CommentResponse;
  deleteProject: ProjectResponse;
  forgotPassword: SimpleAuthResponse;
  githubOauth: AuthResponse;
  googleOauth: AuthResponse;
  login: AuthResponse;
  register: AuthResponse;
  resetPassword: ResetPasswordResponse;
  toggleVote: VoteResponse;
  updateComment: CommentResponse;
  updateProfile: UserResponse;
  updateProject: ProjectResponse;
  uploadFile: UploadResponse;
  verifyUser: AuthResponse;
  viewNotification?: Maybe<Response>;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


export type MutationForgotPasswordArgs = {
  input: UserForgotPasswordInput;
};


export type MutationGithubOauthArgs = {
  input: GithubAuthInput;
};


export type MutationGoogleOauthArgs = {
  input: GoogleAuthInput;
};


export type MutationLoginArgs = {
  input: UserLoginInput;
};


export type MutationRegisterArgs = {
  input: UserRegisterInput;
};


export type MutationResetPasswordArgs = {
  input: UserResetPasswordInput;
};


export type MutationToggleVoteArgs = {
  input?: InputMaybe<ToggleVoteInput>;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateProfileArgs = {
  input?: InputMaybe<UpdateProfileInput>;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUploadFileArgs = {
  input: UploadInput;
};


export type MutationVerifyUserArgs = {
  input: UserVerifyInput;
};


export type MutationViewNotificationArgs = {
  input: ViewNotificationInput;
};

export type Notification = {
  __typename?: 'Notification';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  projectId?: Maybe<Scalars['String']>;
  projectSlug?: Maybe<Scalars['String']>;
  receiverId?: Maybe<Scalars['String']>;
  sender?: Maybe<User>;
  senderId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewed?: Maybe<Scalars['Boolean']>;
};

export type NotificationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type NotificationResponse = Response & {
  __typename?: 'NotificationResponse';
  data?: Maybe<Notification>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type NotificationsResponse = Response & {
  __typename?: 'NotificationsResponse';
  data?: Maybe<Array<Maybe<Notification>>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type PageView = {
  __typename?: 'PageView';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  ip: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageViewResponse = {
  __typename?: 'PageViewResponse';
  data?: Maybe<Array<Maybe<PageView>>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type Project = {
  __typename?: 'Project';
  _count?: Maybe<ProjectCountPayload>;
  author?: Maybe<User>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasvoted?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  isProjectOwner?: Maybe<Scalars['Boolean']>;
  rank?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  votes?: Maybe<Array<Maybe<Vote>>>;
};

export type ProjectCountPayload = {
  __typename?: 'ProjectCountPayload';
  comments?: Maybe<Scalars['Int']>;
  votes?: Maybe<Scalars['Int']>;
};

export type ProjectInput = {
  id: Scalars['String'];
  vote_limit?: InputMaybe<Scalars['Int']>;
  vote_offset?: InputMaybe<Scalars['Int']>;
};

export type ProjectResponse = Response & {
  __typename?: 'ProjectResponse';
  data?: Maybe<Project>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type ProjectsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ProjectsResponse = Response & {
  __typename?: 'ProjectsResponse';
  data: Array<Project>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export enum PushNotificationType {
  Comment = 'COMMENT',
  Mention = 'MENTION',
  Reply = 'REPLY',
  Upvote = 'UPVOTE'
}

export type Query = {
  __typename?: 'Query';
  comments?: Maybe<CommentsResponse>;
  me?: Maybe<UserResponse>;
  mostActiveUsers?: Maybe<UsersResponse>;
  notifications?: Maybe<NotificationsResponse>;
  pageViews?: Maybe<PageViewResponse>;
  project?: Maybe<ProjectResponse>;
  projects?: Maybe<ProjectsResponse>;
  tags?: Maybe<TagsResponse>;
  user?: Maybe<UserResponse>;
  users?: Maybe<UsersResponse>;
  usersWhoComment?: Maybe<UsersResponse>;
};


export type QueryCommentsArgs = {
  input: CommentsInput;
};


export type QueryNotificationsArgs = {
  input: NotificationInput;
};


export type QueryProjectArgs = {
  input: ProjectInput;
};


export type QueryProjectsArgs = {
  input: ProjectsInput;
};


export type QueryUserArgs = {
  input: UserInput;
};


export type QueryUsersArgs = {
  input: UsersInput;
};


export type QueryUsersWhoCommentArgs = {
  input: ProjectInput;
};

export type ResetPasswordResponse = Response & {
  __typename?: 'ResetPasswordResponse';
  data?: Maybe<Account>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type Response = {
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type SimpleAuthResponse = Response & {
  __typename?: 'SimpleAuthResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  commentCreated?: Maybe<CommentSubscriptionResponse>;
  mentionCreated?: Maybe<CommentSubscriptionResponse>;
  replyCreated?: Maybe<CommentSubscriptionResponse>;
  upvoteCreated?: Maybe<UpvoteSubscriptionResponse>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  projects?: Maybe<Array<Maybe<Project>>>;
  value: Scalars['String'];
};

export type TagInput = {
  id?: InputMaybe<Scalars['Int']>;
  value: Scalars['String'];
};

export type TagsResponse = Response & {
  __typename?: 'TagsResponse';
  data?: Maybe<Array<Tag>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type ToggleVoteInput = {
  id: Scalars['String'];
};

export type UpdateCommentInput = {
  commentId: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
};

export type UpdateProfileInput = {
  banner?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  firstname?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  jobTitle?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  showProfession?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectInput = {
  content?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  projectId: Scalars['String'];
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UploadInput = {
  file?: InputMaybe<Scalars['Upload']>;
};

export type UploadResponse = Response & {
  __typename?: 'UploadResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  url?: Maybe<Scalars['String']>;
};

export type UpvoteSubscriptionResponse = {
  __typename?: 'UpvoteSubscriptionResponse';
  data?: Maybe<Notification>;
  message?: Maybe<Scalars['String']>;
  type?: Maybe<PushNotificationType>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  banner?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  jobTitle?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Project>>>;
  showProfession?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verifiedAt?: Maybe<Scalars['DateTime']>;
  votes?: Maybe<Array<Maybe<Vote>>>;
  website?: Maybe<Scalars['String']>;
};

export type UserForgotPasswordInput = {
  email: Scalars['String'];
};

export type UserInput = {
  username: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResetPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type UserResponse = Response & {
  __typename?: 'UserResponse';
  data?: Maybe<User>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type UserVerifyInput = {
  token: Scalars['String'];
};

export type UsersInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UsersResponse = Response & {
  __typename?: 'UsersResponse';
  data?: Maybe<Array<Maybe<User>>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type ViewNotificationInput = {
  notificationId: Scalars['Int'];
};

export type Vote = {
  __typename?: 'Vote';
  author?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  project?: Maybe<Project>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VoteResponse = Response & {
  __typename?: 'VoteResponse';
  data?: Maybe<Vote>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};
