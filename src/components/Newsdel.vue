<template lang="jade">
#anlibox
    .pagetop(style="background-image: url(./static/news_top.jpg)")
    #content
        img(v-bind:src="imgserver + news.Img",style="width: 100%")
        h2 {{ news.Title }}
        span {{ news.CreateTime.substring(0,10) }}
        p {{ news.Content }}
</template>

<script>
import axios from "../router/http";
export default {
    data () {
        return {
            id: this.$route.params.id,
            news: {
                "Id": 0,
                "Title": "",
                "Img": "",
                "Type": 0,
                "Content": "",
                "CreateTime": ""
            }
        }
    },
    created () {
        axios
            .get(`/News/GetNewsById/${this.id}`)
            .then(response => {
                this.news = response.data;
            })
    }
}
</script>


<style scoped>
#anlibox {
  background-color: rgb(20, 103, 159);
}
#content {
  background-color: #fff;
  width: 85%;
  margin: 0 auto;
  padding: 5% 10%;
  background-image: url(../../static/waitanbg.png);
  background-position-y: bottom;
  background-position-x: center;
}
p {
  font-size: 1.2rem;
}
h2 {
  color: #e13834;
}
</style>
