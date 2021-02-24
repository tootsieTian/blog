import Http from '@/utils/http/axios/http'
import base from '../base'
class Index extends Http {
  constructor(baseURL: string) {
    super(baseURL);
  }
  login(data: object){
    return this.postReq({
      url: '/api/login',
      data
    })
  }
}
export default new Index(base.dev.platform);
