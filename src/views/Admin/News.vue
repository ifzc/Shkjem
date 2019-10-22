<template>
  <div class="news">
    <el-button type="primary" @click="openDialog()">新增</el-button>

    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="Id" label="序号" width="180"></el-table-column>
      <el-table-column prop="Title" label="新闻标题" width="180"></el-table-column>
      <el-table-column prop="Img" label="图片">
        <template slot-scope="scope">
          <img style="width:100%" :src="imgserver + scope.row.Img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="Content" label="新闻内容">
        <template slot-scope="scope">
          <p v-if="scope.row.Content.length > 100">{{scope.row.Content.substring(0,100)}} ...</p>
          <p v-else>{{scope.row.Content}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="Type" label="新闻类别">
        <template slot-scope="scope">{{scope.row.Type == 1 ? '公司新闻':'行业动态'}}</template>
      </el-table-column>
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
    <!--  -->
    <el-dialog title="新闻编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="新闻名称" :label-width="formLabelWidth">
          <el-input v-model="formData.Title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新闻图片" :label-width="formLabelWidth">
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
        <el-form-item label="新闻内容" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="10" v-model="formData.Content" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新闻类别" :label-width="formLabelWidth">
          <el-radio v-model="formData.Type" :label="1">公司新闻</el-radio>
          <el-radio v-model="formData.Type" :label="2">行业动态</el-radio>
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
  name: "loginNews",
  data() {
    return {
      options: {},
      headers: {},
      tableData: [],
      formData: {
        Id: 0,
        Title: "",
        Img: "",
        Type: 1,
        Content: "",
        CreateTime: new Date()
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      loading: true
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
        .get("News/GetNewsAll?type=0&num=10")
        .then(response => {
          // window.console.log(response);
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
      this.formData.Title = "";
      this.formData.Img = "";
      this.formData.Type = 1;
      this.formData.Content = "";
      this.formData.CreateTime = new Date();

      this.dialogFormVisible = true;
    },
    handleCreateOrModify() {
      if (!this.formData.Id) {
        this.loading = true;
        this.$http
          .post("News/CreateNews", this.formData, this.options)
          .then(response => {
            window.console.log(response);
            this.loading = false;
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
          .post("News/ModifiedNews", this.formData, this.options)
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
    //编辑
    handleEdit(index, row) {
      //index:第几行   row:这一行的数据
      window.console.log(index, row);
      this.formData = row;
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 已确认删除
          // 调接口删除
          this.loading = true;
          this.$http
            .post(`News/DeleteNews?id=${row.Id}`, null, this.options)
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
    }
  }
};
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
}
</style>