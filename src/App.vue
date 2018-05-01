<template lang="jade">
#app
    el-menu(:default-active="$route.path" ,class="el-menu-demo",mode="horizontal",active-text-color="#409eff",v-bind:class="{ toppost : $route.path == '/' }" router)
        el-menu-item(index="",style="padding-left: 9%")
            img(src="static/toplogo.png",style="width: 280px")
        el-menu-item(index="/") 首页
        el-menu-item(index="/news") 新闻资讯
        el-menu-item(index="/product") 产品中心
        el-menu-item(index="/anli") 经典案例
        el-menu-item(index="/goto") 走进科建
        //- el-menu-item(index="/help") 帮助中心
        //- el-menu-item(index="/recruitment") 诚聘英才
        //- el-menu-item(index="/about") 联系我们
        //- el-menu-item(index="/study") 学习模块
        li.topdoli 
            a(v-bind:href="appurl",download="app") 下载APP
    transition(enter-active-class="animated")
        router-view
    .bottombox(v-if="$route.path != '/' && $route.path.substring(0,6) != '/admin'")
        ul(v-for="hrefs in hrefdata")
            li(v-for="item in hrefs")
                a(v-bind:href="item.href") {{ item.text }}
        img.bottomercode(src="../static/ercode.png")
</template>

<script>
import axios from "./router/http";

export default {
    name: "App",
    data () {
        return {
            appurl: '',
            transitionName: '',
            activeIndex: '/',
            hrefdata: [
                [
                    {
                        href: "#/goto",
                        text: "走进科建"
                    },
                    {
                        href: "#/goto",
                        text: "发展历程"
                    },
                    {
                        href: "#/goto",
                        text: "企业文化"
                    },
                    {
                        href: "#/goto",
                        text: "资质荣誉"
                    },
                    {
                        href: "#/goto",
                        text: "合作伙伴"
                    }
                ],
                [
                    {
                        href: "#/news",
                        text: "新闻资讯"
                    },
                    {
                        href: "#/news",
                        text: "公司新闻"
                    },
                    {
                        href: "#/news",
                        text: "行业动态"
                    }
                ],
                [
                    {
                        href: "#/product",
                        text: "产品中心"
                    }
                ],
                [
                    {
                        href: "#/anli",
                        text: "经典案例"
                    },
                    {
                        href: "#/recruitment",
                        text: "诚聘英才"
                    },
                    {
                        href: "#/study",
                        text: "学习模块"
                    }
                ],
                [
                    {
                        href: "#/help",
                        text: "帮助中心"
                    },
                    {
                        href: "#/about",
                        text: "联系我们"
                    }
                ],
                [

                    {
                        href: null,
                        text: ""
                    },
                    {
                        href: null,
                        text: ""
                    },
                    {
                        href: null,
                        text: ""
                    }
                ]
            ]
        };
    },
    created: function () {
        //console.log( this.$route.path.substring(0,6))
        //let actionpath =
        //console.log(this.$route.path)
        axios
            .get("/DataDictionary/GetDataDictionaryAll", {
                params: {
                    key: "邮箱,电话,地址,APP下载地址"
                }
            })
            .then(response => {
                this.hrefdata[5][0].text = "邮箱：" + response.data[0].Content
                this.hrefdata[5][1].text = "电话：" + response.data[1].Content
                this.hrefdata[5][2].text = "地址：" + response.data[2].Content
                this.appurl = response.data[3].Content
            })
    },
    methods: {
        handleSelect (key) {
            //, keyPath
            //if (key == "logo") {
            //    window.location = "http://www.smilef.cn";
            //}
            //this.$router.push(key);
        },
        ckdoli () {

        }
    }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
* {
  font-family: "Helvetica";
}
.pagetop {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center center;
}
.pagetop h1 {
  margin: 0;
  line-height: 500px;
  text-align: center;
  color: #fff;
  font-size: 45px;
  font-weight: 400;
}
</style>

<style scoped>
.toppost {
  position: absolute;
  z-index: 999;
  width: 100% !important;
}
.el-menu {
  border-bottom: none;
  width: 100%;
}
.el-menu-item a {
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
}
.bottombox {
  width: 100%;
  overflow: hidden;
  background-color: rgb(23, 103, 161);
}
.bottombox ul {
  float: left;
  list-style: none;
  margin-left: 3%;
  max-width: 230px;
}
.bottombox ul:nth-of-type(1) {
  margin-left: 5%;
}
.bottombox ul li a {
  text-decoration: none;
  color: #f7f7f7;
  font-weight: 300;
}
.bottombox ul li a:hover {
  color: #89d0f9;
}
.bottomercode {
  width: 100px;
  position: absolute;
  right: 10%;
  margin-top: 16px;
}
.topdoli {
  float: right;
  line-height: 60px;
  margin-right: 6%;
}
.topdoli a {
  text-decoration: none;
  color: #808080;
  font-weight: 300;
}
</style>