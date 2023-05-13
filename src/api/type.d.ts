type Api = (...args: any) => any;

export type GetApiParam<A extends Api> = A extends (args: infer R) => any ? R : any;
export type GetApiData<A extends Api> = ReturnType<A> extends Promise<infer D> ? D : any;
export type GetApiResult<R = any> = R extends { data: infer Data }
  ? R extends { pagination: infer Pag }
    ? Data & { _pagination: Pag }
    : Data
  : Data;
export interface ApiResult<T = any> {
  request_id: string;
  code: number;
  msg: string;
  data: T;
  pagination?: {
    cursor?: string;
    has_more: boolean;
    page: number;
    page_size: number;
    total?: number;
  };
}
