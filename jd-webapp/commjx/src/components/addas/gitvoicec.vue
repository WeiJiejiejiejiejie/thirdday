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
    import edit from "../../assets/img/mmexport1571041220790_09.jpg"
    import editt from "../../assets/img/mmexport1571041220790_10.jpg"
    export default {
        name: "gitphotoa",
        data(){
            return {
                "products":[
                    {
                        edits:edit,
                        "phonemodel":"魅族 EP2C 耳机",
                        "dissprice":"新品",
                        "timeprice":"单元 Type-c接口",
                        "price":"129"
                    },
                    {
                        edits:editt,
                        "phonemodel":"魅族  EP52 Lite 蓝牙耳机",
                        "dissprice":"直降",
                        "timeprice":"超高性价比创造无线新声代",
                        "price":"169"
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