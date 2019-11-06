<template>
    <div>
    <div class="meizuPhone" :key="i" v-for="(n,i) in products">
        <p><img v-bind:src="n.edits"/></p>
        <p>{{n.phonemodel}}</p>
        <p style="border: none;color: #ccc;font-size: 0.12rem;">{{n.timeprice}}</p>
        <p>￥{{n.price}}</p>
    </div>
    </div>
</template>

<script>
    import edit from "../../assets/img/s_05.jpg"
    import editt from "../../assets/img/mmexport1571041217394_07.jpg"
    export default {
        name: "gitlifea",
        data(){
            return {
                "products":[
                    {
                        edits:edit,
                        "phonemodel":"Pandaer readnap T恤",
                        "timeprice":"潮趣设计|优质纯棉德国织...",
                        "price":"119"
                    },
                    {
                        edits:editt,
                        "phonemodel":"Lifeme 梨木伞",
                        "timeprice":"高定时装压花伞布|隔绝99",
                        "price":"499"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    div .meizuPhone{
        width: 50%;
        font-size: 0.14rem;
        text-align: center;
        background-color: white;
    }
     div  .meizuPhone img {
        width: 96%;
        margin: 0 auto;
    }
     div .meizuPhone p:nth-child(3){
        border: 0.01rem solid red;
        width: 96%;
        margin: 0.1rem auto;
        color: red;
        overflow: hidden;

        text-overflow:ellipsis ;
        white-space: nowrap;
    }
     div .meizuPhone p:nth-child(3) span{
        background-color: red;
        width: 0.5rem;
        color: white;
        display: inline-block;
        float: left;
    }
     div .meizuPhone p:nth-child(4){
        color: red;
    }

</style>