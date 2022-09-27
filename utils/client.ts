import { ApolloClient, InMemoryCache, ApolloLink, split } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { offsetLimitPagination } from "./offsetLimitPagination";

const loggerLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((result) => {
    console.info("response", result?.data);
    return result;
  });
});

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: `${process.env.NEXT_PUBLIC_WS_API_URL}`,
        })
      )
    : null;

const httpLink = (token?: string) =>
  createUploadLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    headers: !token
      ? { "apollo-require-preflight": true }
      : {
          authorization: `Bearer ${token}`,
          "apollo-require-preflight": true,
        },
  });

const splitLink = (token?: string) =>
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink, // @ts-ignore
        httpLink(token)
      )
    : httpLink(token);

export const createApolloClient = (token?: string) => {
  return new ApolloClient({
    defaultOptions: {
      query: {
        errorPolicy: "all",
      },
      mutate: {
        errorPolicy: "all",
      },
    },
    // @ts-ignore
    link: splitLink(token),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            projects: offsetLimitPagination(),
          },
        },
      },
    }),
  });
};
