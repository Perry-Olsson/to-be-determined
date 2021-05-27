import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthError = {
  __typename?: 'AuthError';
  message: Scalars['String'];
  action?: Maybe<Scalars['String']>;
};

export type BaseEntity = {
  __typename?: 'BaseEntity';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type BaseError = {
  __typename?: 'BaseError';
  message: Scalars['String'];
};

export type Confirmation = {
  __typename?: 'Confirmation';
  confirmed?: Maybe<Scalars['Boolean']>;
};

export type CreateTodoInput = {
  title: Scalars['String'];
  notes: Array<Scalars['String']>;
};

export type CreateTodoResponse = {
  __typename?: 'CreateTodoResponse';
  errors?: Maybe<Array<BaseError>>;
  todo?: Maybe<Todo>;
};

export type DeleteTodoResponse = {
  __typename?: 'DeleteTodoResponse';
  errors?: Maybe<Array<BaseError>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type FetchTodosResponse = {
  __typename?: 'FetchTodosResponse';
  errors?: Maybe<Array<BaseError>>;
  todos?: Maybe<Array<Todo>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  message: Scalars['String'];
  field: Scalars['String'];
};

export type LoginInput = {
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  errors?: Maybe<BaseError>;
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  resendConfirmation: Scalars['Boolean'];
  createTodo: CreateTodoResponse;
  deleteTodo: DeleteTodoResponse;
  login: LoginResponse;
  register: RegisterResponse;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type Query = {
  __typename?: 'Query';
  fetchTodo: FetchTodosResponse;
  me?: Maybe<User>;
};

export type RegisterInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type Subscription = {
  __typename?: 'Subscription';
  confirmedNotification: Confirmation;
};


export type SubscriptionConfirmedNotificationArgs = {
  email: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  notes: Array<Scalars['String']>;
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  fullName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  confirmed: Scalars['Boolean'];
  todos: Array<Todo>;
};

export type BaseUserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'firstName' | 'lastName' | 'fullName' | 'confirmed'>
);

export type TodoFieldsFragment = (
  { __typename?: 'Todo' }
  & Pick<Todo, 'id' | 'title' | 'notes'>
);

export type ExtraUserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'createdAt' | 'updatedAt'>
);

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'CreateTodoResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'BaseError' }
      & Pick<BaseError, 'message'>
    )>>, todo?: Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'title' | 'notes'>
    )> }
  ) }
);

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & { deleteTodo: (
    { __typename?: 'DeleteTodoResponse' }
    & Pick<DeleteTodoResponse, 'success'>
    & { errors?: Maybe<Array<(
      { __typename?: 'BaseError' }
      & Pick<BaseError, 'message'>
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { errors?: Maybe<(
      { __typename?: 'BaseError' }
      & Pick<BaseError, 'message'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & { todos: Array<(
        { __typename?: 'Todo' }
        & TodoFieldsFragment
      )> }
      & BaseUserFieldsFragment
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'RegisterResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username'>
    )> }
  ) }
);

export type ResendConfirmationMutationVariables = Exact<{ [key: string]: never; }>;


export type ResendConfirmationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resendConfirmation'>
);

export type MeQueryVariables = Exact<{
  getAllFields?: Maybe<Scalars['Boolean']>;
}>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & { todos: Array<(
      { __typename?: 'Todo' }
      & TodoFieldsFragment
    )> }
    & BaseUserFieldsFragment
    & ExtraUserFieldsFragment
  )> }
);

export type ConfirmedNotificationSubscriptionVariables = Exact<{
  email: Scalars['String'];
}>;


export type ConfirmedNotificationSubscription = (
  { __typename?: 'Subscription' }
  & { confirmedNotification: (
    { __typename?: 'Confirmation' }
    & Pick<Confirmation, 'confirmed'>
  ) }
);

export const BaseUserFieldsFragmentDoc = gql`
    fragment baseUserFields on User {
  id
  username
  email
  firstName
  lastName
  fullName
  confirmed
}
    `;
export const TodoFieldsFragmentDoc = gql`
    fragment todoFields on Todo {
  id
  title
  notes
}
    `;
export const ExtraUserFieldsFragmentDoc = gql`
    fragment extraUserFields on User {
  createdAt
  updatedAt
}
    `;
export const CreateTodoDocument = gql`
    mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    errors {
      message
    }
    todo {
      id
      title
      notes
    }
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: Float!) {
  deleteTodo(id: $id) {
    errors {
      message
    }
    success
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    errors {
      message
    }
    user {
      ...baseUserFields
      todos {
        ...todoFields
      }
    }
    token
  }
}
    ${BaseUserFieldsFragmentDoc}
${TodoFieldsFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    errors {
      field
      message
    }
    user {
      id
      email
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ResendConfirmationDocument = gql`
    mutation ResendConfirmation {
  resendConfirmation
}
    `;
export type ResendConfirmationMutationFn = Apollo.MutationFunction<ResendConfirmationMutation, ResendConfirmationMutationVariables>;

/**
 * __useResendConfirmationMutation__
 *
 * To run a mutation, you first call `useResendConfirmationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendConfirmationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendConfirmationMutation, { data, loading, error }] = useResendConfirmationMutation({
 *   variables: {
 *   },
 * });
 */
export function useResendConfirmationMutation(baseOptions?: Apollo.MutationHookOptions<ResendConfirmationMutation, ResendConfirmationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendConfirmationMutation, ResendConfirmationMutationVariables>(ResendConfirmationDocument, options);
      }
export type ResendConfirmationMutationHookResult = ReturnType<typeof useResendConfirmationMutation>;
export type ResendConfirmationMutationResult = Apollo.MutationResult<ResendConfirmationMutation>;
export type ResendConfirmationMutationOptions = Apollo.BaseMutationOptions<ResendConfirmationMutation, ResendConfirmationMutationVariables>;
export const MeDocument = gql`
    query Me($getAllFields: Boolean = false) {
  me {
    ...baseUserFields
    todos {
      ...todoFields
    }
    ...extraUserFields @include(if: $getAllFields)
  }
}
    ${BaseUserFieldsFragmentDoc}
${TodoFieldsFragmentDoc}
${ExtraUserFieldsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *      getAllFields: // value for 'getAllFields'
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ConfirmedNotificationDocument = gql`
    subscription ConfirmedNotification($email: String!) {
  confirmedNotification(email: $email) {
    confirmed
  }
}
    `;

/**
 * __useConfirmedNotificationSubscription__
 *
 * To run a query within a React component, call `useConfirmedNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useConfirmedNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConfirmedNotificationSubscription({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useConfirmedNotificationSubscription(baseOptions: Apollo.SubscriptionHookOptions<ConfirmedNotificationSubscription, ConfirmedNotificationSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ConfirmedNotificationSubscription, ConfirmedNotificationSubscriptionVariables>(ConfirmedNotificationDocument, options);
      }
export type ConfirmedNotificationSubscriptionHookResult = ReturnType<typeof useConfirmedNotificationSubscription>;
export type ConfirmedNotificationSubscriptionResult = Apollo.SubscriptionResult<ConfirmedNotificationSubscription>;