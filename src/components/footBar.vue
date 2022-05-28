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
        <div style="backgrounds">
          <!-- guide-->
          <div class="tops">GUIDE</div>
          <div>
              <div class="view">
                <div class="cell-container">
                    <div class="item" style="height:64px" @click="home()">
                        <div class="show">
                            <!-- <img class="image" src="../../assets/home/person/gzh.png" alt=""> -->
                            <span class="text">HOME</span>
                        </div>
                        <div class="show">
                            <van-icon name="arrow" size="29" color="#909090"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="view">
                <div class="cell-container">
                    <div class="item" style="height:64px" @click="showroom()">
                        <div class="show">
                            <span class="text">ONLINE SHOWROOM</span>
                        </div>
                        <div class="show">
                            <van-icon name="arrow" size="29" color="#909090"/>
                        </div>
                    </div>
                </div>
            </div>
             <div class="view">
                <div class="cell-container">
                    <div class="item" style="height:64px" @click="sell()">
                        <div class="show">
                            <span class="text">SELL YOUR CAR</span>
                        </div>
                        <div class="show">
                            <van-icon name="arrow" size="29" color="#909090"/>
                        </div>
                    </div>
                </div>
            </div>
             <div class="view">
                <div class="cell-container">
                    <div class="item" style="height:64px" @click="about()">
                        <div class="show">
                            <span class="text">ABOUT</span>
                        </div>
                        <div class="show">
                            <van-icon name="arrow" size="29" color="#909090"/>
                        </div>
                    </div>
                </div>
            </div>
             <div class="view">
                <div class="cell-container">
                    <div class="item" style="height:64px" @click="contact()">
                        <div class="show">
                            <span class="text">CONTACT</span>
                        </div>
                        <div class="show">
                            <van-icon name="arrow" size="29" color="#909090"/>
                        </div>
                    </div>
                </div>
            </div>
            <!--contact-->
            <div class="tops">CONTACT</div>
             <div class="view">
                <div class="cell-container">
                  <!-- 此处行内不影响整体-->
                    <div class="item" style="height:64px">
                        <div class="show">
                            <span class="text">Tel: 0498698000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="view">
                <div class="cell-container">
                    <div class="item" style="height:64px">
                        <div class="show">
                            <span class="text">Wechat: buyingcars</span>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="view">
                <div class="cell-container">
                    <div class="item" style="height:64px">
                        <div class="show">
                            <span class="text">E-mail: enquiries@autohome.com.au</span>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="view">
                <div class="cell-container">
                    <div class="item" style="height:64px">
                        <div class="show">
                            <span class="text special">Addriss: 300 Parramatta Road,Burwood,NSW 2134</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottoms">Autohome AU.ALL right reserved.@Copyright 2020</div>
          </div>
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
      min-height: 100%;
    .left {
        margin-left: 5px;
        padding-top:15px;
        display: flex;
        flex-direction: row;
        align-items: center;
      .img {
        margin-left:12px;
        width: 70px;
        height: 42px;
      }
      .bottom {
        padding-left:85px;
        padding-top: 10px;
        padding-bottom: 10px;
        .bottom-logo {
          margin-right: 20px;
          width: 30px;
          height: 30px;
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
     .tops {
        padding: 35px 20px 18px 20px;
        width: 33px;
        height: 16px;
        font-size: 16px;
        text-align: left;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: rgba(144, 144, 144, 1);
        line-height: 19px;
        opacity: 0.5;
      };
      .bottoms {
        padding: 18px 50px;
        width: 275px;
        height: 16px;
        font-size: 11px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #909090;
        line-height: 16px;
        text-align: center;
        opacity: 0.6;
      };
    .view{
            padding: 0 20px;
            .cell-container{
              border-bottom: 1px solid rgba(151, 151, 151, 1);
            .item{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .show{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .text{
                        width: 273px;
                        height: 16px;
                        font-size: 16px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #909090;
                        line-height: 19px;
                        display: block;
                        text-align: left;
                    }
                    .special {
                        white-space: nowrap;
                    }
                    .arrow{
                        width: 7px;
                        height: 12px;
                        display: block;
                    }
                }
            }
        }
  }
  }
</style>