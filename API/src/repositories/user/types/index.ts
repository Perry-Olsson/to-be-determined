export * from "./errors";

export interface ValidatorArray<T> {
  filter<U extends T>(pred: (a: T) => T): U[];
}
