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
                        <span>admin <i class="iconfont icon-xiala-tianchong"></i></span>
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
                <left-nav :datatype="scalelistType" @add-label="addlabel"></left-nav>
                <div class="content" :style="{'padding-left':scalelistType?'220px':'0'}">
                    <ul class="content-head">
                        <router-link to="/">
                            <li>
                                <i class="iconfont icon-zhuye"></i> &nbsp;主页
                            </li>
                        </router-link>
                        <router-link v-for="item,index in labelArr" :to="item.router" :key="index">
                            <li>
                                {{item.title}}&nbsp;&nbsp;<span @click.prevent="rmlabel(index)">&times;</span>
                            </li>
                        </router-link>
                    </ul>
                    <div class="content-main">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import "./font_13s9dhreitta/iconfont.css"
import leftNav from '@/components/leftNav'
export default {
  data(){
    return{
        scalelistType: true,
        labelArr: [],
    }
  },
  components:{
    leftNav,
  },
  methods: {
    scalelist() {
        if (this.scalelistType) {
            this.scalelistType = !this.scalelistType;
        } else {
            this.scalelistType = !this.scalelistType;
        }
    },
    addlabel(item) {
        var addtype = true;
        this.labelArr.forEach(element => {
            if (element.title == item.title) {
                addtype = false;
            }
        });
        if (addtype) {
            this.labelArr.push(item);
        }
    },
    rmlabel(index) {
        if (index == this.labelArr.length - 1) {
            if (index == 0) {
                this.labelArr.splice(index, 1);
                this.$router.push('/')
            } else {
                this.labelArr.splice(index, 1);
                this.$router.push(this.labelArr[index - 1].router)
            }
        } else {
            this.labelArr.splice(index, 1);
            this.$router.push(this.labelArr[index].router)
        }
    },
},

}
</script>

<style>
.clearfix::after,
    .clearfix::before {
        content: '';
        display: table;
    }
    
    .clearfix::after {
        clear: both;
    }
    
    .clearfix {
        zoom: 1;
    }
  * {
    padding: 0;
    margin: 0;
    list-style: none;
}

a {
    text-decoration: none;
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

.content {
    width: 100%;
    height: 100%;
    padding-left: 220px;
    background: #fff;
    transition: all .5s linear;
    box-sizing: border-box;
}

.content-head {
    width: 100%;
    height: 36px;
    background: #eee;
    display: flex;
}

.content-head a {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
}

.content-head a i {
    font-weight: bolder;
}

.content-head a.router-link-exact-active {
    background: #fff;
}

.content-head span {
    color: #888;
    font-size: 20px;
    font-weight: bolder;
}

.content-head span:hover {
    color: red;
}

.content-main {
    height: 100%;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
}
</style>
