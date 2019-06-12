<template>
  <div id="app">
    <layout>
            <!-- 头部 -->
            <template slot="page-header">
                <div>
                        <div class="logo">
                            <a href="index.html">L-admin v2.0</a>
                        </div>
                        <div class="left_open">
                            <span @click="shrink" class="glyphicon glyphicon-th-list open_left" title="展开左侧栏"></span>
                        </div>
                        <div @mouseover="tanchu2" @mouseout="tanchuout" class="layui_nav left clearfix">
                            <div class="layui_nav_item">
                                <a href="javascript:;">
                                            + 新增
                                        </a>
                                <span class="glyphicon glyphicon-triangle-bottom more"></span>
                            </div>
                            <ul class="new" id="newMenu">
                                <li><a href="#"><span class="glyphicon glyphicon-list-alt"></span> 资讯</a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-picture"></span> 图片</a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-user"></span> 用户</a></li>
                            </ul>
                    
                        </div>
                        <div @mouseover="tanchu1" @mouseout="tanchuout" class="layui_nav right clearfix">
                            <div class="layui_nav_item">
                                <a href="javascript:;"> admin</a>
                                <span class="glyphicon glyphicon-triangle-bottom more"></span>
                            </div>
                            <ul class="new" id="act">
                                <li><a href="#">个人信息</a></li>
                                <li><a href="#">切换账号</a></li>
                                <li><a href="#">退出</a></li>
                            </ul>
                        </div>
                    </div>
            </template>
            <!-- 头部 over -->

            <template slot="page-nav">
                <left-nav  @tab-event="addTab"></left-nav>
            </template>
            
            <template slot="page-tab">
                <ul class="tabs">
                  <li class="my-computer"><span class="glyphicon glyphicon-home"></span>我的电脑</li>
                    <li v-for="(item,index) in tabs" :key="'a'+index">
                        <router-link :to="item.url">
                                {{item.title}}<i @click.prevent="rmtab(index)">x</i>
                        </router-link>
                    </li>
                </ul>
            </template>
            <router-view></router-view>
        </layout>
  </div>
</template>

<script>
import layout from '@/components/layout'
import leftNav from '@/components/leftNav'

export default {
  name: 'App',
  components:{
    layout,
    leftNav
  },
  data(){
        return {
        value1: 1,
        curIndex: '0',
        tabs: [],
        isShrink: false
        }
    },
    methods: {
        addTab(item) {
            if (this.tabs.indexOf(item) == -1) {
                this.tabs.push(item);
            }
        },
        rmtab(index) {
            console.log(index)
            this.curIndex = index;
            if (this.tabs.length == 1) {
                this.tabs.splice(index, 1);
                setTimeout(() => {
                    this.$router.push('/');
                }, 0)
            } else if (index == this.tabs.length - 1) {
                this.tabs.splice(index, 1);
                setTimeout(() => {
                    this.$router.push(this.tabs[index - 1].url);
                }, 0)

            } else {
                this.tabs.splice(index, 1);
                setTimeout(() => {
                    this.$router.push(this.tabs[index].url);
                }, 0)
            }

        },
        shrink() {
            this.isShrink = !this.isShrink;
            if (this.isShrink) {
                main_right.style.left = "0";
                main_left.style.left = "-221px";

            } else {
                main_right.style.left = "221px";
                main_left.style.left = '0';

            }

        },
        tanchu1() {
            act.style.display = "block";
        },
        tanchu2() {
            newMenu.style.display = "block";

        },
        tanchuout() {
            act.style.display = "none";
            newMenu.style.display = "none";
        }
    }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
i{
  font-style: normal;
}
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tabs {
    height: 40px;
    background-color: #ddd;
    margin-bottom: 0;
}
.tabs li.my-computer{
  float: left;
  margin-top:5px;
}
.tabs li.my-computer span{
  margin-right:10px;
}
.tabs li {
    width: 140px;
    float: left;
    line-height: 40px;
    font-size: 20px;
}

.tabs li a {
    text-decoration: none;
    color: #000;
    display: inline-block;
    width: 100%;
    height: 100%;
    display: inline-block;
    padding:0;
}

.tabs .router-link-active {
    background-color: #fff;
    padding:0;
}

.tabs li.active {
    background-color: rgb(248, 248, 248);
}

.tabs li i {
    font-style: normal;
    margin-left: 10px;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 20px;
    padding: 5px;
    border-radius: 50%;
    background-color: beige;
    text-align: center;
    cursor: pointer;
}

.tabs li i:hover {
    background-color: rgb(253, 35, 6);
    color: #fff;
}

</style>
