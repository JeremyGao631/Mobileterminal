<template>
    <van-nav-bar :title="title">
      <template #left>
        <!-- <van-image width="100" height="100" :src="url" /> -->
        <van-icon :name="require('../assets/images/carDetail/topbar.png')" size="55" />
        <!-- <img src="./assets/logo.png" alt=""> -->
      </template>
      <template #right>
        <van-icon name="wap-nav" size="42" />
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

    }
  }
}
</script>
<style lang="less" scoped>
 .van-icon-wap-nav:before {
    content: '\e73b';
    color: #000;
}
</style>