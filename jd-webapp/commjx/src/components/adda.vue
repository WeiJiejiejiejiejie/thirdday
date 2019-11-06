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
         <p class="banner"><img src="../assets/img/t01c18e525823affaf1_43.jpg"/></p>
         <div class="coum">
                 <p><img src="../assets/img/t01c18e525823affaf1_16.jpg"><span>{{listtwo[0]}}</span></p>
                 <p><img src="../assets/img/mmexport1571041222189_07.jpg"><span>{{listtwo[1]}}</span></p>
                 <p><img src="../assets/img/t01c18e525823affaf1_18.jpg"><span>{{listtwo[2]}}</span></p>
         </div>
         <adda-first-four class="shop" ></adda-first-four>
         <div class="frow">
              <div><img src="../assets/img/t01c18e525823affaf1_38.jpg"></div>
              <div>
                   <p><img src="../assets/img/t01c18e525823affaf1_39.jpg"></p>
                    <p><img src="../assets/img/mmexport1571041222189_40.jpg" alt=""></p>
              </div>
         </div>
         <p class="Ttitle">{{Ttitle[0]}}</p>
         <p class="alawys"><img src="../assets/img/a_02.jpg"></p>
         <git-photo-a class="gitphoto"></git-photo-a>
         <git-photo-b class="gitphoto"></git-photo-b>
         <git-photo-c class="gitphoto"></git-photo-c>
         <git-photo-d class="gitphoto"></git-photo-d>
         <p class="Ttitle">{{Ttitle[1]}}</p>
         <p class="Ttitleimg"><img src="../assets/img/mmexport1571041222189_21.jpg"></p>
         <git-voice-a class="gitphoto"></git-voice-a>
         <git-voice-b class="gitphoto"></git-voice-b>
         <git-voice-c class="gitphoto"></git-voice-c>
         <git-voice-d class="gitphoto"></git-voice-d>
            <p class="tuijian">{{display}}</p>
          <git-footer></git-footer>
        </div>
</template>

<script>
    // import { button } from "vant"
    import displayfour from "./addas/displayfour"
    import gitphotoa from "./addas/gitphotoa";
    import gitphotob from "./addas/gitphotob";
    import gitphotoc from "./addas/gitphotoc";
    import gitphotod from "./addas/gitphotod";
    import gitvoicea from "./addas/gitvoicea";
    import gitvoiceb from "./addas/gitvoiceb";
    import gitvoicec from "./addas/gitvoicec";
    import gitvoiced from "./addas/gitvoiced";
    import footer from "./addas/footer";
    export default {
        name: "vadda",
            data(){
                 return {
                     list:["推荐","手机","声学","配件","生活"],
                     listtwo:["魅族官方直供","7天无理由退货","满80元减运费"],
                     Ttitle:["智能手机","魅族声学"],
                     display:"为您推荐"
                 }
            },
            components:{
                "adda-first-four":displayfour,
                    "git-photo-a":gitphotoa,
                    "git-photo-b":gitphotob,
                    "git-photo-c":gitphotoc,
                    "git-photo-d":gitphotod,
                    "git-voice-a":gitvoicea,
                    "git-voice-b":gitvoiceb,
                    "git-voice-c":gitvoicec,
                    "git-voice-d":gitvoiced,
                    "git-footer":footer,
                    // eslint-disable-next-line vue/no-unused-components

            },
        // components:{
        //     [button.name]:button
        // },
    }
</script>

<style scoped>
        body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr,div,em,strong{margin:0;padding:0;}
        body{font-family: "微软雅黑";}
        ul,ol{list-style-type: none;}
        a{text-decoration: none;}
        img{border: none;}
        clear：after{content:"";display:block;clear:both;height:0;overflow:hidden;visibility:hidden;}
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
        div .coum{
                width: 100%;
                height: 0.3rem;
                display: flex;
                justify-content: space-around;
                font-size: 0rem;
                background-color: rgb(247,247,247);
        }
        div .coum p{
                width: 32%;
                font-size: 0rem;
                height: 0.3rem;
        }
        div .coum p img{
                width: 0.28rem;
                height: 0.3rem;
                float: left;
        }
        div .coum p span{
                display: inline-block;
                font-size: 0.1rem;
                height: 0.3rem;
                line-height: 0.3rem;
                float: left;
        }
        div .shop{
                width: 90%;
                margin: 0.1rem auto;
                display: flex;
        }
        div .frow{
                display: flex;
                width: 100%;
                height: 2.8rem;
                background-color: rgb(247,247,247);
        }
        div .frow div{
                width: 50%;
                margin: auto 0;
                height: 2.6rem;
        }
        div .frow div p{
                height: 1.3rem;
        }
        div.frow div img{
                width: 100%;
        }
        div .alawys{
                width: 100%;
                height: 1.8rem;
        }
        div .alawys img{
                width: 100%;
                height: 100%;
        }
        div .Ttitle{
                font-size: 0.2rem;
                font-weight: 700;
                text-align: center;
                height: 0.5rem;
                line-height: 0.5rem;
        }
        .gitphoto{
                width: 100%;
                background-color:rgb(247,247,247);
                display: flex;
                justify-content: space-between;
        }
        div .Ttitleimg{
                width: 100%;
        }
        div .Ttitleimg img{
                width: 100%;
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