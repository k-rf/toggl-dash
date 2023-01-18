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
  client: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  order: Scalars["Int"];
  project: Scalars["String"];
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
  togglClientAll: Array<TogglClient>;
  togglProjectByClient: Array<TogglProject>;
};

export type QueryTogglProjectByClientArgs = {
  id: Scalars["Int"];
};

export type StartEntryInput = {
  dashButtonId: Scalars["String"];
};

export type TogglClient = {
  __typename?: "TogglClient";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type TogglProject = {
  __typename?: "TogglProject";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type GetDashButtonsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDashButtonsQuery = {
  __typename?: "Query";
  dashButtonAll: Array<{
    __typename?: "DashButton";
    id: string;
    client: string;
    project: string;
    description: string;
  }>;
};

export type GetTogglClientsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTogglClientsQuery = {
  __typename?: "Query";
  togglClientAll: Array<{ __typename?: "TogglClient"; id: number; name: string }>;
};

export type GetTogglProjectsByClientQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetTogglProjectsByClientQuery = {
  __typename?: "Query";
  togglProjectByClient: Array<{ __typename?: "TogglProject"; id: number; name: string }>;
};

export type StartEntryMutationVariables = Exact<{
  data?: InputMaybe<StartEntryInput>;
}>;

export type StartEntryMutation = { __typename?: "Mutation"; startEntry?: boolean | null };

export const GetDashButtonsDocument = gql`
  query GetDashButtons {
    dashButtonAll {
      id
      client
      project
      description
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
export const GetTogglClientsDocument = gql`
  query GetTogglClients {
    togglClientAll {
      id
      name
    }
  }
`;

/**
 * __useGetTogglClientsQuery__
 *
 * To run a query within a React component, call `useGetTogglClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTogglClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTogglClientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTogglClientsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTogglClientsQuery, GetTogglClientsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTogglClientsQuery, GetTogglClientsQueryVariables>(
    GetTogglClientsDocument,
    options
  );
}
export function useGetTogglClientsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTogglClientsQuery, GetTogglClientsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTogglClientsQuery, GetTogglClientsQueryVariables>(
    GetTogglClientsDocument,
    options
  );
}
export type GetTogglClientsQueryHookResult = ReturnType<typeof useGetTogglClientsQuery>;
export type GetTogglClientsLazyQueryHookResult = ReturnType<typeof useGetTogglClientsLazyQuery>;
export type GetTogglClientsQueryResult = Apollo.QueryResult<
  GetTogglClientsQuery,
  GetTogglClientsQueryVariables
>;
export const GetTogglProjectsByClientDocument = gql`
  query GetTogglProjectsByClient($id: Int!) {
    togglProjectByClient(id: $id) {
      id
      name
    }
  }
`;

/**
 * __useGetTogglProjectsByClientQuery__
 *
 * To run a query within a React component, call `useGetTogglProjectsByClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTogglProjectsByClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTogglProjectsByClientQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTogglProjectsByClientQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTogglProjectsByClientQuery,
    GetTogglProjectsByClientQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTogglProjectsByClientQuery, GetTogglProjectsByClientQueryVariables>(
    GetTogglProjectsByClientDocument,
    options
  );
}
export function useGetTogglProjectsByClientLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTogglProjectsByClientQuery,
    GetTogglProjectsByClientQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTogglProjectsByClientQuery, GetTogglProjectsByClientQueryVariables>(
    GetTogglProjectsByClientDocument,
    options
  );
}
export type GetTogglProjectsByClientQueryHookResult = ReturnType<
  typeof useGetTogglProjectsByClientQuery
>;
export type GetTogglProjectsByClientLazyQueryHookResult = ReturnType<
  typeof useGetTogglProjectsByClientLazyQuery
>;
export type GetTogglProjectsByClientQueryResult = Apollo.QueryResult<
  GetTogglProjectsByClientQuery,
  GetTogglProjectsByClientQueryVariables
>;
export const StartEntryDocument = gql`
  mutation StartEntry($data: StartEntryInput) {
    startEntry(data: $data)
  }
`;
export type StartEntryMutationFn = Apollo.MutationFunction<
  StartEntryMutation,
  StartEntryMutationVariables
>;

/**
 * __useStartEntryMutation__
 *
 * To run a mutation, you first call `useStartEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startEntryMutation, { data, loading, error }] = useStartEntryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useStartEntryMutation(
  baseOptions?: Apollo.MutationHookOptions<StartEntryMutation, StartEntryMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<StartEntryMutation, StartEntryMutationVariables>(
    StartEntryDocument,
    options
  );
}
export type StartEntryMutationHookResult = ReturnType<typeof useStartEntryMutation>;
export type StartEntryMutationResult = Apollo.MutationResult<StartEntryMutation>;
export type StartEntryMutationOptions = Apollo.BaseMutationOptions<
  StartEntryMutation,
  StartEntryMutationVariables
>;
