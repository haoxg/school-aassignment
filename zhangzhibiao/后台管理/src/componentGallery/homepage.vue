<template>
    <div id="homepage"><h1>欢迎来到后台管理系统</h1></div>
</template>

<script>
    export default {

    }
</script>

<style>
*{
    user-select: none;
}
    #homepage{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
    }
    #homepage h1{ 
        background-image: -webkit-linear-gradient(bottom,#42f1d1,#fdf903,#42f1d1); 
        -webkit-background-clip:text; 
        -webkit-text-fill-color:transparent;
        margin-top: -150px; 
    }
</style>
