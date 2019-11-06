<template>
    <div>
        <header>
            <p><img src="../assets/img/t01c18e525823affaf1_03.jpg"></p>
            <p><img src="../assets/img/t01c18e525823affaf1_05.jpg"></p>
            <p><img src="../assets/img/t01c18e525823affaf1_07.jpg"></p>
            <p><img src="../assets/img/t01c18e525823affaf1_09.jpg"></p>
        </header>
        <div class="nav">
            <p><a href="#/list?id='+index">{{list[0]}}</a></p><p><a href="#/phone?id='+index">{{list[1]}}</a></p><p><a href="#/voice?id='+index">{{list[2]}}</a></p><p><a href="#/equi?id='+index">{{list[3]}}</a></p><p><a href="#/life?id='+index">{{list[4]}}</a></p>
        </div>
        <p class="alawys"><img src="../assets/img/1_02.jpg"></p>
        <git-equi-a class="gitphoto"></git-equi-a>
        <git-equi-b class="gitphoto"></git-equi-b>
        <git-equi-c class="gitphoto"></git-equi-c>
        <git-equi-d class="gitphoto"></git-equi-d>
        <p class="tuijian">{{Ttitle[1]}}</p>
        <git-voice-f class="gitphoto"></git-voice-f>
        <git-voice-e class="gitphoto"></git-voice-e>
        <git-footer></git-footer>
    </div>
</template>

<script>
    import gitequia from "./addas/gitequia";
    import gitequib from "./addas/gitequib";
    import gitequic from "./addas/gitequic";
    import gitequid from "./addas/gitequid";
    import gitvoicee from "./addas/gitvoicee";
    import gitvoicef from "./addas/gitvoicef";
    import footer   from  "./addas/footer"
    export default {
        name: "vequi",
        data(){
            return {
                list:["推荐","手机","声学","配件","生活"],
                Ttitle:["魅族声学","为您推荐"],
                item:{}
            }
        },
        components:{
            "git-equi-a":gitequia,
            "git-equi-b":gitequib,
            "git-equi-c":gitequic,
            "git-equi-d":gitequid,
            "git-voice-e":gitvoicee,
            "git-voice-f":gitvoicef,
            "git-footer":footer
        }
    }
</script>

<style scoped>
    body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr,div,em,strong{margin:0;padding:0;}
    body{font-family: "微软雅黑";}
    ul,ol{list-style-type: none;}
    a{text-decoration: none;}
    img{border: none;}
    clear：after{content:"";display:block;clear:both;height:0;overflow:hidden;visibility:hidden;}
    /*div {*/
    /*        font-size: 26.67vw;*/
    /*}*/
    div header{
        width: 100%;
        background-color: white;
        height: 0.26rem;
        display: flex;
        font-size: 0;
        margin-top: 0.1rem;
    }
    div header img{
        height: 0.26rem;
    }
    div header p:nth-child(1){
        margin-left: 0.2rem;
    }
    div header p:nth-child(2){
        margin-left: 1rem;
    }
    div header p:nth-child(3){
        margin-left:0.8rem;
    }
    div header p:nth-child(4){
        margin-left: 0.48rem;
    }
    div .nav{
        width: 100%;
        height: 0.36rem;
        display: flex;
        justify-content: space-around;
    }
    div .nav p{
        font-size: 0.16rem;
        height: 0.32rem;
        line-height: 0.32rem;
        font-weight: 500;

    }
    div.nav p a{
        color: black;
    }
    div .nav p:hover{
        border-bottom: 0.02rem solid cornflowerblue;
    }
    div .nav p:hover .nav p a{
        border-bottom: 0.02rem solid cornflowerblue;
        color: cornflowerblue;
    }
    div .banner{
        width: 100%;
        height: 2rem;
        margin-top: 0.1rem;
    }
    div .banner img{
        width: 100%;
        height: 100%;
    }
    div .alawys{
        width: 100%;
        height: 1.8rem;
    }
    div .alawys img{
        width: 100%;
        height: 100%;
    }
    .gitphoto {
        width: 100%;
        background-color: rgb(247, 247, 247);
        display: flex;
        justify-content: space-between;
    }
    div .tuijian{
        width: 100%;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.18rem;
        background-color: #cccccc;
    }
</style>