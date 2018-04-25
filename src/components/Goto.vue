<template lang="jade">
#goto
    .pagetop(style="background-image: url(/static/gotokejiantop.jpg)")
        h1 {{ pagetitle }}
    #conbox
        .jianjie
            h1(style="color: #e13834") 公司简介
            h2(style="color: #e13834;margin: 0;") ABOUT US
            p.one 科建简介上海科建成立于1995年，总部位于（台湾桃园市）科建管理顾问股份有限公司（成立于1987年），并在大陆有处分公司。上海科建通过国家认证认可监督管理委员会审批之合法咨询机构，大中华地区最早通过ISO9001验证的管理咨询公司；全世界第一家通过ISO14001验证的管理顾问公司，并在2008年通过ISO27001信息安全管理系统。科建的服务项目：ISO国际标准的辅导培训；企业经营管理辅导；系统的整合服务；教育训练。科建的资源：科建拥有完整的服务系统，流程管理。自主的顾问师系统（每位顾问师都有资深的实际授课经验）。自主的教材资料（拥有自主的课程研发系统）。科建特色：拥有多年的辅导经验，其中不乏国际著名企业至今保持良好合作。擅长多系统整合和一系统多厂整合，还是国内为数不多能辅导：CQT.CQE.CRE的辅导公司，并努力推行企业社会责任，环境体系（温室气体盘查也减量管理），企业节能等各个方面！科建立志于同企业共同成长，为企业合理资源，营造双赢的氛围！
            .topimgbox
                img(src="/static/jianjietopmin.jpg",style="width: 100%")
            //- .titlestyle
                .colorbox
        .zaifenge
            i.el-icon-arrow-down
        el-row.fazhan
            el-col(:span='3')
                img(src='/static/lc_l.png',style="width: 100%")
            el-col.fazhancon(:span='18')
                h1 发展历程
                h2 DEVELOPMENT
                .hrstyle
                el-row.lichengtext(:gutter="20")
                    el-col(:span="6",:offset="3")
                        p {{ courses[0].Content }}
                    el-col(:span="6")
                        p(style="background-color: #e13834;") {{ courses[1].Content }}
                    el-col(:span="6")
                        p {{ courses[2].Content }}
                .fenge
                    span
                    span
                    span
                    span
                    span
                    span
                    span
                el-row.lichengtext(:gutter="20")
                    el-col(:span="5",:offset="2")
                        p {{ courses[3].Content }}
                    el-col(:span="5")
                        p {{ courses[4].Content }}
                    el-col(:span="5")
                        p {{ courses[5].Content }}
                    el-col(:span="5")
                        p {{ courses[6].Content }}
            el-col(:span='3')
                img(src='/static/lc_r.png',style="width: 100%")
        .wenhua 
            h1 企业文化
            h2 CULTURE
            h1 我们只专注一件事情——工程项目管理
            h3 确保工程无重大安全事故
            h3 确保工程施工单位不返工
            h3 确保工程施工材料无伪劣品
            h3 确保工程管理留下痕迹、实施过程可追溯
        .rongyu
            h1 公司荣誉
            h2 HONOR
            el-row(:gutter="0")
                el-col(:span="6",:offset="3",style="padding: 1%")
                    img(v-bind:src="imgserver + honorimgs[0].Img",style="width:100%")
                el-col(:span="6",style="padding: 1%")
                    img(v-bind:src="imgserver + honorimgs[1].Img",style="width:100%")
                el-col(:span="6",style="padding: 1%")
                    img(v-bind:src="imgserver + honorimgs[2].Img",style="width:100%")
            el-row(:gutter="0")
                el-col(:span="6",:offset="3",style="padding: 1%")
                    img(v-bind:src="imgserver + honorimgs[3].Img",style="width:100%")
                el-col(:span="6",style="padding: 1%")
                    img(v-bind:src="imgserver + honorimgs[4].Img",style="width:100%")
                el-col(:span="6",style="padding: 1%")
                    img(v-bind:src="imgserver + honorimgs[5].Img",style="width:100%")
        .tuandui
            h1 团队风采
            h2 TEAM
            el-carousel(:interval="4000",type="card",height="400px")
                el-carousel-item(v-for="item in fencaiimgs",:key="item.Id")
                    img(v-bind:src="imgserver + item.Img",style="width:100%")
        .hezuo
            h1 合作伙伴
            h2 RARTNERS
            el-row(:gutter="20",style="width:100%")
                el-col(:span='4',:offset='2')
                    img(src="/static/hz_1.png",style="width:100%")
                el-col(:span='4')
                    img(src="/static/hz_2.png",style="width:100%")
                el-col(:span='4')
                    img(src="/static/hz_3.png",style="width:100%")
                el-col(:span='4')
                    img(src="/static/hz_4.png",style="width:100%")
                el-col(:span='4')
                    img(src="/static/hz_5.png",style="width:100%")
            el-row(:gutter="20",style="width:100%;margin-bottom: 60px")
                el-col(:span='4',:offset='4')
                    img(src="/static/hz_6.png",style="width:100%")
                el-col(:span='4')
                    img(src="/static/hz_7.png",style="width:100%")
                el-col(:span='4')
                    img(src="/static/hz_8.png",style="width:100%")
                el-col(:span='4')
                    img(src="/static/hz_9.png",style="width:100%")
</template>
<script>
import axios from "../router/http";
export default {
    data () {
        return {
            pagetitle: '',
            fencaiimgs: [],
            honorimgs: [
                {
                    Img: ""
                },
                {
                    Img: ""
                },
                {
                    Img: ""
                },
                {
                    Img: ""
                },
                {
                    Img: ""
                },
                {
                    Img: ""
                }
            ],
            courses: [
                {
                    Content: ""
                },
                {
                    Content: ""
                },
                {
                    Content: ""
                },
                {
                    Content: ""
                },
                {
                    Content: ""
                },
                {
                    Content: ""
                },
                {
                    Content: ""
                }
            ]
        };
    },
    methods: {
        getdataall () {
            axios
                .get("/team/GetTeamAll")
                .then(response => {
                    this.fencaiimgs = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            axios
                .get("/honor/GetHonorAll")
                .then(response => {
                    this.honorimgs = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            axios
                .get("/course/GetCourseAll")
                .then(response => {
                    this.courses = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });

            axios
                .get("/DataDictionary/GetDataDictionaryAll", {
                    params: {
                        key: "走进科健标题"
                    }
                })
                .then(response => {
                    this.pagetitle = response.data[0].Content;
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
<style scoped>
#goto {
  background-color: rgb(20, 103, 159);
}
#conbox {
  width: 85%;
  background: #fff;
  margin: 0 auto;
  background-image: url(/static/waitanbg.png);
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
  text-align: center;
  font-weight: 400;
}
.jianjie p.one {
  /* margin-top: 4%; */
  margin-left: 2%;
  color: #14679f;
  font-weight: 400;
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
  width: 20px;
  height: 20px;
  font-weight: 600;
  border: #3c6088 2px solid;
  border-radius: 50%;
  background: rgb(238, 245, 251);
  left: 49%;
  color: #3c6088;
  font-size: 20px;
  top: -10px;
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
}
.wenhua h3 {
  font-weight: 400;
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
.tuandui {
  padding: 5% 10%;
}
.tuandui h1,
.tuandui h2 {
  color: #3c6088;
  text-align: center;
  font-weight: 400;
}
.hezuo {
  padding: 10%;
}
.hezuo h1,
.hezuo h2 {
  color: #3c6088;
  text-align: center;
  font-weight: 400;
}
.hezuo .el-row .el-col {
  padding: 1%;
}
</style>
