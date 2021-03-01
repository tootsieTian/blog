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
                <el-button @click="clickHandler('view',scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="clickHandler('edit',scope.row)"  type="text" size="small">编辑</el-button>
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
      const { tableHeader } = toRefs(props)
      console.log(tableHeader.value)
      const checkChange = (val: any) => {
        content.emit('checkChange', val)
      }
      const clickHandler = (type: string, row: {}) => {
        content.emit('openForm', type, row)
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
