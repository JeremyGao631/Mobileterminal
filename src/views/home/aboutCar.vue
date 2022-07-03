<template>
    <div class="page">
        <img class="top-img" src="../../assets/images/about/JVS00341-4.jpg" alt="">
        <div class="top-title">
            <div class="title">OUR MISSION</div>
            <!-- <div class="offer">Offer our customers exceptional quality and excellent value with our integrity and enthusiasm.</div> -->
        </div>
        <div class="page-grid">
            <div class="page-offer">WHAT WE OFFER</div>
            <div class="style">
                <div v-for="(items,index) in information" :key="index" class="weOffer">
                    <img :src="items.targeUrl" alt="" class="imgStyle">
                    <div class="title">{{ items.secondtitle }}</div>
                    <div class="information">{{ items.describtion }}</div>
                </div>
            </div>
        </div>
        <img class="top-img" src="../../assets/images/about/OurStory.png" alt="">
        <div class="ourStory">
            <div class="title">Our Story</div>
            <div class="story">Autohome Australia were established in 2019 and our focus is to provide a solution for all sellers and buyers. Through word of mouth and referrals from satisfied clients, our reputation has allowed us to attract both local and interstate clients. Our area of specialty is luxury and prestigious vehicles.</div>
        </div>
        <div class="page-grid">
            <div class="page-offer">WHY CHOOSE US</div>
            <div class="styles">
                <div v-for="(items,index) in information1" :key="index" class="weOffers">
                    <img :src="items.url" alt="" class="imgStyles">
                    <div class="title">{{ items.title }}</div>
                    <div class="informations">{{ items.info }}</div>
                </div>
            </div>
        </div>
        <div class="span-img">
            <img class="bottom-img" src="../../assets/images/about/VisitOurShowroom.png" alt="">
            <div class="bottom-title">
                <div class="title">VISIT OUR SHOWROOM</div>
                <div class="offer">Please visit our showroom in Burwood to inspect our range of vehicles and discuss your needs. Our Sales team speak English and Chinese, and we look forward to helping you with your next car sale or purchase.</div>
            </div>
        </div>
    </div>
</template>
<script>

import {describtion} from '@/api'
export default {
    name: 'aboutCar',
    data() {
        return {
            information: [],
            information1: [
                {
                  url: require('../../assets/images/about/ExceptionalQuality.png'),
                  title:'Exceptional Quality',
                  info: 'Our cars have undergone a comprehensive inspection by qualified technicians to meet the highest standards.'
                },
                {
                  url: require('../../assets/images/about/ExcellentValue.png'),
                  title:'Excellent Value',
                  info: 'Our customers’ needs are our priority. We will constantly strive to meet your expectations.'
                },
                {
                  url: require('../../assets/images/about/HighIntegrity.png'),
                  title:'High Integrity',
                  info: 'Our services are trustworthy and reliable. We encourage open and honest communication.'
                },
                {
                  url: require('../../assets/images/about/StrongEnthusiasm.png'),
                  title:'Strong Enthusiasm',
                  info: 'Our employees share a deep passion for cars.'
                },
            ]
        }
    },
    created() {
        this.aboutData()
    },
    methods: {
        aboutData() {
            describtion({
                current: '1',
                pageSize: '10',
                title: 'ABOUT'
            }).then(res => {
                res.data.records.forEach(ele => {
                    const item = {
                    targeUrl: ele.targeUrl,
                    secondtitle: ele.secondtitle,
                    describtion: ele.describtion
                    }
                this.information.push(item)
                })
            })
        }
    }
}
</script>
<style lang="less" scoped>
.page {
    width: 100%;
    background-color: #f4f6f8;
    .top-img {
        width: 100%;
        height: 207px;
    }

    .span-img {
        position: relative;
        margin-bottom: -2px;
        .bottom-img {
            width: 100%;
            height: 150px;
            margin-bottom:-3px;
        }
        .bottom-title {
            // background-image: url('../../assets/images/about/VisitOurShowroom.png');
            // opacity: 1.2;
            // width: 100%;
            // height: 150px;
            // margin-bottom:-3px;
            position: absolute;
            top:-5px;
            left:5px;
            .title {
                height: 45px;
                padding-top:33px;
                font-size: 24px;
                text-align: center;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 50px;
            }
            .offer {
                height: 56px;
                width: 343px;
                font-size: 10px;
                text-align: center;
                margin-left: 10px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 14px;
            }
        }
    }
    .top-title {
        text-align: center;
        .title {
            font-size: 30px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            padding-top: 40px;
            padding-bottom: 20px;
            text-align: center;
            margin: 0 auto;
        }
        .offer {
            margin: 5px 0 15px 40px ;
            width: 295px;
            height: 54px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #909090;
            line-height: 18px;
        }
    }
    .page-grid {
        margin:0px 10px 40px 10px;
        background-color: #fff;
        .page-offer {
            padding-top: 25px;
            // width: 162px;
            font-size: 24px;
            text-align: left;
            padding: 25px 10px 0 10px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
        }
        .style {
            padding-bottom:25px;
            display: flex;
            flex-wrap: wrap;
            margin-right:5px;
            justify-content: center;
            .weOffer {
                display: flex;
                margin-top: 20px;
                margin-right: 9px;
                padding-left:13px;
                flex-direction: column;
                align-items: flex-start;
                .imgStyle {
                    margin-left: -4px;
                    margin-bottom: 22px;
                    width: 40px;
                    height: 40px;
                }
                .title {
                    height: 16px;
                    font-size: 20px;
                    margin-bottom: 15px;
                    text-align: left;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #212020;
                    line-height: 16px;
                }
                .information {
                    width: 153px;
                    height: 99px;
                    text-align: left;
                    font-size: 9px;
                    margin-bottom: 10px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #4A4A4A;
                    line-height: 15px;
                }
            }
        }
        .styles {
            display: flex;
            flex-wrap: wrap;
            margin-right:5px;
            justify-content: center;
            .weOffers {
                display: flex;
                margin-top: 22px;
                margin-right: 16px;
                padding-left: 14px;
                flex-direction: column;
                align-items: flex-start;

                .imgStyles {
                    margin-bottom: 25px;
                    width: 25px;
                }
                .title {
                    height: 16px;
                    font-size: 20px;
                    margin-bottom: 15px;
                    text-align: left;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #212020;
                    line-height: 16px;
                }
                
                .informations {
                    width: 144px;
                    height: 99px;
                    text-align: left;
                    font-size: 9px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #4A4A4A;
                    line-height: 15px;
                }
            }
        }
    }
    .ourStory {
        background-color: #fff;
        margin: 15px 10px 25px 10px;
        padding: 0 10px;
        .title {
            padding-top: 25px;
            padding-bottom: 15px;
            // width: 150px;
            text-align: left;
            font-size: 24px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
        }
        .story {
            width:320px;
            height: 108px;
            padding-bottom:24px;
            text-align: left;
            font-size: 13px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: #4A4A4A;
            line-height: 18px;
            // display: inline-block;
            text-align: justify;
        }
    }
}
</style>