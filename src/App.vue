<template lang="jade">
#app
  el-menu(:default-active="activeIndex",class="el-menu-demo",mode="horizontal",active-text-color="#409eff",v-bind:class="{ toppost : $route.path == '/' }",@select="handleSelect")
    el-menu-item(index="logo",style="padding-left: 9%")
      img(src="static/toplogo.png",style="width: 280px")
    el-menu-item(index="/") 首页
    el-menu-item(index="/news") 新闻资讯
    el-menu-item(index="/product") 产品中心
    el-menu-item(index="/anli") 经典案例
    el-menu-item(index="/goto") 走进科建
    el-menu-item(index="/help") 帮助中心
    el-menu-item(index="/recruitment") 诚聘英才
    el-menu-item(index="/about") 联系我们
    el-menu-item(index="/model") 学习模块
  router-view
  .bottombox(v-if="$route.path != '/' && $route.path.substring(0,6) != '/admin'")
    ul(v-for="hrefs in hrefdata")
      li(v-for="item in hrefs") 
        a(v-bind:href="item.href") {{ item.text }}
    img.bottomercode(src="../static/ercode.png")
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "/",
      hrefdata: [
        [
          {
            href: "#",
            text: "走进科建"
          },
          {
            href: "#",
            text: "公司简介"
          },
          {
            href: "#",
            text: "发展历程"
          },
          {
            href: "#",
            text: "组织结构"
          },
          {
            href: "#",
            text: "企业文化"
          },
          {
            href: "#",
            text: "资质荣誉"
          },
          {
            href: "#",
            text: "合作伙伴"
          }
        ],
        [
          {
            href: "#",
            text: "新闻资讯"
          },
          {
            href: "#",
            text: "公司新闻"
          },
          {
            href: "#",
            text: "行业动态"
          }
        ],
        [
          {
            href: "#",
            text: "产品中心"
          }
        ],
        [
          {
            href: "#",
            text: "经典案例"
          },
          {
            href: "#",
            text: "高层办公楼"
          },
          {
            href: "#",
            text: "轨道交通"
          },
          {
            href: "#",
            text: "市政工程"
          },
          {
            href: "#",
            text: "城市综合体"
          }
        ],
        [
          {
            href: "#",
            text: "帮助中心"
          },
          {
            href: "#",
            text: "常见问题"
          },
          {
            href: "#",
            text: "技术支持"
          }
        ],
        [
          {
            href: "#",
            text: "联系我们"
          },
          {
            href: "#",
            text: "邮箱:Smileioc@163.com"
          },
          {
            href: "#",
            text: "电话:182****2176"
          },
          {
            href: "#",
            text: "传真:182****2176"
          },
          {
            href: "#",
            text: "地址:上海市松花区新松江路909号丰源大厦16F"
          }
        ]
      ]
    };
  },
  created: function() {
    //console.log( this.$route.path.substring(0,6))
    //let actionpath =
    //console.log(this.$route.path)
  },
  methods: {
    handleSelect(key) {
      //, keyPath
      if (key == "logo") {
        window.location = "http://www.smilef.cn";
      }
      this.$router.push(key);
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
  font-family: "华文黑体";
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
  width: 150px;
  position: absolute;
  right: 10%;
  margin-top: 16px;
}
</style>