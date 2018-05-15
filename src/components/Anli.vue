<template lang="jade">
#anlibox
    .pagetop(style="background-image: url(./static/anlitop.jpg)")
        h1 {{ pagetitle }}
    #conbox
        el-row(v-for="(rdata,index) in tbdata",:key="rdata.Id")
            el-col.imgbox(:span="15",v-if="(index + 1) % 2 == 1")
                img(v-bind:src="imgserver + rdata.Img",style="width: 75%")
            el-col(:span="7",v-if="(index + 1) % 2 == 1")
                h4 {{ rdata.Title }}
                p {{ rdata.Content.length > 200 ? rdata.Content.substring(0,200) + '...' : rdata.Content }}
                h5(@click='$router.push({ path: `/anlidel/${rdata.Id}` })') MORE 
                  i.el-icon-caret-right
            el-col(:span="7",:offset="2",v-if="(index + 1) % 2 == 0")
                h4 {{ rdata.Title }}
                p {{ rdata.Content.length > 200 ? rdata.Content.substring(0,200) + '...' : rdata.Content }}
                h5(@click='$router.push({ path: `/anlidel/${rdata.Id}` })') MORE 
                    i.el-icon-caret-right
            el-col.imgbox(:span="15",v-if="(index + 1) % 2 == 0")
                img(v-bind:src="imgserver +  rdata.Img",style="width: 75%")
</template>

<script>
import axios from "../router/http";
export default {
    data () {
        return {
            pagetitle: '',
            tbdata: []
        };
    },
    methods: {
        getdataall () {
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
                .catch(function (error) {
                    console.log(error);
                });
            // }
        }
    },
    created: function () {
        this.getdataall();
        axios
            .get("/DataDictionary/GetDataDictionaryAll", {
                params: {
                    key: "经典案例标题"
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
#anlibox {
  background-color: rgb(20, 103, 159);
}
#conbox {
  width: 85%;
  margin: 0 auto;
  background: #fff url(../../static/waitanbg.png) no-repeat bottom center;
}
.topimg {
  width: 100%;
}
.imgbox img:hover {
  animation: pulse 1s;
}
.imgbox {
  text-align: center;
}
.el-row {
  padding: 6% 10%;
  animation: flipInX 1s;
}
.el-col h4 {
  font-size: 22px;
  color: #e13834;
  transition: 0.4s;
}
.el-col h5:hover {
  color: #e13834;
}
.el-col p {
  color: #484848;
  font-size: 15px;
  transition: 0.4s;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}
.el-col p:hover {
  color: #14679f;
}
.el-col h5 {
  font-size: 18px;
  color: #808080;
  cursor: pointer;
}
</style>
