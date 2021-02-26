<template>
    <el-menu
            default-active="0"
            @select="goUrl"
            :background-color="menuStyle.backgroundColor"
            :text-color="menuStyle.textColor"
            :active-text-color="menuStyle.activeTextColor"
    >
        <el-menu-item v-for="(item, index) in menuList" :index="index" :key="index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'
  import { useRouter } from "vue-router";
  import router from "@/router";
  export default defineComponent({
    setup() {
      // 菜单后期放到后端进行动态管理
      const menuStyle = reactive({  //菜单样式
        backgroundColor: "#545c64",
        textColor: "#fff",
        activeTextColor: "#ffd04b",
      });
      const menuList = reactive([   // 菜单列表
        {
          title: '仪表盘',
          name: 'Dashboard',
          icon: 'el-icon-s-help',
        },
        {
          title: '文章管理',
          name: 'Article',
          icon: 'el-icon-tickets',
        },
        {
          title: '评论管理',
          name: 'Comment',
          icon: 'el-icon-chat-line-square',
        },
        {
          title: '作品管理',
          name: 'Work',
          icon: 'el-icon-s-promotion',
        },
      ])
      // const router = useRouter();
      const isCollapse = ref(false);
      const goUrl = (index: any, indexPath: any) => {
        router.push({name: menuList[index].name})
      }
      return {
        isCollapse,
        goUrl,
        menuList,
        menuStyle,
      }
    }
  })

</script>

<style lang="scss" scoped>

</style>
