<template>
    <div class="hoom">
        <h1>Welcome to my management system</h1>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    *{margin: 0;padding: 0;list-style: none;text-decoration: none;}
    .hoom{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: linear-gradient(to top right, #CDDC39, #8BC34A, #FFEB3B);
    }
    .hoom h1{  
        background-image:-webkit-linear-gradient(bottom,red,#fd8403,yellow); 
        -webkit-background-clip:text; 
        -webkit-text-fill-color:transparent;
        margin-top: -100px;
        font-size: 50px;
    }
</style>
