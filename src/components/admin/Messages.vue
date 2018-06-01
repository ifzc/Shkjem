<template>
    <div id="adminpecbox">
        <el-row style="margin-bottom: 10px">
            <h3>留言板</h3>
        </el-row>
        <el-row>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed type="index" :index="index" label="序号" width="150" align="center">
                </el-table-column>
                <el-table-column prop="Name" label="姓名">
                </el-table-column>
                <el-table-column prop="Phone" label="电话">
                </el-table-column>
                <el-table-column prop="Email" label="邮箱">
                </el-table-column>
                <el-table-column prop="Content" label="留言内容">
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="deleteClick(scope.row)" type="danger" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
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
                content: ""
            },
            formLabelWidth: "120px",
            tableData: [] //this.getdataall()
        };
    },
    methods: {
        deleteClick (row) {
            console.log(row);
            this.$confirm('删除"' + row.Title + '", 是否继续?', "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    axios
                        .post("/message/DeleteMessage/" + row.Id, '', config)
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
        getdataall () {
            axios
                .get("/message/GetMessageAll", {
                    params: {
                        ismess: true
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
