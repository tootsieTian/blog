import instance from './instance';
import { AxiosRequest, CustomResponse } from './types';
class Http {
  // 外部传入的baseUrl
  protected baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  // 自定义header头
  protected headers: object = {
    ContentType: 'application/json;charset=UTF-8'
  }
  private apiAxios({ baseURL = this.baseURL, headers = this.headers, method, url, data, params, responseType }: AxiosRequest): Promise<CustomResponse> {
    if(localStorage.getItem('Authorization')) {
      headers.authorization = localStorage.getItem('Authorization');
    }
    return new Promise((resolve, reject) => {
      instance({
        baseURL,
        headers,
        method,
        url,
        params,
        data,
        responseType
      }).then((res) => {
        console.log( "所有数据", res)
        // 200:服务端业务处理正常结束
        if (res.status === 200) {
          if (res.data.success) {
            resolve(res.data);
          } else {
            resolve(res.data);
          }
        } else {
          resolve(res.data);
        }
      }).catch((err) => {
        const error = "请求失败"
        // eslint-disable-next-line
        reject({ code: 0, error });
      });
    });
  }

  /**
   * GET类型的网络请求
   */
  protected getReq({ baseURL, headers, url, data, params, responseType, query }: AxiosRequest) {
    if(query) {
      url = `${url}?`
          for(const key in query){
            url = `${url}&${key}=${query[key]}`
          }
    }
    return this.apiAxios({ baseURL, headers, method: 'GET', url, data, params, responseType });
  }

  /**
   * POST类型的网络请求
   */
  protected postReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
    return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType });
  }

  /**
   * PUT类型的网络请求
   */
  protected putReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
    return this.apiAxios({ baseURL, headers, method: 'PUT', url, data, params, responseType });
  }

  /**
   * DELETE类型的网络请求
   */
  protected deleteReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
    return this.apiAxios({ baseURL, headers, method: 'DELETE', url, data, params, responseType });
  }
}

export default Http;
