<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>科建后台登录入口</span>
      </div>
      <div>
        <el-form
          class="demo-ruleForm"
          ref="lform"
          :model="loginform"
          :rules="rules"
          label-width="80px"
        >
          <el-form-item label="用户名" prop="name">
            <el-input name="name" v-model="loginform.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input name="password" type="password" v-model="loginform.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="text">
              <router-link to="/">回到首页</router-link>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      loginform: {
        name: "",
        pass: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 20,
            message: "密码长度在 5 到 20 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.lform.validate(valid => {
        if (valid) {
          this.$http
            .get(
              `User/Login?strUser=${this.loginform.name}&strPwd=${this.loginform.pass}`
            )
            .then(response => {
              window.console.log(response);
              if (response.data.bRes) {
                this.$message({
                  message: "登录成功了呢",
                  type: "success"
                });
                sessionStorage.setItem("token", response.data.Ticket);
                this.$router.push({ name: "admin" });
              } else {
                this.$message({
                  message: "账号或密码错误",
                  type: "error"
                });
              }
            })
            .catch(e => {
              this.$message({
                message: "网络或程序异常！" + e,
                type: "error"
              });
            });
        } else {
          this.$message({
            message: "请输入合法的值",
            type: "error"
          });
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #409eff;
}

.login {
  //display: flex;
  padding: 200px 0;
  width: 100%;
  height: 100%;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: 0 auto;
}
.el-form-item__content {
  text-align: start;
}
</style>