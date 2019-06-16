<template>
    <div class="header">
      <router-link to="/particular"><i class="iconfont icon-fanhui-copy"></i></router-link>
      <span>墨迹天气</span>
      <div class="operation">
        <i class="iconfont icon-sangedian"></i>
        |
        <i class="iconfont icon-yuanquan"></i>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .header{
        width: 100%;
        height: 0.70rem;
        display: flex;
        font-size: 0.34rem;
        align-items: center;
        padding-left: 0.3rem;
        box-sizing: border-box;
        margin: 10px 0;
    }
    .icon-fanhui-copy{
        font-size: 0.38rem;
    }
    .header span{
        margin-left: 0.1rem;
    }
    .operation{
        width: 1.8rem;
        height: 0.66rem;
        border: 0.01rem #aaa solid;
        font-size: 0.3rem;
        color: #000;
        border-radius:1rem;
        position: absolute;
        right: 0.3rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #aaa;
        padding: 0 0.1rem;
    }
    .operation i{
        font-size: 0.48rem;
        color: #000; 

    }
</style>
