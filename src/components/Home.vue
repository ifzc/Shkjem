<template lang="jade">
//- .fullpage-container
  .fullpage-wp(v-fullpage="opts")
#fullpage
    .section(style="background-image: url(/static/home_top.jpg)")
        h1.toptitle {{ hometitle }}
        h2.toptitlesub {{ hometitlesub }}
        h2.toptitleen {{ hometitlesuben }}
        h5.toptitleup 点击进入下一页
    .section(style="background-image: url(/static/home_do.jpg)")
        h2 经典案例
        h3 Suecessful Cass
        el-row.newsbox.anli(:gutter="0",style="margin-top: 20px")
            el-col(:span="8")
                div.imgcss
                    img(v-bind:src="imgserver + tableDataan[0].Img")
                div.divbox(style="background-color: #14679f;margin-top: 5px;")
                    p {{ tableDataan[0].Title }}
                    p {{ tableDataan[0].Content }}
            el-col(:span="8")
                div.divbox
                    p {{ tableDataan[1].Title }}
                    p {{ tableDataan[1].Content }}
                div.imgcss
                    img(v-bind:src="imgserver + tableDataan[1].Img")
            el-col(:span="8")
                div.imgcss
                    img(v-bind:src="imgserver + tableDataan[2].Img")
                div.divbox(style="background-color: #14679f;margin-top: 5px;")
                    p {{ tableDataan[2].Title }}
                    p {{ tableDataan[2].Content }}
        h5 点击进入下一页
    .section(style="background-image: url(/static/home_anli.jpg)")
        h2 最新资讯
        h3 Latest News
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
        h5 点击回到顶部
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
            autoScrolling: false,
            loopBottom: true
        });
        $(".section").click(function () {
            $.fn.fullpage.moveSectionDown();

        });
    },
    methods: {
        getdataall () {
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
            this.findtext();

        },
        findtext () {
            axios
                .get("/DataDictionary/GetDataDictionaryAll", {
                    params: {
                        key: "首页主标题"
                    }
                })
                .then(response => {
                    this.hometitle = response.data[0].Content;
                    axios
                        .get("/DataDictionary/GetDataDictionaryAll", {
                            params: {
                                key: "首页副标题"
                            }
                        })
                        .then(response => {
                            this.hometitlesub = response.data[0].Content;
                            axios
                                .get("/DataDictionary/GetDataDictionaryAll", {
                                    params: {
                                        key: "首页副标题英文"
                                    }
                                })
                                .then(response => {
                                    this.hometitlesuben = response.data[0].Content;
                                })
                        })
                })
        }
    },
    created: function () {
        console.log("联系开发者: #Source https://github.com/Smileioc");
        this.getdataall();
    },
    destroyed: function () {
        //禁用滚动
        //$.fn.fullpage.setAllowScrolling(false)
        //$.fn.fullpage.destroy();
        //$.fn.fullpage.destroy('all');
        //$.fn.fullpage.setAllowScrolling()
        // moveSectionDown()
        //console.log("我已经离开了！");
    }
};
</script>

<style scoped>
/* .fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
} */
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
  background-size: 100% 100%;
  color: #fff;
  font-weight: 400;
  height: 100%;
  text-align: center;
}
.anli {
  /* min-height: 300px; */
  width: 80%;
  margin: 0 auto;
  padding: 4%;
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
}
.toptitlesub {
  animation-name: bounceInLeft;
  animation-duration: 1s;
}
.toptitleen {
  animation-name: bounceInRight;
  animation-duration: 1s;
}
.toptitleup {
  animation-name: bounceInUp;
  animation-duration: 1s;
}
</style>
