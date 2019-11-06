<template>
    <div>
    <div class="phonezz">
        <p><img src="../../assets/img/QQ图片20191018101335_16.jpg"><span>{{num}}</span></p>
        <p><img src="../../assets/img/QQ图片20191018101335_19.jpg"><span>{{alpha}}</span></p>
    </div>
    <div class="bottomd">
        <div>
            <p>{{address[0]}}</p>
            <p>{{address[1]}}</p>
        </div>
        <div>
            <p><img src="../../assets/img/QQ图片20191018101335_23.jpg"><span>{{family}}</span></p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "vfooter",
        data(){
            return {
                "display":"为您推荐",
                 "num":"400-788-3333",
                "alpha":"在线客服",
                address:["粤ICP备13003602号-2 合字B2-20170010","营业执照@2018 Meizu All rights reserved"],
                "family":"简体中文"
            }
        }
    }
</script>

<style scoped>

    div .phonezz{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 0.1rem 0;
    }
    div .phonezz p{
        width: 44%;
        font-size: 0.14rem;
        height: 0.36rem;
        background-color: rgb(0,180,255);
        border-radius: 0.2rem;
    }
    div .phonezz p img{
        float: left;
        height: 0.34rem;
        margin-left: 0.2rem;
    }
    div .phonezz p span{
        height: 0.36rem;
        line-height: 0.36rem;
        display: inline-block;
        float: left;
        color: white;
    }
    div .bottomd{
        width: 100%;
        display: flex;
    }
    div .bottomd div:nth-child(1){
        width: 65%;
        font-size: 0.12rem;
    }
    div .bottomd div:nth-child(1) p{
        height: 0.3rem;
        line-height: 0.3rem;
        text-indent: 0.08rem;
    }
    div .bottomd div:nth-child(2){
        width: 35%;
        font-size: 0.16rem;
        margin-top: 0.1rem;
    }
    .bottomd div:nth-child(2) img{
        float: left;
        width: 0.4rem;
    }
    div .bottomd div:nth-child(2) span{
        float: left;
        display: inline-block;
        height: 0.4rem;
        line-height: 0.4rem;
    }
</style>