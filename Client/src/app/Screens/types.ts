import { ApolloQueryResult } from "@apollo/client";
import { Exact, Maybe, MeQuery } from "../../generated/graphql";

export type RefetchUser = (
  variables?:
    | Partial<
        Exact<{
          getAllFields?: Maybe<boolean> | undefined;
        }>
      >
    | undefined
) => Promise<ApolloQueryResult<MeQuery>>;
