import { ElMessage } from 'element-plus'
/**
 *
 * @param res：请求后返回的数据
 * @param func：请求成功后执行的方法
 */
export default (res: any, func: any) => {
  if(res.code===0){
    func()
  }else {
    //这里做提示操作
    ElMessage.error(res.error);
  }
}
