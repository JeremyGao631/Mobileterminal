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
    <div class="middletittle">FEATURED COLLECTIONS</div>
    <div class="middle">
      <div class="texttitle">
          <button class="btn_anniu" @click="change(0)" :class="{ newStyle:0===number}">
            <span>NEW ARRIVALS</span>
          </button>
          <button class="btn_anniu" @click="change(1)" :class="{ newStyle:1===number}">
            <span>SEARCH INVENTORY</span>
          </button>
          <div class="showall">
            <span @click="jumpshowroom()">SHOW ALL</span>
            <img src="../../assets/images/home/blackright.png" />
          </div>
          <div class="break" />
      </div>
      <div class="textinfo">
        <span>AVAILABLE</span>
        <span class="textinfosepcial"> 55 </span>
        <span>CARS</span>
      </div>
      <div class="textcontent">
        <div v-show='0===number'>
          <div class="textcard" v-for="(item,index) in information" :key="index">
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
          <div class="textcard" v-for="(item,index) in information1" :key="index">
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
    <div class="middletittle">OUR SERVICE</div>
    <div class="swiper">
      <van-swipe :autoplay="5000" indicator-color="black">
        <van-swipe-item>
          <div class="card">
            <img src="../../assets/images/home/onlineshowroom.png" />
            <div class="info">
              <p>ONLINE SHOWROOM</p>
              <span>SpecBase is a fully interactive online Showroom with specs, photos, and video showcase of RVs in your inventory directly on your website.</span>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="card">
            <img src="../../assets/images/home/sellyourcar.png" />
            <div class="info">
              <p>SELL YOUR CAR</p>
              <span>SpecBase is a fully interactive online Showroom with specs, photos, and video showcase of RVs in your inventory directly on your website.</span>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="card">
            <img src="../../assets/images/home/visitourstore.png" />
            <div class="info">
              <p>VISIT OUR STORE</p>
              <span>SpecBase is a fully interactive online Showroom with specs, photos, and video showcase of RVs in your inventory directly on your website.</span>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
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
    jumpshowroom() {
      this.$router.push('/showRoom')
    },
    change: function (item) {
            this.number = item; //重要处
          },
  },
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
      font-weight: 300;
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
        margin:0 6%;
      }
      img {
        height: 8px;
        width: 8px;
        padding-bottom: 1px;
      }
    }
  }
}
.middletittle {
  width: 300px;
  height: 80px;
  font-size: 24px;
  font-family: DINCondensed-Bold, DINCondensed;
  font-weight: bold;
  color: #151515;
  line-height: 80px;
  margin-left: 20px;
  text-align: left;
}

.middle {
  width: 355px;
  background: #FFFFFF;
  margin: 0 10px;
  .texttitle {
    margin: 0px 10px;
    text-align: left;
    padding: 0;
    .btn_anniu {
      background-color: transparent;
      border: 0;
      margin-top: 5%;
      margin-left: -10px;
      span {
        width: 75px;
        height: 30px;
        font-size: 16px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;     
        color: #909090;
        line-height: 30px;
      }
    }
    .newStyle{
      border: 2px solid #12100f;
      border-bottom: none;
      margin-left: -0.5%;
      span{
        font-weight: bold;
        font-size: 16px;
        color: #212020;
        padding-left:10px;
        margin-left: -8px;
      }
    }
    .showall {
      margin-top: 5%;
      float: right;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #212020;
      line-height: 30px;
    }
    img {
      height: 8px;
      width: 8px;
      margin-left: 8px;
    }
  }
  .break {
    border: 1px solid #12100f;
    margin-top: -1%;
  }
  .textinfo {
    width: 120px;
    height: 30px;
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #909090;
    line-height: 30px;
    margin: 20px 120px;
    .textinfosepcial {
      font-family: PingFangSC-Semibold;
      font-weight: bold;
      color: #151515;
    }
  }

  .textcontent {
    overflow: hidden;
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

.swiper{
  margin: 0 10px;
}

.card{
  width: 100%;
  background-color: #fff;
}

.card img{
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.info{
  padding: 20px 20px 30px 20px;
}

.info p{
  margin: 0 0 15px 0;
  font-size: 18px;
  font-family: DINCondensed-Bold, DINCondensed;
  font-weight: bold;
  color: #151515;
}

.info span{
  color: #909090;
  font-size: 12px;
  font-family:PingFangSC-Regular;
  line-height: 2;
}

</style>