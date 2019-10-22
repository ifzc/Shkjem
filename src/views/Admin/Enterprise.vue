<template>
  <div class="cases">
    <el-button type="primary" @click="openDialog()">新增数据</el-button>

    <el-table border :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column prop="Id" label="序号" width="180"></el-table-column>
      <el-table-column prop="Img" label="企业Logo">
        <template slot-scope="scope">
          <img style="width:200px" :src="imgserver+scope.row.Img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="Remark" label="企业名称" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="合作企业管理" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="企业Logo" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="http://shkjgw.shkjem.com/api/UpLoad/UploadImage"
            :headers="headers"
            :show-file-list="false"
            :on-success="handleSuccess"
          >
            <img v-if="formData.Img" :src="imgserver+formData.Img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="企业名称" :label-width="formLabelWidth">
          <el-input v-model="formData.Remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCreateOrModify()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      tableData: [],
      formData: {
        Id: 0,
        Img: "",
        Remark: "",
        CreateTime: new Date()
      },
      options: {},
      headers: {}
    };
  },
  mounted() {
    let token = "Browser " + sessionStorage.getItem("token");
    //window.console.log(token);
    this.options = {
      headers: {
        Authorization: token
      }
    };
    this.headers = {
      Authorization: token
    };
    this.loadData();
  },
  methods: {
    handleSuccess(response, file, fileList) {
      window.console.log(response, file, fileList);
      this.formData.Img = response;
    },
    loadData() {
      this.loading = true;
      this.$http
        .get("Enterprise/GetEnterpriseAll")
        .then(response => {
          window.console.log(response);
          this.tableData = response.data;
          this.loading = false;
        })
        .catch(e => {
          this.$message({
            message: "网络或程序异常！" + e,
            type: "error"
          });
        });
    },
    openDialog() {
      // 清除数据
      this.formData.Id = 0;
      this.formData.Img = "";
      this.formData.Remark = "";
      this.formData.CreateTime = new Date();

      this.dialogFormVisible = true;
    },
    // 新增
    handleCreateOrModify() {
      window.console.log(this.formData);
      //window.console.log(JSON.stringify(this.formData));
      if (!this.formData.Id) {
        // ID 无效时 视为新增
        this.loading = true;
        this.$http
          .post("Enterprise/CreateEnterprise", this.formData, this.options)
          .then(response => {
            this.loading = false;
            window.console.log(response);
            this.$message({
              message: "创建成功！",
              type: "success"
            });
            this.dialogFormVisible = false;
            this.loadData();
          })
          .catch(e => {
            this.$message({
              message: "网络或程序异常！" + e,
              type: "error"
            });
          });
      } else {
        this.loading = true;
        this.$http
          .post("Enterprise/ModifiedEnterprise", this.formData, this.options)
          .then(response => {
            this.loading = false;
            window.console.log(response);
            this.$message({
              message: "修改成功！",
              type: "success"
            });
            this.dialogFormVisible = false;
            this.loadData();
          })
          .catch(e => {
            this.$message({
              message: "网络或程序异常！" + e,
              type: "error"
            });
          });
      }
    },
    handleEdit(index, row) {
      window.console.log(index, row);
      this.formData = row;
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      window.console.log(index, row);
      this.$confirm("此操作将永久此条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 已确认删除
          // 调接口删除
          this.loading = true;
          this.$http
            .post(
              `Enterprise/DeleteEnterprise?id=${row.Id}`,
              null,
              this.options
            )
            .then(response => {
              this.loading = false;
              window.console.log(response);
              this.$message({
                message: "删除成功！",
                type: "success"
              });
              this.loadData();
            })
            .catch(e => {
              this.$message({
                message: "网络或程序异常！" + e,
                type: "error"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //时间格式化
    dateFormat: function(row) {
      //row 表示一行数据, CreateTime 表示要格式化的字段名称
      let t = new Date(row.CreateTime);
      return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    }
  }
};
</script>

<style scoped>
.el-table {
  margin-top: 20px;
}
</style>