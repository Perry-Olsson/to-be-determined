import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { QueryBuilder } from "@mikro-orm/postgresql";
import { Request } from "express";
import { User } from "../entities";

export interface MyContext {
  req: Request;
  em: EntityManager<IDatabaseDriver<Connection>>;
}

export interface DecodedToken {
  id: number;
  iat: number;
}

export type validator<T> = false | T;

export interface ValidationInput {
  email: string;
  username: string;
  qb: QueryBuilder<User>;
}

export * from "./graphql";
