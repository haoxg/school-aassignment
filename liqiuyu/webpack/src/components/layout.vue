<template>
    <div class="content">
        <div class="head clearfix">
            <slot name="head-nav"></slot>
        </div>
        <div  class="lists" id="lists">
            <slot name="page-nav"></slot>
        </div>
        <div  class="tab_cont" id="tab_cont">
            <div class="my_tit">
                <span><span class="glyphicon glyphicon-home my_tit_icon"></span> 我的桌面</span>
                <slot name="page-tab"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        user-select: none;
    }

    ul li {
        list-style: none;
    }

    .clearfix:after,
    .clearfix:before {
        content: '';
        display: table;
    }

    .clearfix:after {
        clear: both;
    }

    .clearfix {
        zoom: 1;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .content {
        width: 100%;
    }

    .head {
        width: 100%;
        height: 50px;
        background-color: #111;
        border-bottom: 1px solid rgba(0, 0, 0, .8);
    }


    .lists {
        background-color: #222324;
        width: 220px;
        overflow: hidden;
        border-right: 1px solid #131e26;
        position: absolute;
        top: 50px;
        left: 0;
        bottom: 0;
        transition: .5s;
        min-height: 400px;
    }

   
    .my_tit {
        height: 35px;
        background: #efeef0;
        line-height: 35px;
        padding: 0 15px;
        cursor: pointer;
        transition: all .2s;
        vertical-align: middle;
        font-size: 14px;
        text-align: left;
    }

    .tab_cont {
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 220px;
        right: 0;
        transition: .5s;
    }

    .my_tit ul {
        display: inline-block;
        margin-left: 20px;
    }

    .my_tit ul li {
        display: inline-block;
        list-style: none;
        line-height: 35px;
        color: #000;
        font-size: 14px;
        min-width: 65px;
        text-align: center;
        cursor: pointer;
        border-left: 1px solid #ddd;
    }

    .my_tit ul li i {
        border-radius: 50%;
        position: relative;
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        margin-left: 8px;
        top: 1px;
        text-align: center;
        font-size: 18px;
        color: #c2c2c2;
        transition: all .2s;
    }

    .my_tit ul li a {
        color: #000;
        text-decoration: none;
        display: inline-block;
        padding: 0 15px;
    }

    .my_tit ul li i:hover {
        background: #f00;
        color: #fff;
    }

    .my_tit .router-link-active {
        background: #fff;
    } 
</style>
