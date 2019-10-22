<template>
  <div class="case">
    <banner img="../assets/img/bgtop.jpg" />
    <div class="case-product">
      <div class="case-product-content">
        <img v-lazy="imgserver+caseIdList.Img" alt />
        <p class="product-title">{{caseIdList.Title}}</p>
        <p class="product-time">{{caseIdList.CreateTime}}</p>
        <p class="product-content">{{caseIdList.Content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      pid: 0,
      caseIdList: {}
    };
  },
  created() {
    this.pid = this.$route.params.id;
    window.console.log(this.pid);
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$http
        .get(`Cases/GetCasesById/${this.pid}`)
        .then(response => {
          //console.log(response);
          this.caseIdList = response.data;
          window.console.log(this.caseIdList);
        })
        .catch(function(error) {
          window.console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.case {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #14679f;
  &-product {
    width: 1240px;
    margin: 0 auto;
    background-color: #fff;
    //border: 1px solid red;
    &-content {
      width: 760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 0;
      img {
        width: 100%;
        height: 430px;
      }
      .product-title {
        font-size: 25px;
        color: #e13834;
        padding: 20px 0;
      }
      .product-content {
        font-size: 17px;
        font-weight: bolder;
        padding: 20px 0;
      }
    }
  }
}
</style>