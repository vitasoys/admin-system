<template>
  <el-container class="container">
    <el-header class="home-header">
      <el-row>
        <el-col :span="13" class="middle"><h2>后台管理系统</h2></el-col>
        <el-col :span="11" class="link">
          <el-button type="text" @click="open">退出登录</el-button>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside class="home-aside" width="200px">
        <el-menu
        :unique-opened=true>
<!--          1-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
              <el-menu-item index="1-1">
                <i class="el-icon-s-grid"></i>
                <span>用户列表</span>
              </el-menu-item>
          </el-submenu>
<!--          2-->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-2">
              <i class="el-icon-menu"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-menu"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>
<!--          3-->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-4">
              <i class="el-icon-menu"></i>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="1-5">
              <i class="el-icon-data-analysis"></i>
              <span>分类参数</span>
            </el-menu-item>
            <el-menu-item index="1-6">
              <i class="el-icon-s-order"></i>
              <span>商品分类</span>
            </el-menu-item>
          </el-submenu>
<!--          4-->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-claim"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-7">
              <i class="el-icon-menu"></i>
              <span>订单列表</span>
            </el-menu-item>
          </el-submenu>
<!--          5-->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-8">
              <i class="el-icon-document"></i>
              <span>数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main class="home-main"><h2>
        {{$store.state.result}}
      </h2></el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
      name: "Home",
      created() {
        if(this.$store.state.result != 'online') {
          this.$router.push({name: 'login'})
        }
      },
      methods: {
        Quit() {

        },
        open() {
          this.$confirm('此操作将退出登录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '退出成功!'
            });
            this.$store.commit({
              type: 'QuitState',
              State: 'offline'
            })
            this.$router.push({name: 'login'})
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }
      }
    }
</script>

<style scoped>
  .container {
    height: 100%;
  }
  .home-header {
    background-color: #b2bfd2;
  }
  .home-aside {
    background-color: #d3dce9;
  }
  .home-main {
    background-color: #e9eef5;
  }
  /*头部样式*/
  .home-header .middle {
    text-align: right;
    line-height: 60px;
  }
  .home-header .middle h2 {
    margin: 0;
    color: #333;
    font-size: 30px;
  }
  .home-header .link {
    text-align: right;
    line-height: 60px;
  }
</style>
