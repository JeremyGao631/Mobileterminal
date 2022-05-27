<template>
  <div class="homeview">
    <div class="lunbo">
      <div class="lunbotext">
        <span class="lunbotexttitle">
          DISTINCTIVE <br />
          QUALITY
        </span>
        <br />
        <span class="lunbotextinfo">Excellent-performance</span>
        <br />
        <button @click="jumpcontact()">
          <span>BOOK SERVICE</span>
          <img src="../../assets/images/home/right.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
     
    }
  },
  methods: {
    jumpcontact() {
      this.$router.push('/contact')
    }
  }
}
</script>

<style lang="less" scoped>
.homeview {
  margin-bottom: 50px;
}
.lunbo {
  height: 207px;
  width: 100%;
  background-image: url(../../assets/images/home/lunbo.png);
  background-size:cover;
  .lunbotext {
    text-align:left;
    padding:38px 0 0 42px;
    .lunbotexttitle {
      width: 160px;
      height: 60px;
      font-size: 30px;
      font-family: DINCondensed-Bold, DINCondensed;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 36px;
    }
    .lunbotextinfo {
      width: 127px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Light;
      opacity: 0.9;
      color: #FFFFFF;
      line-height: 17px;
    }
    button {
      width: 116px;
      height: 29px;
      border: 1px solid #FFFFFF;
      margin-top: 28px;
      background-color: transparent;
      span {
        width: 64px;
        height: 65px;
        font-size: 14px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 28px;
        margin:0 14px;
      }
      img {
        height: 8px;
        width: 8px;
      }
    }
  }
}
</style>