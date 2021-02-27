import Http from '@/utils/http/axios/http'
import {baseUrl} from '../base'
class Index extends Http {
  constructor(baseURL: string) {
    super(baseURL);
  }
  login(data: any){
    return this.postReq({
      url: '/api/login',
      data
    })
  }
}
export default new Index(baseUrl.dev.platform);
