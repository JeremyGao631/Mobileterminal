<template>
    <van-nav-bar :title="title" fixed placeholder>
      <template #left>
        <!-- <van-image width="100" height="100" :src="url" /> -->
        <van-icon :name="require('../assets/images/carDetail/topbar.png')" size="55"  @click="toHome()"/>
        <!-- <img src="./assets/logo.png" alt=""> -->
      </template>
      <template #right >
        <van-icon name="wap-nav" size="42" @click="showPopup()" />
        <van-popup v-model="show" position="right" :style="{ height: '50%', width:'40%'}" >
          <div :class='{pageJump:i1 === index}' @click="pageJump(item,index)" v-for='(item,index) in pagelist' :key="index">
            {{item.name}}
          </div>
        </van-popup>
      </template>
    </van-nav-bar>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
export default {
  name:'TabBar',
  props: {
    title: {
      type:String,
      default: 'HOME'
    }
  },
  data() {
    return {
      show: false,
      i1: 0,
      pagelist: [
        {
          name: 'HOME',
          path: '/home'
        },
        {
          name: 'ONLINE SHOWROOM',
          path: '/showRoom',
        },
        {
          name: 'SELL YOUR CAR',
          path: '/sell',
        },
        {
          name: 'ABOUT',
          path: '/about'
        },
        {
          name: 'CONTACT',
          path: '/contact'
        },
      ]
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    toHome() {
      this.$router.push('/home')
    },
    pageJump(item,index) {
      this.i1 = index;
      console.log(item.path, "2222222222")
      console.log(item.path,"111111111")
      this.$router.push(item.path);
      this.show = false;

    }
  }
}
</script>
<style lang="less" scoped>
 .van-icon-wap-nav:before {
    content: '\e73b';
    color: #000;
}
 /deep/ .van-nav-bar {
    padding:10px 0 10px 0;
    background-color: #F4F6F8;
 }

 /deep/ .van-nav-bar__title{
    height: 20px;
    font-size: 20px;
    font-family: DINCondensed-Bold, DINCondensed;
    // font-weight: bold;
    color: #151515;
    line-height: 24px;
    letter-spacing: 1px;
 }

 .van-popup {
   margin:-155px 10px 0 0;
   div {
    height: 20px;
    font-size: 20px;
    font-family: DINCondensed-Bold, DINCondensed;
    color: #151515;
    line-height: 24px;
    letter-spacing: 1px;
    text-align: right;
    margin: 20px 5px 10px 5px;
    padding-bottom: 20px;
    border-bottom:1px solid #000;
    opacity: 0.5;
   }
   .pageJump{
     opacity: 1;
   }
 }
</style>