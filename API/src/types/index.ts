import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Request } from "express";
import { User } from "../entities";

interface MyRequest extends Request {
  user?: User;
}
export interface MyContext {
  req: MyRequest;
  em: EntityManager<IDatabaseDriver<Connection>>;
}

export interface DecodedToken {
  email: string;
  iat?: number;
  error: string;
}

export type validator<T> = false | T;

export * from "./graphql";
