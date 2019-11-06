<template>
    <div>
        <p class="return"><a href="#/list?id='+index"><img src="../assets/img/d_02.jpg"></a><img src="../assets/img/d_04.jpg"></p>
        <div class="swiper">
            <van-swipe :autoplay="2000" :loop="false" indicator-color="#fff">
                <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
                    <img :src="image">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="font">
            <p style="color:#000;font-size: 0.16rem;padding-left:0.1rem">{{fonteqiu}}</p>
            <p style="font-size: 0.18rem;margin: 0.06rem 0;padding-left:0.1rem">￥{{fontprize}}</p>
            <p style="font-size: 0.16rem;margin: 0.04rem 0;padding-left:0.1rem">{{fontaplprize}}</p>
            <p style="font-size: 0.14rem;padding-left:0.1rem">{{fontcheape}}</p>
            <p style="font-size: 0.14rem;margin: 0.02rem 0;padding-left:0.1rem">{{fontphoto}}</p>
            <p style="font-size: 0.14rem;padding-left:0.1rem">{{fontstroage}}</p>
        </div>
        <div class="photoz">
            <p><img src="../assets/img/d_08.jpg"><span>{{photozchina[0]}}</span><img src="../assets/img/d_08.jpg"><span>{{photozchina[1]}}</span></p>
            <p style="border-bottom: 0.005rem solid #ccc" class="clear"><img src="../assets/img/d_08.jpg"><span>{{photozchina[2]}}</span></p>
        </div>
        <p class="showPrice"><span class="alopen">{{selectchina[0]}}</span><img src="../assets/img/d_12.jpg"></p>
        <p class="select"><span class="alopen">{{selectchina[1]}}</span><span >{{selectchina[2]}}</span></p>
        <p class="select"><span class="alopen" style="margin-top: 0rem">{{selectchina[3]}}</span><span style="margin-top: 0rem">{{selectchina[4]}}</span></p>
        <p class="services">{{selectchina[5]}}</p>
        <p class="servicesz"><span>{{selectchinab[0]}}</span><span>{{selectchina[1]}}</span><span>{{selectchinab[2]}}</span></p>
        <p class="fotdown"><img src="../assets/img/buy_02.jpg"><img src="../assets/img/buy_03.jpg"><img src="../assets/img/buy_04.jpg"><img src="../assets/img/buy_05.jpg"><img src="../assets/img/buy_06.jpg"></p>
        <p class="longphoto"><img :src="LongImg[0]"></p>
        <p class="longphoto"><img :src="LongImg[1]"></p>
        <p class="longphoto"><img :src="LongImg[2]"></p>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'vant'
    export default {
        name: "shopping",
        data() {
            return {
                LongImg:[
                    'https://openfile.meizu.com/group1/M00/07/81/Cgbj0V22PpuAQ8IPAAYbNAba4KE126.jpg',
                    'https://openfile.meizu.com/group1/M00/07/67/Cgbj0F2v6_aAHX_4AAqp6uaqdVA938.jpg',
                    'https://openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yYkuAIwl0AAPlvDz8ySg479.jpg'
                ],
                SwiperImg: [
                    'https://openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png',
                    'https://openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhu-AaV4AAAlk4z4lkt0463.png',
                    'https://openfile.meizu.com/group1/M00/07/2C/Cgbj0FzvRI6AWu1jAAxIbnS8M5Q295.png',
                    'https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png',
                    'https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png',
                ],
                fonteqiu:"魅族 Note9",
                fontprize:"1199.00",
                fontaplprize:"分期价 ￥107.40*12期",
                fontcheape:"【限时领劵最高立减100】【限时6期免息】骁龙675|后置",
                fontphoto:"4800万|前置2000万|独家定制水滴设计全面屏|4000Ah大",
                fontstroage:"容量电池|18w mCharge快充|吃鸡不卡 拍她更美",
                photozchina:["花呗分期","顺丰发货","7天无理由退货(激活后不支持)"],
                selectchina:["领劵","已选","全网通公开版，幻黑，4+64GB,官方标配&nbsp;&nbsp;&nbsp;x1","配送","广东省 佛山市","本产品由魅族负责发货并提供售后服务"],
                selectchinab:["图文详情","规格参数","常见问题"]
            }
        },
        components:{
            "van-swipe":Swipe,
            "van-swipe-item":SwipeItem,
        }
    }
</script>

<style scoped>
    div .return{
        width: 100%;
        display: flex;
        height: 0.4rem;
        justify-content: space-between;
        font-size: 0;
    }
    div .return img{
        height: 0.4rem;
    }
    div .swiper {
        width: 100%;
        height: 2.8rem;
    }
    div .swiper .van-swipe{
        width: 100%;height: 100%;
    }
    div .swiper .van-swipe img {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
    div .swiper .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        color: #fff;
        background: #fff;
    }
    div .font{
        width: 100%;
        color: indianred;
        height: 2.2rem;
        border-bottom: 0.005rem solid #ccc;
        border-top: 0.005rem solid #ccc
    }
    .photoz{
        width: 100%;
        font-size: 0;
    }
    .photoz p {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
    }
    .photoz p img{
        float: left;
    }
    .photoz p span{
        display: inline-block;
        font-size: 0.12rem;
        height: 0.4rem;
        float: left;
        line-height: 0.4rem;
    }
    .showPrice{
        width: 100%;
        height: 0.4rem;
        border-bottom: 0.005rem solid #ccc;
        margin: 0.02rem 0;
    }
    .showPrice .alopen{
        display: inline-block;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.18rem;
        float: left;
        text-indent: 0.2rem;
        width: 0.8rem;
    }
    .showPrice img{
        float: left;
        height: 0.3rem;
        margin-top: 0.08rem;
        line-height: 0.3rem;
    }
    .select{
        width: 100%;
        height: 0.5rem;
        font-size: 0rem;
        background-color: #ccc;
        margin: 0 auto;
    }
    .select span{
        font-size: 0.14rem;
        height: 0.4rem;
        display: inline-block;
        line-height: 0.4rem;
        background-color: white;
        margin-top: 0.04rem;
        width: 2.94rem;
    }
    .select .alopen{
        display: inline-block;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.18rem;
        float: left;
        text-indent: 0.2rem;
        width: 0.8rem;
        margin-top: 0.04rem;
    }
    .services{
        width: 100%;
        font-size: 0.14rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        margin: 0 auto;
        /*margin-left: 0.1rem;*/
    }
    .servicesz{
        width: 100%;
        display: flex;
        margin: 0 auto;
        height: 0.4rem;
        line-height: 0.4rem;
        border-top: 0.005rem solid #ccc;
        border-bottom: 0.005rem solid #ccc;
        justify-content: space-around;
    }
    .servicesz span{
        width: 32%;
        font-size: 0.14rem;
        text-align: center;
    }
    .servicesz span:nth-child(1){
        color: cornflowerblue;
    }
    .fotdown{
        width: 100%;
        display: flex;
        margin: 0 auto;
    }
    .fotdown img:nth-child(1){
        width: 14%;
    }
    .fotdown img:nth-child(2){
        width: 14%;
    }
    .fotdown img:nth-child(3){
        width: 14%;
    }
    .fotdown img:nth-child(4){
        width: 29%;
    }
    .fotdown img:nth-child(5){
        width: 29%;
    }
    .longphoto{
        width: 100%;
        margin: 0 auto;
        height: 5.9rem;
    }
    .longphoto img{
        width:100%;
        height: 100%;
    }


</style>