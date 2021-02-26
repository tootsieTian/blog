<template>
    <div class="admin">
        <el-row>
            <el-col :span="3">
                <Menu style="height: 100vh"></Menu>
            </el-col>
            <el-col :span="21">
                <router-view v-slot="{ Component }">
                    <component :is="Component"></component>
                </router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Dashboard from './dashboard/Index.vue'
  import Article from './article/Index.vue'
  import Menu from '@/layout/menu/Index.vue'
  export default defineComponent({
    name: "Admin",
    components: {
      Menu,
      Dashboard,
      Article
    },
    setup() {
      return {}
    }
  })


</script>

<style lang="scss" scoped>
.admin{
    width: 100vw;
    height: 100vh;
}
</style>
