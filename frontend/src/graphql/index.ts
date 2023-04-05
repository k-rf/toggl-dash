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

export type AnnualObjective = {
  __typename?: "AnnualObjective";
  id: Scalars["String"];
  monthlyAvailableTimes: Array<MonthlyAvailableTime>;
  objectives: Array<Objective>;
  year: Scalars["Int"];
};

export type AvailableTime = {
  __typename?: "AvailableTime";
  time: Array<Scalars["Int"]>;
  weight: Scalars["Int"];
};

export type AvailableTimeInput = {
  time: Array<Scalars["Int"]>;
  weight: Scalars["Int"];
};

export type CreateDashButtonInput = {
  client: Scalars["String"];
  clientId: Scalars["Int"];
  description: Scalars["String"];
  order: Scalars["Int"];
  project: Scalars["String"];
  projectId: Scalars["Int"];
};

export type DashButton = {
  __typename?: "DashButton";
  client: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  order: Scalars["Int"];
  project: Scalars["String"];
};

export type DeleteDashButtonInput = {
  dashButtonId: Scalars["String"];
};

export type MonthlyAvailableTime = {
  __typename?: "MonthlyAvailableTime";
  holiday: AvailableTime;
  month: Scalars["Int"];
  offDay: Scalars["Int"];
  weekday: AvailableTime;
};

export type MonthlyAvailableTimeInput = {
  holiday: AvailableTimeInput;
  month: Scalars["Int"];
  offDay: Scalars["Int"];
  weekday: AvailableTimeInput;
};

export type Mutation = {
  __typename?: "Mutation";
  createDashButton?: Maybe<Scalars["Boolean"]>;
  deleteDashButton?: Maybe<Scalars["Boolean"]>;
  registerAnnualObjective?: Maybe<Scalars["Boolean"]>;
  startEntry?: Maybe<Scalars["Boolean"]>;
};

export type MutationCreateDashButtonArgs = {
  data?: InputMaybe<CreateDashButtonInput>;
};

export type MutationDeleteDashButtonArgs = {
  data?: InputMaybe<DeleteDashButtonInput>;
};

export type MutationRegisterAnnualObjectiveArgs = {
  data?: InputMaybe<RegisterAnnualObjectiveInput>;
};

export type MutationStartEntryArgs = {
  data?: InputMaybe<StartEntryInput>;
};

export type Objective = {
  __typename?: "Objective";
  clientId: Scalars["Int"];
  objectiveTime: Array<Scalars["Int"]>;
};

export type ObjectiveInput = {
  clientId: Scalars["Int"];
  objectiveTime: Array<Scalars["Int"]>;
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

export type RegisterAnnualObjectiveInput = {
  monthlyAvailableTimes: Array<MonthlyAvailableTimeInput>;
  objectives: Array<ObjectiveInput>;
  year: Scalars["Int"];
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

export type CreateDashButtonMutationVariables = Exact<{
  data?: InputMaybe<CreateDashButtonInput>;
}>;

export type CreateDashButtonMutation = {
  __typename?: "Mutation";
  createDashButton?: boolean | null;
};

export type DeleteDashButtonMutationVariables = Exact<{
  data?: InputMaybe<DeleteDashButtonInput>;
}>;

export type DeleteDashButtonMutation = {
  __typename?: "Mutation";
  deleteDashButton?: boolean | null;
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

export type RegisterAnnualObjectiveMutationVariables = Exact<{
  data?: InputMaybe<RegisterAnnualObjectiveInput>;
}>;

export type RegisterAnnualObjectiveMutation = {
  __typename?: "Mutation";
  registerAnnualObjective?: boolean | null;
};

export const CreateDashButtonDocument = gql`
  mutation CreateDashButton($data: CreateDashButtonInput) {
    createDashButton(data: $data)
  }
`;
export type CreateDashButtonMutationFn = Apollo.MutationFunction<
  CreateDashButtonMutation,
  CreateDashButtonMutationVariables
>;

/**
 * __useCreateDashButtonMutation__
 *
 * To run a mutation, you first call `useCreateDashButtonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDashButtonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDashButtonMutation, { data, loading, error }] = useCreateDashButtonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDashButtonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDashButtonMutation,
    CreateDashButtonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateDashButtonMutation, CreateDashButtonMutationVariables>(
    CreateDashButtonDocument,
    options
  );
}
export type CreateDashButtonMutationHookResult = ReturnType<typeof useCreateDashButtonMutation>;
export type CreateDashButtonMutationResult = Apollo.MutationResult<CreateDashButtonMutation>;
export type CreateDashButtonMutationOptions = Apollo.BaseMutationOptions<
  CreateDashButtonMutation,
  CreateDashButtonMutationVariables
>;
export const DeleteDashButtonDocument = gql`
  mutation DeleteDashButton($data: DeleteDashButtonInput) {
    deleteDashButton(data: $data)
  }
`;
export type DeleteDashButtonMutationFn = Apollo.MutationFunction<
  DeleteDashButtonMutation,
  DeleteDashButtonMutationVariables
>;

/**
 * __useDeleteDashButtonMutation__
 *
 * To run a mutation, you first call `useDeleteDashButtonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDashButtonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDashButtonMutation, { data, loading, error }] = useDeleteDashButtonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteDashButtonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDashButtonMutation,
    DeleteDashButtonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteDashButtonMutation, DeleteDashButtonMutationVariables>(
    DeleteDashButtonDocument,
    options
  );
}
export type DeleteDashButtonMutationHookResult = ReturnType<typeof useDeleteDashButtonMutation>;
export type DeleteDashButtonMutationResult = Apollo.MutationResult<DeleteDashButtonMutation>;
export type DeleteDashButtonMutationOptions = Apollo.BaseMutationOptions<
  DeleteDashButtonMutation,
  DeleteDashButtonMutationVariables
>;
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
export const RegisterAnnualObjectiveDocument = gql`
  mutation RegisterAnnualObjective($data: RegisterAnnualObjectiveInput) {
    registerAnnualObjective(data: $data)
  }
`;
export type RegisterAnnualObjectiveMutationFn = Apollo.MutationFunction<
  RegisterAnnualObjectiveMutation,
  RegisterAnnualObjectiveMutationVariables
>;

/**
 * __useRegisterAnnualObjectiveMutation__
 *
 * To run a mutation, you first call `useRegisterAnnualObjectiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterAnnualObjectiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerAnnualObjectiveMutation, { data, loading, error }] = useRegisterAnnualObjectiveMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterAnnualObjectiveMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterAnnualObjectiveMutation,
    RegisterAnnualObjectiveMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterAnnualObjectiveMutation,
    RegisterAnnualObjectiveMutationVariables
  >(RegisterAnnualObjectiveDocument, options);
}
export type RegisterAnnualObjectiveMutationHookResult = ReturnType<
  typeof useRegisterAnnualObjectiveMutation
>;
export type RegisterAnnualObjectiveMutationResult =
  Apollo.MutationResult<RegisterAnnualObjectiveMutation>;
export type RegisterAnnualObjectiveMutationOptions = Apollo.BaseMutationOptions<
  RegisterAnnualObjectiveMutation,
  RegisterAnnualObjectiveMutationVariables
>;
