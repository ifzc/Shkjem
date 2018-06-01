<template>
    <div id="adminnewsbox">
        <el-row style="margin-bottom: 10px">
            <el-button @click="createBtn" type="primary">新增</el-button>
        </el-row>
        <el-row>
            <h4 style="color: rgb(255, 111, 111);margin: 0">请保留三条以上数据（首页需加载）</h4>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed type="index" :index="index" label="序号" width="150" align="center">
                </el-table-column>
                <el-table-column prop="Title" label="新闻标题">
                </el-table-column>
                <el-table-column prop="Img" label="图片" width="220">
                    <template slot-scope="scope">
                        <img style="width:100%" :src="imgserver + scope.row.Img" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="Content" label="新闻内容">
                </el-table-column>
                <el-table-column prop="Type" label="新闻类别">
                    <template slot-scope="scope">
                        {{ scope.row.Type === 1 ? '公司新闻':'行业动态' }}
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit"></el-button>
                        <el-button @click="deleteClick(scope.row)" type="danger" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-dialog v-bind:title="dialogTitle" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="新闻名称" :label-width="formLabelWidth">
                    <el-input v-model="form.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新闻图片" :label-width="formLabelWidth">
                    <el-input v-model="form.img" auto-complete="off" disabled></el-input>
                    <input accept="image/*" name="upimage" @change="upload" id="upload_file" type="file">
                </el-form-item>
                <el-form-item label="新闻内容" :label-width="formLabelWidth">
                    <el-input type="textarea" :rows="5" v-model="form.content">
                    </el-input>
                </el-form-item>
                <el-form-item label="新闻类别" :label-width="formLabelWidth">
                    <el-select v-model="form.type" placeholder="请选择新闻类型">
                        <el-option label="公司新闻" value="1"></el-option>
                        <el-option label="行业动态" value="2"></el-option>
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
import "../../../static/bli/jquery-1.8.3.min.js";
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
                title: "",
                img: "",
                content: "",
                type: ""
            },
            formLabelWidth: "120px",
            tableData: []
        };
    },
    methods: {
        upload (e) {
            let file = e.target.files[0];
            //创建form对象
            let param = new FormData();
            //通过append向form对象添加数据
            param.append("file", file, file.name);
            //添加form表单中其他数据
            //param.append("chunk", "0")
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            //console.log(param.get("file"))
            //添加请求头
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: "BasicAuth " + sessionStorage.getItem("Ticket")
                }
            };
            console.log(config)
            //axios.defaults.headers.common["Authorization"] =
            //  "BasicAuth " + localStorage.getItem("Ticket");
            axios.post("/UpLoad/UploadImage", param, config).then(response => {
                //console.log(response.data)
                this.form.img = response.data;
            });
        },
        handleClick (row) {
            console.log(row);
            this.dialogTitle = "修改新闻";
            this.form.id = row.Id;
            this.form.title = row.Title;
            this.form.img = row.Img;
            this.form.content = row.Content;
            this.form.type = row.Type;
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
                        .post("/news/DeleteNews/" + row.Id, '', config)
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
            this.form.title = "";
            this.form.img = "";
            this.form.content = "";
            this.form.type = "";
            this.dialogFormVisible = true;
        },
        createEntity () {
            let config = {
                headers: {
                    Authorization: "BasicAuth " + sessionStorage.getItem("Ticket")
                }
            };
            axios
                .post("/news/CreatedofModied", {
                    Id: this.form.id,
                    Title: this.form.title,
                    Img: this.form.img,
                    Content: this.form.content,
                    Type: this.form.type
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
                .get("/news/GetNewsAll", {
                    params: {
                        type: 0,
                        num: 12
                    }
                }, config)
                .then(response => {
                    this.tableData = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created: function () {
        this.getdataall();
    }
};
</script>
