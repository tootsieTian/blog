<template>
    <Menu></Menu>
    <router-view v-slot="{ Component }">
        <component :is="Component"></component>
    </router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Dashboard from './dashboard/Index.vue'
  import Menu from '@/layout/menu/Index.vue'
  export default defineComponent({
    name: "Admin",
    components: {
      Menu,
      Dashboard
    },
    setup() {
      return {}
    }
  })


</script>

<style lang="scss" scoped>

</style>
