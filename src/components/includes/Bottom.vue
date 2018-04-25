<template lang="jade">
.bottombox(v-if="bottomIsShow")
    ul(v-for="hrefs in hrefdata")
        li(v-for="item in hrefs") 
        a(v-bind:href="item.href") {{ item.text }}
    img.bottomercode(src="../static/ercode.png")
</template>

<script>
export default {
    name: "Bottom",
    data () {
        return {
            hrefdata: [
                [
                    {
                        href: "#",
                        text: "走进科健"
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
        }
    }
}
</script>

<style scoped>
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
