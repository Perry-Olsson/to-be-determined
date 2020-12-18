import { ApolloServer, gql } from "apollo-server";

import { users } from "../testResources";
import logger from "./utils/logger";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    email: String!
    username: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }
`;

const resolvers = {
  Query: {
    user: (root, args) => users.filter(user => args.id === user.id)[0],
    users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  logger.info(`Server ready at ${url}`);
});
