<template lang="jade">
#news
    .pagetop(style="background-image: url(./static/news_top.jpg)")
        h1 {{ pagetitle }}
    .topbtn
        p.p-1(@click="cktopbtn(1)").action 公司新闻
        p.p-2(@click="cktopbtn(2)") 行业动态
    el-row.content
        el-col.new-item(:span="7",v-for="newdata in newsdata",:key="newdata.Id",@click='$router.push({ path: `/newsdel/${newdata.Id}` })')
            div(:style="'background:url(' + imgserver + newdata.Img +');height: 12rem;height: 13rem;background-repeat: no-repeat;background-size: 100% 100%;'")
            //- img(v-bind:src='imgserver + newdata.Img')
            h4.newtitle {{ newdata.Title }}
            p.newcontent {{ newdata.Content.length > 80 ? newdata.Content.substring(0,80) + '...' : newdata.Content }}
            p.btn(@click='$router.push({ path: `/newsdel/${newdata.Id}` })')
                i.el-icon-caret-right
                router-link(:to="'/newsdel/'+ newdata.Id")
                    span.newsbtn MORE
</template>

<script>
import axios from "../router/http";
export default {
    name: "News",
    isShow: true,
    data () {
        return {
            pagetitle: '',
            newsdata: []
        };
    },
    methods: {
        cktopbtn: function (i) {
            console.log(i);
            var ps = document.querySelectorAll(".topbtn p");
            // 兼容TMD IE
            for (let index = 0; index < ps.length; index++) {
                const element = ps[index];
                element.classList.remove("action");
            }
            /*
            ps.forEach(element => {
                element.classList.remove("action");
            });
            */
            let p = document.querySelector(".p-" + i);
            p.classList.add("action");

            this.getdataall(i);
        },
        getdataall (type) {
            axios
                .get("/news/GetNewsAll", {
                    params: {
                        type: type,
                        num: 999
                    }
                })
                .then(response => {
                    this.newsdata = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created: function () {
        this.getdataall(1);
        axios
            .get("/DataDictionary/GetDataDictionaryAll", {
                params: {
                    key: "新闻资讯标题"
                }
            })
            .then(response => {
                this.pagetitle = response.data[0].Content;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};
</script>

<style scoped>
#news {
  background: #14679f url(../../static/waitanbg.png) no-repeat bottom center;
}
.topbtn {
  position: relative;
  z-index: 2;
  width: 30%;
  top: -32px;
  margin: 0 auto;
}
.topbtn p {
  float: left;
  margin: 0;
  padding: 4% 16%;
  background-color: #e4e4e4;
  transition: 0.8s;
}
.action {
  color: #fff;
  background-color: #e13834 !important;
}
.content {
  padding: 5%;
  background-color: #fff;
  box-sizing: border-box;
  width: 85%;
  margin: 0 auto;
  background-image: url(../../static/waitanbg.png);
  /* perspective: 800px; */
}
.new-item {
  padding: 20px;
  margin-left: 3%;
  border: 1px solid #15669e;
  min-height: 390px;
  margin-bottom: 15px;
  transition: 0.4s;
  animation: newsitem 0.6s;
  /* perspective-origin: 50% 50%; */
}
.new-item:hover {
  border: 1px solid #fff;
  box-shadow: #bfd3e0 0 0 5px 2px;
  transform: translate(0px, -2px);
}
.new-item:hover .newsbtn {
  color: #f18c8a;
}
@keyframes newsitem {
  0% {
    transform: translate(0px, 60px);
    opacity: 0;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}
.new-item img {
  width: 100%;
  max-height: 144px;
}
.newtitle {
  padding: 0px 10px;
  border-left: 1px solid #15669e;
  color: #15669e;
  font-size: 22px;
  margin: 20px 0;
}
.newcontent {
  font-size: 14px;
  color: #808080;
}
.newsbtn {
  margin: 0;
  padding: 0;
  color: #e13834;
  transition: 0.4s;
}
.btn {
  cursor: pointer;
}
</style>

