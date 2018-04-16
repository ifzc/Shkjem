<template lang="jade">
#about
  img(src="/static/abouttop.jpg",style='width:100%')
  #conbox
    h1 您的需求
    h3 BEQUIREMNT
    el-row.xuquibox
      el-col(:span='12')
        el-form(:inline="true",:rules="rules",ref="formInline",:model="formInline",label-width="80px",class="demo-form-inline")
          el-form-item(label="姓名",prop="name")
            el-input(v-model="formInline.name",placeholder="姓名")
          el-form-item(label="电话",prop="phone")
            el-input(v-model="formInline.phone",placeholder="电话")
          el-form-item(label="公司",prop="company")
            el-input(v-model="formInline.company",placeholder="公司")
          el-form-item(label="邮箱",prop="emali")
            el-input(v-model="formInline.emali",placeholder="邮箱")
          el-form-item(label="留言",prop="content")
            el-input(type="textarea",rows="4",v-model="formInline.content")
            el-button(type="primary",@click="onSubmit('formInline')",style="margin-top: 10px") 发送
      el-col(:span='12')
        img(src="/static/xuqui.jpg",style="width:100%;height: 369px")
    h1(style="margin-top: 100px") 我们的地址
    h3 ADDRESS
    el-row(style="padding: 5%")
      el-col(:span="14",:offset="1")
        img(src="/static/address.jpg",style="width:95%")
      el-col(:span="8")
        p 邮箱:Smileioc@163.com
        p 电话:182****2176
        p 传真:182****2176
        p 地址:上海市松花区新松江路909号丰源大厦16F
</template>
<script>
import axios from "../router/http";
export default {
  name: "About",
  data() {
    return {
      formInline: {
        name: "",
        phone: "",
        company: "",
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
        company: [
          { required: true, message: "请输入公司名称", trigger: "blur" }
        ],
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
          IsMess: false,
          Name: this.formInline.name,
          Phone: this.formInline.phone,
          Email: this.formInline.emali,
          Company: this.formInline.company,
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
#about {
  background-color: rgb(20, 103, 159);
}
#conbox{
  width: 85%;
  background-color: #fff;
  background-image: url(/static/waitanbg.png);
  margin: 0 auto;
      padding-top: 100px;
}
h1,
h3 {
  text-align: center;
  font-weight: 400;
  color: #1767a1;
}
p {
  color: #444444;
}
.xuquibox {
  border: 1px solid #1767a1;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}
</style>
