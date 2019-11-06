<template>

        <div class="footerFour" >
            <div :key="i" v-for="(n,i) in products">
            <p><img v-bind:src="n.edits"/></p>
            <p>{{n.phonemodel}}</p>
            <p>{{n.dissprice}}</p>
            </div>
        </div>

</template>

<script>
    import edit from "../../assets/img/dibu_03.jpg"
    import editt from "../../assets/img/QQ图片20191018101335_05.jpg"
    import editta from "../../assets/img/QQ图片20191018101335_07.jpg"
    import edittb from "../../assets/img/QQ图片20191018101335_09.jpg"
    export default {
        name: "gitvoicee",
        data(){
            return {
                "products":[
                    {
                        edits:edit,
                        "phonemodel":"Query",
                        "dissprice":"真伪查询",
                    },
                    {
                        edits:editt,
                        "phonemodel":"Repair",
                        "dissprice":"一年免费保障",
                    },
                    {
                        edits:editta,
                        "phonemodel":"App",
                        "dissprice":"魅族应用下载",
                    },
                    {
                        edits:edittb,
                        "phonemodel":"Arrive",
                        "dissprice":"百城速达",
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    div .footerFour{
        width: 90%;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
    }
    div .footerFour div{
        width: 25%;
        font-size: 0.12rem;
        text-align: center;
    }
    div .footerFour div p{
        width: 100%;
        color: #ccc;
    }
    div .footerFour div p:nth-child(2){
        font-size: 0.18rem;
        height: 0.3rem;
        line-height: 0.3rem;
        color: black;
    }
    div .footerFour div p img{
        width: 60%;
        height: 0.5rem;
        margin: 0 auto;
    }
</style>