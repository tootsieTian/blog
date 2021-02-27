import { baseUrl, BaseApi } from '../base'

const url = '/api/article'
class ArticleApi extends BaseApi{
  constructor(baseURL: string, url: string) {
    super(baseURL, url);

  }
}

export default new ArticleApi(baseUrl.dev.platform, url);
