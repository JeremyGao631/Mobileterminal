<template>
    <div class="page">
        <img class="top-img" :src="firstPhoto" alt="">
        <div class="smallimg">
            <!-- <img :src="informations.photo[1]" />
            <img :src="informations.photo[2]" />
            <img :src="informations.photo[3]" />
            <img :src="informations.photo[4]" />
            <img :src="informations.photo[5]" />
            <img :src="informations.photo[6]" /> -->
            <van-swipe :width="65" :autoplay="200000000" loop :show-indicators= false>
                <van-swipe-item v-for="(item,idx) in photos" :key="idx">
                    <img :src="item.img" alt="" @click="choosePhoto(item)">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="title">
            <div class="title-top">
                <div class="price"><span class="span1">$</span>{{ price }}</div>
                <span class="info">Excl . Gov's Charges</span>
            </div>
            <div class="title-bottom">{{ informations.year }} {{ informations.make }} {{ informations.model }}</div>
        </div>
        <div class="detail">
            <div class="littleshow">
                <div class="showleft">
                    <img src="../../assets/images/carDetail/odometer.png" />
                    <div class="showlefttext">
                        <span class="texttop">{{ informations.odometer }}</span>
                        <span class="texttopright"> kms</span>
                        <br />
                        <span class="textbottom">Odometer</span>
                    </div>
                </div>
                <div class="showleft">
                    <img src="../../assets/images/carDetail/transmission.png" />
                    <div class="showlefttext">
                        <span class="texttop">{{ informations.geartype }}</span>
                        <br />
                        <span class="textbottom">Transmission</span>
                    </div>
                </div>
                <div class="showleft">
                    <img src="../../assets/images/carDetail/rili.jpg" />
                    <div class="showlefttext">
                        <span class="texttop">{{ informations.year }}</span>
                        <br />
                        <span class="textbottom">Year</span>
                    </div>
                </div>
            </div>
            <div class="list" v-for="index in List" :key="index">
                <div class="listresult">
                    <span class="listname">{{index.name}}</span>
                    <span class="result">{{index.result}}</span>
                </div>
                <div style="clear:both;"></div>
            </div>
            <div class="comment">
                <div class="comment-title">DEALER COMMENTS</div>
                <div class="comment-span">The team at Autohome AU make selling your car as easy and convenient as possible.Simply send us your vehicle details using the form below and let our team take care of the rest. Contact us now.</div>
            </div>
        </div>
        <div class="contact">
            <div class="contact-title">BOOK INSPECTION</div>
            <div class="inputtitle">Name</div>
            <van-cell-group>
                <van-field v-model="form.name" />
            </van-cell-group>
            <div class="inputtitle">Phone</div>
            <van-cell-group>
                <van-field maxlength="10" v-model="form.phone" />
            </van-cell-group>
            <div class="inputtitle">Time</div>
            <van-cell-group>
                <van-field v-model="form.time" readonly @click="showTime = true" />
                <van-calendar v-model="showTime" confirm-text="sure" @confirm="onConfirm" />
            </van-cell-group>
                <!-- <van-cell class :value="date" @click="show = true" /> -->
            <div class="submit">
                <van-button @click="submit()">SUBMIT</van-button>
                <!-- <img class="imgs" src="../../assets/images/home/right.png" alt=""> 甲方要求删除 -->
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-title">SIMILAR VEHICLES</div>
            <van-swipe :loop="true" :width="162" :autoplay="2000">
                <van-swipe-item v-for="(item, index) in information1" :key="index" @click="jumpcardetail(item)">
                <div class="textcontent">
                <div class="textcard">
                    <img class="img" :src="item.photo[0]" />
                    <div class="year">{{item.year}} {{item.make}} {{item.model}}</div><br />
                    <div class="contentcard">
                        <span class="contentcard-price">${{item.price}}</span>
                        <span class="contentcard-info">Excl . Gov's Charges</span>
                    </div>
                    <div class="detailcard" >
                        <span >{{item.odometer}}kms</span>
                        <!-- <span >{{item.body}}</span> -->
                        <span>{{item.fueltype.substring(0,6)}}</span>
                        <span >{{item.geartype}}</span>
                    </div>
                </div>
            </div>
                </van-swipe-item>
            </van-swipe>

        </div>
    </div>
</template>
<script>
import { Toast } from 'vant'
import { inspection } from '@/api'
import { car } from '@/api'
import { Locale } from 'vant';
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US';

Locale.use('en-US', enUS);
export default {
    data() {
        return {
            showTime: false, // 时间控件
            price: '',
            // informations: {},
            form: {
                name: '',
                email: '',
                phone: '',
                time: ''
            },
            List: [],
            information1: [
            ],
            photo: {}, // 前一页面的图片参数
            photos: [],
            firstPhoto: '', // 第一张图片
            informations: []

        }
    },
    created() {
        this.informations = this.$route.query.item
        console.log(this.information,"1111111111111")
        this.price = this.informations.price
        this.firstPhoto = this.$route.query.item.photo[0]
        console.log('123', this.price)
        this.init()
        this.allCar()
        this.setPhoto()
    },
    methods: {
        setPhoto() {
            this.photo = this.$route.query.item.photo
            this.photos = []
            for(var i = 0; i<=this.photo.length; i++ ) {
                const img = {
                    img: this.photo[i]
                }
                this.photos.push(img)
            }
            console.log(this.photos, '1212')
        },
        // 图片点击事件
        choosePhoto(item){
            this.firstPhoto = item.img
        },
        init() {
            this.List = [
                {
                    name: 'Make',
                    result: this.informations.make
                },
                {
                    name: 'Model',
                    result: this.informations.model
                },{
                    name: 'Body Type',
                    result: this.informations.geartype
                },{
                    name: 'Color',
                    result: this.informations.color
                },{
                    name: 'Engine Size',
                    result: (this.informations.enginesize / 1000).toFixed(1)
                },{
                    name: 'Fuel Type',
                    result: this.informations.fueltype
                },{
                    name: 'Cylinders',
                    result: this.informations.cylinders
                },{
                    name: 'Doors',
                    result: this.informations.doornum
                },{
                    name: 'Drive',
                    result: this.informations.drive
                },
                ]
        },
        jumpcardetail(item) {
            this.$router.push({path:'/carDetail', query: {item: item}})
            // this.informations = item
        },
        allCar() {
            car({
                current: '1',
                pageSize: '500',
                make: '',
                yearStart: '',
                yearEnd: '',
                priceStart: '',
                priceEnd: '',
                orderByPrice: '1',
                orderByYear: '1'
            }).then(car => {
                // this.information1 = car.data.records
                this.information1 = []
                car.data.records.forEach(ele => {
                    const item = {
                        year: ele.year,
                        fueltype: ele.fueltype,
                        make: ele.make,
                        price: ele.priceDesc,
                        odometer: ele.odometer,
                        body: ele.body,
                        model: ele.model,
                        geartype: ele.geartype,
                        enginesize: ele.enginesize,
                        cylinders: ele.cylinders,
                        doornum: ele.doornum,
                        color: ele.color,
                        photo: ele.photo.split(',')
                    }
                    this.information1.push(item)
                })
                console.log(this.information1, 'car')

            })
            },
        submit() {
            if (this.form.name === '' || this.form.phone === '' || this.form.time === '') {
                Toast('Please check whether the page information is complete!')
            } else {
            inspection({
                // 缺少email字段
                        name:this.form.name,
                        phone: this.form.phone,
                        email:this.form.email,
                        time: this.form.time,
            }).then( res => {
                console.log(res, '提交成功')
                if (res.code === 0) {
                    Toast('Your information has been submitted!')
                }
            })
            }

        },
        onConfirm(value) {
            const formatDate = (date) => `${date.getFullYear()}${date.getMonth() + 1}/${date.getDate()}`;
            console.log(this)
            this.showTime = false 
            // eslint-disable-next-line no-undef
            this.form.time = formatDate(value)
        }
    }
}
</script>

<style lang="less" scoped>
// 日期
/deep/.van-calendar__popup.van-popup--bottom, .van-calendar__popup.van-popup--top {
    height: 64%;
}
/deep/.van-field__body {
    border: 1px solid #151515;
    margin-left: -13px;
    height: 35px;
    padding: 0 3px;
}
.page {
    width: 100%;
    background-color: #f4f6f8;
    .top-img {
        width: 100%;
        height: 207px;
    }
    .smallimg {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-top: 5px;
        img {
            width:55px;
            height: 40px;
            float:left;
            margin-right:5px;
            object-fit: cover;
            }
            img:nth-last-child(1){
            margin:0px;
            }
        }
    .title {
        margin:15px 10px 10px 10px;
        background-color: #fff;
        padding-top: 21px;
        .title-top {
            display: flex;
            align-items: center;
            margin-left: 10px;
            .price {
                width: 154px;
                height: 30px;
                font-size: 30px;
                text-align: left;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #151515;
                line-height: 24px;
                letter-spacing: 1px;
                .span1 {
                    font-size: 21px;
                }
            }
            .info {
                height: 11px;
                width: 100%;
                text-align: left;
                font-size: 11px;
                margin-left:7px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #909090;
                line-height: 13px;
            }
        }
        .title-bottom {
            // width: 227px;
            text-align: left;
            height: 50px;
            font-size: 19px;
            margin-left: 10px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #212020;
            line-height: 47px;
        }
        
    }
    .detail {
        background-color: #fff;
        margin: 10px;
        padding: 0 5px;
        .littleshow {
          background-color: white;
          width:100%;
          padding:0 -2px;
          height:80px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          .showleft {
            height: 25px;
            img {
              float:left;
              width: 20px;
              border:1px dashed black;
            //   margin-right:5px;
              padding:5px;
            }
            .showlefttext {
              float:left;
              position: relative;
              top:-37px;
              left:35px;
              height:100%;
              text-align: left;
              letter-spacing: 1px;
              .texttop {
                width: 51px;
                height: 19px;
                font-size: 15.8px;
                font-family: DINAlternate-Bold, DINAlternate;
                font-weight: bold;
                color: #151515;
                line-height: 25px;
              }
              .texttopright {
                    font-size: 12px;
                    font-family: DINAlternate-Bold, DINAlternate;
                    font-weight: bold;
                    color: black;
                    line-height: 18px;
              }
              .textbottom {
                    padding-top: 5px;
                    font-size: 11px;
                    width: 68px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #909090;
                    line-height: 12px;
                }
            }
          }
          .showleft:nth-child(1) {
            margin:0 15px 0 10px;
          }
          .showleft:nth-child(2) {
            margin:0 10px 0 10px;
          }
          .showleft:nth-child(3) {
            margin:0 15px 0 15px;
          }
        }
        .comment {
            padding-bottom: 23px;
            .comment-title {
                // width: 98px;
                text-align: left;
                padding-top:24px;
                padding-bottom:10px;
                font-size: 16px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #151515;
                margin-left: 8px;
            }
            .comment-span{
                // width: 336px;
                height: 72px;
                font-size: 13px;
                text-align: left;
                font-family: PingFangSC-Light, PingFang SC;
                font-weight: 300;
                color: #909090;
                line-height: 18px;
                margin-left: 8px;
            }
        }
        .list {
          margin: 5px 0;
          padding: 5px 0;
          .listresult {
            .listname {
              float:left;
              width:150px;
              font-size: 13px;
              font-family: PingFangSC-Medium, PingFang SC;
              color: #000;
              line-height: 25px;
              margin-right:10px;
              text-align: left;
              opacity: 0.8;
              padding-left: 10px;
            }
            .result {
              float:left;
              font-size: 13px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: bold;
              color: black;
              line-height: 25px;
              text-align: left;
              white-space: nowrap;
            }
          }
        }
        .list:nth-child(2n+1) {
           background-color: #f4f6f8;
        }
        .list:nth-child(2n+2) {
           padding:5px 0;
        }
    }
    .contact {
        background-color: #fff;
        margin: 10px;
        padding: 0 5px;
        // margin-bottom: -85px;BOOK
        .contact-title {
            // width: 135px;
            text-align: left;
            height: 70px;
            font-size: 24px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 80px;
            margin-left: 8px;
        }
        // .contact-input {
        //     .name {
        //         width: 47px;
        //         font-size: 13px;
        //         font-family: PingFangSC-Regular, PingFang SC;
        //         font-weight: 400;
        //         color: #000;
        //         text-align: left;
        //         margin-left: 8px;
        //     }
        //     .message {
        //         width: 93%;
        //         margin-left: -12px;
        //         margin-top: 10px;
        //         height: 198px;
        //         font-size: 14px;
        //         color: #000;
        //         border: 1px solid #151515;
        //     }
        //     /deep/ .van-cell {
        //         padding: 5px 8px 20px 20px;
        //     }
        // }
        .inputtitle {
            width: 100px;
            height: 30px;
            font-size: 13px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            line-height: 30px;
            text-align: left;
            padding-left: 10px;
        }
        .van-cell-group {
            border: 02px solid #151515;
            margin-bottom: 20px;
            img {
                width: 11px;
                height: 13px;
            }
        }
        /deep/ .van-field__body {
            border: 0;
        }
        .submit {
            .van-button--normal {
                margin-top:25px;
                margin-bottom:25px;
                font-size: 16px;
                padding-top: 2px;
                background-color: #000;
                color: #fff;
                width: 147px;
                height: 47px;
                font-family: DINCondensed-Bold, DINCondensed;
            }
            .imgs {
                width: 15px;
                position: relative;
                left: -20px;
                top:7px;
            }
        } 
    }
    .bottom {
        background-color: #fff;
        margin: 10px 10px 40px 10px;
        padding: 0 5px;
        .bottom-title {
            text-align: left;
            font-size: 24px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 60px;
            margin-left: 8px;
        }
        .textcontent {
        overflow: hidden;
        margin-top:10px;
        height: 225px;
        margin-left: 8px;
        .textcard {
            float:left;
            margin-right:10px;
            width: 134px;
            img {
                height: 89px;
                width: 154px;
                object-fit: cover;
                margin-bottom: 10px;
            }
            .year {
                width: 154px;
                text-align: left;
                font-size: 10px;
                margin-bottom:-12px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #212020;
                line-height: 10px;
            }

            .contentcard {
                margin-top:10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            .contentcard-price {
                height: 10px;
                font-size: 10px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #151515;
                line-height: 17px;
            }
            .contentcard-info {
                height: 8px;
                font-size: 8px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #909090;
                line-height: 16px;
            }
          }
          .break {
            border-bottom: 1px solid #979797;
            margin-left: 19px;
            opacity:0.1;
          }
          .detailcard {
            padding-top:10px;
            display: flex;
            // text-align: left;
            // align-items: center;
            // justify-content: left;
            align-items: center;
            justify-content: space-between;
            span {
                font-size: 6px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #909090;
                line-height: 13px;
                white-space: nowrap;
            }
            .span1 {
                font-size: 9px;
                padding-left: 12px;
                padding-right:7px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #909090;
                line-height: 13px;
                white-space: nowrap;
            }
          }
        }
      }
    }
}
</style>