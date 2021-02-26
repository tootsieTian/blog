<template>
    <div class="app-container">
        <div class="app-container-header">
            <el-input placeholder="请输入评论内容"></el-input>
            <el-button type="primary" >查找</el-button>
        </div>
        <div class="app-container-body">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="id"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="用户ip"
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
  export default defineComponent({
    name: "comment",
    setup() {
      const tableData = reactive([{
        createtime: '2016-05-02',
        title: '王小虎',
        content: '上海市普陀区金沙江路 1518 弄'
      }, {
        createtime: '2016-05-04',
        title: '王小虎',
        content: '上海市普陀区金沙江路 1517 弄'
      }])
      return {
        tableData,
      }
    }
  })


</script>

<style lang="scss" scoped>

</style>
