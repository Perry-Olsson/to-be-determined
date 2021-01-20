import { User } from "../../../entities";
import { BaseError } from "../../../types";
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

export interface UpdateResponse {
  error: BaseError | null;
  user: User | null;
}
