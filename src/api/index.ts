import * as _apis from './apis';

export type { GetApiData, GetApiParam, GetApiResult } from './type';

type APIS = typeof _apis;

export const apis = Object.assign(Object(), _apis) as APIS;
