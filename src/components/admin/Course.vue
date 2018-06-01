<template>
    <div id="adminpecbox">
        <el-row style="margin-bottom: 10px">
            <el-button @click="createBtn" type="primary">新增</el-button>
        </el-row>
        <el-row>
            <h4 style="color: rgb(255, 111, 111);margin: 0">页面将会按照年份展示前7项</h4>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed type="index" :index="index" label="序号" width="150" align="center">
                </el-table-column>
                <el-table-column prop="Year" label="历程年份" width="220">
                </el-table-column>
                <el-table-column prop="Content" label="历程内容">
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
                <el-form-item label="历程年份" :label-width="formLabelWidth">
                    <el-input v-model="form.year" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="历程内容" :label-width="formLabelWidth">
                    <el-input type="textarea" :rows="5" v-model="form.content">
                    </el-input>
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
                year: "",
                content: ""
            },
            formLabelWidth: "120px",
            tableData: [] //this.getdataall()
        };
    },
    methods: {
        handleClick (row) {
            console.log(row);
            this.dialogTitle = "修改发展历程信息";
            this.form.id = row.Id;
            this.form.year = row.Year;
            this.form.content = row.Content;
            this.dialogFormVisible = true;
        },
        deleteClick (row) {
            //console.log(row);
            this.$confirm('删除"' + row.Title + '", 是否继续?', "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    axios
                        .post("/course/DeleteCourse/" + row.Id, '', config)
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
            this.dialogTitle = "新增发展历程信息";
            this.form.id = 0;
            this.form.year = "";
            this.form.content = "";
            this.dialogFormVisible = true;
        },
        createEntity () {
            axios
                .post("/course/CreatedofModied", {
                    Id: this.form.id,
                    Year: this.form.year,
                    Content: this.form.content
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
                .get("/course/GetCourseAll", '', config)
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
