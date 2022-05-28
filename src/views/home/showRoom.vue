<template>
  <div class="showroom">
    <div class="lunbo" />
    <div class="tittle">ONLINE SHOWROOM</div>
    <button class="middlebtn" @click="jumpcontact()">
        <span>BOOK SERVICE</span>
        <img src="../../assets/images/home/blackright.png" />
    </button>
    <div class="middle">
      <div class="middletittle">START A NEW SEARCH</div>
      <div class="texttitle">
          <button class="btn_anniu" >
            <span>Make</span>
            <img src="../../assets/images/onlineshowroom/dropdown.png" />
          </button>
          <button class="btn_anniu" >
            <span>View All</span>
            <img src="../../assets/images/onlineshowroom/dropdown.png" />
          </button>
          <img  class="imgspecial" src="../../assets/images/onlineshowroom/choose.png" />
          <span class="showall" @click="jumpshowroom()">Date: High to Low</span>
          <img class="showallspecial" src="../../assets/images/onlineshowroom/dropdown.png" />
      </div>
      <div class="textcontent">
        <div v-show='0===number'>
          <div class="textcard" v-for="(item,index) in information" :key="index" @click="jumpcardetail()">
            <div class="imgcard">
              <img :src="item.url" />
            </div>
            <div class="titlecard" >
              <span >{{item.year}} {{item.type}}</span>
              <br />
              <span >{{item.kind}}</span>
            </div>
            <div class="contentcard">
              <span class="contentcard-price">{{item.price}}</span>
              <span class="contentcard-info">{{item.info}}</span>
            </div>
            <div class="break" ></div>
            <div class="detailcard" >
              <span >{{item.distance}}</span>
              <span >{{item.info1}}</span>
              <span >{{item.info2}}</span>
            </div>
          </div>
        </div>
        <div v-show='1===number'>
          <div class="textcard" v-for="(item,index) in information1" :key="index" @click="jumpcardetail()">
            <div class="imgcard">
              <img :src="item.url" />
            </div>
            <div class="titlecard" >
              <span >{{item.year}} {{item.type}}</span>
              <br />
              <span >{{item.kind}}</span>
            </div>
            <div class="contentcard">
              <span class="contentcard-price">{{item.price}}</span>
              <span class="contentcard-info">{{item.info}}</span>
            </div>
            <div class="break" ></div>
            <div class="detailcard" >
              <span >{{item.distance}}</span>
              <span >{{item.info1}}</span>
              <span >{{item.info2}}</span>
            </div>
          </div>
        </div>
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
     number: 0 ,
     information: [
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/2.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/3.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/4.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/5.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/6.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/7.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/8.png'),
                  year:'2019',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                }
      ],
      information1: [
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'1111',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/2.jpg'),
                  year:'2222',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/3.jpg'),
                  year:'3333',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/4.jpg'),
                  year:'4444',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/5.jpg'),
                  year:'5555',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/6.jpg'),
                  year:'6666',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/7.jpg'),
                  year:'7777',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/8.png'),
                  year:'8888',
                  type: 'MERCEDES-BENZC63S',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                }
      ]
    }
  },
  methods: {
    jumpcontact() {
      this.$router.push('/contact')
    },
    change: function (item) {
            this.number = item; //重要处
          },
    jumpcardetail() {
      this.$router.push('/carDetail')
    }
  },
}
</script>

<style lang="less" scoped>
.showroom {
  margin-bottom: 50px;
}
.lunbo {
  height: 207px;
  width: 100%;
  background-image: url(../../assets/images/onlineshowroom/OnlineShowroom.png);
  background-size:cover;
  margin-top: -20px;
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
.tittle {
  width: 184px;
  height: 30px;
  font-size: 30px;
  font-family: DINCondensed-Bold, DINCondensed;
  font-weight: bold;
  color: #151515;
  line-height: 36px;
  text-align: center;
  margin: 24px 96px 10px 96px;
  white-space: nowrap;
}

.middlebtn {
    width: 167px;
    height: 47px;
    border: 1px solid #151515;
    background-color: transparent;
    margin-bottom: 28px;
    span {
        width: 73px;
        height: 30px;
        font-size: 16px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #151515;
        line-height: 30px;
        margin:0 20px 0 20px;
        white-space: nowrap;
    }
    img {
        height: 8px;
        width: 8px;
        margin-left: 8px;
    }
}
.middle {
  width: 355px;
  background: #FFFFFF;
  margin: 0 10px;
  .middletittle {
        width: 161px;
        height: 50px;
        font-size: 24px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #151515;
        line-height: 68px;
        text-align: left;
        margin: 0 10px;
        white-space: nowrap;
    }
  .texttitle {
    margin: 0px 10px;
    border-bottom: 1px solid #979797;
    text-align: left;
    padding-bottom: 10px;
    /deep/ .btn_anniu {
      background-color: transparent;
      border: none;
      margin-top: 20px;
      padding:0;
      span {
        width: 36px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #151515;
        line-height: 20px;
      }
    }
    .showall {
        width: 119px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #151515;
        line-height: 20px;
        margin-top: 20px;
    }
    img {
      height: 4px;
      width: 8px;
      margin-left: 8px;
      padding-bottom: 5px;
      margin-right:20px;
    }
    .imgspecial {
        height: 15px;
        width: 15px;
        padding-bottom: 0;
        margin-right: 5px;
        margin-left: 20px;
    }
    .showallspecial {
        margin-right: 0;
    }
  }
  .textcontent {
    overflow: hidden;
    margin-top: 10px;
    .textcard {
      float:left;
      width: calc(50% - 15px);
      padding-bottom: 30px;
      .imgcard {
        width: 100%;
        height: 98px;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .titlecard {
        text-align:left;
        padding-bottom: 16px;
        margin-top: 5px;
        span {
          font-family: DINCondensed-Bold;
          margin-left: 3px;
          font-weight:bold;
          font-size: 16px;
          color: #212020;
          line-height: 16px;
        }
      }
      .contentcard {
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .contentcard-price {
          font-family:DINCondensed-Bold;
          font-weight:bold;
          font-size: 16px;
          color: #212020;
          line-height: 16px;
        }
        .contentcard-info {
          width: 80px;
          height: 11px;
          font-size: 9px;
          color: #909090;
          line-height: 11px;
          font-family:DINCondensed-Bold;
          font-weight: bold;
        }
      }
      .break {
        border-bottom: 1px solid #979797;
        opacity:0.1;
      }
      .detailcard {
        padding-top:10px;
        display: flex;
        align-items: center;
        justify-content: left;
        span {
          font-size: 11px;
          font-family:PingFangSC-Regular;
          color: #909090;
          line-height: 10px;
          white-space: nowrap;
          margin-right: 15px;
        }
      }
    }
    .textcard:nth-child(2n+1) {
      margin: 0 5px 0 10px;
    }
    .textcard:nth-child(2n+2) {
      margin: 0 10px 0 5px;
    }
  }
}
</style>