<template>
  <div id="app">
        <div id="container">
            <div id="header" class="clearfix">
                <div class="logo">
                    <a href="#">L-admin</a>
                </div>
                <div class="list">
                    <i class=" icon-liebiao" @click="scalelist"></i>
                </div>
                <!-- 我。。。。。。。。。 -->
                <div class="box fl">
                    +新增
                    <div class="caidan">
                        <ul>
                            <li><a href="#">资讯</a></li>
                            <li><a href="#">图片</a></li>  
                            <li><a href="#">用户</a></li>
                        </ul> 
                 </div>
            </div>
                <!-- 我是图 -->
                <div class="box2 fr">
                    admin
                    <div class="caidan2">
                        <ul>
                            <li>
                                <a href="index.html">个人信息</a>
                            </li>
                            <li>
                                <a href="index.html">切换账号</a>
                            </li>
                            <li>
                                <a href="index.html">退出</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 。。。。这是分割线。。。。。。。 -->
            </div>
            <!-- 我是中心 -->
            <div class="content-box">
                <!-- //我是 左边栏 -->
                <left-nav :datatype="scalelistType" @addtab-event="addTab"></left-nav>
                <!-- //我是 右边栏 -->
                <div class="content" :style="{'left':scalelistType?'220px':'0'}">
                    <ol>
                        <li>
                            <i class="icon-zhuye"></i>我的主页
                        </li>
                        <li v-for="(item,index) in tabarr " :key="'a'+index">
                            <router-link :to="item.router">
                                {{item.title}}&nbsp;
                                <span @click.prevent="rmTab(index)">&times;</span>
                            </router-link>
                        </li>
                    </ol>
                    <!-- 内容涵盖 -->
                    <div class="content-main">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

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
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

#header {
  width: 100%;
  height: 55px;
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
  transition: background-color ease 0.3s;
  text-decoration: none;
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
.content-box {
  width: 100%;
  height: 700px;
  background: #111;
  position: relative;
}

/* 我是左边栏 */
.classifylist {
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding-top: 10px;
  background-color: #222324;
  width: 220px;
  max-width: 220px;
  overflow: hidden;
  border-right: 1px solid #131e26;
}
.classifylist > ul > li {
  line-height: 50px;
  border-left: 4px solid #222324;
  transition: background-color ease 0.3s;

  font-size: 14px;
  cursor: pointer;
  color: #8e8e8e;
}
.classifylist > ul > li > div {
  padding: 0 20px;
  box-sizing: border-box;
  height: 50px;
}
.classifylist > ul > li > div .rotateActive {
  display: inline-block;
  transform: rotate(90deg);
  transition: all 0.2s linear;
}
.classifylist > ul .active {
  margin-left: 0;
  border-left: 3px solid #42b8f1;
  background-color: #000;
  color: #fff;
}
.classifylist > ul .active1 {
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
.classifylist > ul > li > ol {
  height: 0;
  display: block;
  line-height: 50px;
  color: #888;
  transition: all 0.5s linear;
  opacity: 0;
}
.classifylist > ul > li > ol > a {
  color: #888;
}
.classifylist > ul > li > ol > a li {
  line-height: 50px;
  height: 50px;
}
.classifylist > ul > li > ol > a li:hover {
  color: #fff;
  background: #333;
}
.classifylist > ul > li > ol i {
  margin-left: 30px;
  margin-right: 10px;
  font-size: 14px;
}
/* 我是右边栏 */
.content {
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 221px;
  overflow: hidden;
  z-index: 1;
  background: #fff;
}
.content-main {
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
}
.content > ol {
  width: 100%;
  height: 40px;
  background-color: #ccc;
}
.content > ol li {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  float: left;
}
.content > ol li a {
  color: #000;
}
.content > ol li i {
  font-weight: bold;
}
.content > ol li span {
  width: 20px;
  height: 20px;
  font-weight: bold;
  cursor: pointer;
}
.content > ol li span:hover {
  color: #f00;
}
.box {
        position: absolute;
        left: 200px;
        height: 55px;
        color: #fff;
    line-height: 55px;
        margin-left: 100px;
        transition: .5s;
    }
    .box2 {
        position: absolute;
        right: 200px;
        height: 55px;
        color: #fff;
        line-height: 55px;
        margin-left: 100px;
        transition: .5s;
    }
    
    .caidan {
        width: 120px;
        position: absolute;
        left: -20px;
        border: 1px #ccc solid;
        transition: .3s;
        background: #fff;
        opacity: 0;
        visibility: hidden;
        color: #000;
        margin-top: 50px
    }
    .caidan2 {
        width: 120px;
        position: absolute;
        left: -20px;
        border: 1px #ccc solid;
        transition: .3s;
        color: #000;
        background: #fff;
        opacity: 0;
        margin-top: 50px
    }
    .caidan ul li,
    .caidan2 ul li{
        text-align: center;
        color:#fff;
    }
    .caidan ul li a,
    .caidan2 ul li a{
        text-align: center;
        color:#000;
    }
    .caidan ul li:hover,
    .caidan2 ul li:hover{
        background: rgb(239, 238, 240);
    }
    
    
    
    .box:hover>.caidan,
    .box2:hover>.caidan2 {
        margin-top: 0px;
        visibility: visible;
        opacity: 1;
        z-index: 2;
    }
    .container{
        width:100%;
        height:100%;
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
    
</style>
