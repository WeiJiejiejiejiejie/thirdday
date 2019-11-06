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
    import edit from "../../assets/img/mmexport1571041218545_11.jpg"
    import editt from "../../assets/img/mmexport1571041218545_07.jpg"
    export default {
        name: "gitphotod",
        data(){
            return {
                "products":[
                    {
                        edits:edit,
                        "phonemodel":"魅族 16s Pro 亲肤壳膜套装",
                        "timeprice":"亲肤亲近，安全防护",
                        "price":"39"
                    },
                    {
                        edits:editt,
                        "phonemodel":"魅族移动电源3",
                        "timeprice":"双向快充双充电口 轻薄小巧",
                        "price":"79"
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