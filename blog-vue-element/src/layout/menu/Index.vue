<template>
    <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="goUrl"
    >
        <el-menu-item v-for="(item, index) in menuList" :index="index+1" :key="index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'
  import { useRouter } from "vue-router";
  export default defineComponent({
    setup() {
      // 菜单后期放到后端进行动态管理
      const menuList = reactive([
        {
          title: '仪表盘',
          name: 'Dashboard',
          icon: 'el-icon-s-help',
        },
        {
          title: '文章管理',
          name: 'Article',
          icon: 'el-icon-tickets',
        }
      ])
      // const router = useRouter();
      const isCollapse = ref(false);
      const goUrl = (index: any, indexPath: any) => {
        console.log(index,indexPath)
      }
      return {
        isCollapse,
        goUrl,
        menuList,
      }
    }
  })

</script>

<style lang="scss" scoped>

</style>
