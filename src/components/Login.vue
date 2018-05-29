<template lang="jade">
el-card.box-card
    div.clearfix(slot="header")
        span 科建后台登录入口
        el-button(style="float: right; padding: 3px 0",type="text") 注册
    el-form(ref="form",:model="form",label-width="80px")
        el-form-item(label="AdminId")
            el-input(v-model="form.name")
        el-form-item(label="PassWord")
            el-input(type="password",v-model="form.passwrod")
        el-form-item
            el-button(type="primary",@click="onSubmit") 立即登录
</template>
<script>
import axios from "../router/http";
import { Message } from "element-ui";
export default {
    name: "Login",
    data () {
        return {
            form: {
                name: "",
                passwrod: ""
            }
        };
    },
    methods: {
        onSubmit () {
            axios
                .get("/user/login", {
                    params: {
                        strUser: this.form.name,
                        strPwd: this.form.passwrod
                    }
                })
                .then(response => {
                    if (response.data.bRes) {
                        sessionStorage.setItem("Ticket", response.data.Ticket)
                        axios.defaults.headers.common["Authorization"] =
                            "BasicAuth " + response.data.Ticket;
                        if (this.$route.query.length > 0) {
                            this.$router.push(this.$route.query.redirect);
                        } else {
                            this.$router.push("/admin/user");
                        }
                    } else {
                        Message.error({
                            message: "身份验证失败"
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
};
</script>
<style scoped>
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
  margin: 200px auto;
}
</style>
