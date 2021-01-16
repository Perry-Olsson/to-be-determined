import { UserRepository } from "../UserRepository";

export * from "./errors";

export interface ValidationInput {
  email: string;
  username: string;
  repo: UserRepository;
}

export interface ValidatorArray<T> {
  filter<U extends T>(pred: (a: T) => T): U[];
}
