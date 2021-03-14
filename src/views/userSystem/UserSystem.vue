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
        <el-input placeholder="按照id精准搜索" v-model="queryID" class="input-with-select">
          <el-button @click="UserSearchId" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-input placeholder="按照姓名模糊搜索" v-model="queryName" class="input-with-select">
          <el-button @click="UserSearchName" slot="append" icon="el-icon-search"></el-button>
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
        label="创建时间">
        <template slot-scope="scope">
          {{scope.row.date | fmtdate}}
        </template>
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
<!--    @size-change 每页条数发生变化时触发
        @current-change 当前页改变时触发
        :current-page 设置当前页是第几页
        :page-sizes 每页显示多少条
        :page-size 第一次运行时显示多少条
        :total 总数
-->
    <el-pagination
      class="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[2, 5, 10, 20]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </el-card>
</template>

<script>
  import {UserInfo} from "../../network/user-info";
  import {UserSearchId} from "../../network/user-info";
  import {UserSearchName} from "../../network/user-info";

  export default {
    name: "UserSystem",
    data() {
      return {
        queryID: '', // 搜索ID
        queryName: '', // 搜索名字
        page: 1, // 页码
        pagenum: 2, // 每页的数据数量
        total: 0, // 总数
        tableData: [], // 数据
        value: true, // 开关
      }
    },
    created() {
      this.UserInfo() // 渲染用户以及分页数据
    },
    methods: {
      UserInfo() { // 渲染用户以及分页数据
        UserInfo(this.page,this.pagenum).then(res => {
          this.tableData = res.data.data
          this.total = res.data.total
        })
      },
      UserSearchId() { // 按照id搜索
        console.log(this.queryID)
        UserSearchId(this.queryID).then(res => {
          this.tableData = res.data.data
          this.total = res.data.total
        })
      },
      UserSearchName() { // 按照name搜索
        UserSearchName(this.queryName).then(res => {
          this.tableData = res.data.data
          this.total = res.data.total
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagenum = val
        this.page = 1
        this.UserInfo()

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page = val
        this.UserInfo()
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
  .page {
    margin: 20px 0;
  }
</style>
