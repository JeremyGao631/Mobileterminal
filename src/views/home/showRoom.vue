<template>
  <div class="showroom">
    <div class="lunbo" />
    <div class="tittle">ONLINE SHOWROOM</div>
    <!-- <button class="middlebtn" @click="jumpcontact()">
        <span>BOOK SERVICE</span>
        <img src="../../assets/images/home/blackright.png" />
    </button> -->
    <div class="middle">
      <div class="top">
        <div class="middletittle">START A NEW SEARCH</div>
        <div class="top-select" @click="select()">
            <img class="img" src="../../assets/images/onlineshowroom/silice.png" />
            <span class="select">Filter/Sort</span>
        </div>
      </div>
      <div class="texttitle">
          <!-- <button class="btn_anniu" >
            <span>Make</span>
            <img src="../../assets/images/onlineshowroom/dropdown.png" />
          </button>
          <button class="btn_anniu" >
            <span>Year</span>
            <img src="../../assets/images/onlineshowroom/dropdown.png" />
          </button>
          <button class="btn_anniu" >
            <span>Price</span>
            <img src="../../assets/images/onlineshowroom/dropdown.png" />
          </button> -->
          <!-- <img  class="imgspecial" src="../../assets/images/onlineshowroom/choose.png" />
          <span class="showall" @click="jumpshowroom()">Date: High to Low</span>
          <img class="showallspecial" src="../../assets/images/onlineshowroom/dropdown.png" /> -->
      </div>
      <div class="textcontent">
        <div v-show='0===number'>
          <div class="textcard" v-for="(item,index) in information" :key="index" @click="jumpcardetail(item)">
            <div class="imgcard">
              <img :src="item.photo[0]" />
            </div>
            <div class="titlecard" >
              <span >{{item.year}} {{item.make}} {{item.model}}</span>
            </div>
            <div class="contentcard">
              <span class="contentcard-price">${{item.price}}</span>
              <span class="contentcard-info">Excl . Gov's Charges</span>
            </div>
            <div class="break" ></div>
            <div class="detailcard" >
              <span >{{item.odometer}}kms</span>
              <!-- <span >{{item.body}}</span> -->
              <span>{{item.fueltype.substring(0,6)}}</span>
              <span >{{item.geartype.slice(0,4)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="showPopup" position="left" closeable :style="{ height: '100%', width: '85%'}">
      <div class="popup-top">
        <div class="select1">
          <!-- make筛选-->
            <div class="make">
              <span class="span1">Make</span>
              <span v-if="showMake" @click="make1(1)" class="span2">—</span>
              <span v-else @click="make1(2)" style="font-size: 25px;">+</span>
            </div>
            <div v-if="showMake">
              <van-checkbox-group v-for="(item, idx) in makeList.slice(0,3)" v-model= "makeSelect" :key="idx" >
                <van-checkbox shape="square" :name="item.mak" @click="sleMak(makeSelect)">{{ item.mak }}</van-checkbox>
              </van-checkbox-group>
              <!-- <van-radio :name="makeList.length" @click="sleMaks()" shape="square">Not selected</van-radio> -->
            </div>
            <div v-if="showMake && showView">
              <van-checkbox-group v-for="(item, idx) in makeList.slice(3)" v-model= "makeSelect" :key="idx">
                <van-checkbox shape="square" :name="item.mak" @click="sleMak(makeSelect)">{{ item.mak }}</van-checkbox>
              </van-checkbox-group>
              <!-- <van-radio :name="makeList.length" @click="sleMaks()" shape="square">Not selected</van-radio> -->
            </div>
          <!-- </van-checkbox-group> -->
        </div>
        <div class="view">
          <span class="span">VIEW ALL</span>
          <van-icon v-if="showView" @click="showArrow" name="arrow-up" color="#000" size="12" style="padding-bottom: 3px;" />
          <van-icon v-else name="arrow-down" @click="showArrow1" color="#000" size="12" style="padding-bottom: 3px;" />
        </div>
          <!-- year筛选 -->
        <div class="bottom">
          <div class="make">
              <span class="span1">Year</span>
              <span v-if="showYear" @click="showyear(1)" class="span2">—</span>
              <span v-else @click="showyear(2)" style="font-size: 25px;">+</span>
          </div>
          <van-slider v-model="year" range :max="maxYears" :min="minYears" @change="onChangeYear(year)" v-show="showYear"/>
          <div class="int" v-show="showYear">
            <van-field v-model="minYear" readonly/>
            <van-field v-model="maxYear" readonly/>
          </div>
          <!-- price筛选-->
          <div class="break" style="border-top: 1px solid #151515; margin-top: 20px;margin-bottom:30px;" />
          <div class="make">
              <span class="span1">Price</span>
              <span v-if="showPrice" @click="showprice(1)" class="span2">—</span>
              <span v-else @click="showprice(2)" style="font-size: 25px;">+</span>
          </div>
          <van-slider v-model="price" range :max="maxPrices" :min="minPrices" @change="onChangePrice" v-show="showPrice"/>
          <div class="ints" v-show="showPrice">
            <div class="minprice">${{minPrice}}</div>
            <div class="maxprice">${{maxPrice}}</div>
          </div>
        </div>
          <!-- sort by筛选-->
        <div class="select1" style="padding-bottom: 50px;">
          <van-radio-group v-model="sort" @change="changeFn">
            <div class="make">
              <span class="span1">Sort by</span>
              <span v-if="showSort" @click="sort1(1)" class="span2">—</span>
              <span v-else @click="sort1(2)" style="font-size: 25px;">+</span>
            </div>
            <div v-if="showSort">
              <van-radio name="1" @click="sleSort()" >Price: Low to High</van-radio>
              <van-radio name="2" @click="sleSort1()" >Price: High to Low</van-radio>
              <van-radio name="3" @click="sleSort2()" >Date: High to Low</van-radio>
              <van-radio name="4" @click="sleSort3()" >Date: Low to High</van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { car } from '@/api';
import loading from '@/components/Loading/main.js'
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
     number: 0 ,
     showMake: true,
     showSort: true,
     showYear: true,
     showPrice: true,
     make: '',
     sort: '',
     checkRadioFlag: false,
     showPopup: false, // 筛选页
     showView: false,
     makeList: [], // 筛选选项
     makeSelect: [], //选中项
     minYear: '',
     maxYear: '',
     minYears: '', // 筛选时
     maxYears: '', // 筛选时
     minPrice: 0,
     maxPrice: '',
     minPrices:'',
     maxPrices: '',
     year: [],
     price: [],
     information: [],
     information1: [],
     orderByPrice: 1,
     orderByYear: 1,
     checked: this.makeList
    }
  },
  created() {
    this.allCar()
    // console.log(this.minYear,this.maxYear, '12')
  },
  methods: {
    // jumpcontact() {
    //   this.$router.push('/contact')
    // },
    change: function (item) {
            this.number = item; //重要处
          },
    jumpcardetail(item) {
      this.$router.push({path:'/carDetail', query: {item: item}})
    },
    // make
    make1(val) {
      if(val===1){
        this.showMake = false
      } else if (val===2) {
        this.showMake = true
      }
    },
    // sort by
    sort1(val) {
      if(val===1) {
        this.showSort = false
      } else if(val===2) {
        this.showSort = true
      }
    },
    showyear(val) {
      if(val===1) {
        this.showYear = false
      } else if(val===2) {
        this.showYear = true
      }
    },
    showprice(val) {
      if(val===1) {
        this.showPrice = false
      } else if(val===2) {
        this.showPrice = true
      }
    },
    // 查询全部
    allCar() {
      car({
        current: '1',
        pageSize: '5000',
        make: '',
        yearStart: '',
        yearEnd: '',
        priceStart: '',
        priceEnd: '',
        orderByPrice: this.orderByPrice,
        orderByYear: this.orderByYear
      }).then(car => {
        this.information = car.data.records
        this.maxPrice = car.data.records[0].price
        this.minPrice = car.data.records[car.data.records.length-1].price 
        this.maxPrices = car.data.records[0].price
        this.minPrices = car.data.records[car.data.records.length-1].price
        this.price = [this.minPrice,this.maxPrice]
        console.log(this.information, 'car')
        this.makeList = []
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
          this.information = []
          car.data.records.forEach(ele => {
            const item = {
                year: ele.year,
                fueltype: ele.fueltype,
                make: ele.make,
                price: ele.priceDesc,
                odometer: ele.odometer,
                advTitle: ele.advTitle,
                advbody: ele.advbody,
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
      })
      car({
        current: '1',
        pageSize: '500',
        make: '',
        yearStart: '',
        yearEnd: '',
        priceStart: '',
        priceEnd: '',
        // orderByPrice: '1',
        orderByYear: '1'
      }).then(res => {
        console.log('res',res)
        this.maxYear = res.data.records[0].year
        this.minYear = res.data.records[res.data.records.length-1].year
        this.maxYears = res.data.records[0].year
        this.minYears = res.data.records[res.data.records.length-1].year
        this.year = [this.minYear,this.maxYear]
        console.log('12',this.year)
      })
    },
    sleMaks() {
      this.allCar()
    },
    select() {
      this.showPopup = true
    },
    showArrow() {
      this.showView = false
    },
    showArrow1() {
      this.showView = true
    },
    // sort筛选
    sleSort() {
      this.orderByPrice = 2
      if(this.checkRadioFlag) {
          this.sort = '';
        }
      this.checkRadioFlag = true;
      if(!car.disableLoading) {
        loading({
          title: 'Requesting',
          size: 30,
          textSize: 18
        })
      }
      car({
        current: '1',
        pageSize: '500',
        make: this.makeSelect.toString(),
        yearStart: this.minYear,
        yearEnd: this.maxYear,
        priceStart: this.minPrice,
        priceEnd: this.maxPrice,
        orderByPrice: this.orderByPrice,
        // orderByYear: this.orderByYear
      }).then(car => {
        // this.information = car.data.records
        if (car.code !== 0 ) {
          setTimeout(() => loading.close(), 1000)
        } else {
          setTimeout(() => loading.close(), 1000)
        }
        this.information = []
          car.data.records.forEach(ele => {
            const item = {
                year: ele.year,
                fueltype: ele.fueltype,
                make: ele.make,
                price: ele.priceDesc,
                odometer: ele.odometer,
                body: ele.body,
                advbody: ele.advbody,
                advTitle: ele.advTitle,
                drive: ele.drive,
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
        console.log('1', this.information)
        })
    },
    sleSort1() {
      this.orderByPrice = 1
      if(this.checkRadioFlag) {
          this.sort = '';
        }
      this.checkRadioFlag = true;
      if(!car.disableLoading) {
        loading({
          title: 'Requesting',
          size: 30,
          textSize: 18
        })
      }
      car({
        current: '1',
        pageSize: '500',
        make: this.makeSelect.toString(),
        yearStart: this.minYear,
        yearEnd: this.maxYear,
        priceStart: this.minPrice,
        priceEnd: this.maxPrice,
        orderByPrice: this.orderByPrice,
        // orderByYear: this.orderByYear
      }).then(car => {
        // this.information = car.data.records
        if (car.code !== 0 ) {
          setTimeout(() => loading.close(), 1000)
        } else {
          setTimeout(() => loading.close(), 1000)
        }
        this.information = []
          car.data.records.forEach(ele => {
            const item = {
                year: ele.year,
                fueltype: ele.fueltype,
                make: ele.make,
                price: ele.priceDesc,
                odometer: ele.odometer,
                advbody: ele.advbody,
                advTitle: ele.advTitle,
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
        console.log('1', this.information)
        })

    },
    sleSort2() {
      this.orderByYear = 1
      if(this.checkRadioFlag) {
          this.sort = '';
        }
      this.checkRadioFlag = true;
      if(!car.disableLoading) {
        loading({
          title: 'Requesting',
          size: 30,
          textSize: 18
        })
      }
      car({
        current: '1',
        pageSize: '500',
        make: this.makeSelect.toString(),
        yearStart: this.minYear,
        yearEnd: this.maxYear,
        priceStart: this.minPrice,
        priceEnd: this.maxPrice,
        // orderByPrice: this.orderByPrice,
        orderByYear: this.orderByYear
      }).then(car => {
        // this.information = car.data.records
        if (car.code !== 0 ) {
          setTimeout(() => loading.close(), 1000)
        } else {
          setTimeout(() => loading.close(), 1000)
        }
        this.information = []
          car.data.records.forEach(ele => {
            const item = {
                year: ele.year,
                fueltype: ele.fueltype,
                make: ele.make,
                price: ele.priceDesc,
                odometer: ele.odometer,
                body: ele.body,
                advbody: ele.advbody,
                advTitle: ele.advTitle,
                drive: ele.drive,
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
        console.log('1', this.information)
        })

    },
    sleSort3() {
      this.orderByYear = 2
      if(this.checkRadioFlag) {
          this.sort = '';
        }
      this.checkRadioFlag = true;
      if(!car.disableLoading) {
        loading({
          title: 'Requesting',
          size: 30,
          textSize: 18
        })
      }
      car({
        current: '1',
        pageSize: '500',
        make: this.makeSelect.toString(),
        yearStart: this.minYear,
        yearEnd: this.maxYear,
        priceStart: this.minPrice,
        priceEnd: this.maxPrice,
        // orderByPrice: this.orderByPrice,
        orderByYear: this.orderByYear
      }).then(car => {
        // this.information = car.data.records
        if (car.code !== 0 ) {
          setTimeout(() => loading.close(), 1000)
        } else {
          setTimeout(() => loading.close(), 1000)
        }
        this.information = []
          car.data.records.forEach(ele => {
            const item = {
                year: ele.year,
                fueltype: ele.fueltype,
                make: ele.make,
                price: ele.priceDesc,
                odometer: ele.odometer,
                drive: ele.drive,
                advbody: ele.advbody,
                advTitle: ele.advTitle,
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
        console.log('1', this.information)
        })

    },
    changeFn() {
        this.checkRadioFlag = false;
      },
      // make筛选
    sleMak(makeSelect) {
      console.log('1', makeSelect.toString())
      if(!car.disableLoading) {
        loading({
          title: 'Requesting',
          size: 30,
          textSize: 18
        })
      }
      car({
        current: '1',
        pageSize: '1000',
        make: makeSelect.toString(),
        yearStart: this.minYear,
        yearEnd: this.maxYear,
        priceStart: this.minPrice,
        priceEnd: this.maxPrice,
        orderByPrice: this.orderByPrice,
        orderByYear: this.orderByYear
      }).then(car => {
        // this.information = car.data.records
        if (car.code !== 0 ) {
          setTimeout(() => loading.close(), 1000)
        } else {
          setTimeout(() => loading.close(), 1000)
        }
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
                advbody: ele.advbody,
                advTitle: ele.advTitle,
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
        // this.maxPrice = car.data.records[0].price
        // this.makeList = []
        // this.minPrice = car.data.records[car.data.records.length-1].price
        // this.price = [this.minPrice,this.maxPrice]
        // const lengths = makesList.length
        // for(i === lengths,)
         
      })
    },
    // 选中日期或者价格时
    selects() {
      if(!car.disableLoading) {
        loading({
          title: 'Requesting',
          size: 30,
          textSize: 18
        })
      }
      car({
        current: '1',
        pageSize: '1000',
        make: this.makeSelect.toString(),
        yearStart: this.minYear,
        yearEnd: this.maxYear,
        priceStart: this.minPrice,
        priceEnd: this.maxPrice,
        orderByPrice: this.orderByPrice,
        orderByYear: this.orderByYear
      }).then(car => {
        // this.information = car.data.records
        if (car.code !== 0 ) {
          setTimeout(() => loading.close(), 1000)
        } else {
          setTimeout(() => loading.close(), 1000)
        }
        this.information = []
          car.data.records.forEach(ele => {
            const item = {
                year: ele.year,
                fueltype: ele.fueltype,
                make: ele.make,
                price: ele.priceDesc,
                odometer: ele.odometer,
                advbody: ele.advbody,
                advTitle: ele.advTitle,
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
      })

    },
    onChangeYear() {
      console.log(this.year, 'year')
      this.minYear = this.year[0]
      this.maxYear = this.year[1]
      this.selects()
    },
    onChangePrice() {
      console.log(this.price, 'price')
      this.minPrice = this.price[0]
      this.maxPrice = this.price[1]
      this.selects()
    },
    year1() {
      this.maxYear -= 1
    },
    price1() {
      this.maxPrice -= 5
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
  background-image: url(../../assets/images/home/JVS00034-4.jpg);
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
  font-size: 30px;
  font-family: DINCondensed-Bold, DINCondensed;
  color: #151515;
  padding-top: 40px;
  padding-bottom: 20px;
  text-align: center;
  margin: 0 auto;
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
  // width: 355px;
  background: #FFFFFF;
  margin: 0 10px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .middletittle {
          width: 161px;
          height: 50px;
          font-size: 24px;
          font-family: DINCondensed-Bold, DINCondensed;
          color: #151515;
          line-height: 68px;
          text-align: left;
          margin: 0 10px;
          white-space: nowrap;
       }
       .top-select {
          height: 50px;
          line-height: 68px;
          margin: 0 0.26667rem;
        .img {
          width: 16px;
          height: 17px;
          position: relative;
          top: 3px;
          margin-right: 5px;
          padding-top: 3px;
        }
        .select {
          width: 36px;
          height: 17px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #151515;
          line-height: 17px;
        }
       }
  }
  .texttitle {
    margin: 0px 10px;
    display: flex;
    justify-content: space-between;
    // margin-left: 10px;
    // margin-right: 10px;
    border-bottom: 1px solid #d6cece;
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
        height: 18px;
        position:relative;
        top:3px;
        width: 14px;
        padding-bottom: 0;
        margin-right: 4px;
        margin-left: 20px;
    }
    .showallspecial {
        margin-right: 0;
    }
  }
  .textcontent {
    overflow: hidden;
    margin-top: 20px;
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
        padding-right:5px;
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
          // width: 80px;
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
        padding-top:10px;
        padding-right: 10px;
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
.popup-top {
  // margin-top: 45px;
  margin: 45px 20px 0;
  .select1 {
    .make {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding-top: 30px;
      margin-bottom: 15px;
      border-top: 1px solid #151515;
      .span1 {
        // width: 34px;
        // height: 60px;
        font-size: 20px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #151515;
        // line-height: 60px;
      }
      .span2 {
        width: 10px;
        // height: 1px;
        // line-height: 60px;
        color: #151515;
      }
    }
  }
  .view {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #151515;
    padding-bottom: 20px;
    padding-top: 10px;
    .span {
      width: 60px;
      // height: 130px;
      font-size: 18px;
      margin-right: 10px;
      font-family: DINCondensed-Bold, DINCondensed;
      font-weight: bold;
      color: #151515;
      white-space: nowrap;
      // line-height: 130px;
    }
  }
  .bottom {
    margin-top: 25px;
    .make {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 15px;
      .span1 {
        width: 34px;
        // height: 60px;
        font-size: 20px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #151515;
        // line-height: 60px;
      }
      .span2 {
        width: 10px;
        // height: 1px;
        // line-height: 60px;
        color: #151515;
      }
      .span3 {
        // width: 10px;
        // height: 15px;
        // line-height: 60px;
        font-size: 25px;
        color: #151515;
      }
    }
    .int {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    .ints {
        margin:10px 10px 100px 10px;
        position: relative;
        .minprice {
          line-height: 48px;
          position: absolute;
          left: 0;
          width: 110px;
          height: 48px;
          background-color: #F4F6F8;
          font-size: 16px;
          font-family: PingFangSC-Light;
          font-weight: 300;
          color: #151515;
        }
        .maxprice {
          line-height: 48px;
          position: absolute;
          right: 0;
          width: 110px;
          height: 48px;
          background-color: #F4F6F8;
          font-size: 16px;
          font-family: PingFangSC-Light;
          font-weight: 400;
          color: #151515;
      }
    }
    .showprice {
      position: relative;
    }
  }
}
/deep/.van-icon-cross:before {
  color: #000;
}
/deep/ .van-radio {
  font-size: 14px;
  font-family: PingFangSC-Light, PingFang SC;
  color: #151515;
  margin: 20px 0 ;
}
/deep/ .van-radio__label {
  margin-left: 20px;
}
/deep/ .van-radio__icon--round .van-icon {
  border-radius: 0;
}

/deep/ .van-checkbox {
  font-size: 14px;
  font-family: PingFangSC-Light, PingFang SC;
  color: #151515;
  margin: 20px 0 ;
}
/deep/ .van-checkbox__label {
  margin-left: 20px;
}
/deep/.van-slider__bar {
  background-color: #000;
  width: 80%;
}
/deep/.van-slider {
  margin: 34px auto;
  width: 200px;
}
/deep/  .van-slider__button {
    height: 20px;
    width: 20px;
    background-color:#151515;
    border: 3px solid #FFFFFF;
    box-shadow:2px 2px 10px #909090;
}
/deep/.van-field__body {
  background-color: #f4f6f8;
  width: 110px;
  height: 40px;
}
/deep/.van-field__control {
  color: #151515;
  font-family: PingFangSC-Light, PingFang SC;
  text-align: center;
  font-size: 14px;
}

/deep/ .van-checkbox__icon--checked .van-icon {
    color: black;
    background-color: transparent;
    border-color: #c8c9cc;
    font-weight: bold;
}
/deep/ .van-radio__icon--checked .van-icon{
    color: black;
    background-color: transparent;
    border-color: #c8c9cc;
    font-weight: bold;
}
</style>