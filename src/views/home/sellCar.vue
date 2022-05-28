<template>
    <div class="sellcar" >
        <div class="lunbo" />
        <div class="tittle">SELL YOUR CAR</div>
        <div class="titletext">The easiest way to sell your car,
    hassle free and stress free
        </div>
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
                        <span class="middletextinfo">To provide you an honest and fair offer, our appraisers here at Autohome AU Auto Traders thoroughly inspect the condition of your car and compare it against current market data.</span>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
            <div class="middlecontent">
                <img class="imgleft" src="../../assets/images/sellyourcar/GetCashPayment.png" />
                <div class="right">
                    <img class="imgright" src="../../assets/images/sellyourcar/3.png" />
                    <div class="middletext">
                        <span class="middletexttitle">Get cash payment</span>
                        <br />
                        <span class="middletextinfo">we will pay cash or electroic transfer on the same day on completion of vehicle transfer.</span>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
        </div>
        <div class="user">
            <div class="usercontent">
                <div class="contenttitle">CONTACT US TO GET STARTED</div>
                <div class="contentinfo">
                    The team at Autohome AU make selling your car as easy and convenient as possible.<br />
                    Simply send us your vehicle details using the form below and let our team take care of the rest. <br />Contact us now.
                </div>
                <div class="smalltitle">
                    PERSONAL DETAILS
                </div>
                <div class="inputtitle">Name *</div>
                <van-cell-group>
                    <van-field v-model="name"   />
                </van-cell-group>
                <div class="inputtitle">Mobile *</div>
                <van-cell-group>
                    <van-field v-model="mobile"   />
                </van-cell-group>
                <div class="inputtitle">Email</div>
                <van-cell-group style="margin-bottom: 40px;">
                    <van-field v-model="email"/>
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
                    <van-field v-model="make"   placeholder="Make:Any">
                        <img slot="right-icon" src="../../assets/images/sellyourcar/Right.png" />
                    </van-field>
                </van-cell-group>
                <div class="inputtitle">Model *</div>
                <van-cell-group>
                    <van-field v-model="model"   placeholder="Model:Any">
                        <img slot="right-icon" src="../../assets/images/sellyourcar/Right.png" />
                    </van-field>
                </van-cell-group>
                <div class="inputtitle">Transmission *</div>
                <van-cell-group>
                    <van-field v-model="transmission"   placeholder="Transmission:Any">
                        <img slot="right-icon" src="../../assets/images/sellyourcar/Right.png" />
                    </van-field>
                </van-cell-group>
                <div class="inputtitle">Odometer *</div>
                <van-cell-group>
                    <van-field v-model="odometer"   />
                </van-cell-group>
                <div class="inputtitle">Rego number</div>
                <van-cell-group>
                    <van-field v-model="regonumber"/>
                </van-cell-group>
                <div class="inputtitle">Color</div>
                <van-cell-group>
                    <van-field v-model="color"/>
                </van-cell-group>
                <div class="inputtitle">Trim</div>
                <van-cell-group>
                    <van-field v-model="trim"/>
                </van-cell-group>
                <div class="inputtitle">Logbook</div>
                <van-cell-group>
                    <van-field v-model="logbook" placeholder="Logbook" >
                        <img slot="right-icon" src="../../assets/images/sellyourcar/Right.png" />
                    </van-field>
                </van-cell-group>
                <div class="inputtitle">Photo Upload</div>
                <van-uploader v-model="file"  multiple />

                <div class="smalltitle">
                    COMMENTS
                </div>
                <div class="inputtitle">COMMENTS</div>
                <van-cell-group class="special">
                    <van-field v-model="comments"/>
                </van-cell-group>
                <button class="middlebtn">
                    <span>SUBMIT</span>
                    <img src="../../assets/images/home/right.png" />
                </button>

                <div class="smalltitle">
                    PRIVACY
                </div>
                <span class="privacyinfo">Your contact details are being collected by Autohome AU to enable us to record the details of the vehicle you are interested in and to consider the purchase of your trade-in vehicle. We may disclose your personal information to third parties to check whether and how, your vehicle is encumbered.</span>
                <br />
                <span class="privacyinfo">From time to time, Autohome AU would like to contact you and to let you know about our products and services, including special offers.</span>
                <br />
                <span class="privacyinfo">If you do not want us to do so, please let us know by contacting us. You can let us know at any time if you no longer wish to be contacted for these purposes. Your consent will remain current until you advise us otherwise.</span>
                <br />
                <span class="privacyinfo">If you do not provide us with your personal information, we may not be able to consider any offer made by you.</span>
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
        file: [
      ],
      name: '',
      mobile: '',
      email: '',
      year: '',
      make: '',
      model: '',
      transmission: '',
      odometer: '',
      regonumber: '',
      color: '',
      trim: '',
      logbook: '',
      comments: '',

    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.sellcar {
  margin-bottom: 50px;
}
.lunbo {
  height: 207px;
  width: 100%;
  background-image: url(../../assets/images/sellyourcar/SellYourCar.png);
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
    margin: 20px 10px;
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
                    font-weight: bold;
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
                    font-weight: bold;
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

.user {
    background-color: #FFFFFF;
    margin: 0px 10px;
    .usercontent {
        margin: 0px 10px;
        text-align: left;
        .contenttitle {
            width: 213px;
            height: 30px;
            font-size: 24px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 30px;
            padding-top: 20px;
            white-space: nowrap;
        }
        .contentinfo {
            width: 336px;
            height: 90px;
            font-size: 13px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: #909090;
            line-height: 18px;
            margin: 10px 0;
        }
        .smalltitle {
            width:145px;
            background-color: #151515;
            color:#FFFFFF;
            padding: 10px 10px 5px 10px;
            margin-bottom: 20px;
            font-size: 20px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
        }
        .inputtitle {
            width: 100px;
            height: 30px;
            font-size: 13px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            line-height: 30px;
            margin-bottom: 5px;
        }
        .van-cell-group {
            border: 2px solid #151515;
            margin-bottom: 20px;
            img {
                width: 11px;
                height: 13px;
            }
        }
        .van-uploader {
            margin-bottom: 30px;
        }
        .special {
            /deep/ .van-field__control {
                height: 184px;
                width: 304px;
            }
        }
        .middlebtn {
            width: 167px;
            height: 47px;
            background-color: #151515;
            border: 2px solid;
            margin-bottom: 60px;
            margin-left: 85px;
            margin-right: 95px;
            padding-top: 5px;
            span {
                width: 73px;
                height: 30px;
                font-size: 20px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 30px;
                margin:0 20px 0 40px;
            }
            img {
                height: 10px;
                width: 10px;
                margin-left: 15px;
            }
        }
        .privacyinfo {
            width: 315px;
            font-size: 13px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: #4A4A4A;
            line-height: 18px;
            padding-bottom: 30px;
            display: inline-block;
            text-align: justify;
        }
    }
}

</style>