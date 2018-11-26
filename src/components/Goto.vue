<template lang="jade">
#goto
    .pagetop(style="background-image: url(./static/gotokejiantop.jpg)")
        h1 {{ pagetitle }}
    #conbox
        .jianjie
            h1 公司简介
            h2 ABOUT US
            p.one.ani-view.fade-in-left {{ showlang ? jianjiecn : jianjieen }}
                el-button(type="text",@click="showlang = !showlang",style="padding: 0;") 中文/English
            .topimgbox
                img(src="../../static/jianjietopmin.jpg",style="width: 100%")
            //- .titlestyle
                .colorbox
        .zaifenge
            i.el-icon-arrow-down
        el-row.fazhan
            el-col(:span='3')
                img(src='../../static/lc_l.png',style="width: 100%")
            el-col.fazhancon(:span='18')
                h1.ani-view.fade-in-up 发展历程
                h2.ani-view.fade-in-box DEVELOPMENT
                .hrstyle.ani-view.fade-in-down
                div
                  div.fishBoneDiv
            el-col(:span='3')
                img(src='../../static/lc_r.png',style="width: 100%")
        .wenhua 
            h1.ani-view.fade-in-box 企业文化
            h2.ani-view.fade-in-box CULTURE
            h1.ani-view.fade-in-box(style="margin-bottom:20px;") 我们只专注一件事情——工程项目管理
            h3.ani-view.fade-in-right 确保工程无重大安全事故
            h3.ani-view.fade-in-right 确保工程施工单位无大面积返工
            h3.ani-view.fade-in-right 确保工程材料及设备无伪劣产品
            h3.ani-view.fade-in-right 确保工程管理留下痕迹、实施过程可追溯
        .rongyu
            el-dialog(:title="dialogTitle",width="50%",style="",:visible.sync="dialogVisible")
                img(v-bind:src="dialogUrl",style="width:80%")
            h1.ani-view.fade-in-up 公司荣誉
            h2.ani-view.fade-in-down HONOR
            el-row.ani-view.fade-in-up(:gutter="20",style="width: 80%;margin: 0 auto;")
                el-col(v-for="item in honorimgs",:key="item.Id",:span="8")
                    img(v-bind:src="imgserver + item.Img",style="width:100%;margin-bottom: 20px;",@click="dialogVisible = true;dialogUrl = imgserver + item.Img;dialogTitle= item.Remark")
            h2(style="margin: 0;font-size: 16px;") 点击查看大图
        .tuandui
            h1.ani-view.fade-in-up 团队风采
            h2.ani-view.fade-in-down TEAM
            el-carousel(:interval="2000",type="card",height="400px")
                el-carousel-item(v-for="item in fencaiimgs",:key="item.Id")
                    img(v-bind:src="imgserver + item.Img",style="width:100%")
        .hezuo
            h1.ani-view.fade-in-up 合作伙伴
            h2.ani-view.fade-in-down RARTNERS
            el-row.ani-view.fade-in-up(:gutter="60")
                el-col(:span='4',v-for="item in enterprises",:key="item.Id")
                    img(:src="imgserver + item.Img",style="width:100%;border: solid 1px #c2daeb;")
                    p(style="margin: 0;") {{ item.Remark }}
</template>
<script>
import '../../static/js/jquery-1.8.3.min'
import '../../static/js/fishBone'
import '../../static/js/jquery.SuperSlide.2.1.1'
import axios from "../router/http";
export default {
    data () {
        return {
            showlang: true,
            jianjiecn: '',
            jianjieen: '',
            dialogVisible: false,
            dialogUrl: '',
            dialogTitle: '',
            pagetitle: '',
            fencaiimgs: [],
            honorimgs: [],
            enterprises: [{
                Img: '',
                Remark: ''
            }, {
                Img: '',
                Remark: ''
            }, {
                Img: '',
                Remark: ''
            }, {
                Img: '',
                Remark: ''
            }, {
                Img: '',
                Remark: ''
            }, {
                Img: '',
                Remark: ''
            }, {
                Img: '',
                Remark: ''
            }, {
                Img: '',
                Remark: ''
            }, {
                Img: '',
                Remark: ''
            }]
        };
    },
    mounted: function () {
        this.getdataall();
    },
    methods: {
        getdataall () {
            axios.all([
                axios
                    .get("/team/GetTeamAll"),
                axios
                    .get("/honor/GetHonorAll"),
                axios
                    .get("/course/GetCourseAll"),
                axios
                    .get("/enterprise/GetEnterpriseAll"),
                axios
                    .get("/DataDictionary/GetDataDictionaryAll", {
                        params: {
                            key: "走进科健标题,公司简介中文,公司简介英文"
                        }
                    })
            ])
                .then(axios.spread((a, b, c, e, d) => {
                    this.fencaiimgs = a.data;
                    this.honorimgs = b.data;
                    $(".fishBoneDiv").fishBone(c.data);
                    this.enterprises = e.data;
                    this.pagetitle = d.data[0].Content;
                    this.jianjiecn = d.data[1].Content;
                    this.jianjieen = d.data[2].Content;


                    for (let i = this.enterprises.length; i < 9; i++) {
                        this.enterprises.push({
                            Img: '',
                            Remark: ''
                        })
                    }
                }))
        }
    }
};
</script>

<style scoped>
@import "../../static/css/fishBone.css";
#goto {
  background-color: rgb(20, 103, 159);
}
#conbox {
  width: 85%;
  margin: 0 auto;
  background: #fff url(../../static/waitanbg.png) no-repeat bottom center;
}
.jianjie {
  position: relative;
  padding-top: 80px;
  z-index: 10;
}
.jianjie h1,
.jianjie h2,
.jianjie p {
  width: 50%;
  padding: 0 2%;
  font-weight: 400;
}
.jianjie h2 {
  margin-bottom: 20px;
  margin-top: 0;
}
.jianjie h1,
.jianjie h2 {
  margin-left: 6%;
  color: #e13834;
  font-family: "宋体";
}
.jianjie p.one {
  /* margin-top: 4%; */
  margin-left: 2%;
  color: #14679f;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  text-indent: 25px;
}
.topimgbox {
  width: 400px;
  height: 310px;
  padding: 20px;
  border: solid rgb(29, 66, 185) 2px;
  position: absolute;
  top: 20%;
  left: 59%;
  background: #fff;
  animation: imgboxkey 4s infinite;
  border-radius: 10px;
}
.topimgbox img {
  animation: imgbo 4s infinite;
  border-radius: 10px;
}
@keyframes imgbo {
  0% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 5px #ababab;
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
}
@keyframes imgboxkey {
  0% {
    border: solid rgb(29, 66, 185) 2px;
  }
  40% {
    border: solid rgb(255, 255, 255) 2px;
  }
  60% {
    border: solid rgb(255, 255, 255) 2px;
  }
  100% {
    border: solid rgb(29, 66, 185) 2px;
  }
}
.titlestyle {
  width: 130px;
  height: 80px;
  border: solid 2px rgba(107, 107, 107, 0.5);
  position: absolute;
  top: 21%;
  left: 27%;
}
.colorbox {
  width: 100%;
  height: 300px;
  background: rgb(26, 114, 185);
  position: absolute;
  top: 880px;
  z-index: 0;
}
.fazhan {
  padding-top: 12%;
  padding-bottom: 5%;
}
.fazhancon {
  text-align: center;
}
.fazhancon h1 {
  color: #3c6088;
  font-weight: 400;
}
.fazhancon h2 {
  color: #3c6088;
  font-weight: 400;
  margin: 20px 0;
}
.hrstyle {
  border-bottom: #3c6088 1px solid;
  height: 1px;
  width: 20%;
  margin: 0 auto;
}
.lichengtext .el-col p {
  padding: 10px;
  /* border: 1px #808080 solid; */
  /* border-radius: 5px; */
  background-color: #15669e;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  transition: 0.6s;
}
.lichengtext .el-col p:hover {
  background-color: #e13834;
}
.fenge {
  height: 1px;
  width: 80%;
  border-bottom: #3c6088 2px solid;
  margin: 0 auto;
  position: relative;
}
.fenge span {
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  border: #3c6088 2px solid;
  top: -5px;
}
.fenge span:nth-of-type(1) {
  left: 9%;
}
.fenge span:nth-of-type(2) {
  left: 17%;
}
.fenge span:nth-of-type(3) {
  left: 36%;
}
.fenge span:nth-of-type(4) {
  left: 63%;
}
.fenge span:nth-of-type(5) {
  left: 81%;
}
.fenge span:nth-of-type(6) {
  left: 89%;
}
.zaifenge {
  border-top: #3c6088 2px solid;
  margin-top: 40px;
  height: 10px;
  position: relative;
}
.zaifenge i {
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  line-height: 23px;
  font-weight: 600;
  border: #3c6088 2px solid;
  border-radius: 50%;
  background: rgb(238, 245, 251);
  left: 49%;
  color: #3c6088;
  font-size: 20px;
  top: -14px;
}
.jiegou {
  text-align: center;
  padding: 10%;
}
.jiegou h1,
.jiegou h2 {
  color: #3c6088;
  font-weight: 400;
}
.wenhua {
  background-color: rgb(194, 218, 235);
  padding: 5% 10%;
}
.wenhua h1,
.wenhua h2 {
  color: #3c6088;
  font-size: 26px;
  margin: 5px 0;
}
.wenhua h3 {
  font-weight: 400;
  line-height: 36px;
  font-size: 18px;
}
.rongyu {
  text-align: center;
  padding-bottom: 20px;
  padding: 5%;
}
.rongyu h1,
.rongyu h2 {
  color: #3c6088;
  font-weight: 400;
}
.rongyu h2 {
  margin-bottom: 20px;
}

.tuandui {
  padding: 5% 10%;
}
.tuandui h1,
.tuandui h2 {
  color: #3c6088;
  text-align: center;
  font-weight: 400;
}
.tuandui h2 {
  margin-bottom: 20px;
}
.hezuo {
  padding: 10%;
  padding-top: 0px;
}
.hezuo h1,
.hezuo h2 {
  color: #3c6088;
  text-align: center;
  font-weight: 400;
}
.hezuo h2 {
  margin-bottom: 20px;
}
.hezuo .el-row .el-col {
  padding: 1%;
}
.hezuo .el-row .el-col {
  text-align: center;
  font-size: 16px;
  line-height: 40px;
}
</style>
