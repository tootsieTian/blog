<template>
    <div class="app-container">
        <div class="app-container-header">
            <el-input placeholder="请输入标题"></el-input>
            <el-button type="primary">查找</el-button>
        </div>
        <div class="app-container-body">
            <table-item :table-data="tableData"
                        :dialog-form-visible="dialogFormVisible"
                        @openForm="openForm"
                        @checkChange="checkChange"
                        :table-header="tableHeader"></table-item>
        </div>
        <el-dialog title="添加数据" v-model="dialogFormVisible">
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
  export default defineComponent({
    name: "Article",
    components: { TableItem },
    setup() {
      const dialogFormVisible = ref(false);
      const tableData = reactive([{
        id: '111',
        createtime: '2016-05-02',
        title: '王小虎',
        content: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '222',
        createtime: '2016-05-04',
        title: '王小虎',
        content: '上海市普陀区金沙江路 1517 弄'
      }]);
      const tableHeader = reactive([{
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
      const getArticleList = () => {
        articleApi.getRes({pageSize: 10, pageSum: 1}) // 获取评论列表
          .then((res: any) => {
            console.log(res)
          })
      };
      const setArticle = () => {
        articleApi.setRes({title: '测试', content: '内容', ishot: 1}) // 添加评论
          .then((res: any) => {
            console.log(res)
          })
      };
      const updateArticle = () => {
        articleApi.updateRes(4, {title: '测试id为1', content: '内容', ishot: 1}) // 添加评论
          .then((res: any) => {
            console.log(res)
          })
      }
      const destroyArticle = () => {

        articleApi.destroyRes([2])
          .then((res: any) => {
            console.log(res)
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

      const checkChange = (val: any) => {
        console.log(val)
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
