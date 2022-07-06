<template>
    <div class="page">
        <img class="top-img" :src="this.$route.query.url" alt="">
        <div class="smallimg">
            <img src="../../assets/images/home/2.jpg" />
            <img src="../../assets/images/home/3.jpg" />
            <img src="../../assets/images/home/4.jpg" />
            <img src="../../assets/images/home/5.jpg" />
            <img src="../../assets/images/home/6.jpg" />
            <img src="../../assets/images/home/7.jpg" />
        </div>
        <div class="title">
            <div class="title-top">
                <div class="price">{{ this.$route.query.price }}</div>
                <span class="info">{{ this.$route.query.info }}</span>
            </div>
            <div class="title-bottom">2016 Mercedes-Benz CLA45</div>
        </div>
        <div class="detail">
            <div class="littleshow">
                <div class="showleft">
                    <img src="../../assets/images/carDetail/odometer.png" />
                    <div class="showlefttext">
                        <span class="texttop">34719</span>
                        <span class="texttopright"> kms</span>
                        <br />
                        <span class="textbottom">Odometer</span>
                    </div>
                </div>
                <div class="showleft">
                    <img src="../../assets/images/carDetail/transmission.png" />
                    <div class="showlefttext">
                        <span class="texttop">Auto</span>
                        <br />
                        <span class="textbottom">Transmission</span>
                    </div>
                </div>
                <div class="showleft">
                    <img src="../../assets/images/carDetail/rili.jpg" />
                    <div class="showlefttext">
                        <span class="texttop">2016</span>
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
            <div class="contact-input">
                <div class="name">Name</div>
                <van-field v-model="form.name" />
                <div class="name">Phone</div>
                <van-field maxlength="10" v-model="form.phone" />
                <div class="name">Time</div>
                <van-field v-model="form.time" readonly @click="showTime = true" />
                <!-- <van-cell class :value="date" @click="show = true" /> -->
                <van-calendar v-model="showTime" confirm-text="sure" @confirm="onConfirm" />
            </div>
            <div class="submit">
                <van-button @click="submit()">SUBMIT</van-button>
                <img class="imgs" src="../../assets/images/home/right.png" alt="">
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-title">SIMILAR VEHICLES</div>
            <van-swipe :loop="true" :width="155" :autoplay="2000">
                <van-swipe-item v-for="(item, index) in information1" :key="index">
                                <div class="textcontent">
                <div class="textcard">
                    <img class="img" :src="item.url" />
                    <div class="year">{{item.year}}</div><br />
                    <div class="year">{{item.kind}}</div>
                    <div class="contentcard">
                        <span class="contentcard-price">{{item.price}}</span>
                        <span class="contentcard-info">{{item.info}}</span>
                    </div>
                    <div class="detailcard" >
                        <span >{{item.distance}}</span>
                        <div class="span1" >{{item.info1}}</div>
                        <span >{{item.info2}}</span>
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
export default {
    data() {
        return {
            showTime: false, // 时间控件
            form: {
                name: '',
                email: '',
                phone: '',
                time: ''
            },
            List: [
                {
                name: 'Make',
                result: 'Mercedes-Benz'
                },
                {
                name: 'Model',
                result: 'CLA Class'
                },
                {
                name: 'Body Type',
                result: 'Coupe'
                },
                {
                name: 'Colour',
                result: 'Grey'
                },
                {
                name: 'Engine Size',
                result: '2.0'
                },
                {
                name: 'Fuel Type',
                result: 'Petrol'
                },
                {
                name: 'Cylinders',
                result: '4'
                },
                {
                name: 'Doors',
                result: '4'
                },
                {
                name: 'Seats',
                result: 'Seats'
                },
            ],
            information1: [
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'2019 MERCEDES-BENZC63S',
                //   type: 'MERCEDES-BENZ',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'2019 MERCEDES-BENZC63S',
                //   type: 'MERCEDES-BENZ',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'2019 MERCEDES-BENZC63S',
                //   type: 'MERCEDES-BENZ',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'2019 MERCEDES-BENZC63S',
                //   type: 'MERCEDES-BENZ',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'2019 MERCEDES-BENZC63S',
                //   type: 'MERCEDES-BENZ',
                  kind: 'AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
            ],
        }
    },
    methods: {
        submit() {
            if (this.form.name === '' || this.form.phone === '' || this.form.time === '') {
                Toast('请检查页面信息是否填写完整')
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
                    Toast('提交成功')
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
          height:80px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          .showleft {
            height: 25px;
            img {
              float:left;
              width: 24px;
              border:1px dashed black;
              margin-right:5px;
              padding:5px;
            }
            .showlefttext {
              float:left;
              position: relative;
              top:-37px;
              left:42px;
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
            margin:0 25px 0 0;
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
                padding: 20px 0;
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
              width:170px;
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
              width:calc(100% - 240px;);
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
        .contact-input {
            .name {
                width: 47px;
                font-size: 13px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #000;
                text-align: left;
                margin-left: 8px;
            }
            .message {
                width: 93%;
                margin-left: -12px;
                margin-top: 10px;
                height: 198px;
                font-size: 14px;
                color: #000;
                border: 1px solid #151515;
            }
            /deep/ .van-cell {
                padding: 5px 20px 20px 20px;
            }
        }
        .submit {
            .van-button--normal {
                margin-top:25px;
                margin-bottom:25px;
                font-size: 16px;
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
            margin-right:30px;
            width: 134px;
            img {
                height: 89px;
                width: 134px;
                object-fit: cover;
                margin-bottom: 10px;
            }
            .year {
                width: 154px;
                text-align: left;
                font-size: 16px;
                margin-bottom:-12px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #212020;
                line-height: 16px;
            }

            .contentcard {
                margin-top:22px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            .contentcard-price {
                height: 14px;
                font-size: 14px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #151515;
                line-height: 17px;
            }
            .contentcard-info {
                height: 9px;
                font-size: 9px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #909090;
                line-height: 11px;
            }
          }
          .break {
            border-bottom: 1px solid #979797;
            margin-left: 19px;
            opacity:0.1;
          }
          .detailcard {
            padding-top:10px;
            margin-left: -2px;
            display: flex;
            text-align: left;
            align-items: center;
            justify-content: left;
            span {
                width: 54px;
                height: 13px;
                font-size: 9px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #909090;
                line-height: 13px;
            }
            .span1 {
                width: 54px;
                height: 13px;
                font-size: 9px;
                padding-left: 13px;
                padding-right:8px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #909090;
                line-height: 13px;
            }
          }
        }
      }
    }
}
</style>