<template>
  <el-card class="box-card">
<!--    面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

<!--    搜索框-->
    <el-row class="user-search">
      <el-col>
        <el-input placeholder="请输入内容" v-model="query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success">添加用户</el-button>
      </el-col>
    </el-row>

<!--    表格-->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="#"
        width="60">
      </el-table-column>

      <el-table-column
        prop="username"
        label="姓名"
        width="80">
      </el-table-column>

      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>

      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>

      <el-table-column
        prop="date"
        label="创建时间">
        {{data | fmtdate}}
      </el-table-column>

      <el-table-column
        label="用户状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.state"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>

      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
          <el-button plain type="primary" icon="el-icon-edit" circle></el-button>
          <el-button plain type="success" icon="el-icon-check" circle></el-button>
          <el-button plain type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>

    </el-table>
<!--    分页-->
  </el-card>
</template>

<script>
  import {UserInfo} from "../../network/user-info";

  export default {
    name: "UserSystem",
    data() {
      return {
        query: '',
        page: 1,
        pagenum: 10,
        tableData: [],
        value: true,
      }
    },
    created() {
      this.UserInfo() // 渲染用户以及分页数据
    },
    methods: {
      UserInfo() { // 渲染用户以及分页数据
        UserInfo(this.page,this.pagenum).then(res => {
          this.tableData = res.data.data
        })
      }
    }
  }
</script>

<style scoped>
  .user-search {
    margin: 20px;
  }
  .input-with-select {
    width: 300px;
  }
</style>
