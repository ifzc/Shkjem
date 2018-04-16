<template lang="jade">
#anlibox
  img.topimg(src="/static/anlitop.jpg")
  #conbox
    el-row(v-for="(rdata,index) in tbdata",:key="rdata.Id")
      el-col.imgbox(:span="15",v-if="(index + 1) % 2 == 1")
        img(v-bind:src="imgserver + rdata.Img",style="width: 75%")
      el-col(:span="7",v-if="(index + 1) % 2 == 1")
        h4 {{ rdata.Title }}
        p {{ rdata.Content }}
        h5 MORE 
          i.el-icon-caret-right
      el-col(:span="7",:offset="2",v-if="(index + 1) % 2 == 0")
        h4 {{ rdata.Title }}
        p {{ rdata.Content }}
        h5 MORE 
          i.el-icon-caret-right
      el-col.imgbox(:span="15",v-if="(index + 1) % 2 == 0")
        img(v-bind:src="imgserver +  rdata.Img",style="width: 75%")
</template>

<script>
import axios from "../router/http";
export default {
  data() {
    return {
      tbdata: []
    };
  },
  methods: {
    getdataall() {
      // var sessiondata = JSON.parse(sessionStorage.getItem("anlidata"));
      // if (sessiondata != null) {
      //   this.tbdata = sessiondata;
      // } else {
      axios
        .get("/cases/GetCasesAll")
        .then(response => {
          this.tbdata = response.data;
          //sessionStorage.setItem("anlidata", JSON.stringify(response.data));
        })
        .catch(function(error) {
          console.log(error);
        });
      // }
    }
  },
  created: function() {
    this.getdataall();
  }
};
</script>

<style scoped>
#anlibox {
  background-color: rgb(20, 103, 159);
}
#conbox{
  width: 85%;
  margin: 0 auto;
  background-image: url(/static/waitanbg.png);
  background-color: #fff;
}
.topimg {
  width: 100%;
}
.imgbox {
  text-align: center;
}
.el-row {
  padding: 6% 10%;
}
.el-col h4 {
  font-size: 16px;
  color: #4e4e4e;
}
.el-col p {
  color: #484848;
  font-size: 15px;
}
.el-col h5 {
  font-size: 18px;
  color: #808080;
}
</style>
