import { LoginResolver, MeResolver, RegisterResolver } from "../modules/user";

export const resolvers = [LoginResolver, MeResolver, RegisterResolver] as const;
