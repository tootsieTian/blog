<template>
    <div class="login">
        <div class="login-logo">
            <img src="@/assets/logo.png">
            <h2>blog Admin</h2>
        </div>
        <el-form>
            <el-form-item>
                <el-input
                        placeholder="请输入账号"
                        v-model="formData.username"
                        clearable>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                        placeholder="请输入密码"
                        v-model="formData.password"
                        show-password>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { msgFunc } from '@/utils/index'
  import api from '@/api/index'
  import { ElMessage } from "element-plus";
  import { useRouter } from "vue-router";

  export default defineComponent({
    name: "Login",
    setup() {
      const router = useRouter()
      const formData = reactive({
        username: "",
        password: ""
      })
      const login = () => {
        api.user.login(formData).then(res => {
          msgFunc(res, ()=> {
            ElMessage.success("登录成功！");
            // 将cookie存在本地
            localStorage.setItem("Authorization", res.data);
            router.push({ name:'Dashboard' })

          })
        })
      }
      return {
        formData,
        login
      }
    }
  })


</script>

<style lang="scss" scoped>
    .login {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: url("~@/assets/login.svg");

        .login-logo {
            display: flex;

            img {
                width: 50px;
                height: 50px;
            }

            h2 {
                margin-top: 10px;
                margin-left: 16px;
            }
        }
    }
    ::v-deep(.el-form) {
        width: 400px;

        .el-button {
            width: 100%;
        }
    }
</style>
