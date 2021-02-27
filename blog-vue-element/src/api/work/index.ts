import { baseUrl, BaseApi } from '../base'

const url = '/api/work'
class CommentApi extends BaseApi{
  constructor(baseURL: string, url: string) {
    super(baseURL, url);

  }
}

export default new CommentApi(baseUrl.dev.platform, url);
