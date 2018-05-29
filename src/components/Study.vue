<template lang="jade">
    .box
        .pagetop(style="background-image: url(./static/study.jpg)")
            h1 {{ pagetitle }}
        .content
            .item(v-for="item in items")
                h3 {{ item.Title }}
                p {{ item.Content }}
</template>
<script>
import axios from "../router/http";

export default {
    data () {
        return {
            pagetitle: '',
            items: []
        }
    },
    created: function () {
        this.gettitle()
        this.getdata()
    },
    methods: {
        gettitle () {
            axios
                .get("/DataDictionary/GetDataDictionaryAll", {
                    params: {
                        key: "学习模块标题"
                    }
                })
                .then(response => {
                    this.pagetitle = response.data[0].Content;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        getdata () {
            axios
                .get("/study/GetStudyAll")
                .then(response => {
                    this.items = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>
<style scoped>
.box {
  background-color: #14679f;
}
.content {
  background-image: url(../../static/waitanbg.png);
  /* background-color: rgba(105, 200, 245, 0.2); */
  background-color: #fff;
  width: 82%;
  margin: 0 auto;
  padding: 2%;
  overflow: hidden;
  background-repeat: repeat-x;
  background-position-y: bottom;
  animation: bgdh 200s linear infinite;
}
@keyframes bgdh {
  0% {
    background-position-x: 0%;
  }
  50% {
    background-position-x: 1000%;
  }
  100% {
    background-position-x: 0%;
  }
}
.item {
  border-top: 1px solid #dcdcdc;
  padding: 2%;
  transition: 0.4s;
}
.item:nth-of-type(2n + 1) {
  animation: bounceInLeft 1.2s;
}
.item:nth-of-type(2n) {
  animation: bounceInRight 1.2s;
}
.item:nth-of-type(1) {
  border: none;
}
.item:hover {
  background: rgba(0, 0, 0, 0.1);
}
h3 {
  color: #14679f;
}
</style>
