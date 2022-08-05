<template>
    <div class="page">
        <div id="jssor_1" style="position: relative; top: 0px; left: 0px; width: 300px; height: 330px; overflow: hidden;">
          <!-- <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
              <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
              <div style="position:absolute;display:block;background:url('img/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
          </div> -->
          <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 300px; height: 180px; overflow: hidden;">
              <div data-p="144.50" style="display: none;" v-for="(item,index) in photos" :key="index">
                  <img data-u="image" :src="item.img" />
                  <img data-u="thumb" :src="item.img" />
              </div>
          </div>
          <div data-u="thumbnavigator" class="jssort01" style="position:absolute;left:0px;bottom:0px;width:300px;height:230px;" data-autocenter="1">
              
              <div data-u="slides" style="cursor: default;">
                  <div data-u="prototype" class="p">
                      <div class="w">
                          <div data-u="thumbnailtemplate" class="t"></div>
                      </div>
                      <div class="c"></div>
                  </div>
              </div>
          </div>
          <span data-u="arrowleft" class="jssora05l" style="top:60px;left:0px;width:45px;height:45px;"></span>
          <span data-u="arrowright" class="jssora05r" style="top:60px;right:0px;width:45px;height:45px;"></span>
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
                <div v-html="advTitle" class="comment-span"/>
                <div v-html="advbody" class="comment-span"/>
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
                        <span >{{item.odometer}} kms</span>
                        <!-- <span >{{item.body}}</span> -->
                        <span>{{item.fueltype.substring(0,6)}}</span>
                        <span >{{item.geartype.slice(0,4)}}</span>
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

import $ from 'jquery'

window.jQuery = $ 
require('@/assets/jssor.slider.mini')

Locale.use('en-US', enUS);
export default {
    data() {
        return {
            showTime: false, // 时间控件
            price: '',
            advTitle: '',
            advbody: '',
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
            // firstPhoto: '', // 第一张图片
            informations: [],
            imgActiveIndex: 0,

        }
    },
    created() {
        this.informations = this.$route.query.item
        this.advTitle = this.informations.advTitle
        this.advbody = this.informations.advbody
        console.log('advTitle', this.advbody)
        console.log('informations', this.informations)
        console.log(this.information,"1111111111111")
        this.price = this.informations.price
        this.firstPhoto = this.$route.query.item.photo[0]
        console.log('123', this.price)
        this.init()
        this.allCar()
        this.setPhoto()
        this.$nextTick(() => {
            this.jssor_1_slider_init()
        })
    },
    mounted() {
    this.slideBanner()/*轮播手滑切换*/
    },
    methods: {
jssor_1_slider_init : function() {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Cols: 10,
                $SpacingX: 8,
                $SpacingY: 8,
                $Align: 360
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 800);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
        },









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
        setPhotos(item) {
            this.photo = item.photo
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
        choosePhoto(idx){
            // console.log(item,'1111111234567')
            // this.firstPhoto = item.img
            this.$refs.carousel.setActiveItem(idx)
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
            this.price = item.price
            this.informations = item
            this.advTitle = item.advTitle
            this.advbody = item.advbody
            this.init()
            this.allCar()
            this.setPhotos(item)
            this.firstPhoto = item.photo[0]
            console.log('123')
            // 回到顶部
            window.scrollTo(
                {
                    top: 0,
                    behavior:"smooth"
                }        
            )
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
                        drive: ele.drive,
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
/* jssor slider arrow navigator skin 05 css */
        /*
        .jssora05l                  (normal)
        .jssora05r                  (normal)
        .jssora05l:hover            (normal mouseover)
        .jssora05r:hover            (normal mouseover)
        .jssora05l.jssora05ldn      (mousedown)
        .jssora05r.jssora05rdn      (mousedown)
        */
        .jssora05l, .jssora05r {
            display: block;
            position: absolute;
            /* size of arrow element */
            width: 40px;
            height: 40px;
            cursor: pointer;
            background: url('../../assets/a17.png') no-repeat;
            overflow: hidden;
        }
        .jssora05l { background-position: -5px -35px; }
        .jssora05r { background-position: -65px -35px; }
        .jssora05l:hover { background-position: -10px -35px; }
        .jssora05r:hover { background-position: -65px -35px; }
        .jssora05l.jssora05ldn { background-position: -250px -40px; }
        .jssora05r.jssora05rdn { background-position: -310px -40px; }

        /* jssor slider thumbnail navigator skin 01 css */
        /*
        .jssort01 .p            (normal)
        .jssort01 .p:hover      (normal mouseover)
        .jssort01 .p.pav        (active)
        .jssort01 .p.pdn        (mousedown)
        */
        .jssort01 .p {
            position: absolute;
            top: 0;
            left: 0;
            width: 54px;
            height: 40px;
        }
        
        .jssort01 .t {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
        
        .jssort01 .w {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        
        .jssort01 .c {
            position: absolute;
            top: 0px;
            left: 0px;
            // width: 50px;
            // height: 36px;
            // border: #000 2px solid;
            width: 52px;
            height: 38px;
            border: #fff 1px solid;
            box-sizing: content-box;
            _background: none;
        }
        
        .jssort01 .pav .c {
            width: 50px;
            height: 36px;
            border: #000 2px solid;
        }
        
        .jssort01 .p:hover .c {
            top: 0px;
            left: 0px;
            // width: 70px;
            // height: 70px;
            // border: #fff 1px solid;
            width: 50px;
            height: 36px;
            border: #000 2px solid;
            background-position: 50% 50%;
        }
        
        .jssort01 .p.pdn .c {
            background-position: 50% 50%;
            width: 68px;
            height: 68px;
            border: #000 2px solid;
        }
        
        * html .jssort01 .c, * html .jssort01 .pdn .c, * html .jssort01 .pav .c {
            /* ie quirks mode adjust */
            width /**/: 72px;
            height /**/: 72px;
        }


















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
        height: 100%;
        object-fit: cover;
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
        margin:-100px 10px 10px 10px;
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
        //   padding:0 -2px;
          height:80px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: left;
          position: relative;
          top: 1px;
          padding-left: 10px;
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
              position: relative;
              top:-35px;
              left: 35px;
              height:100%;
              text-align: left;
            //   letter-spacing: 1px;
              .texttop {
                // width: 51px;
                // height: 19px;
                font-size: 18px;
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
            margin:0 55px 0 0;
          }
          .showleft:nth-child(2) {
            margin:0 55px 0 0;
          }
        //   .showleft:nth-child(3) {
        //     margin:0 0px 0 0;
        //   }
        }
        .comment {
            padding-bottom: 23px;
            .comment-title {
                // width: 98px;
                text-align: left;
                padding-top:24px;
                padding-bottom:10px;
                font-size: 17px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #151515;
                margin-left: 8px;
            }
            .comment-span{
                // width: 336px;
                // height: 72px;
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
                margin-bottom: 5px;
            }
            .year {
                text-align: left;
                font-size: 16px;
                margin-bottom:-12px;
                font-family: DINCondensed-Bold;
                color: #212020;
                line-height: 14px;
                display: block;
                height: 25px;
            }

            .contentcard {
                margin-top:10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            .contentcard-price {
                height: 12px;
                font-size: 14px;
                font-family:DINCondensed-Bold;
                color: #151515;
                line-height: 17px;
            }
            .contentcard-info {
                height: 8px;
                font-size: 10px;
                font-family: DINCondensed-Bold;
                color: #909090;
                line-height: 12px;
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
                font-size: 10px;
                font-family:PingFangSC-Regular;
                color: #909090;
                line-height: 13px;
                white-space: nowrap;
            }
            .span1 {
                font-size: 10px;
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

/deep/ .el-carousel__arrow {
    border: 1px solid #fff;
}
</style>