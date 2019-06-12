<template>
  <div id="app">
    <div class="container">
            <div class="head">
                <div class="logo">
                    <img src="" alt="">
                </div>
                <div class="list">
                    <i class="iconfont icon-liebiao" @click="scalelist"></i>
                </div>
                <div class="increase">
                    <span>+新增<i class="iconfont icon-xiala-tianchong"></i></span>
                    <ul class="popup">
                        <li><i class="iconfont">&#xe605;</i>资讯</li>
                        <li><i class="iconfont">&#xe63e;</i>图片</li>
                        <li><i class="iconfont">&#xe619;</i>用户</li>
                    </ul>
                </div>
                <div class="user">
                    <div>
                        <span>admin<i class="iconfont icon-xiala-tianchong"></i></span>
                        <ul class="popup">
                            <li>个人信息</li>
                            <li>切换账号</li>
                            <li>退出登录</li>
                        </ul>
                    </div>
                    <div>前台首页</div>
                </div>
            </div>
            <div class="content-box">
                    <left-nav :datatype="scalelistType" @addtab-event="addTab"></left-nav>
                    <div class="content" :style="{'padding-left':scalelistType?'220px':'0'}">
                        <!-- <router-view></router-view> -->
                        <ol>
                            <li><i class="iconfont icon-zhuye"></i>&nbsp;我的主页&nbsp;</li>
                            <router-link :to="item.router" v-for="item,index in tabarr">
                                <li>
                                    {{item.title}}&nbsp;
                                        <span @click.prevent="rmTab(index)" >&times;</span>
                                </li>
                            </router-link>
                        </ol>
                        <div class="content-main">
                            <router-view></router-view>
                        </div>
                    </div>
                    
            </div>
        </div>
  </div>
</template>

<script>
import '@/font_13s9dhreitta/iconfont.css'
import leftNav from '@/components/leftNav'
export default {
  components:{
    leftNav,
  },
   methods: {
                scalelist() {
                    if (this.scalelistType) {
                        this.scalelistType = !this.scalelistType;
                    } else{
                        this.scalelistType = !this.scalelistType;
                    }
                },
                rmTab(index){
                    if (index == this.tabarr.length - 1) {
                        if (index == 0) {
                            this.tabarr.splice(index, 1);
                            this.$router.push('/')
                        } else {
                            this.tabarr.splice(index, 1);
                            this.$router.push(this.tabarr[index - 1].router)
                        }
                    } else {
                        this.tabarr.splice(index, 1);
                        router.push(this.tabarr[index].router)
                    }
                },
                addTab(item){
                    console.log(item)
                    var isAdd=true;
                    this.tabarr.forEach(element => {
                        if(item.title==element.title){
                            isAdd=false;
                        }
                    });
                    if(isAdd){
                        this.tabarr.push(item)
                    }
                    console.log(this.tabarr)
                }
            },
            data(){
              return {
                scalelistType: true,
                tabarr:[],
                }
            },
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    user-select: none;
    }
    i {
    display: inline-block;
    }
    html,
    body {
    height: 100%;
    overflow: hidden;
    }
    .container {
    width: 100%;
    height: 100%;
    background: #000;
    }
    #app {
    height: 100%;
    }
    .head {
    width: 100%;
    height: 56px;
    color: #ccc;
    cursor: pointer;
    user-select: none;
    }
    .logo {
    width: 220px;
    height: 100%;
    float: left;
    }
    .list {
    width: 32px;
    height: 100%;
    float: left;
    }
    .list i {
    display: block;
    width: 32px;
    height: 32px;
    margin-top: 12px;
    background: #333;
    border-radius: 3px;
    text-align: center;
    line-height: 32px;
    font-size: 26px;
    color: #fff;
    }
    .increase {
    width: 88px;
    margin-left: 35px;
    line-height: 56px;
    text-align: center;
    float: left;
    position: relative;
    }
    .popup {
    width: 100%;
    position: absolute;
    top: 86px;
    left: 0;
    background: #fff;
    color: #000;
    box-shadow: 0px 0px 3px #666;
    opacity: 0;
    z-index: -1;
    }
    .popup li {
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    }
    .popup li i {
    margin-right: 7px;
    color: #999;
    }
    .increase i {
    margin-left: 4px;
    }
    .user {
    float: right;
    padding: 0 20px;
    }
    .user div {
    padding: 0 20px;
    line-height: 56px;
    float: left;
    position: relative;
    }
    .user div:hover .popup,
    .increase:hover .popup {
    transition-duration: .5s;
    transform: translateY(-30px);
    opacity: 1;
    z-index: 1;
    }
    .user div:hover span i,
    .increase:hover span i {
    transition-duration: .5s;
    transform: rotateX(180deg)
    }
    .content-box {
    width: 100%;
    height: 100%;
    position: relative;
    }
    .classifylist {
    padding-top: 10px;
    width: 220px;
    height: 100%;
    background: #222;
    color: #888;
    box-sizing: border-box;
    user-select: none;
    transition: all .5s linear;
    position: absolute;
    top: 0;left: 0;
    }
    .classifylist>ul>li {
    height: auto;
    line-height: 50px;
    margin-left: 3px;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    }
    .classifylist>ul>li>div {
    padding: 0 20px;
    box-sizing: border-box;
    height: 50px;
    }
    .classifylist>ul>li>div .rotateActive {
    display: inline-block;
    transform: rotate(90deg);
    transition: all .2s linear;
    }
    .classifylist>ul .active {
    margin-left: 0;
    border-left: 3px solid #42b8f1;
    background-color: #000;
    color: #fff;
    }
    .classifylist>ul .active1 {
    margin-left: 0;
    border-left: 3px solid #42b8f1;
    background-color: #000;
    }
    .left {
    margin-right: 10px;
    }
    .right {
    float: right;
    }
    .classifylist>ul>li>ol {
    height: 0;
    display: block;
    line-height: 50px;
    color: #888;
    transition: all .5s linear;
    opacity: 0;
    }
    .classifylist>ul>li>ol>a{
        color: #888;
    }
    .classifylist>ul>li>ol>a li{
    line-height: 50px;
    height: 50px;
    }
    .classifylist>ul>li>ol>a li:hover {
    color: #fff;
    background: #333;
    }
    .classifylist>ul>li>ol i {
    margin-left: 30px;
    margin-right: 10px;
    font-size: 14px;
    }
    .content {
    width: 100%;
    height: 100%;
    padding-left: 220px;
    background: #fff;
    transition: all .5s linear;
    box-sizing: border-box;
    }
    .content-main{
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
    }
    .content>ol{
        width: 100%;
        height: 40px;
        background-color: #ddd;
        display: flex;
        align-items: center;
    }
    .content>ol li{
        padding: 0 10px;
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #000;
    }
    .content>ol li a{
        color: #000;
    }
    .content>ol a.router-link-exact-active{
        background-color: #fff;
    }
    .content>ol li i{
        font-weight: bold;
    }
    .content>ol li span{
        width: 20px;
        height: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    .content>ol li span:hover{
        color: #f00;
        transition: all .4s linear;
        font-size: 20px;
    }
</style>
