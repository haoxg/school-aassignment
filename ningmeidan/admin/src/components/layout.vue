<template>
    <div id="container" class="clearfix">
            <!-- 头部 -->
            <div id="header" class="clearfix">
                <slot name="page-header"></slot>
            </div>
            <!-- 头部over -->

            <!--主体 -->
            <div id="content" class="clearfix">
                <!-- 左边导航 -->
                <transition name="slide">
                        <div id="main_left" v-show="navShow">
                            <slot name="page-nav"></slot>
                        </div>
                </transition>
                <!-- 左边导航 over-->

                <!-- 右边内容 -->
                <div id="main_right" :style="{left:navShow?'221px':'0'}">
                    <div class="page-tab">
                        <slot name="page-tab"></slot>
                    </div>
                    <div class="right-cont">
                        <div class="right-page"><slot></slot></div>
                    </div>
                </div>
                <!-- 右边内容over -->
            </div>
            <!-- 主体over -->
        </div>
</template>
<script>
export default {
     data() {
        return {
            navShow: true,
        }
    },
    methods: {
        shrink() {
            this.navShow = !this.navShow;
        }
    }
}
</script>
<style scoped="scoped">
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

.cleafix:after,
.clearfix:before {
    display: table;
    content: '';
}

.clearfix:after {
    clear: both;
}

.clearfix {
    zoom: 1
}

#header {
    width: 100%;
    height: 50px;
    background-color: #111;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
}

#header .logo a {
    float: left;
    color: #fff;
    font-size: 18px;
    padding-left: 20px;
    line-height: 50px;
    width: 200px;
    transition: background-color ease .3s;
    text-decoration: none;
}

.left_open {
    width: 32px;
    height: 55px;
    float: left;
}

.left_open span {
    color: rgb(255, 255, 255);
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    background: rgba(233, 194, 68);
    border-radius: 3px;
    transition: background-color 0.3s ease 0s;
    display: inline-block;
}

.left_open span:hover {
    background: rgba(255, 255, 255);
}

#header .right {
    background-color: rgba(0, 0, 0, 0);
    float: right;
    transition: background-color 0.3s ease 0s;
    padding-right: 100px;
}

#header .left {
    float: left;
    margin-left: 20px;
}

.layui_nav_item {
    color: rgb(204, 204, 204);
    line-height: 50px;
}

.layui_nav_item a {
    color: rgb(204, 204, 204);
    text-decoration: none;
}


/* .layui_nav {
    position: relative;
    padding: 0 20px;
    background-color: #393D49;
    color: #fff;
    border-radius: 2px;
    font-size: 0;
    box-sizing: border-box;
} */

.more {
    font-size: 12px;
}

#content {
    width: 100%;
    height: 673px;
}

#main_left {
    display: block;
    position: absolute;
    top: 50px;
    bottom: 0px;
    left: 0px;
    z-index: 2;
    padding-top: 10px;
    background-color: rgb(34, 35, 36);
    width: 220px;
    max-width: 220px;
    border-right: 1px solid rgb(19, 30, 38);
    min-height: 500px;
    transition: .5s;
}

#main_right {
    position: absolute;
    top: 50px;
    right: 0px;
    bottom: 0px;
    left: 221px;
    z-index: 1;
    transition: .5s;
}


.s-right {
    float: left;
    color: #8e8e8e;
    line-height: 50px;
    font-size: 12px;
    margin-right: 20px;
}

#head_nav {
    width: 100%;
    height: 35px;
    position: relative;
    z-index: 100;
    background: rgb(239, 238, 240);
    line-height: 35px;
}

#head_nav .my {
    float: left;
    width: 100px;
    font-family: layui-icon!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
}

#head_nav .my span {
    font-size: 20px;
    margin-left: 10px;
}

.menu_list {
    min-width: 100px;
    height: 30px;
    float: left;
}

.menu_list li {
    float: left;
    width: 100px;
}

.glyphicon-remove {
    display: inline-block;
    width: 25px;
    height: 25px;
    font-size: 12px;
    line-height: 25px;
    text-align: center;
    border-radius: 50%;
}

.glyphicon-remove:hover {
    color: #fff;
    background-color: red;
}

.new {
    width: 100px;
    height: 102px;
    background-color: #fff;
    border: 1px solid #ccc;
    position: absolute;
    top: 50px;
    text-align: center;
    display: none;
    z-index: 10;
}

.new li {
    line-height: 33px;
    border-bottom: 1px solid #ccc;
}

.new li a {
    color: #8e8e8e;
    text-decoration: none;
}


.right-cont {
    width: 100%;
    height: 633px;
    padding: 10px;
    background-color: rgb(248, 248, 248);
    overflow-y:auto;
}

.right-cont .right-page {
    background-color: #fff;
    height: 100%;
    padding: 10px;
}
</style>
