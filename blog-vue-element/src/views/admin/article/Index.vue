<template>
    <div class="app-container">
        <div class="app-container-header">
            <el-input placeholder="请输入标题"></el-input>
            <el-button type="primary">查找</el-button>
        </div>
        <div class="app-container-body">
            <div class="table-header">
                <el-button type="primary" @click="openForm('add')">添加</el-button>
                <el-button type="primary" @click="destroyArticle">删除</el-button>
            </div>
            <table-item :table-data="tableData"
                        :dialog-form-visible="dialogShow"
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
        <el-dialog title="添加数据" v-model="dialogShow">
            <el-form :model="formData">
                <el-form-item label="标题" :label-width="200">
                    <el-input v-model="formData.title" :disabled="DFooterShow" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="内容" :label-width="200">
                    <el-input type="textarea" v-model="formData.content" :disabled="DFooterShow" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer" v-if="!DFooterShow">
                  <el-button @click="dialogShow=false" >取 消</el-button>
                  <el-button type="primary" @click="confirm()">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import { TableItem } from '@/components/index'
  import '@/styles/admin/index.scss'
  import articleApi from "@/api/article/index"

  import { msgFunc } from '@/utils'
  import { ElMessage } from "element-plus";

  export default defineComponent({
    name: "Article",
    components: {
      TableItem
    },
    setup() {
      const DFooterShow = ref(false); // 弹窗按钮
      const dialogShow = ref(false);  // 弹窗控制
      const dialogType = ref("");  // 弹窗类型
      const tableData = ref([{}]);  // 表格数据
      const formData = reactive({
        title: "",
        content: "",
        createtime: ""
      }); // 表单数据
      const checkData = ref([] as number[]) // 选中数据
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

      const clearFormData = () => {
        formData.title = ""
        formData.content = ""
      }
      /**
       * 添加数据
       **/
      const setArticle = () => {
        articleApi.setRes(formData)
          .then((res: any) => {
            msgFunc(res, () => {
              dialogShow.value = false
              ElMessage.success("添加成功！")
              getArticleList()
              clearFormData()
            })
          })
      };

      /**
       * 更新数据
       **/
      const updateArticle = (row: any) => {
        articleApi.updateRes(row.id, row) // 添加评论
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

      const confirm = () => {
        if(dialogType.value === 'add'){

          setArticle()
        }else if(dialogType.value === 'edit'){
          updateArticle(formData)
        }
      }

      /**
       * 打开表单
       * @param row：行内容
       * @param type：表单类型
       */
      const openForm = (type: string, row?: any) => {
        dialogType.value = type
        dialogShow.value = true
        console.log(type, row)
        if(dialogType.value==='view'){
          DFooterShow.value = true
          formData.title = row.title
          formData.content = row.content
        }else if(dialogType.value==='edit'){
          DFooterShow.value = false
          formData.title = row.title
          formData.content = row.content
        }else if(dialogType.value==='add'){
          formData.title = ""
          formData.content = ""
        }
      }

      /**
       * @param val：选中的数据
       */
      const checkChange = (val: Array<any>) => {
        checkData.value = val.map((item) => {
          return item.id
        })
      }
      return {
        tableData,
        formData,
        tableHeader,
        DFooterShow,
        dialogShow,
        dialogType,
        getArticleList,
        setArticle,
        checkChange,
        updateArticle,
        destroyArticle,
        openForm,
        confirm
      }
    }
  })


</script>

<style lang="scss" scoped>

</style>
