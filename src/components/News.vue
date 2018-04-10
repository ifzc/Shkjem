<template lang="jade">
#news
    img(src="/static/news_top.jpg",style=" width: 100%")
    .topbtn
        p.p-1(@click="cktopbtn(1)").action 公司新闻
        p.p-2(@click="cktopbtn(2)") 行业动态
    el-row.content
        el-col.new-item(:span="7",v-for="newdata in newsdata",:key="newdata.Id")
            img(v-bind:src='newdata.Img')
            h4 {{ newdata.Title }}
            p {{ newdata.Content }}
            p 
                i.el-icon-caret-right
                span MORE
</template>

<script>
import axios from "../router/http";
export default {
  name: "News",
  isShow: true,
  data() {
    return {
      newsdata: []
    };
  },
  methods: {
    cktopbtn: function(i) {
      console.log(i);
      var ps = document.querySelectorAll(".topbtn p");
      ps.forEach(element => {
        element.classList.remove("action");
      });
      let p = document.querySelector(".p-" + i);
      p.classList.add("action");

      this.getdataall(i);
    },
    getdataall(type) {
      var sessiondata = JSON.parse(sessionStorage.getItem('newsdata_'+type))
      if(sessiondata != null){
        this.newsdata = sessiondata
      }else{
      axios
        .get("/news/GetNewsAll", {
          params: {
            type: type,
            num : 12
          }
        })
        .then(response => {
          this.newsdata = response.data
          sessionStorage.setItem('newsdata_'+ type, JSON.stringify(response.data))
        })
        .catch(function(error) {
          console.log(error);
        })
      }
    }
  },
  created: function() {
    this.getdataall(1);
  }
};
</script>

<style scoped>
#news {
  background-image: url(/static/waitanbg.png);
  background-color: rgba(105, 200, 245, 0.2);
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
  background-color: #fff;
}
.action {
  color: #fff;
  background-color: #1767a1 !important;
}
.content {
  padding: 5%;
}
.new-item {
  padding: 20px;
  margin-left: 3%;
}
.new-item img {
  width: 100%;
}
</style>

