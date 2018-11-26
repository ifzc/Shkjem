<template lang="jade">
#app
    el-menu(:default-active="$route.path" style="min-width:1320px;" ,class="el-menu-demo",mode="horizontal",active-text-color="#409eff",v-bind:class="{ toppost : $route.path == '/' }" router)
        el-menu-item(index="",style="padding-left: 3%")
            img(src="static/toplogo.png",style="width: 280px")
        el-menu-item(index="/",style="margin-left:23%") 首页
        el-menu-item(index="/news") 新闻资讯
        el-menu-item(index="/product") 产品中心
        el-menu-item(index="/anli") 经典案例
        el-menu-item(index="/goto") 走进科建
        //- el-menu-item(index="/help") 帮助中心
        //- el-menu-item(index="/recruitment") 诚聘英才
        //- el-menu-item(index="/about") 联系我们
        //- el-menu-item(index="/study") 学习模块
        el-menu-item(index="/appDownload") 下载APP
    transition(enter-active-class="animated")
        router-view
    .bottombox(v-if="$route.path != '/' && $route.path.substring(0,6) != '/admin'")
        ul(v-for="hrefs in hrefdata")
            li(v-for="item in hrefs")
                router-link(:to="item.href == null ? '#' : item.href") {{ item.text }}
        img.bottomercode(src="../static/ercode.png")
      div.copyright 科建版权所有
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
                        href: "/goto",
                        text: "走进科建"
                    },
                    {
                        href: "/goto",
                        text: "发展历程"
                    },
                    {
                        href: "/goto",
                        text: "企业文化"
                    },
                    {
                        href: "/goto",
                        text: "资质荣誉"
                    },
                    {
                        href: "/goto",
                        text: "合作伙伴"
                    }
                ],
                [
                    {
                        href: "/news",
                        text: "新闻资讯"
                    },
                    {
                        href: "/news",
                        text: "公司新闻"
                    },
                    {
                        href: "/news",
                        text: "行业动态"
                    }
                ],
                [
                    {
                        href: "/product",
                        text: "产品中心"
                    }
                ],
                [
                    {
                        href: "/anli",
                        text: "经典案例"
                    },
                    {
                        href: "/recruitment",
                        text: "诚聘英才"
                    },
                    {
                        href: "/study",
                        text: "学习模块"
                    }
                ],
                [
                    {
                        href: "/help",
                        text: "帮助中心"
                    },
                    {
                        href: "/about",
                        text: "联系我们"
                    }
                ],
                [
                    {
                        href: '/about',
                        text: ""
                    },
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
        axios
            .get("/DataDictionary/GetDataDictionaryAll", {
                params: {
                    key: "邮箱,电话,地址,APP下载地址"
                }
            })
            .then(response => {
                this.hrefdata[5][0].text = "联系我们"
                this.hrefdata[5][1].text = "邮箱：" + response.data[0].Content
                this.hrefdata[5][2].text = "电话：" + response.data[1].Content
                this.hrefdata[5][3].text = "地址：" + response.data[2].Content
                this.appurl = response.data[3].Content
            })

    }
};
</script>

<style lang="less">
@import "./../static/css/public.min.css";
body {
  padding: 0;
  margin: 0;
}
html,
body,
div,
span,
iframe,
blockquote,
pre,
a,
address,
big,
cite,
code,
del,
em,
font,
img,
ins,
small,
strong,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend {
  margin: 0;
  padding: 0;
}
html,
body,
div,
p,
a,
h1,
h2,
h3,
h4,
h5,
li,
ol,
ul,
strong,
span {
  font-family: "微软雅黑";
}
li,
ol,
ul {
  list-style: none outside;
}
:focus {
  outline: 0;
}
a img {
  border: 0;
}
a {
  text-decoration: none;
}
img {
  vertical-align: middle;
}
table {
  empty-cells: show;
}
ins {
  text-decoration: none;
}
del {
  text-decoration: line-through;
}
em {
  font-style: normal;
}
button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {
  border: 0;
  padding: 0;
}
a {
  transition: color 0.4s ease-in-out;
  -moz-transition: color 0.4s ease-in-out;
  -webkit-transition: color 0.4s ease-in-out;
  -o-transition: color 0.4s ease-in-out;
}
* {
  font-family: "Helvetica";
  box-sizing: border-box;
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
.pull-left {
  float: left;
}
.pull-right {
  float: right;
}
.pos_r {
  position: relative;
}
.pos_a {
  position: absolute;
}
.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
.overh {
  overflow: hidden;
}
.line-group {
  > h3 {
    font-size: 34px;
    font-weight: normal;
    color: #333333;
    text-align: center;
    margin: 20px 0;
  }
}
.top-cover {
  padding-top: 9%;
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  min-width: 1320px;
  h1 {
    font-size: 42px;
    color: #fff;
  }
  span {
    width: 165px;
    height: 1px;
    background-color: #fff;
    display: block;
    margin: 16px auto 0;
  }
  p {
    font-size: 22px;
    color: #fff;
    margin-top: 32px;
    display: block;
  }
}
.el-menu-item {
  font-size: 16px !important;
}
.copyright {
  background: #125688;
  color: #fff;
  text-align: center;
  padding: 10px 0;
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 1.4% 3%;
}
.bottombox ul {
  float: left;
  list-style: none;
  padding: 0 1.5%;
  min-height: 216px;
}
.bottombox ul:nth-of-type(1) {
  margin-left: 5%;
}
.bottombox ul li:first-child {
  margin-bottom: 10px;
}
.bottombox ul li:first-child a:after {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background: #fff;
}
.bottombox ul:nth-child(6) {
  border-right: 0;
}
.bottombox ul:nth-child(6) li:first-child {
  margin: 0;
}

.bottombox ul li {
  line-height: 36px;
}
.bottombox ul li:first-child a {
  font-size: 20px;
  color: #d4edff;
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
  width: 170px;
  position: absolute;
  right: 10%;
  margin-top: 10px;
  padding: 15px;
  background: #fff;
  border: 2px solid #125688;
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