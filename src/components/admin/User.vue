<template>
    <div id="adminnewsbox">
        <el-row style="margin-bottom: 10px">
            <el-button @click="createBtn" type="primary">新增</el-button>
            <!-- <el-button @click="cleanBtn" type="warning">清除浏览器缓存</el-button> -->
            <el-button @click="cleanuserBtn" type="danger">清除用户身份票据</el-button>
        </el-row>
        <el-row>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed type="index" :index="index" label="序号" width="150" align="center">
                </el-table-column>
                <el-table-column prop="LoginName" label="登录名">
                </el-table-column>
                <el-table-column prop="Password" label="密码">
                </el-table-column>
                <el-table-column prop="IsAction" label="是否激活">
                    <template slot-scope="scope">
                        {{ scope.row.IsAction ? '是':'否' }}
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit"></el-button>
                        <el-button @click="deleteClick(scope.row)" type="danger" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-dialog v-bind:title="dialogTitle" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.loginName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否启用" :label-width="formLabelWidth">
                    <el-select v-model="form.isAction" placeholder="请选择新闻类型">
                        <el-option label="启用" value="true"></el-option>
                        <el-option label="禁用" value="false"></el-option>
                    </el-select>
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
import axios from "../../router/http";
import { Message } from "element-ui";
let config = {
    headers: {
        Authorization: "BasicAuth " + sessionStorage.getItem("Ticket")
    }
};
export default {
    data () {
        return {
            dialogTitle: "",
            dialogFormVisible: false,
            form: {
                id: 0,
                loginName: "",
                password: "",
                isAction: ""
            },
            formLabelWidth: "120px",
            tableData: [] //this.getdataall()
        };
    },
    methods: {
        $_ (id) {
            return document.getElementById(id);
        },
        gen_base64 () {
            //判断浏览器是否支持FileRader接口
            if (typeof FileReader == "undefined") {
                alert("你的浏览器不支持FileReader");
                //fileInput.setAttribute('disabled', 'disabled')
                return;
            }
            var file = this.$_("upload_file").files[0];
            let r = new FileReader(); //本地预览
            r.onload = () => {
                //console.log(r.result)
                this.form.img = r.result;
            };
            r.readAsDataURL(file); //Base64
        },
        handleClick (row) {
            console.log(row);
            this.dialogTitle = "修改新闻";
            this.form.id = row.Id;
            this.form.loginName = row.LoginName;
            this.form.password = row.Password;
            this.form.isAction = row.IsAction;

            this.dialogFormVisible = true;
        },
        deleteClick (row) {
            console.log(row);
            this.$confirm('删除"' + row.Title + '", 是否继续?', "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    axios
                        .post("/user/DeleteUser/" + row.Id, '', config)
                        .then(response => {
                            console.log(response.status);
                            this.$message({
                                type: "success",
                                message: "删除成功!"
                            });
                            this.getdataall();
                        })
                        .catch(function (error) {
                            console.log(error);
                            this.$message({
                                type: "info",
                                message: "删除失败!"
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
        createBtn () {
            this.dialogTitle = "新增新闻";
            this.form.id = 0;
            this.form.loginName = "";
            this.form.password = "";
            this.form.isAction = true;

            this.dialogFormVisible = true;
        },
        createEntity () {
            axios
                .post("/user/CreateofModified", {
                    Id: this.form.id,
                    LoginName: this.form.loginName,
                    Password: this.form.password,
                    IsAction: this.form.isAction
                }, config)
                .then(response => {
                    console.log(response.status);
                    this.$message({
                        type: "success",
                        message: "操作成功!"
                    });
                    this.getdataall();
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.dialogFormVisible = false;
        },
        getdataall () {
            axios
                .post("/user/GetUserAll", '', config)
                .then(response => {
                    this.tableData = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        cleanBtn () {
            sessionStorage.clear();
        },
        cleanuserBtn () {
            sessionStorage.clear();
            this.$router.push("/login");
        }
    },
    created: function () {
        this.getdataall();
    }
};
</script>
