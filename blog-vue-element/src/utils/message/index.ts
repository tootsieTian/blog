import { ElMessage } from 'element-plus'
/**
 * 消息提示执行方法
 * @param res：请求后返回的数据
 * @param func：请求成功后执行的方法
 */
export function msgFunc (res: any, func: any) {
  if(res.code===0){
    func()
  }else {
    //这里做提示操作
    ElMessage.error(res.error);
  }
}

export function msg (res: any) {
  if(res.code===0){
    ElMessage.success(res.msg)
  }else {
    //这里做提示操作
    ElMessage.error(res.error);
  }
}
