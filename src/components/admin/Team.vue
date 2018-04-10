<template>
<div id="adminnewsbox">
  <el-row style="margin-bottom: 10px">
    <el-button @click="createBtn" type="primary">新增</el-button>
  </el-row>
  <el-row>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="Id"
        label="#"
        width="100">
      </el-table-column>
      <el-table-column
        prop="Img"
        label="图片"
        width="220">
        <template slot-scope="scope" >
            <img style="width:100%" :src="scope.row.Img" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="Remark"
        label="备注">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit"></el-button>
          <el-button @click="deleteClick(scope.row)" type="danger" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
  <el-dialog v-bind:title="dialogTitle" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="风采图片" :label-width="formLabelWidth">
        <el-input v-model="form.img" auto-complete="off" disabled></el-input>
        <input accept="image/*" name="upimage" @change="gen_base64" id="upload_file" type="file">
      </el-form-item>
       <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input v-model="form.remark" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="createEntity">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script>
import axios from "../../router/http"
import { Message } from "element-ui"

export default {
  data() {
    return {
      dialogTitle: "",
      dialogFormVisible: false,
      form: {
        id: 0,
        img: "",
        remark: ""
      },
      formLabelWidth: "120px",
      tableData: []
    };
  },
  methods: {
    $_(id) {
      return document.getElementById(id)
    },
    gen_base64() {
      if (typeof FileReader == "undefined") {
        alert("你的浏览器不支持FileReader")
        return
      }
      var file = this.$_("upload_file").files[0]
      let r = new FileReader(); //本地预览
      r.onload = () => {
        //console.log(r.result)
        this.form.img = r.result
      }
      r.readAsDataURL(file) //Base64
    },
    handleClick(row) {
      console.log(row)
      this.dialogTitle = "修改团队风采"
      this.form.id = row.Id
      this.form.img = row.Img
      this.form.remark = row.Remark
      this.dialogFormVisible = true
    },
    deleteClick(row) {
      console.log(row);
      this.$confirm('删除"' + row.Title + '", 是否继续?', "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios.defaults.headers.common["Authorization"] =
            "BasicAuth " + localStorage.getItem("Ticket")
          axios
            .post("/team/DeleteTeam/" + row.Id)
            .then(response => {
              console.log(response.status)
              this.$message({
                type: "success",
                message: "删除成功!"
              })
              this.getdataall()
            })
            .catch(function(error) {
              console.log(error)
              this.$message({
                type: "info",
                message: "删除失败!"
              })
            })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    createBtn() {
      this.dialogTitle = "新增团队风采"
      this.form.id = 0
      this.form.img = ""
      this.form.remark = ""
      this.dialogFormVisible = true
    },
    createEntity() {
      axios.defaults.headers.common["Authorization"] =
        "BasicAuth " + localStorage.getItem("Ticket")
      axios
        .post("/team/CreatedofModied", {
          Id: this.form.id,
          Img: this.form.img,
          Remark: this.form.remark
        })
        .then(response => {
          console.log(response.status);
          this.$message({
            type: "success",
            message: "操作成功!"
          })
          this.getdataall()
        })
        .catch(function(error) {
          console.log(error)
        })
      this.dialogFormVisible = false
    },
    getdataall() {
      axios
        .get("/team/GetTeamAll")
        .then(response => {
          this.tableData = response.data;
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  },
  created: function() {
    this.getdataall()
  }
};
</script>
