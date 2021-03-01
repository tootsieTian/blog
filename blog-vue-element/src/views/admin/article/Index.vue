<template>
    <div class="app-container">
        <div class="app-container-header">
            <el-input placeholder="请输入标题"></el-input>
            <el-button type="primary">查找</el-button>
        </div>
        <div class="app-container-body">
            <div class="table-header">
                <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
                <el-button type="primary" @click="updateArticle">编辑</el-button>
                <el-button type="primary" @click="destroyArticle">删除</el-button>
            </div>
            <table-item :table-data="tableData"
                        :dialog-form-visible="dialogFormVisible"
                        @openForm="openForm"
                        @checkChange="checkChange"
                        :table-header="tableHeader"></table-item>
            <div class="table-footer">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="10">
                </el-pagination>
            </div>
        </div>
        <el-dialog title="添加数据" v-model="dialogFormVisible">
            <div>
                <div>
                    <label>标题:</label>
                    <el-input></el-input>
                </div>
                <div>
                    <label>内容:</label>
                    <el-input></el-input>
                </div>
            </div>
            <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import { TableItem } from '@/components/index'
  import '@/styles/admin/index.scss'
  import articleApi from "@/api/article/index";
  import { msgFunc } from '@/utils'
  import { ElMessage } from "element-plus";

  export default defineComponent({
    name: "Article",
    components: { TableItem },
    setup() {
      const dialogFormVisible = ref(false);
      const tableData = ref([{}]);  // 表格数据
      const checkData = ref([] as number[])
      const tableHeader = ref([{
          prop: 'id',
          label: 'id',
          width: '180'
        },
        {
          prop: 'title',
          label: '标题',
          width: '180'
        },
        {
          prop: 'content',
          label: '内容',
          width: ''
        },
        {
          prop: 'createtime',
          label: '创建时间',
          width: '180'
        }])

      /**
       * 获取列表数据
       **/
      const getArticleList = () => {
        articleApi.getRes({pageSize: 10, pageSum: 1})
          .then((res: any) => {
            msgFunc(res,() => {
              tableData.value = res.data.data
            })
          })
      };
      getArticleList();

      /**
       * 添加数据
       **/
      const setArticle = () => {
        // articleApi.setRes({title: '测试', content: '内容', ishot: 1})
        //   .then((res: any) => {
        //     console.log(res)
        //   })
      };

      /**
       * 更新数据
       **/
      const updateArticle = () => {
        articleApi.updateRes(4, {title: '测试id为1', content: '内容', ishot: 1}) // 添加评论
          .then((res: any) => {
            console.log(res)
          })
      }

      /**
       * 删除数据
       **/
      const destroyArticle = () => {
        articleApi.destroyRes(checkData.value)
          .then((res: any) => {
            msgFunc(res, ()=>{
              ElMessage.success("删除成功！")
              getArticleList()
            })
          })
      }

      /**
       * 打开表单
       * @param row：行内容
       * @param type：表单类型
       */
      const openForm = (row: any,type: string) => {
        console.log("父组件：",row)
        dialogFormVisible.value = true
      }

      /**
       * @param val：选中的数据
       */
      const checkChange = (val: Array<any>) => {
        checkData.value = val.map((item) => {
          return item.id
        })
      }

      const searchData = reactive([{}])
      return {
        tableData,
        tableHeader,
        dialogFormVisible,
        getArticleList,
        setArticle,
        checkChange,
        updateArticle,
        destroyArticle,
        openForm,
      }
    }
  })


</script>

<style lang="scss" scoped>

</style>
