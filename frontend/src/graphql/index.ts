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
};

export type StartEntryInput = {
  dashButtonId: Scalars["String"];
};

export type GetDashButtonsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDashButtonsQuery = {
  __typename?: "Query";
  dashButtonAll: Array<{ __typename?: "DashButton"; id: string; description: string }>;
};

export type StartEntryMutationVariables = Exact<{
  data?: InputMaybe<StartEntryInput>;
}>;

export type StartEntryMutation = { __typename?: "Mutation"; startEntry?: boolean | null };

export const GetDashButtonsDocument = gql`
  query GetDashButtons {
    dashButtonAll {
      id
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
