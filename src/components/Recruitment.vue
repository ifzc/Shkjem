<template lang="jade">
#rec
  .pagetop(style="background-image: url(./static/zhaopin.jpg)")
        h1 {{ pagetitle }}
  .topbtn
    p.p-1.action(@click="cktopbtn(1)") 研发类
    p.p-2(@click="cktopbtn(2)") 服务类
    p.p-3(@click="cktopbtn(3)") 营销类
  #conbox
    .content(v-for="pec in pecdata")
        .zitem
            h3 {{ pec.Title }}
        p(v-for="px in pec.Content.split('\\n')") {{ px }}
</template>
<script>
import axios from "../router/http";
export default {
    data () {
        return {
            pagetitle: '',
            pecdata: []
        };
    },
    methods: {
        cktopbtn: function (i) {
            //console.log(i)
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
                .get("/recruitment/GetRecruitmentAll", {
                    params: {
                        type: type
                    }
                })
                .then(response => {
                    //console.log(response)
                    this.pecdata = response.data;
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
                    key: "诚聘英才标题"
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
#rec {
  background-color: #14679f;
}
#conbox {
  background: #fff url(../../static/waitanbg.png) no-repeat bottom center;
  width: 85%;
  margin: 0 auto;
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
  transition: 0.8s;
}
.action {
  color: #fff;
  background-color: #e13834 !important;
}
.content {
  padding: 8% 10%;
}

.content p {
  transition: 0.4s;
  margin: 0;
  line-height: 40px;
}

.content p:hover {
  margin-left: 10px;
  color: #9a3b3b;
}

.zitem h3 {
  transition: 0.4s;
}

.content:hover .zitem h3 {
  margin-left: 2%;
}

.zitem {
  border-bottom: 2px solid #e13834;
}
.zitem h3 {
  display: inline-block;
  padding: 4px 10px;
  background: #e13834;
  color: #fff;
  margin-bottom: 0;
  font-weight: 400;
}
</style>
