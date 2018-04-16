<template lang="jade">
#porbox
    img.topimg(src="/static/pro_top.jpg")
    el-container
        el-aside(width="20%")
            h4.action 模式的不同
                span
            h4 平台目标
                span
            h4 功能模块
                span
        el-main
            h2 模式的不足
            img.imgbottom(src="/static/tobottom.png")
            el-row(style="padding: 6%;")
                el-col(:span="8")
                    .boxitem
                        img(src="/static/model1.png")
                        p 质量检查、安全检查以抽查为主、难免存在遗漏，留下安全隐患
                el-col(:span="8")
                    .boxitem
                        img(src="/static/model2.png")
                        p 数据统计、数据分析的缺失，无法为统计、分析、项目评估等工作提供数据支撑
                el-col(:span="8")
                    .boxitem
                        img(src="/static/model3.png")
                        p 检查工作和检查记录文件脱节，无法做到同步对应；缺少镜像文档，无法做到可追溯性
            h2(style="margin-top: 80px") 平台目标
            h2 TARGET
            img.imgbottom(src="/static/tobottom.png")
            img.imgsanjiao(src="/static/sanjiao.png")
            h2 功能模块
            h2 MODULAR
            img.imgbottom(src="/static/tobottom.png")
            .gongnen(style="text-align: center;")
                img(src="/static/denpao.png",style="width: 60%;margin: 50px 0;margin-left: -3%;") 
</template>
<script>
export default {};
</script>
<style scoped>
#porbox {
  background-color: #14679f;
}
.topimg {
  width: 100%;
}
.el-container {
  margin-top: -5px;
  background-image: url(/static/waitanbg.png);
  background-color: rgba(105, 200, 245, 0.2);
  background-repeat: no-repeat;
  background-position-y: 4900px;
  width: 85%;
  margin: 0 auto;
  background-color: #fff;
}
.el-aside {
  border-right: 2px #1866a0 solid;
}
.el-aside h4 {
  text-align: right;
  font-weight: 400;
  width: 50%;
  margin-left: 50%;
}
.el-aside h4 span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px #1866a0 solid;
  border-radius: 50%;
  position: relative;
  background-color: #fff;
  top: 3px;
  right: -8px;
  z-index: 9999;
}
.el-aside h4.action {
  background-color: rgb(225, 56, 52);
  border-radius: 10px 0px 0px 10px;
  color: #fff;
}
.el-main h2 {
  color: #1866a0;
  font-weight: 400;
  text-align: center;
}
.imgbottom {
  display: block;
  margin: 0 auto;
  width: 28px;
}
.boxitem {
  width: 250px;
  height: 250px;
  background-color: #15669e;
  margin: 0 auto;
  margin-top: 20px;
  border: #ffffff solid 2px;
  color: #fff;
}
.boxitem img {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}
.boxitem p {
  padding: 22px;
  font-size: 14px;
}

.imgsanjiao {
  width: 60%;
  display: block;
  margin: 40px auto;
}
.gongnen {
  text-align: center;
  margin-top: 10px;
}
.xitong {
  margin-top: 20px;
  position: relative;
  transform: scale(0.8);
}
.xitong p {
  position: absolute;
  width: 200px;
}
.xitong p:nth-of-type(1) {
  top: 278px;
  left: 813px;
}
.xitong p:nth-of-type(2) {
  top: 359px;
  left: 452px;
}
.xitong p:nth-of-type(3) {
  top: 292px;
  left: 67px;
}
.server {
  margin-left: 40px;
}
.server h2 {
  text-align: left;
  margin-top: 80px;
  font-size: 23px;
}
.server h3 {
  font-weight: 400;
}
.server.noe h2 {
  margin-top: 20px;
}
.server p {
  font-weight: 400;
}
.fanwei {
  position: relative;
  transform: scale(0.8);
}
.fanwei h4 {
  position: absolute;
  font-size: 28px;
  font-weight: 400;
  color: #fff;
}
.fanwei h4:nth-of-type(1) {
  top: 48px;
  left: 107px;
}
.fanwei h4:nth-of-type(2) {
  top: 200px;
  left: 20px;
}
.fanwei h4:nth-of-type(3) {
  top: 324px;
  left: 100px;
}
.fanwei h4:nth-of-type(4) {
  top: 46px;
  left: 885px;
}
.fanwei h4:nth-of-type(5) {
  top: 200px;
  left: 938px;
}
.fanwei h4:nth-of-type(6) {
  top: 328px;
  left: 885px;
}
.youshi {
  position: relative;
  height: 500px;
  transform: scale(0.8);
}
.youshi img {
  position: absolute;
}
.youshi img:nth-of-type(1) {
  left: 22px;
}
.youshi img:nth-of-type(2) {
  top: 300px;
  left: 100px;
}
.youshi img:nth-of-type(3) {
  left: 547px;
  top: 219px;
}
.youshi img:nth-of-type(4) {
  top: 64px;
  left: 251px;
}
.youshi img:nth-of-type(5) {
  top: 0;
  left: 547px;
}
.youshi img:nth-of-type(6) {
  top: 49px;
  left: 750px;
}
.bottomtext h2 {
  text-align: left;
  margin-top: 20px;
}
.bottomtext h3 {
  font-weight: 400;
}
</style>
