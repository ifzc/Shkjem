<template lang="jade">
el-container(v-if="islogin",style="height: 1000px; border: 1px solid #eee")
    el-aside(width="200px",style="background-color: rgb(238, 241, 246)")
        el-menu(:default-openeds="['3']",@select="handleSelect",:default-active="$route.path" )
            el-menu-item(index="/admin/user")
                template(slot="title")
                    i.el-icon-star-off 
                    span 后台用户管理
            el-menu-item(index="/admin/news")
                template(slot="title")
                    i.el-icon-news 
                    span 新闻咨询管理
            el-menu-item(index="/admin/recruitment")
                template(slot="title")
                    i.el-icon-document 
                    span 招聘信息管理
            el-menu-item(index="/admin/cases")
                template(slot="title")
                    i.el-icon-location-outline 
                    span 案例信息管理
            el-menu-item(index="/admin/team")
                template(slot="title")
                    i.el-icon-picture-outline 
                    span 团队风采管理
            el-menu-item(index="/admin/course")
                template(slot="title")
                    i.el-icon-time 
                    span 发展历程管理
            el-menu-item(index="/admin/study")
                template(slot="title")
                    i.el-icon-edit 
                    span 学习模块管理
            el-menu-item(index="/admin/enterprise")
                template(slot="title")
                    i.el-icon-edit-outline 
                    span 合作企业管理
            el-menu-item(index="/admin/honor")
                template(slot="title")
                    i.el-icon-edit-outline 
                    span 荣誉墙管理
            el-menu-item(index="/admin/dictionary")
                template(slot="title")
                    i.el-icon-setting 
                    span 数据字典管理
            el-submenu(index="3")
                template(slot="title")
                    i.el-icon-message 
                    span 留言中心
                el-menu-item(index="/admin/messages") 
                    span 留言板
                el-menu-item(index="/admin/demand") 
                    span 需求投递
    el-main
        router-view
</template>
<script>
export default {
    data () {
        const item = {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
        };
        return {
            tableData: Array(20).fill(item),
            islogin: true
        };
    },
    created: function () { },
    methods: {
        handleSelect (key) {
            this.$router.push(key);
        }
    }
};
</script>
<style scoped>
</style>
