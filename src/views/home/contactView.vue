<template>
    <div class="page">
        <img class="top-img" src="../../assets/images/contact/ContactUsNow.png" alt="">
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
                <div class="table-info">enquiries@ auto-home.com.au</div>
            </van-grid-item>
            <van-grid-item class="tableContent" @click="showcode()">
                <img src="../../assets/images/contact/Wechat.png" alt="" class="imgStyle">
                <div class="table-title">Wechat</div>
                <div class="table-info">Autohome_388</div>
            </van-grid-item>
            <van-popup v-model="show"  :style="{ height: '50%', width: '80%' }" >
                <img class="qrimg" src="../../assets/images/contact/WeChatcode1.png" />
            </van-popup>
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
            <van-grid-item class="tableContent" @click="showcode1()">
                <img src="../../assets/images/contact/whatsapp.png" alt="" class="imgStyle">
                <div class="table-title">Whatsapp</div>
                <div class="table-info">0406 118 999</div>
            </van-grid-item>
            <van-popup v-model="show1"  :style="{ height: '50%', width: '80%' }" >
                <img class="qrimg" src="../../assets/images/contact/WhatsAppcode.png" />
            </van-popup>
        </van-grid>
        <div class="contact">
            <div class="contact-title">CONTACT</div>
            <div class="contact-input">
                <div class="name">Name*</div>
                <van-field v-model="form.name" />
                <div class="name">Phone*</div>
                <van-field v-model="form.phone" />
                <div class="name">Email*</div>
                <van-field v-model="form.email" />
                <div class="name">Address</div>
                <van-field v-model="form.address" />
                <div class="name">Message*</div>
                <input class="message" v-model="form.message"  />
            </div>
            <div class="submit">
                <van-button @click="submit()">SUBMIT</van-button>
                <img class="imgs" src="../../assets/images/home/right.png" alt="">
            </div>
        </div>
        <div class="location">
            <img class="border" src="../../assets/images/contact/LocationIconBackground.png" alt="">
            <div class="top">
                <img class="logo" src="../../assets/images/contact/LocationIcon.png" alt="">
                <div class="tips">388 Parramatta Road，Burwood, NSW 2134</div>
            </div>
        </div>
        <img class="bottom-img" src="../../assets/images/contact/LocationBackground.png" alt="">
    </div>
</template>
<script>

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
            fetch({
                name:'huli12',
                phone: '13738721837',
                email:'1232ui@qq.com',
                message:'hshdkjahdshadkjh',
                address:'khjnb2  lkskhkdn2  lkjlkllkjd saydh'
            }).then( res => {
                console.log(res, '提交成功')
            })
        },
        showcode(){
            this.show = true;
        },
        showcode1(){
            this.show1 = true;
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
::v-deep  .imgStyle{
    margin-top:-8px;
    margin-bottom:20px;
    width: 50px;
    height: 50px;
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
.table-title {
    height: 16px;
    font-size: 20px;
    font-family: DINCondensed-Bold, DINCondensed;
    font-weight: bold;
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
        height: 128px;
        margin-bottom:-3px;
    }
    .top-title {
        height: 30px;
        font-size: 30px;
        text-align: center;
        margin: 20px 0;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #151515;
        line-height: 36px;
    }
    .location {
    position: relative;
    top: 102px;
    left: -10px;
    .border {
        width: 256px;
        // height: 210px;
    }
    .top {
        display: flex;
        align-items: center;
        flex-direction: row;
        position: absolute;
        left:110px;
        top: 26px;
        .logo {
            width: 39px;
            margin-top:7px;
            margin-right: 10px;
            }
        .tips {
            width: 136px;
            padding-top:10px;
            text-align: left;
            font-size: 11px;
            font-family: PingFangSC-Regular, PingFang SC;
            color: #FFFDFD;
            }
        }
    }
    .contact {
        background-color: #fff;
        margin: 15px;
        padding: 0 5px;
        margin-bottom: -85px;
        .contact-title {
            font-size: 24px;
            text-align: left;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 90px;
        }
        .contact-input {
            .name {
                width: 80px;
                font-size: 13px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #000;
            }
            .message {
                width: 90%;
                margin-left: -12px;
                margin-top: 10px;
                height: 198px;
                font-size: 14px;
                color: #000;
                border: 1px solid #151515;
            }
        }
        .submit {
            .van-button--normal {
                margin-top:25px;
                margin-bottom:25px;
                font-size: 16px;
                background-color: #000;
                color: #fff;
                width: 167px;
                height: 47px;
            }
            .imgs {
                width: 15px;
                position: relative;
                left: -25px;
                top:7px;
            }
        } 
    }
}

</style>