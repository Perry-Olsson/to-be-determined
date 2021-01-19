import {
  Connection,
  EntityManager,
  IDatabaseDriver,
  RequestContext,
} from "@mikro-orm/core";

export const getEntityManager = (): EntityManager<
  IDatabaseDriver<Connection>
> => {
  const em = RequestContext.getEntityManager();
  if (!em) throw new Error("Undefined entity manager context");
  return em;
};
