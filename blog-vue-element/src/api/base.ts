import { queryItem } from "@/utils/http/axios/types";
import Http from '@/utils/http/axios/http'

const baseUrl = {
  dev: {
    platform: "http://127.0.0.1:7001"
  }
}
export { baseUrl }
interface DataConfig {
  [index: string]: any;
}
export class BaseApi extends Http {
  /**
   * 构造函数
   * @param baseURL：域名
   * @param url：参数
   */
  constructor(baseURL: string, url: string) {
    super(baseURL);
    this.url = url;
  }
  url: string;

  /**
   * 获取数据
   * @param data：查询参数
   */
  getRes(data?: queryItem){ // 获取评论列表
    return this.getReq({
      url: this.url,
      query: data
    })
  }

  /**
   * 添加数据
   * @param data：数据内容
   */
  setRes(data: DataConfig){
    return this.postReq({
      url: this.url,
      data
    })
  }

  /**
   * 更新数据
   * @param id：数据id
   * @param data：数据内容
   */
  updateRes(id: number, data: DataConfig){
    return this.putReq({
      url: `${this.url}/${id}`,
      data
    })
  }

  /**
   * 删除数据
   * @param ids：数据id
   */
  destroyRes(ids: Array<number>){
    let urlParams = '';
    ids.forEach((item, index)=>{
      urlParams =`${urlParams},${item}`;
    })
    return this.deleteReq({
      url: `${this.url}/${urlParams}`
    })
  }
}
