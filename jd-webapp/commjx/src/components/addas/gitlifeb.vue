<template>
    <div>
    <div class="meizuPhone" :key="i" v-for="(n,i) in products">
        <p><img v-bind:src="n.edits" style="height: 1.89rem"/></p>
        <p>{{n.phonemodel}}</p>
        <p style="border: none;color: #ccc;font-size: 0.12rem;">{{n.timeprice}}</p>
        <p>￥{{n.price}}</p>
    </div>
    </div>
</template>

<script>
    import edit from "../../assets/img/mmexport1571041217394_11.jpg"
    import editt from "../../assets/img/mmexport1571041217394_12.jpg"
    export default {
        name: "gitlifea",
        data(){
            return {
                "products":[
                    {
                        edits:edit,
                        "phonemodel":"魅族星球探索 帆布袋",
                        "timeprice":"星球无限 追求不止",
                        "price":"79"
                    },
                    {
                        edits:editt,
                        "phonemodel":"魅族星球探索 鼠标垫",
                        "timeprice":"星球无限 追求不止",
                        "price":"69"
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