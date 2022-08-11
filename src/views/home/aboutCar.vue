<template>
    <div class="page">
        <img class="top-img" src="../../assets/images/about/JVS00341-4.jpg" alt="">
        <div class="top-title">
            <div class="title">ABOUT AUTOHOME</div>
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
        <img class="top-img" src="../../assets/images/about/our-story.jpg" alt="">
        <div class="ourStory">
            <div class="title">OUR STORY</div>
            <div class="story">Autohome Australia was established in 2019 and our focus is to provide a solution for all sellers and buyers. Through word of mouth and referrals from satisfied clients, our reputation has allowed us to attract both local and interstate clients. Our area of specialty is luxury and prestigious vehicles. Our core principle and belief is that ‘we sell quality.’ We provide a streamlined process that is simple, transparent and efficient. You can be reassured that all our vehicles undergo a comprehensive inspection by qualified expert mechanics to ensure safety and quality for peace of mind.</div>
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
            <img class="bottom-img" src="../../assets/images/home/IMG_5148.png" alt="">
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
                  info: 'Our employees share a deep passion for cars. Many have worked extensively within the industry and profess expertise across many makes and models.'
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
            object-fit: cover;
            margin-bottom:-3px;
        }
        .bottom-title {
            // background-image: url('../../assets/images/about/VisitOurShowroom.png');
            // opacity: 1.2;
            // width: 100%;
            // height: 150px;
            // margin-bottom:-3px;
            position: absolute;
            top:30px;
            left:5px;
            .title {
                height: 45px;
                padding-top:33px;
                font-size: 24px;
                text-align: center;
                font-family: DINCondensed-Bold, DINCondensed;
                // font-weight: bold;
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
                margin-top: -5px;
            }
        }
    }
    .top-title {
        text-align: center;
        .title {
            font-size: 30px;
            font-family: DINCondensed-Bold, DINCondensed;
            color: #151515;
            padding-top: 30px;
            padding-bottom: 20px;
            text-align: center;
            margin: 0 auto;
            // width: 300px;
            // font-size: 24px;
            // font-family: DINCondensed-Bold, DINCondensed;
            // // font-weight: bold;
            // color: #151515;
            // padding-top: 30px;
            // padding-bottom: 25px;
            // margin-left: 20px;
            // text-align: left;
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
        margin:0px 10px 0 10px;
        padding-left:8px;
        background-color: #fff;
        .page-offer {
            padding-top: 25px;
            // width: 162px;
            font-size: 24px;
            text-align: left;
            padding: 25px 10px 0 10px;
            font-family: DINCondensed-Bold, DINCondensed;
            color: #151515;
        }
        .style {
            padding-top:10px;
            padding-left:3px;
            padding-bottom:25px;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 15px;
            justify-content: space-around;
            .weOffer {
                display: flex;
                margin-top: 20px;
                // margin-right: 14px;
                // padding-left:10px;
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
                    color: #212020;
                    line-height: 16px;
                }
                .information {
                    width: 153px;
                    height: 99px;
                    text-align: justify;
                    margin-bottom: 10px;
                    line-height: 15px;
                    color: #909090;
                    font-size: 12px;
                    font-family:PingFangSC-Regular;
                }
            }
        }
        .styles {
            display: flex;
            flex-wrap: wrap;
            margin-left: 10px;
            justify-content: center;
            margin-bottom: 15px;
            padding-bottom: 25px;
            .weOffers {
                display: flex;
                margin-top: 22px;
                margin-right: 15px;
                padding-left: 4px;
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
                    color: #212020;
                    line-height: 16px;
                }
                
                .informations {
                    width: 144px;
                    height: 99px;
                    text-align: left;
                    color: #909090;
                    font-size: 12px;
                    font-family:PingFangSC-Regular;
                    line-height: 15px;
                }
            }
        }
    }
    .ourStory {
        background-color: #fff;
        margin: 15px 10px 15px 10px;
        padding: 10px 10px 100px 10px;
        .title {
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left: 8px;
            // width: 150px;
            text-align: left;
            font-size: 24px;
            font-family: DINCondensed-Bold, DINCondensed;
            color: #151515;
        }
        .story {
            // width:320px;
            height: 108px;
            padding-bottom:24px;
            padding-left: 8px;
            padding-right: 8px;
            text-align: left;
            color: #909090;
            font-size: 12px;
            font-family:PingFangSC-Regular;
            line-height: 18px;
            // display: inline-block;
            text-align: justify;
        }
    }
}
</style>