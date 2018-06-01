<template>
    <div id="adminpecbox">
        <el-row style="margin-bottom: 10px">
            <el-button @click="createBtn" type="primary">新增</el-button>
        </el-row>
        <el-row>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed type="index" :index="index" label="序号" width="150" align="center">
                </el-table-column>
                <el-table-column prop="Title" label="招聘标题" width="220">
                </el-table-column>
                <el-table-column prop="Content" label="招聘内容">
                </el-table-column>
                <el-table-column prop="Type" label="招聘类别" width="300">
                    <template slot-scope="scope">
                        {{ scope.row.Type === 1 ? '研发类': scope.row.Type === 2 ? '服务类' : '营销类' }}
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
                <el-form-item label="招聘标题" :label-width="formLabelWidth">
                    <el-input v-model="form.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="招聘内容" :label-width="formLabelWidth">
                    <el-input type="textarea" :rows="5" v-model="form.content">
                    </el-input>
                </el-form-item>
                <el-form-item label="招聘类别" :label-width="formLabelWidth">
                    <el-select v-model="form.type" placeholder="请选择招聘类型">
                        <el-option label="研发类" value="1"></el-option>
                        <el-option label="服务类" value="2"></el-option>
                        <el-option label="营销类" value="3"></el-option>
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
                title: "",
                content: "",
                type: ""
            },
            formLabelWidth: "120px",
            tableData: [] //this.getdataall()
        };
    },
    methods: {
        handleClick (row) {
            console.log(row);
            this.dialogTitle = "修改招聘信息";
            this.form.id = row.Id;
            this.form.title = row.Title;
            this.form.type = row.Type;
            this.form.content = row.Content;
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
                        .post("/recruitment/DeleteRecruitment/" + row.Id, '', config)
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
            this.dialogTitle = "新增招聘信息";
            this.form.id = 0;
            this.form.title = "";
            this.form.content = "";
            this.form.type = "";
            this.dialogFormVisible = true;
        },
        createEntity () {
            axios
                .post("/recruitment/CreateofModified", {
                    Id: this.form.id,
                    Title: this.form.title,
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
                .get("/recruitment/GetRecruitmentAll", {
                    params: {
                        type: 0
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
