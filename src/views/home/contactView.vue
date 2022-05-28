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
            <van-grid-item v-for="(item,index) in information" :key="index" class="tableContent">
                <img :src="item.url" alt="" class="imgStyle">
                <div class="table-title">{{ item.title }}</div>
                <div class="table-info">{{ item.info }}</div>
                <!-- <p>{{ value.name }}</p> -->
            </van-grid-item>
        </van-grid>
        <div class="contact">
            <div class="contact-title">CONTACT</div>
            <div class="contact-input">
                <div class="name">Name*</div>
                <van-field />
                <div class="name">Phone*</div>
                <van-field />
                <div class="name">Email*</div>
                <van-field />
                <div class="name">Address</div>
                <van-field />
                <div class="name">Message*</div>
                <input class="message"  />
            </div>
            <div class="submit">
                <van-button>SUBMIT</van-button>
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

export default{
    data(){
        return {
            information: [
                {
                  url: require('../../assets/images/contact/Phone.png'),
                  title:'Phone',
                  info: '0498 698 000'
                },
                {
                  url: require('../../assets/images/contact/Email.png'),
                  title:'E-mail',
                  info: 'enquiries@ auto-home.com.au'
                },
                {
                  url: require('../../assets/images/contact/Wechat.png'),
                  title:'Wechat',
                  info: 'buyingcars'
                },
                {
                  url: require('../../assets/images/contact/Address.png'),
                  title:'Address',
                  info: '388 Parramatta Road，Burwood, NSW 2134'
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
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
    width: 48px;
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
                width: 47px;
                font-size: 13px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #000;
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