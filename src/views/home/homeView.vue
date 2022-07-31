<template>
  <div class="homeview">
    <van-swipe :autoplay="5000" indicator-color="black">
      <van-swipe-item v-for="(item,index) in itemList" :key="index">
        <div class="lunbo">
          <img :src="item.targeUrl"  alt="暂无图片" class="img1" />
          <div class="lunbotext">
            <span class="lunbotextinfo">{{item.secondtitle}}</span>
            <br />
            <span class="lunbotexttitle">
              {{item.span}} <br />
              {{item.span1}}
            </span>
          <!-- <br />
          <button @click="jumpcontact()">
            <span>BOOK SERVICE</span>
            <img src="../../assets/images/home/right.png" />
          </button> -->
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="middletittle">FEATURED COLLECTIONS</div>
    <div class="middle">
      <div class="texttitle">
          <van-button class="btn_anniu" @click="change(0)" :class="{ newStyle:0===number}">
            NEW ARRIVALS
          </van-button>
          <!-- <button class="btn_anniu" @click="change(1)" :class="{ newStyle:1===number}">
            <span>SEARCH INVENTORY</span>
          </button> -->
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
          <div class="textcard" v-for="(item,index) in information" :key="index" @click="jumpcardetail(item)">
            <div class="imgcard">
              <img :src="item.photo[0]" />
            </div>
            <div class="titlecard" >
              <span >{{item.year}} {{item.make}}{{item.model}}</span>
            </div>
            <div class="contentcard">
              <span class="contentcard-price">${{item.price}}</span>
              <span class="contentcard-info">Excl . Gov's Charges</span>
            </div>
            <div class="break" ></div>
            <div class="detailcard" >
              <span >{{item.odometer}}  kms</span>
              <!-- <span >{{item.body}}</span> -->
              <span>{{item.fueltype.substring(0,6)}}</span>
              <span >{{item.geartype.slice(0,4)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="middletittle">OUR SERVICE</div>
    <div class="swiper">
      <van-swipe :autoplay="5000" indicator-color="black">
        <van-swipe-item v-for="(item,index) in service" :key="index" @click="jumppage(index)">
          <div class="card">
            <img :src="item.targeUrl" />
            <div class="info">
              <p>{{ item.secondtitle }}</p>
              <span>{{ item.describtion }}</span>
            </div>
          </div>
        </van-swipe-item>
        <!-- <van-swipe-item>
          <div class="card">
            <img src="../../assets/images/home/JVS00345-4.jpg" />
            <div class="info">
              <p>SELL YOUR CAR</p>
              <span>SpecBase is a fully interactive online Showroom with specs, photos, and video showcase of RVs in your inventory directly on your website.</span>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="card">
            <img src="../../assets/images/home/JVS00366-Edit-3.jpg" />
            <div class="info">
              <p>VISIT OUR STORE</p>
              <span>SpecBase is a fully interactive online Showroom with specs, photos, and video showcase of RVs in your inventory directly on your website.</span>
            </div>
          </div>
        </van-swipe-item> -->
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { describtion } from '@/api'
import { car } from '@/api'
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
     number: 0 ,
     information: [
      ],
      service: [],
      itemList: []
    }
  },
  created() {
    this.desc()
    this.services()
    this.allCar()
  },
  methods: {
    jumpcontact() {
      this.$router.push('/contact')
    },
    jumpcardetail(item) {
      this.$router.push({path:'/carDetail', query: {item: item}})
    },
    // 车辆信息
    allCar() {
      car({
        current: '1',
        pageSize: '8',
        make: '',
        yearStart: '',
        yearEnd: '',
        priceStart: '',
        priceEnd: '',
        orderByPrice: '1',
        orderByYear: '1'
      }).then(car => {
        // this.information = car.data.records
        this.information = []
        car.data.records.forEach(ele => {
            const item = {
                year: ele.year,
                fueltype: ele.fueltype,
                make: ele.make,
                price: ele.priceDesc,
                odometer: ele.odometer,
                drive: ele.drive,
                body: ele.body,
                model: ele.model,
                geartype: ele.geartype,
                enginesize: ele.enginesize,
                cylinders: ele.cylinders,
                doornum: ele.doornum,
                color: ele.color,
                photo: ele.photo.split(',')
            }
            this.information.push(item)
        })
        console.log(this.information, 'car')
        const makesList = []
        car.data.records.forEach(ele => {
          const makes = ele.make
          if(makesList.indexOf(makes) === -1) {
            makesList.push(makes)
            // this.makeList.push(item)
          }
        })
        // const lengths = makesList.length
        // for(i === lengths,)
          console.log('10',makesList.length)
          for(var i = 0; i < makesList.length; i++) {
            const item = {
              mak: makesList[i]
            }
            this.makeList.push(item)
          }
          console.log('0',this.makeList)
      })
    },
    // 轮播图
    desc() {
      describtion({
        current: '1',
        pageSize: '10',
        title: 'FIRST'
      }).then(res => {
        console.log(res, '1212')
        res.data.records.forEach(ele => {
          const arr = ele.describtion.split('-')
          const item = {
            targeUrl: ele.targeUrl,
            span: arr[0],
            span1: arr[1],
            secondtitle: ele.secondtitle,
            describtion: ele.describtion
          }
          this.itemList.push(item)
        })
        console.log('01',this.itemList )
      })
    },
    // our services
    services() {
      describtion({
        current: '1',
        pageSize: '10',
        title: 'OUR SERVICES'
      }).then(services => {
        services.data.records.forEach(ele => {
          const item = {
            targeUrl: ele.targeUrl,
            secondtitle: ele.secondtitle,
            describtion: ele.describtion
          }
          this.service.push(item)
        })
        console.log(this.service, '1212')
      })
    },
    // jumpcontact() {
    //   this.$router.push('/contact')
    // },
    jumpshowroom() {
      this.$router.push('/showRoom')
    },
    change: function (item) {
            this.number = item; //重要处
          },

    jumppage(index){
      if(index == 0){
        this.$router.push('/showRoom')
      }else if(index == 1){
        this.$router.push('/sell')
      }else {
        this.$router.push('/about')
      }
    },
  },
}
</script>

<style lang="less" scoped>
/deep/.van-button__content {
  width: 100%;
}
.homeview {
  margin-bottom: 50px;
}
.lunbo {
  height: 230px;
  width: 100%;
  // background-image: url(../../assets/images/home/JVS00151-Edit-4.jpg);
  background-size:cover;
  margin-top: -20px;
  .img1 {
    width: 100%;
    height: 230px;
  }
  .lunbotext {
    text-align:left;
    position: absolute;
    top: -17px;
    padding:38px 0 0 42px;
    .lunbotexttitle {
      width: 160px;
      height: 60px;
      font-size: 24px;
      font-family: DINCondensed-Bold, DINCondensed;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 28px;
    }
    .lunbotextinfo {
      width: 127px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Light;
      font-weight: 300;
      color: #FFFFFF;
      line-height: 30px;
    }
    // button {
    //   width: 116px;
    //   height: 29px;
    //   border: 1px solid #FFFFFF;
    //   margin-top: 28px;
    //   background-color: transparent;
    //   span {
    //     width: 64px;
    //     height: 65px;
    //     font-size: 14px;
    //     font-family: DINCondensed-Bold, DINCondensed;
    //     font-weight: bold;
    //     color: #FFFFFF;
    //     line-height: 28px;
    //     margin:0 6%;
    //   }
    //   img {
    //     height: 8px;
    //     width: 8px;
    //     padding-bottom: 1px;
    //   }
    // }
  }
}
.middletittle {
  width: 300px;
  font-size: 24px;
  font-family: DINCondensed-Bold, DINCondensed;
  // font-weight: bold;
  color: #151515;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-left: 20px;
  text-align: left;
}

.middle {
  background: #FFFFFF;
  margin: 0 10px;
  .texttitle {
    margin: 0 10px;
    text-align: left;
    .btn_anniu {
      background-color: transparent;
      border: 0;
      margin-top: 5%;
      span {
        font-size: 16px;
        font-family: DINCondensed-Bold, DINCondensed;
        color: #909090;
        padding-bottom: 3px;
      }
    }
    .newStyle{
      padding-top: 5px;
      height: 40px;
      border: 2px solid #12100f;
      border-bottom: none;
      span{
        font-size: 16px;
        color: #212020;
      }
    }
    .showall {
      margin-top: 5%;
      float: right;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #212020;
      line-height: 40px;
    }
    img {
      height: 8px;
      width: 8px;
      margin-left: 8px;
    }
  }
  .break {
    margin-top: -1px;
    border-bottom: 2px solid #12100f;
  }
  .textinfo {
    width: 120px;
    height: 30px;
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #909090;
    line-height: 30px;
    margin: 10px 120px 10px 120px;
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
          font-size: 16px;
          color: #212020;
          line-height: 16px;
        }
      }
      .contentcard {
        padding-bottom: 10px;
        padding-right: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .contentcard-price {
          font-family:DINCondensed-Bold;
          font-size: 16px;
          color: #212020;
          line-height: 16px;
        }
        .contentcard-info {
          height: 11px;
          font-size: 11px;
          color: #909090;
          line-height: 13px;
          font-family:DINCondensed-Bold;
        }
      }
      .break {
        border-bottom: 1px solid #979797;
        opacity:0.1;
        margin-right: 7px;
      }
      .detailcard {
        padding-top: 10px;
        padding-right: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 11px;
          font-family:PingFangSC-Regular;
          color: #909090;
          line-height: 16px;
          white-space: nowrap;
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
  font-size: 24px;
  font-family: DINCondensed-Bold, DINCondensed;
  color: #151515;
}

.info span{
  color: #909090;
  font-size: 12px;
  font-family:PingFangSC-Regular;
  line-height: 2;
}

</style>