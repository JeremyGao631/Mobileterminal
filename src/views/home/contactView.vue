<template>
    <div class="page">
        <img class="top-img" src="../../assets/images/contact/JVS00138-Edit-4.jpg" alt="">
        <div class="top-title">CONTACT US NOW</div>
        <!-- <div class="item">
            <div v-for="(item, idx) in information" :key="idx" class="tab">
                <img :src="item.url" alt="" class="tab-img">
                <div class="tab-title">{{ item.title }}</div>
                <div tab-info>{{ item.info }}</div>
            </div>
        </div> -->
        <van-grid :column-num="3" class="table">
            <van-grid-item class="tableContent">
                <img src="../../assets/images/contact/Phone.png" alt="" class="imgStyle">
                <div class="table-title">Phone</div>
                <div class="table-info">0498 698 000</div>
            </van-grid-item>
            <van-grid-item class="tableContent">
                <img src="../../assets/images/contact/Email.png" alt="" class="imgStyle">
                <div class="table-title">E-mail</div>
                <div class="table-info">enquiries@ <br />auto-home.com.au</div>
            </van-grid-item>
            <van-grid-item class="tableContent">
                <img v-if="show === true" @click="showcode3()" class="qrimg" src="../../assets/images/contact/WeChatcode1.png" />
                <div v-else @click="showcode()">
                    <img src="../../assets/images/contact/Wechat.png" alt="" class="imgStyle">
                    <div class="table-title">Wechat</div>
                    <div class="table-info">Autohome_388</div>
                </div>
            </van-grid-item>
            <!-- <van-popup v-model="show"  :style="{ height: '50%', width: '80%' }" >
            </van-popup> -->
            <van-grid-item class="tableContent">
                <img src="../../assets/images/contact/Address.png" alt="" class="imgStyle">
                <div class="table-title">Address</div>
                <div class="table-info">388 Parramatta Road，Burwood, NSW 2134</div>
            </van-grid-item>
            <van-grid-item class="tableContent" @click="jumpourpage()">
                <img src="../../assets/images/contact/facebook.png" alt="" class="imgStyle">
                <div class="table-title">Facebook</div>
                <div class="table-info">Autohome Australia</div>
            </van-grid-item>
            <van-grid-item class="tableContent">
                <img v-if="show1 === true" @click="showcode2()" class="qrimg" src="../../assets/images/contact/WhatsAppcode.png" />
                <div v-else @click="showcode1()">
                    <img src="../../assets/images/contact/whatsapp.png" alt="" class="imgStyle">
                    <div class="table-title">Whatsapp</div>
                    <div class="table-info">0406 118 999</div>
                </div>
            </van-grid-item>
            <!-- <van-popup v-model="show1"  :style="{ height: '50%', width: '80%' }" >
                <img class="qrimg" src="../../assets/images/contact/WhatsAppcode.png" />
            </van-popup> -->
        </van-grid>
        <div class="contact">
            <div class="contact-title">CONTACT</div>
            <div class="contact-input">
                <div class="name">Name*</div>
                <van-field v-model="form.name" />
                <div class="name">Phone*</div>
                <van-field maxlength="10" v-model="form.phone" />
                <div class="name">Email*</div>
                <van-field @blur="emails" v-model="form.email" />
                <div class="name">Postcode*</div>
                <van-field v-model="form.address" />
                <div class="name">Message*</div>
                <!-- <input class="message" v-model="form.message"  type="textaea"/> -->
                <van-cell-group class="special">
                    <van-field 
                        v-model="form.message"
                        type="textarea"
                        class="specialfield"
                    />
                </van-cell-group>
            </div>
            <div class="submit">
                <van-button @click="submit()">SUBMIT</van-button>
                <!-- <img class="imgs" src="../../assets/images/home/right.png" alt="">甲方 -->
            </div>
        </div>
        <!-- <div class="location">
            <img class="border" src="../../assets/images/contact/LocationIconBackground.png" alt="">
            <div class="top">
                <img class="logo" src="../../assets/images/contact/LocationIcon.png" alt="">
                <div class="tips">388 Parramatta Road，Burwood, NSW 2134</div>
            </div>
        </div> -->
        <img class="bottom-img" src="../../assets/images/contact/ditu.png" alt="">
    </div>
</template>
<script>

import { Toast } from 'vant'
import { fetch } from '@/api'
export default{
    data(){
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                address: '',
                message: ''
            },
            // information: [
            //     {
            //       url: require('../../assets/images/contact/Phone.png'),
            //       title:'Phone',
            //       info: '0498 698 000'
            //     },
            //     {
            //       url: require('../../assets/images/contact/Email.png'),
            //       title:'E-mail',
            //       info: 'enquiries@ auto-home.com.au'
            //     },
            //     {
            //       url: require('../../assets/images/contact/Wechat.png'),
            //       title:'Wechat',
            //       info: 'buyingcars'
            //     },
            //     {
            //       url: require('../../assets/images/contact/Address.png'),
            //       title:'Address',
            //       info: '388 Parramatta Road，Burwood, NSW 2134'
            //     },
            //     {
            //       url: require('../../assets/images/contact/facebook.png'),
            //       title:'Facebook',
            //       info: 'Autohome Australia'
            //     },
            //     {
            //       url: require('../../assets/images/contact/whatsapp.png'),
            //       title:'Whatsapp',
            //       info: '0406 118 999'
            //     }
            // ]
            show: false,
            show1: false,
        }
    },
    methods: {
        submit() {
            if (this.form.name === '' || this.form.phone === '' || this.form.email === '' || this.form.message === '') {
                Toast('Please check whether the page information is complete!')
            } else {
                fetch({
                        name:this.form.name,
                        phone: this.form.phone,
                        email:this.form.email,
                        message:this.form.message,
                        address:this.form.address
                }).then( res => {
                    console.log(res, '提交成功')
                    if(res.code === 0) {
                        Toast('Your information has been submitted!')
                    }
                })
            }

        },
        emails() {
            var emailText = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            var istrue = emailText.test(this.form.email)
            if(!istrue) {
                Toast('Please fill in the correct email format!')
            }
        },
        showcode(){
            this.show = true;
        },
        showcode3(){
            this.show = false;
        },
        showcode1(){
            this.show1 = true;
        },
        showcode2(){
            this.show1 = false;
        },
        jumpourpage() {
            window.location.href="https://www.facebook.com/Autohome-Australia-101055345438578/"
        }
    }
}
</script>
<style lang="less" scoped>
.qrimg {
    height: 100%;
    width: 100%;
}
::v-deep .home-container .table{
    margin-top: 12px;
    margin-left:20px;
    border-radius: 5px;
    background-color: white;
    padding:15px 10px;
}
::v-deep .home-container .table .tableContent{
    width: 105px;
    height: 96px;
}
::v-deep .van-hairline::after {
    border: none;
}
::v-deep  .imgStyle{
    margin-bottom:30px;
    margin-top: 10px;
    width: 36px;
    height: 36px;
}
/deep/ .van-grid-item {
    padding: 10px;
}
/deep/.van-grid-item__content--center {
    width: 153px;
    height: 168px;
}
/deep/.van-grid {
    margin-left: 16px;
}
/deep/.van-field__body {
    border: 1px solid #151515;
    margin-left: -13px;
    height: 35px;
    padding: 0 3px;
}
/deep/ .van-field__control::placeholder{
            color: black;
        }
.table-title {
    height: 16px;
    font-size: 20px;
    font-family: DINCondensed-Bold, DINCondensed;
    color: #212020;
    line-height: 16px;
    margin-bottom: 10px;
}
.table-info {
    width: 159px;
    height: 34px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #151515;
    line-height: 17px;
    margin:0 42px;
}
.page {
    width: 100%;
    background-color: #f4f6f8;
    .top-img {
        width: 100%;
        height: 207px;
    }
    .bottom-img {
        width: 100%;
        height: 158px;
        margin-bottom:-8px;
        margin-top: 100px;
    }
    .top-title {
        font-size: 30px;
        font-family: DINCondensed-Bold, DINCondensed;
        color: #151515;
        padding-top: 40px;
        padding-bottom: 20px;
        text-align: center;
        margin: 0 auto;
    }
    // .location {
    // position: relative;
    // top: 102px;
    // left: -10px;
    // .border {
    //     width: 256px;
    //     // height: 210px;
    // }
    // .top {
    //     display: flex;
    //     align-items: center;
    //     flex-direction: row;
    //     position: absolute;
    //     left:110px;
    //     top: 26px;
    //     .logo {
    //         width: 39px;
    //         margin-top:7px;
    //         margin-right: 10px;
    //         }
    //     .tips {
    //         width: 136px;
    //         padding-top:10px;
    //         text-align: left;
    //         font-size: 11px;
    //         font-family: PingFangSC-Regular, PingFang SC;
    //         color: #FFFDFD;
    //         }
    //     }
    // }
    .contact {
        background-color: #fff;
        margin: 15px;
        padding: 0 5px;
        margin-bottom: -85px;
        .contact-title {
            font-size: 24px;
            text-align: left;
            padding-top: 23px;
            padding-bottom: -5px;
            font-family: DINCondensed-Bold, DINCondensed;
            color: #151515;
            line-height: 90px;
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
            // .message {
            //     width: 94%;
            //     // margin-left: -12px;
            //     margin-top: 10px;
            //     height: 198px;
            //     padding-bottom:174px;
            //     box-sizing: border-box;
            //     font-size: 14px;
            //     color: #000;
            //     border: 1px solid #151515;
            // }
            /deep/ .van-cell {
                padding: 5px 7px 20px 20px;
            }
            .van-cell-group {
            border: 1px solid #151515;
            margin: 8px 8px 0 8px;
            
            }
            .special{
                /deep/ .van-field__control {
                    height: 184px;
                    width: 288px;
                }
                /deep/ .van-field__body {
                    border: 0;
                    height: 184px;
                }
            }
        }
        .submit {
            .van-button--normal {
                margin-top:25px;
                margin-bottom:25px;
                font-size: 18px;
                background-color: #000;
                color: #fff;
                width: 147px;
                padding-top: 2px;
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
}

</style>