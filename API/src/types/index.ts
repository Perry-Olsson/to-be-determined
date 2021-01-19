import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Request } from "express";

export interface MyContext {
  req: Request;
  em: EntityManager<IDatabaseDriver<Connection>>;
}

export interface DecodedToken {
  email: string;
  iat?: number;
  error: string;
}

export type validator<T> = false | T;

export * from "./graphql";
