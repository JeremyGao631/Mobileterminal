<template>
    <div class="sellcar" >
        <img class="lunbo" :src="topImg" />
        <div class="tittle">SELL YOUR CAR</div>
        <!-- <div class="titletext">The easiest way to sell your car,
    hassle free and stress free
        </div> -->
        <div class="middle">
            <div class="middlecontent">
                <img class="imgleft" src="../../assets/images/sellyourcar/BringInYourCar.png" />
                <div class="right">
                    <img class="imgright" src="../../assets/images/sellyourcar/1.png" />
                    <div class="middletext">
                        <span class="middletexttitle">Bring in your car</span>
                        <br />
                        <span class="middletextinfo">We'll take a look regardless of make, kilometres, or condition.</span>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
            <div class="evenmiddlecontent">
                <img class="imgleft" src="../../assets/images/sellyourcar/GetYourInstantOffer.png" />
                <div class="right">
                    <img class="imgright" src="../../assets/images/sellyourcar/2.png" />
                    <div class="middletext">
                        <span class="middletexttitle">Get your instant offer</span>
                        <br />
                        <span class="middletextinfo">To provide you an honest and fair offer, our appraisers here at Autohome AU thoroughly inspect the condition of your car and compare it against current market data.</span>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
            <div class="middlecontent">
                <img class="imgleft" src="../../assets/images/sellyourcar/GetCashPayment.png" />
                <div class="right">
                    <img class="imgright" src="../../assets/images/sellyourcar/3.png" />
                    <div class="middletext">
                        <span class="middletexttitle">Get instant payment</span>
                        <br />
                        <span class="middletextinfo">we will pay cash or electronic transfer on the same day on completion of vehicle transfer.</span>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
        </div>
        <div class="user">
            <div class="usercontent">
                <div class="contenttitle">CONTACT US TO GET STARTED</div>
                <div class="contentinfo">
                    The team at Autohome AU make selling your car as easy and convenient as possible.
                    Simply send us your vehicle details using the form below and let our team take care of the rest. <br />Contact us now.
                </div>
                <div class="smalltitle1">
                    PERSONAL DETAILS
                </div>
                <div class="inputtitle">Name *</div>
                <van-cell-group>
                    <van-field v-model="name"   />
                </van-cell-group>
                <div class="inputtitle">Mobile *</div>
                <van-cell-group>
                    <van-field maxlength="10" v-model="mobile"   />
                </van-cell-group>
                <div class="inputtitle">Email</div>
                <van-cell-group style="margin-bottom: 40px;">
                    <van-field @blur="emals" v-model="email"/>
                </van-cell-group>

                <div class="smalltitle">
                        MY VENICLE DETAILS
                </div>
                <div class="inputtitle">Year *</div>
                <van-cell-group>
                    <van-field v-model="year"   />
                </van-cell-group>
                <div class="inputtitle">Make *</div>
                <van-cell-group>
                    <van-field v-model="make" />
                </van-cell-group>
                <div class="inputtitle">Model *</div>
                <van-cell-group>
                    <van-field v-model="model" />
                </van-cell-group>
                <div class="inputtitle">Transmission *</div>
                <van-cell-group>
                    <van-field v-model="transmission" placeholder="Any" @click="tran"  @blur="shows()" readonly >
                        <img slot="right-icon" @click="tran" src="../../assets/images/sellyourcar/Right.png"/>
                    </van-field>
                    <div  v-for="(item,idx) in options" :key="idx" class="logs"  >
                        <div v-if="showSels">
                            <div class="log" @click="trans(item)">{{item.label}}</div>
                        </div>
                    </div>
                </van-cell-group>
                <div class="inputtitle">Odometer *</div>
                <van-cell-group>
                    <van-field v-model="odometer"   />
                </van-cell-group>
                <!-- <div class="inputtitle">Rego number</div>
                <van-cell-group>
                    <van-field v-model="regonumber"/>
                </van-cell-group> -->
                <div class="inputtitle">Color</div>
                <van-cell-group>
                    <van-field v-model="color"/>
                </van-cell-group>
                <div class="inputtitle">Trim color</div>
                <van-cell-group>
                    <van-field v-model="trimcolor"/>
                </van-cell-group>
                <div class="inputtitle">Logbook</div>
                    <div @blur="shower" >
                        <van-cell-group>
                        <van-field v-model="logbook" readonly @click="dropdown()" placeholder="Logbook" autofocus>
                            <img slot="right-icon" src="../../assets/images/sellyourcar/Right.png" @click="dropdown()"/>
                        </van-field>
                    <div v-if="showSel"  class="logs">
                        <div v-for="(item,idx) in logbooks" :key="idx">
                            <div @click="selLogbook(item)" class="log">{{item.label}}</div>
                        </div>
                    </div>
                </van-cell-group>
                    </div>
                
                <!-- <van-dropdown-menu>
                    <van-dropdown-item v-model="logbook" :options="option1" />
                </van-dropdown-menu> -->
                <div class="inputtitle">Photo Upload</div>
                <van-uploader v-model="file"  multiple :max-count="1" />
                <div class="smalltitle">
                    COMMENTS
                </div>
                <!-- <div class="inputtitle">COMMENTS</div> -->
                <van-cell-group class="special">
                    <van-field 
                        v-model="comments"
                        type="textarea"
                    />
                </van-cell-group>
                <div class="submit">
                    <van-button @click="submit()">SUBMIT</van-button>
                    <!-- <img class="imgs" src="../../assets/images/home/right.png" alt="">甲方要求 -->
                </div>

                <div class="smalltitle">
                    PRIVACY
                </div>
                <span class="privacyinfo">Your contact details are being collected by Autohome AU to enable us to record the details of the
vehicle you are interested in and to consider the purchase of your trade-in vehicle. We may disclose
your personal information to third parties to check whether and how, your vehicle is encumbered.</span>
                <span class="privacyinfo">· From time to time, Autohome AU would like to contact you and to let you know about our products and services, including special offers.</span>
                <span class="privacyinfo">· If you do not want us to do so, please let us know by contacting us. You can let us know at any time if you no longer wish to be contacted for these purposes. Your consent will remain current until you advise us otherwise.</span>
                <span class="privacyinfo">· If you do not provide us with your personal information, we may not be able to consider any offer made by you.</span>
            </div>
        </div>
    </div>
</template>

<script>
import {Toast} from 'vant'
import { vehicle } from '@/api'
import { describtion } from '@/api'
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
        file: [
      ],
      showSel: false,
      showSels: false,
      option1: [
        { text: 'full dealer service history', value: 0 },
        { text: 'Partialy dealer service history', value: 1 },
        { text: 'No service Logbook', value: 2 },
      ],
      name: '',
      mobile: '',
      email: '',
      year: '',
      make: '',
      model: '',
      transmission: '',
      odometer: '',
    //   regonumber: '',
      color: '',
      trimcolor: '',
      logbook: '',
      logbooks: [
            {
            value:'1',
            label:'Full dealer service history'
            },
            {
            value:'2',
            label:'Partialy dealer service history'
            },
            {
            value:'3',
            label:'No service Logbook'
            }
        ],
        options: [
              {
                value:'1',
                label:'Any'
              },
              {
                value:'2',
                label:'Auto'
              },
              {
                value:'3',
                label:'Manual'
              }
            ],
      comments: '',
      topImg: '', //顶部图

    }
  },
  watch: {
  },
  created() {
    this.contactData()

},
  methods: {

    contactData() {
        describtion({
            current: '1',
            pageSize: '10',
            title: 'OtherPages'
        }).then(res => {
            this.topImg = res.data.records[2].targeUrl
        })
    },

    submit() {
        if (this.name === '' || this.mobile === '' || this.Year === '' || this.make === '' || this.model === '' || this.transmission === '' || this.odometer === '') {
            Toast('Missing field\nOne of the required field is empty or contains invaild data; please check your input')
            return
        } else {
            vehicle({
                // 缺少字段
              name:this.name,
              phone: this.mobile,
              email:this.email,
              year: this.year,
              make: this.make,
              model: this.model,
              transmission: this.transmission,
              odometer: this.odometer,
              color: this.color,
              trim: this.trimcolor,
              logbook: this.logbook,
              photo: this.fail,
              comments: this.comments
            }).then( res => {
                console.log(res, '提交成功')
                if(res.code === 0) {
                    Toast('Submission successfull')
                } else if(res.code !== 0 || !res) {
                    Toast('Submission failed, please try again later')
                }
            })
        }
    },
    emals() {
        var emailText = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        var istrue = emailText.test(this.email)
        if(!istrue) {
            Toast('Please fill in the correct email format!')
        }
    },
      dropdown() {
        this.showSel = true
      },
      dropdowns() {
        this.showSel = false
      },
      selLogbook(item) {
        this.showSel = false
        this.logbook = item.label
        console.log('12',item.label)
      },
      trans(item) {
        this.showSels = false
        this.transmission = item.label
      },
      tran() {
        this.showSels = true
      },
      shows() {
        this.showSels = false
      },
      shower() {
        this.showSel = false
      }
  }
}
</script>

<style lang="less" scoped>
.sellcar {
  margin-bottom: 50px;
}
.lunbo {
  height: 207px;
  width: 100%;
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
  padding-top: 30px;
  padding-bottom: 20px;
  text-align: center;
  margin: 0 auto;
// width: 300px;
//   font-size: 24px;
//   font-family: DINCondensed-Bold, DINCondensed;
//   // font-weight: bold;
//   color: #151515;
//   padding-top: 30px;
//   padding-bottom: 25px;
//   margin-left: 20px;
//   text-align: left;
}

.titletext {
    width: 211px;
    height: 36px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #909090;
    line-height: 18px;
    margin: 10px 82px;
}

.middle {
    background-color: #FFFFFF;
    margin: 0px 10px 20px 10px;
    .middlecontent {
        margin: 0 50px 20px 10px;
        padding-top: 16px;
        height: 179px;
        .imgleft {
            width: 127px;
            height: 179px;
            float: left;
        }
        .right {
            float:left;
            text-align: left;
            width: 150px;
            margin-left: 15px;
            .imgright {
                height:24px;
                width:24px;
                margin-bottom: 25px;
            }
            .middletext {
                .middletexttitle {
                    font-size: 20px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    color: #212020;
                    line-height: 22px;
                    text-align: left;
                }
                .middletextinfo {
                    font-size: 12px;
                    font-family:PingFangSC-Regular;
                    font-weight: 400;
                    color: #909090;
                    line-height: 17px;
                    text-align: left;
                }
            }
        }
    }
    .evenmiddlecontent {
        margin: 0 10px 20px 10px;
        padding-top: 16px;
        height: 179px;
        .imgleft {
            width: 127px;
            height: 179px;
            float: right;
        }
        .right {
            float:right;
            text-align: right;
            width: 176px;
            margin-right: 15px;
            .imgright {
                height:24px;
                width:24px;
                margin-bottom: 15px;
            }
            .middletext {
                .middletexttitle {
                    font-size: 20px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    color: #212020;
                    line-height: 22px;
                    text-align: left;
                }
                .middletextinfo {
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #909090;
                    line-height: 17px;
                    text-align: left;
                }
            }
        }
    }
}
.logs {
    margin-left: 15px;
    // margin-bottom: 10px;
    .log {
        display: block;
        box-sizing: border-box;
        width: 100%;
        margin-top:2px;
        margin-bottom:8px;
        font-family: 'DINCondensed-Bold';
        font-size: 16px;
        min-width: 0;
        color: #323233;
        line-height: inherit;
        text-align: left;
        background-color: transparent;
        border: 0;
        resize: none;
    }
}

.user {
    background-color: #FFFFFF;
    margin: 0px 10px;
    .usercontent {
        margin: 0px 10px;
        text-align: left;
        .contenttitle {
            width: 100%;
            height: 30px;
            font-size: 24px;
            font-family: DINCondensed-Bold, DINCondensed;
            color: #151515;
            line-height: 30px;
            padding-top: 20px;
            white-space: nowrap;
        }
        .contentinfo {
            // width: 336px;
            height: 90px;
            font-size: 12px;
            font-family:PingFangSC-Regular;
            font-weight: 300;
            color: #909090;
            line-height: 18px;
            margin: 10px 0;
        }
        .smalltitle {
            width:158px;
            background-color: #151515;
            color:#FFFFFF;
            padding: 10px 10px 5px 10px;
            margin-bottom: 20px;
            margin-top: 10px;
            font-size: 20px;
            font-family: DINCondensed-Bold, DINCondensed;
            // font-weight: bold;
        }
        .smalltitle1 {
            width:158px;
            background-color: #151515;
            color:#FFFFFF;
            padding: 10px 10px 5px 10px;
            margin-bottom: 20px;
            margin-top: 30px;
            font-size: 20px;
            font-family: DINCondensed-Bold, DINCondensed;
            // font-weight: bold;
        }
        .inputtitle {
            width: 100px;
            height: 30px;
            font-size: 13px;
            margin-left: 3%;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            line-height: 30px;
            margin-left: 3%;
        }
        .van-cell-group {
            border: 1px solid #151515;
            margin-bottom: 20px;
            width: 93%;
            margin-left: 3%;
            /deep/ .van-cell{
                padding: 5px auto;
            }
            img {
                width: 11px;
                height: 13px;
            }
        }
        .van-uploader {
            margin-bottom: 36px;
            margin-left:3%
        }
        .special {
            /deep/ .van-field__control {
                height: 184px;
                width: 304px;
            }
        }
        .submit {
            text-align: center;
            margin:0 auto;
            .van-button--normal {
                margin-bottom: 60px;
                font-size: 18px;
                background-color: #000;
                color: #fff;
                padding-top: 3px;
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
        .privacyinfo {
            // width: 315px;
            font-size: 12px;
            font-family:PingFangSC-Regular;
            font-weight: 400;
            color: #909090;
            line-height: 18px;
            display: inline-block;
            text-align: justify;
        }
        .privacyinfo:nth-last-child(1){
           padding-bottom: 30px;
        }
        /deep/ .van-field__control::placeholder{
            color: black;
        }
    }
}

/deep/ .van-field__control  {
    font-family: 'DINCondensed-Bold';
    font-size: 16px;
}

</style>