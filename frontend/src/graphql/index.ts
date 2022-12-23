import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DashButton = {
  __typename?: "DashButton";
  id: Scalars["ID"];
  order: Scalars["Int"];
  summary: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  startEntry?: Maybe<Scalars["Boolean"]>;
};

export type MutationStartEntryArgs = {
  data?: InputMaybe<StartEntryInput>;
};

export type Query = {
  __typename?: "Query";
  dashButtonAll: Array<DashButton>;
};

export type StartEntryInput = {
  description: Scalars["String"];
};

export type GetDashButtonsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDashButtonsQuery = {
  __typename?: "Query";
  dashButtonAll: Array<{ __typename?: "DashButton"; id: string; summary: string }>;
};

export const GetDashButtonsDocument = gql`
  query GetDashButtons {
    dashButtonAll {
      id
      summary
    }
  }
`;

/**
 * __useGetDashButtonsQuery__
 *
 * To run a query within a React component, call `useGetDashButtonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashButtonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashButtonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDashButtonsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDashButtonsQuery, GetDashButtonsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDashButtonsQuery, GetDashButtonsQueryVariables>(
    GetDashButtonsDocument,
    options
  );
}
export function useGetDashButtonsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDashButtonsQuery, GetDashButtonsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDashButtonsQuery, GetDashButtonsQueryVariables>(
    GetDashButtonsDocument,
    options
  );
}
export type GetDashButtonsQueryHookResult = ReturnType<typeof useGetDashButtonsQuery>;
export type GetDashButtonsLazyQueryHookResult = ReturnType<typeof useGetDashButtonsLazyQuery>;
export type GetDashButtonsQueryResult = Apollo.QueryResult<
  GetDashButtonsQuery,
  GetDashButtonsQueryVariables
>;
