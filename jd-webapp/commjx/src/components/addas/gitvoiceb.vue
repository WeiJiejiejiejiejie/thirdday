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
    import edit from "../../assets/img/mmexport1571041222189_24.jpg"
    import editt from "../../assets/img/mmexport1571041222189_31.jpg"
    export default {
        name: "gitphotoa",
        data(){
            return {
                "products":[
                    {
                        edits:edit,
                        "phonemodel":"魅族 HIFI 解码耳放",
                        "dissprice":"新品",
                        "timeprice":"小身材 大能量",
                        "price":"169"
                    },
                    {
                        edits:editt,
                        "phonemodel":"魅族 EP2X 耳机",
                        "dissprice":"直降",
                        "timeprice":"【契合声音的流动之美】",
                        "price":"1499"
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