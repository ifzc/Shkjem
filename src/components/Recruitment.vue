<template lang="jade">
#rec
    img(src="/static/zhaopin.jpg",style='width:100%')
    .topbtn
        p.p-1.action(@click="cktopbtn(1)") 研发类
        p.p-2(@click="cktopbtn(2)") 服务类
        p.p-3(@click="cktopbtn(3)") 营销类
    .content(v-for="pec in pecdata")
        .zitem
            h3 {{ pec.Title }}
        p(v-for="px in pec.Content.split('\\n')") {{ px }}
</template>
<script>
import axios from "../router/http";
export default {
  data() {
    return {
      pecdata: []
    };
  },
  methods: {
    cktopbtn: function(i) {
      //console.log(i)
      var ps = document.querySelectorAll(".topbtn p");
      ps.forEach(element => {
        element.classList.remove("action");
      });
      let p = document.querySelector(".p-" + i);
      p.classList.add("action");

      this.getdataall(i);
    },
    getdataall(type) {
      axios
        .get("/recruitment/GetRecruitmentAll", {
          params: {
            type: type
          }
        })
        .then(response => {
          //console.log(response)
          this.pecdata = response.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  },
  created: function() {
    this.getdataall(1);
  }
};
</script>
<style scoped>
#rec {
  background-image: url(/static/waitanbg.png);
  background-color: rgba(105, 200, 245, 0.2);
  background-repeat: no-repeat;
  background-position-y: 00px;
}
.topbtn {
  margin: 0 auto;
  width: 50%;
  position: relative;
  top: -35px;
  z-index: 2;
}
.topbtn p {
  float: left;
  margin: 0;
  padding: 3% 11%;
  background-color: #e4e4e4;
}
.action {
  color: #fff;
  background-color: #1767a1 !important;
}
.content {
  padding: 8% 10%;
}
.content h2 {
  font-weight: 400;
}
.zitem {
  border-bottom: 2px solid #1767a1;
}
.zitem h3 {
  display: inline-block;
  padding: 4px 10px;
  background: #1767a1;
  color: #fff;
  margin-bottom: 0;
  font-weight: 400;
}
</style>
