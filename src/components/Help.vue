<template lang="jade">
#helpbox
    img(src="/static/helptop.jpg",style="width:100%")
    h1 留言板
    h4 MESSAGE
    el-form(:inline="true",:rules="rules",ref="formInline",:model="formInline",class="demo-form-inline")
        el-form-item(label="姓名",prop="name")
            el-input(v-model="formInline.name",placeholder="姓名")
        el-form-item(label="电话",prop="phone")
            el-input(v-model="formInline.phone",placeholder="电话")
        el-form-item(label="邮箱",prop="emali")
            el-input(v-model="formInline.emali",placeholder="邮箱")
        br
        el-form-item(label="留言",prop="content")
            el-input(type="textarea",v-model="formInline.content",style="width: 649px;")
        br
        el-form-item(style="margin-left: 350px;")
            el-button(type="primary",@click="onSubmit('formInline')") 发送
  </el-form-item>
</template>
<script>
import axios from "../router/http";
export default {
  data() {
    return {
      formInline: {
        name: "",
        phone: "",
        emali: "",
        content: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
        emali: [{ required: true, message: "请输入联系邮箱", trigger: "blur" }],
        content: [{ required: true, message: "请输入留言", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.createEntity();
          this.$refs[formName].resetFields();
        } else {
          this.$message({
            type: "error",
            message: "请检查填写要求"
          });
          return false;
        }
      });
    },
    createEntity() {
      axios
        .post("/message/CreateMessage", {
          Id: this.formInline.id,
          IsMess: true,
          Name: this.formInline.name,
          Phone: this.formInline.phone,
          Email: this.formInline.emali,
          Content: this.formInline.content
        })
        .then(response => {
          console.log(response.status);
          this.$message({
            type: "success",
            message: "留言成功!"
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
#helpbox {
  background-image: url(/static/waitanbg.png);
  background-color: rgba(105, 200, 245, 0.2);
  background-repeat: no-repeat;
  background-position-y: 00px;
}
h1,
h4 {
  color: #808080;
  text-align: center;
  font-weight: 400;
}
.el-form {
  width: 750px;
  margin: 0 auto;
  padding: 100px;
}
</style>
