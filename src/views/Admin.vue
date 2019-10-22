<template>
  <div class="admin">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item index="/admin/user">
            <i class="el-icon-star-off"></i>
            <span slot="title">后台用户管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/news">
            <i class="el-icon-news"></i>
            <span slot="title">新闻咨询管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/cases">
            <i class="el-icon-location-outline"></i>
            <span slot="title">案例信息管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/team">
            <i class="el-icon-picture-outline"></i>
            <span slot="title">团队风采管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/course">
            <i class="el-icon-time"></i>
            <span slot="title">发展历程管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/enterprise">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">合作企业管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/honor">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">荣誉墙管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/dictionary">
            <i class="el-icon-setting"></i>
            <span slot="title">数据字典管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/page">
            <i class="el-icon-setting"></i>
            <span slot="title">测试分页</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div class="base-padding">
            <router-view />
          </div>
        </el-main>
        <el-footer>2019@科建版权所有</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "admin"
};
</script>

<style lang="scss" soped>
.admin {
  border-top: 1px solid rgb(238, 238, 238);
}

.base-padding {
  padding: 20px;
}

.el-footer {
  line-height: 60px;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>