<template>
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
        <template v-for="(item, index) in tableHeader" :key="item.prop+index">
            <el-table-column
                    :prop="item.prop"
                    :label="item.label"
                    :width="item.width">
            </el-table-column>
        </template>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template #default="scope">
                <el-button @click="clickHandler(scope.row, 'view')" type="text" size="small">查看</el-button>
                <el-button @click="clickHandler(scope.row, 'edit')"  type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
  import { defineComponent, toRefs, computed } from 'vue'

  type typeForm = 'edit'| 'add'| 'view'

  export default defineComponent({
    name: "TableItem",
    props: {
      tableData: {
        type: Array,
        default: () => {
          return []
        }
      },
      tableHeader: {
        type: Array,
        default: () => {
          return []
        }
      },
      dialogFormVisible: {
        type: Boolean,
        default: () => {
          return false
        }
      }
    },
    emits: ['openForm', 'checkChange'],
    setup(props, content) {
      const { dialogFormVisible, tableHeader } = toRefs(props)
      console.log(tableHeader.value)
      const checkChange = (val: any) => {
        content.emit('checkChange', val)
      }
      const clickHandler = (row: any, type: typeForm) => {
        content.emit('openForm', row ,type)
      }
      return {
        checkChange,
        clickHandler
      }
    }
  })


</script>

<style lang="scss" scoped>

</style>
