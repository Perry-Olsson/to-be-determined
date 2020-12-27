import { Request } from "express";

export interface MyContext {
  req: Request;
}

export interface DecodedToken {
  id: number;
  iat: number;
}
