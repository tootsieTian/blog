import { baseUrl, baseApi } from '../base'

const url = '/api/comment'
class CommentApi extends baseApi{
  constructor(baseURL: string, url: string) {
    super(baseURL, url);

  }
}

export default new CommentApi(baseUrl.dev.platform, url);
