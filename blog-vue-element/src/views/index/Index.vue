<template>
    <div id="index">
        <div>
            <svg class="icon video" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
        </div>
        <h1 class="header-title">你好，我是tootsie</h1>
        <div>一名前端工程师</div>
        <div>欢迎来到我的个人博客</div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: "Index",
    setup() {
      return {}
    }
  })


</script>

<style lang="scss" scoped>
    #index{
        width: 100vw;
        height: 100vh;
        background: #3a4e61;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        div{
            color: #ced6e0;
            font-size: 30px;
            line-height: 40px;
            width: 100%;
            text-align: center;
        }
    }
    h1{
        margin: 0;
    }
    .icon{
        height: 180px;
        width: 180px;
        background: #345;
        transition: background 1s,box-shadow 1s;
        box-shadow: none;
        border-radius: 50%;
        margin-bottom: 3rem;
    }
    .icon:hover{
        transition: box-shadow 1s,background 1s;
        cursor: none;
        box-shadow: 0 0 45px #6fb1ff;
        background: #d2d2d2;
    }
    .header-title{
        font-size: 3rem;
        color: #ced6e0;
        transition: margin-top .3s;
        margin-top: 0;
        animation:show .9s linear;
    }
    @-webkit-keyframes show {
        0% {
            margin-top: 500px;
        }
        50% {
            margin-top: 250px;
        }
        100% {
            margin-top: 0;
        }
    }
</style>
