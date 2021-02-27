export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

/**
 * 参数信息
 * @pageSum: 第几页
 * @pageSize: 分页数量
 */
export interface queryItem {
  pageSum?: any;
  pageSize?: any;
  [index: string]: any,
}

/**
 * @url: 链接
 * @query: query参数
 */
export interface AxiosRequest {
  baseURL?: string;
  url: string;
  query?: queryItem,
  data?: any;
  params?: any;
  method?: Method;
  headers?: any;
  timeout?: number;
  responseType?: ResponseType;
}

export interface AxiosResponse {
  data: any;
  headers: any;
  request?: any;
  status: number;
  statusText: string;
  config: AxiosRequest;
}

export interface CustomResponse {
  readonly code: number;
  data?: any;
}

export interface GetDemo {
  id: number;
  str: string;
}

export interface PostDemo {
  id: number;
  list: Array<{
    id: number;
    version: number;
  }>;
}
