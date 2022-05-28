<template>
  <div id="app">
            <div class="body-box" :class="{ 'isIOS': userAgent === 'IOS' }">
            <!-- 顶部tabBar 每个页面单独写-->
            <tabBar v-if="$route.meta.barSet === 'nav'"
                    :operate-arr="$route.meta.operateArr"
                    :title="$route.meta.title"/>
            <div class="main-content">
                <div class="main-wrap">
                    <!-- <router-view class="main" /> -->
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive" class="main" />
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive" class="main" />
                </div>
            </div>
            <footBar />
        </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import footBar from './components/footBar.vue'
import tabBar from './components/tabBar.vue'

export default {
  name: 'app',
  components: {
    tabBar,
    footBar,
  },
  data() {
    return {
      url:require('./assets/logo.png'),
    };
  },
}
</script>

<style lang="less" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background-color: #F4F6F8;
}
.el-header {
    text-align: center;
    line-height: 1rem;
  }
  .el-footer {
    text-align: left;
    padding: 0;
  }
  .main-content {
    //flex: 1;
    //display: flex;
    overflow-y: hidden;
  }
  .main-wrap {
    flex: 1;
  }
  .el-main {
    text-align: center;
    padding: 0;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .van-icon-wap-nav:before {
    content: '\e73b';
    color: #000;
}
</style>
