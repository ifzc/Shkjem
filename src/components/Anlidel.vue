<template lang="jade">
#anlibox
    .pagetop(style="background-image: url(./static/anlitop.jpg)")
    #content
        img(v-bind:src="imgserver + anli.Img",style="width: 100%")
        h2 {{ anli.Title }}
        span {{ anli.CreateTime.substring(0,10) }}
        p {{ anli.Content }}
</template>

<script>
import axios from "../router/http";
export default {
    data () {
        return {
            id: this.$route.params.id,
            anli: {
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
            .get(`/Cases/GetCasesById/${this.id}`)
            .then(response => {
                this.anli = response.data;
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
#content img{
      padding:6%;
}
p {
  font-size: 1.2rem;
      line-height:30px;
      text-indent: 2.4rem;
}
h2 {
  color: #e13834;
}
</style>
