<template lang="jade">
//- .fullpage-container
  .fullpage-wp(v-fullpage="opts")
#fullpage
    .section(style="background-image: url(/static/home_top.jpg)")
        h1.toptitle {{ hometitle }}
        h2.toptitlesub {{ hometitlesub }}
        h2.toptitleen(style="font-family:'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif") {{ hometitlesuben }}
        div.toptitleup(style="transform: scale(0.5)")
            div.mouse
        p.mousep 鼠标滚动
    .section(style="background-image: url(/static/home_do.jpg)")
        h2(style="font-weight: 400") 经典案例
        h3(style="font-weight: 400") Suecessful Cass
        el-row.newsbox.anli(:gutter="0",style="margin-top: 20px")
            el-col(:span="8")
                div.imgcss
                    img(v-bind:src="imgserver + tableDataan[0].Img")
                    p(style="width: 100%;height: 210px;",@click="$router.push({ path: '/anli' })")
                        span 查看详情
                        i.el-icon-caret-right
                div.divbox(style="background-color: #14679f;margin-top: 5px;")
                    p {{ tableDataan[0].Title }}
                    p {{ tableDataan[0].Content }}
            el-col(:span="8")
                div.divbox
                    p {{ tableDataan[1].Title }}
                    p {{ tableDataan[1].Content }}
                div.imgcss
                    img(v-bind:src="imgserver + tableDataan[1].Img")
                    p(style="width: 100%;height: 210px;",@click="$router.push({ path: '/anli' })")
                        span 查看详情
                        i.el-icon-caret-right
            el-col(:span="8")
                div.imgcss
                    img(v-bind:src="imgserver + tableDataan[2].Img")
                    p(style="width: 100%;height: 210px;",@click="$router.push({ path: '/anli' })")
                        span 查看详情
                        i.el-icon-caret-right
                div.divbox(style="background-color: #14679f;margin-top: 5px;")
                    p {{ tableDataan[2].Title }}
                    p {{ tableDataan[2].Content }}
        p.mousep 鼠标滚动
    .section(style="background-image: url(/static/home_anli.jpg)")
        h2(style="font-weight: 400") 最新资讯
        h3(style="font-weight: 400") Latest News
        el-row.newsbox(:gutter="0",style="margin-top: 20px")
            el-col(:span="6",:offset="3")
                div.imgcss
                    img(v-bind:src="imgserver + tableData[0].Img")
            el-col(:span="6")
                p {{ tableData[1].Title }}
                p {{ tableData[1].Content }}
                p {{ tableData[1].CreateTime.substring(0,10) }}
            el-col(:span="6")
                div.imgcss
                    img(v-bind:src="imgserver + tableData[2].Img")
        .bar-row
            span
            span
            span
        el-row.newsbox(:gutter="0")
            el-col(:span="6",:offset="3")
                p {{ tableData[0].Title }}
                p {{ tableData[0].Content }}
                p {{ tableData[0].CreateTime.substring(0,10) }}
            el-col(:span="6")
                div.imgcss
                    img(v-bind:src="imgserver + tableData[1].Img")
            el-col(:span="6")
                p {{ tableData[2].Title }}
                p {{ tableData[2].Content }}
                p {{ tableData[2].CreateTime.substring(0,10) }}
        p.mousep 鼠标滚动
</template>

<script>
import axios from "../router/http";

import "../../static/bli/jquery.fullPage.css";
import "../../static/bli/jquery-1.8.3.min.js";
import "../../static/bli/jquery.fullPage.min.js";

export default {
    name: "Home",
    data () {
        return {
            tableData: [
                {
                    Img: "",
                    Title: "",
                    Content: "",
                    CreateTime: ""
                },
                {
                    Img: "",
                    Title: "",
                    Content: "",
                    CreateTime: ""
                },
                {
                    Img: "",
                    Title: "",
                    Content: "",
                    CreateTime: ""
                }
            ],
            tableDataan: [
                {
                    Img: "",
                    Title: "",
                    Content: ""
                },
                {
                    Img: "",
                    Title: "",
                    Content: ""
                },
                {
                    Img: "",
                    Title: "",
                    Content: ""
                }
            ],
            hometitle: "",
            hometitlesub: "",
            hometitlesuben: ""
        };
    },
    mounted () {
        $("#fullpage").fullpage({
            //anchors: ['woc', 'anli', 'news'],
            //scrollingSpeed: 1000,
            loopBottom: true,
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['科健欢迎您', '经典案例', '新闻资讯'],
            // afterLoad: function (anchorLink, index) {
            // },
            // onLeave: function (index, nextIndex, direction) {
            // }
        })
    },
    methods: {
        getdataall () {

            this.findtext();
            axios
                .get("/news/GetNewsAll", {
                    params: {
                        type: 0,
                        num: 3
                    }
                })
                .then(response => {
                    this.tableData = response.data;
                    //console.log(this.tableData);
                })
                .catch(function (error) {
                    console.log(error);
                });

            axios
                .get("/cases/GetCasesAll")
                .then(response => {
                    this.tableDataan = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
        findtext () {
            axios
                .get("/DataDictionary/GetDataDictionaryAll", {
                    params: {
                        key: "首页主标题,首页副标题,首页副标题英文"
                    }
                })
                .then(response => {
                    this.hometitle = response.data[0].Content;
                    this.hometitlesub = response.data[1].Content;
                    this.hometitlesuben = response.data[2].Content;
                })
        }
    },
    created: function () {
        console.log("联系开发者: #Source https://github.com/Smileioc");
        this.getdataall();
    },
    destroyed: function () {
        $('#fullpage')
        document.querySelector('#fullpage').style.transition = 'unset'
        $.fn.fullpage.destroy('all');
    }
};
</script>

<style scoped>
.anliimgs {
  padding: 0 30%;
}

.anliimgs img {
  width: 40%;
  margin: 1% 1%;
}
.divbox {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  padding-top: 10px;
  background-color: #e13834;
}
.divbox {
  transition: 1s;
}
.divbox:hover {
  animation-name: bounce;
  animation-duration: 1s;
}
.divbox p {
  padding: 0px 10px;
}

.section {
  background-size: cover;
  background-position: center center;
  color: #fff;
  font-weight: 400;
  height: 100%;
  text-align: center;
  padding-top: 60px;
}
.anli {
  /* min-height: 300px; */
  width: 80%;
  margin: 0 auto;
  padding: 1% 4%;
  /* background-color: rgba(255, 255, 255, 0.2); */
}

.newsbox .el-col {
  padding: 10px;
  color: #dedddd;
}
.newsbox p {
  font-size: 14px;
}
.newsbox .el-col p:nth-of-type(3) {
  text-align: right;
}
.newsbox img {
  width: 100%;
  height: 210px;
}
.bar-row {
  border-bottom: 2px #fff solid;
  width: 80%;
  margin: 10px auto;
  position: relative;
}
.bar-row span {
  display: block;
  width: 25px;
  height: 25px;
  position: absolute;
  top: -12px;
  background-color: #fff;
  border-radius: 50%;
  float: left;
}
.bar-row span:nth-of-type(1) {
  left: 10%;
}
.bar-row span:nth-of-type(2) {
  left: 49%;
}
.bar-row span:nth-of-type(3) {
  right: 10%;
}

/* 动画效果 */

.imgcss {
  overflow: hidden;
  position: relative;
}
.imgcss:hover p {
  opacity: 1;
}
.imgcss p {
  margin: 0;
  width: 100%;
  height: 210px;
  background-color: rgba(0, 0, 0, 0.5);
  line-height: 210px;
  position: absolute;
  top: 0;
  opacity: 0;
  transition: 0.4s;
}

.imgcss img {
  transition: all 0.4s;
}

.imgcss img:hover {
  transform: scale(1.2);
}

.toptitle {
  animation-name: bounceInDown;
  animation-duration: 1s;
  /* animation-delay: 0.5s; */
  font-weight: 400;
}
.toptitlesub {
  animation-name: bounceInLeft;
  animation-duration: 1s;
  font-weight: 400;
}
.toptitleen {
  animation-name: bounceInRight;
  animation-duration: 1s;
  font-weight: 400;
}
.toptitleup {
  /* animation-name: bounceInUp;
  animation-duration: 1s; */

  transform: scale(0.5);
}
</style>

<!-- 提醒鼠标滚动动画 -->
<style scoped>
p.mousep {
  /* font-size: 30px; */
  font-weight: 300;

  /* margin-top: 50px; */
  font-family: "Microsoft YaHei", "Lantinghei SC", "Open Sans", Arial,
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", "SimSun", sans-serif;
  letter-spacing: 12px;
  text-indent: 12px;
  color: #ffffff;
  -webkit-animation: colorText 5s ease-out infinite,
    nudgeText 5s ease-out infinite;
  animation: colorText 5s ease-out infinite, nudgeText 5s ease-out infinite;
}

.mouse {
  margin: 0 auto;

  background: #4e5559 -webkit-linear-gradient(transparent 0%, transparent 50%, #ffffff
        50%, #ffffff 100%);
  background: #4e5559
    linear-gradient(transparent 0%, transparent 50%, #ffffff 50%, #ffffff 100%);
  position: relative;
  width: 52px;
  height: 88px;
  background-size: 100% 100%;
  border-radius: 100px;
  background-size: 225%;
  -webkit-animation: colorSlide 5s linear infinite,
    nudgeMouse 5s ease-out infinite;
  animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
}
.mouse:before,
.mouse:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.mouse:before {
  width: 46px;
  height: 82px;
  background-color: #222a30;
  border-radius: 100px;
}
.mouse:after {
  background-color: #ffffff;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  -webkit-animation: trackBallSlide 5s linear infinite;
  animation: trackBallSlide 5s linear infinite;
}

@-webkit-keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    background-color: #4e5559;
  }
  29.99% {
    background-color: #ffffff;
    background-position: 0% 0%;
  }
  30% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  51% {
    background-color: #4e5559;
  }
  59.99% {
    background-color: #ffffff;
    background-position: 0% 0%;
  }
  60% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  80% {
    background-position: 0% 0%;
  }
  81% {
    background-color: #4e5559;
  }
  89.99%,
  100% {
    background-color: #ffffff;
  }
}

@keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    background-color: #4e5559;
  }
  29.99% {
    background-color: #ffffff;
    background-position: 0% 0%;
  }
  30% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  51% {
    background-color: #4e5559;
  }
  59.99% {
    background-color: #ffffff;
    background-position: 0% 0%;
  }
  60% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  80% {
    background-position: 0% 0%;
  }
  81% {
    background-color: #4e5559;
  }
  89.99%,
  100% {
    background-color: #ffffff;
  }
}
@-webkit-keyframes trackBallSlide {
  0% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  6% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  14% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  15%,
  19% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  28%,
  29.99% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  30% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  36% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  44% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  45%,
  49% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  58%,
  59.99% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  66% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  74% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  75%,
  79% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  88%,
  100% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
}
@keyframes trackBallSlide {
  0% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  6% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  14% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  15%,
  19% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  28%,
  29.99% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  30% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  36% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  44% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  45%,
  49% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  58%,
  59.99% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  66% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  74% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  75%,
  79% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  88%,
  100% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
}
@-webkit-keyframes nudgeMouse {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  30% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  80% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes nudgeMouse {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  30% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  80% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes nudgeText {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  30% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  80% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes nudgeText {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  30% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  80% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes colorText {
  21% {
    color: rgba(255, 255, 255, 0);
  }
  30% {
    color: #ffffff;
  }
  51% {
    color: rgba(255, 255, 255, 0);
  }
  60% {
    color: #ffffff;
  }
  81% {
    color: rgba(255, 255, 255, 0);
  }
  90% {
    color: #ffffff;
  }
}
@keyframes colorText {
  21% {
    color: rgba(255, 255, 255, 0);
  }
  30% {
    color: #ffffff;
  }
  51% {
    color: rgba(255, 255, 255, 0);
  }
  60% {
    color: #ffffff;
  }
  81% {
    color: rgba(255, 255, 255, 0);
  }
  90% {
    color: #ffffff;
  }
}
</style>
