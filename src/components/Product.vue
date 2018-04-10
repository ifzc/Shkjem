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
            h4 系统结构
                span
            h4 应用范围
                span
            h4 管理优势
                span
        el-main
            h2 模式的不足
            img.imgbottom(src="/static/tobottom.png")
            el-row
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
            .imgsbox 
                img(src="/static/sanjiao0.png")
                img(src="/static/sanjiao1.png")
                img(src="/static/sanjiao2.png")
                img(src="/static/sanjiao3.png")
            h2 功能模块
            h2 MODULAR
            img.imgbottom(src="/static/tobottom.png")
            .gongnen(style="text-align: center;")
                img(src="/static/denpao.png",style="width: 60%;") 
            h2(style="margin-top: 80px") 系统结构
            h2 STRUCTURE
            img.imgbottom(src="/static/tobottom.png")
            .xitong
                img(src="/static/pro_xitong.png")
                p 1、导入项目信息、图纸、表格；建立用户账户、分配权限
                p 2、记录检查过程，在线填写表格，上传影像资料
                p 3、将检查的内容量化，输出统计吧报表
            el-row
                el-col(:span="8",style="text-align: right")
                    img(src="/static/server.png",style="width:60%")
                el-col.server(:span="14")
                    h2 服务器
                    h3 借助先进的云技术，拥有性价比与弹性；方便简易的数据备份和恢复机制与可选择加入的企业级防火墙模块，能有效的保障数据安全
            el-row(style="margin-top: 60px")
                el-col.server(:span="12",style="margin-left: 12%")
                    h2 移动端
                    h3 安卓智能手机加平板使用“账号+密码”登录的方式，通过4G或WIFI与服务器相连。每一个账号对应着各自的职能和角色以及参与的工程项目
                el-col(:span="8")
                    img(src="/static/moble.png",style="width:88%")
            el-row(style="margin-top: 80px")
                el-col(:span="8",:offset="2",style="text-align: right")
                    img(src="/static/pcmac.jpg",style="width:90%")
                el-col.server.noe(:span="12")
                    h2 后台管理端
                    h3 用户权限的分配、图纸、表格的导入均在后台端操作，并可进行数据的统计分析与报表的生成
            h2(style="margin-top: 130px") 应用范围
            h2 RANGE
            img.imgbottom(src="/static/tobottom.png")
            .fanwei
                img(src="/static/fanwei.png")
                h4 监事单位
                h4 政府监管部门
                h4 侦察单位
                h4 建设单位
                h4 设计单位
                h4 施工单位
            h2 管理优势
            h2 ADVANTAGE
            img.imgbottom(src="/static/tobottom.png")
            .youshi
                img(src="/static/ys_1.png")
                img(src="/static/ys_2.png")
                img(src="/static/ys_3.png")
                img(src="/static/ys_4.png")
                img(src="/static/ys_5.png")
                img(src="/static/ys_6.png")
            el-row(style="margin-top: 50px")
                el-col(:span="8",:offset="2")
                    img(src="/static/ys_bo_1.png",style="width:90%")
                el-col.bottomtext(:span="12")
                    h2 内控管理 | 掌握各项目风险
                    h3 通过平台软件，公司相关管理人员可查看各项目检查情况，实时动态了解项目当前存在的质量及安全问题，及时针对高风险项目进行技术指导。
            el-row(style="margin-top: 50px")
                el-col.bottomtext(:span="12",:offset="2")
                    h2 数据支撑|提升项目工作进度
                    h3 根据自动生成的统计报表，对出现质量和安全问题的部位进行有针对性的加强管理，总结经验，为今后同样工作提供事前预控和数据支撑
                el-col(:span="7",:offset="1")
                    img(src="/static/ys_bo_2.png",style="width:80%")
            el-row(style="margin-top: 50px")
                el-col(:span="8",:offset="2")
                    img(src="/static/ys_bo_3.png",style="width:70%")
                el-col.bottomtext(:span="12")
                    h2(style="margin-top: 60px") 业主服务|管理留下痕迹，方便业主随时查看
                    h3 所有检查数据均可实现永久保存，过程检查数据实时调用，数据统计可按时间区间选择，向业主提供分析报表
            el-row(style="margin-top: 50px,padding-bottom: 100px")
                el-col.bottomtext(:span="12",:offset="2")
                    h2(style="margin-top: 50px") 人工成本|实现工作量化、任务分配、降低人员成本
                    h3 后台确定工作量，项目主管每日分配检查人员根据工作任务检查，由按时工作转变成带着工作任务去检查，有效的提高工作效率，节约人工成本
                el-col(:span="7",:offset="1")
                    img(src="/static/ys_bo_4.png",style="width:90%")
</template>
<script>
export default {};
</script>
<style scoped>
.topimg {
  width: 100%;
}
.el-container {
  margin-top: -5px;
  background-image: url(/static/waitanbg.png);
  background-color: rgba(105, 200, 245, 0.2);
  background-repeat: no-repeat;
  background-position-y: 4900px;
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
  background-color: rgb(23, 103, 161);
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
  background-color: #fff;
  margin: 0 auto;
  margin-top: 20px;
  border: #c7c7c7 solid 2px;
}
.boxitem img {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}
.boxitem p {
  padding: 22px;
}

.imgsbox {
  position: relative;
  overflow: hidden;
  height: 650px;
  width: 1112px;
  margin: 0 auto;
  margin-top: 10px;
  transform: scale(0.8);
}
.imgsbox img {
  position: absolute;
}
.imgsbox img:nth-of-type(1) {
  top: 300px;
  left: 350px;
}
.imgsbox img:nth-of-type(2) {
  left: 350px;
}
.imgsbox img:nth-of-type(3) {
  top: 320px;
  left: 144px;
}
.imgsbox img:nth-of-type(4) {
  left: 557px;
  top: 320px;
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
