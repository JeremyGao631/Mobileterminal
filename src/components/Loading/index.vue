<template>
    <van-overlay :show="isPopupShow">
        <div class="loading-container">
            <van-loading size="24px">{{ title }}</van-loading>
        </div>
    </van-overlay>
</template>

<script>
    export default {
        name: 'PopupLoading',
        data() {
            return {
                isPopupShow: true,
                title: 'Requesting',
                size: 30,
                textSize: 18
            }
        },
        methods: {
            toggle() {
                this.isPopupShow = !this.isPopupShow
            }
        }
    }
</script>
<style lang="less" scoped>
.md-activity-indicator-text {
  color: #fff4f8 !important;
}
/deep/.van-loading__text {
    color:#b4acac;
    margin-top:10px;
    font-size: 18px;
    font-family: DINCondensed-Bold, DINCondensed;
}
/deep/.van-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#b4acac;
}
.van-overlay {
  z-index: 9999;
  background-color: rgba(0,0,0,.5);
	.loading-container {
		display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
	}
}
</style>
