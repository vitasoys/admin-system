<template>
  <div id="login-view">
    <div class="login-content">
      <el-header class="header-login">用户登录</el-header>
      <el-form :label-position="labelPosition"
               label-width="80px"
               :model="formData">
        <el-form-item label="用户名">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" show-password></el-input>
        </el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {LoginData} from "../../network/login";

  export default {
    name: "Login",
    data() {
      return {
        labelPosition: 'top',
        formData: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      LoginData() {
        LoginData().then(res => {

        })
      }
    }
  }
</script>

<style scoped>
  #login-view {
    height: 100%;
    background-color: #ccc;
  }
  .login-content {
    padding: 10% 40%;
  }
  .header-login {
    font-size: 36px;
    font-weight: 700;
    color: #333;
  }
</style>
