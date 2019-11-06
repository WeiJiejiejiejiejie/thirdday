<template>
    <div>
    <div class="clic">
        <p><img src="../../assets/img/t01c18e525823affaf1_25.jpg"></p>
        <p >{{listtrue[0]}}</p>
    </div>
    <div class="clic">
        <p><img src="../../assets/img/mmexport1571041222189_27.jpg"></p>
        <p >{{listtrue[1]}}</p>
    </div>
    <div class="clic">
        <p><img src="../../assets/img/mmexport1571041222189_29.jpg"></p>
        <p >{{listtrue[2]}}</p>
    </div>
    <div class="clic">
        <p><img src="../../assets/img/mmexport1571041222189_32.jpg"></p>
        <p >{{listtrue[3]}}</p>
    </div>
    </div>
</template>

<script>
    export default {
        name: "displayfour",
        data(){
            return {
                listtrue:["魅族 Note9","魅族 16s Pro","魅族 16s","Mcycle"]
            }
        },

    }
</script>

<style scoped>
    div  .clic{
        width: 25%;
        font-size: 0.12rem;
        text-align: center;
    }
</style>