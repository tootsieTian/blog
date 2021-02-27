<template>
    <div class="app-container">
        <div class="app-container-header">
            <el-input placeholder="请输入标题"></el-input>
            <el-button type="primary" >查找</el-button>
        </div>
        <div class="app-container-body">
            <el-button type="primary" @click="setArticle">添加</el-button>
            <el-button type="primary" @click="updateArticle">编辑</el-button>
            <el-button type="primary" @click="destroyArticle">删除</el-button>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    @selection-change="checkChange"
            >
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="id"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="标题"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="content"
                        label="内容">
                </el-table-column>
                <el-table-column
                        prop="createtime"
                        label="创建时间">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template #default="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="primary" @click="openForm(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="table-footer">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="10">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import '@/styles/admin/index.scss'
  import articleApi from "@/api/article/index";
  export default defineComponent({
    name: "Article",
    setup() {
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
      }])

      const getArticleList = () => {
        articleApi.getRes({pageSize: 10, pageSum: 1}) // 获取评论列表
          .then((res: any) => {
            console.log(res)
          })
      }
      const setArticle = () => {
        articleApi.setRes({title: '测试', content: '内容', ishot: 1}) // 添加评论
          .then((res: any) => {
            console.log(res)
          })
      }
      const updateArticle = () => {
        articleApi.updateRes(4,{title: '测试id为1', content: '内容', ishot: 1}) // 添加评论
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
      const openForm = (row: any) => {
        console.log(row)
      }
      const checkChange = (val: any) => {
        console.log(val)
      }
      const searchData = reactive([{

      }])
      return {
        tableData,
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
