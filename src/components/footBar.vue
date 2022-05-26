<template>
    <div class="jj">
        <div class="left">
            <img class="img" src="../assets/images/components/BottomBar.png" alt="">
            <div class="bottom">
              <img class="bottom-logo" src="../assets/images/components/facebook.png" alt="">
              <img class="bottom-logo" src="../assets/images/components/twitter.png" alt="">
              <img class="bottom-logo" src="../assets/images/components/instagram.png" alt="">
              <img class="bottom-logo" src="../assets/images/components/Youtube.png" alt="">
            </div>
            <!-- <div class="tips">{{tips}}</div> -->
        </div>
        <div style="background">
          <van-cell title="HOME" is-link url="/home" />
          <van-cell title="CONTACT" is-link to="index" />
        </div>
    </div>
    
</template>

<script>
  export default {
    name:'footBar',
    props: {
    },
    data() {
      return {
        tips: 'Autohome AU.ALL right reserved. @Copyright 2020'
      };
    },
    methods: {
      home() {
        this.$router.push('/home')
      },
      showroom() {
        this.$router.push('/showRoom')
      },
      sell() {
        this.$router.push('/sell')
      },
      about() {
        this.$router.push('/about')
      },
      contact() {
        this.$router.push('/contact')
      }
    }
  }
</script>
<style lang="less" scoped>
  .jj {
      background-color: #151515;
    .left {
        margin-left: 5px;
        padding-top:15px;
        display: flex;
        flex-direction: row;
        align-items: center;
      .img {
        margin-left:12px;
        width: 85px;
        height: 50px;
      }
      .bottom {
        padding-left:68px;
        padding-top: 10px;
        padding-bottom: 10px;
        .bottom-logo {
          margin-right: 20px;
          width: 30px;
          height: 35px;
        }
      }
      .tips {
        width: 220px;
        height: 40px;
        font-size: 16px;
        text-align: left;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #909090;
        line-height: 24px;
        }
    }
    .line {
      width: 260px;
      height: 200px;
      margin-top: 45px;
      border-left: 1px solid #313030
    }
    .right {
      text-align: left;
      padding-top: 80px;
      .guide {
        width: 61px;
        height: 30px;
        font-size: 30px;
        padding-bottom: 10px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #F7941E;
        letter-spacing: 1px;
      }
      .components {
        width: 39px;
        padding-bottom: 15px;
        height: 20px;
        font-size: 16px;
        font-family: DINCondensed-Bold, DINCondensed;
        width: 150px;
        color: #909090;
        line-height: 24px;
      }
      .component {
        width: 39px;
        padding-bottom: 43px;
        height: 20px;
        font-size: 16px;
        font-family: DINCondensed-Bold, DINCondensed;
        width: 150px;
        color: #909090;
        line-height: 24px;
      }
    }
    .among {
      text-align: left;
      padding-left: 110px;
      padding-top: 15px;
      .guide {
        width: 61px;
        height: 30px;
        padding-bottom: 10px;
        font-size: 30px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #F7941E;
        letter-spacing: 1px;
      }
      .components {
        width: 39px;
        padding-bottom: 15px;
        height: 20px;
        font-size: 16px;
        font-family: DINCondensed-Bold, DINCondensed;
        width: 300px;
        color: #909090;
        line-height: 24px;
      }

    }
  }
</style>