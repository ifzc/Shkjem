<template >
  <div v-loading="loading">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名：">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="年龄：">
        <el-input v-model="formInline.age" label="年龄"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSelect" :loading="loading">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="sizes,prev, pager, next"
      :page-sizes="[5, 10, 15, 20]"
      :total="totalCount"
      :current-page="pageIndex"
      :page-size="pageSize"
      @current-change="currentChange"
      @size-change="sizeChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      pageIndex: 1,
      pageSize: 5,
      formInline: {
        name: "",
        age: ""
      },
      tableData: [],
      totalCount: 0
    };
  },
  mounted() {
    this.onSelect();
  },
  methods: {
    onSelect() {
      this.loading = true;
      this.$http
        .get(
          `https://localhost:5001/api/User/GetUsers?name=${this.formInline.name}&age=${this.formInline.age}&pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        )
        .then(response => {
          window.console.log(response);
          this.tableData = response.data.data;
          this.totalCount = response.data.totalCount;
          this.loading = false;
        })
        .catch(e => {
          this.$message({
            message: "网络或程序异常！" + e,
            type: "error"
          });
          this.loading = false;
        });
    },
    currentChange(val) {
      window.console.log(`当前页: ${val}`);
      this.pageIndex = val;
      this.onSelect();
    },
    sizeChange(val) {
      window.console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.onSelect();
    }
  }
};
</script>