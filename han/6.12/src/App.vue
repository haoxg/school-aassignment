<template>
  <div id="app">
    <header-top @is-show="isShow"></header-top>
    <transition name="fade" v-if="isShow1">
      <list-li @data-page="abc"></list-li>
    </transition>
    <transition>
      <right-li :style='{"left":!isShow1?"0":"220px"}' :lopage="page1"></right-li>
    </transition>
  </div>
</template>

<script>
import  '@/font_1222882_reaajjoamln/iconfont.css'
import headerTop from '@/components/header'
import listLi from '@/components/left'
import rightLi from '@/components/right'
export default {
  name: "App",
  data() {
      return{
            isShow1: true,
            page1: []
      }
  },
  components:{
    headerTop,
    listLi,
    rightLi
  },
  methods: {
    isShow(data) {
      this.isShow1 = data;
    },
    abc(data) {
      console.log(data.url);
      this.$router.push({
        path: data.url
      });
      var istrue = true;
      this.page1.forEach(element => {
        if (element.title == data.title) {
          istrue = false;
        }
      });
      if (istrue) {
        this.page1.push(data);
      }
    }
  }
};
</script>

<style>
/* 重置样式表 */

* {
    margin: 0;
    padding: 0;
}

ul,
ol {
    list-style: none;
}

em,
i {
    font-style: normal;
}

a {
    text-decoration: none;
    color: rgb(204, 204, 204);
    ;
}


/* a:hover{text-decoration: underline;} */

input {
    border: none;
    outline: none;
    background-color: transparent;
}

body,
html,
#app {
    height: 100%;
}

body {
    position: relative;
    overflow-x: hidden;
    color: rgb(204, 204, 204);
}


/*公用*/

.clearfix:after,
.clearfix:before {
    content: '';
    display: table;
}

.clearfix:after {
    clear: both;
}

.hide {
    display: none;
}

.show {
    display: block
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.style {
    color: black;
    position: absolute;
    top: 55px;
    z-index: 6666;
    border: 1px solid;
    line-height: 36px;
    width: 60px;
    text-align: center
}

header {
    background: #000
}

header a:hover {
    color: white;
}

.col-md-2 {
    width: 200px;
    padding-left: 20px;
    line-height: 55px;
}

.container {
    height: 55px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    width: 100%;
    min-width: 700px;
}

.color {
    margin: 10px;
    line-height: 55px;
}

.color1 {
    color: white
}

;
.right {
    background: white
}

main {
    height: 100%;
}

.left {
    line-height: 55px;
    background-color: rgb(17, 17, 17);
    max-width: 220px;
    min-width: 220px;
    width: 220px;
    transition: .3s;
    position: absolute;
    top: 55px;
    bottom: 0px;
    left: 0;
}

.isShow {
    transform: translate(-220px);
}

.right {
    background: white;
    height: 100%;
    transition: .3s;
    position: absolute;
    top: 55px;
    bottom: 0px;
    left: 220px;
    width: 100%;
}

.style a {
    color: black
}

.style li {
    background: #fff
}

.style li:hover {
    background: #ccc
}

.br {
    border-left: aquamarine 2px solid;
}

.style a:hover {
    color: black
}

.left li {
    padding-left: 10px
}

.left>li:hover {
    border-left: aquamarine 2px solid;
}

.hover ol,
.hover .logo {
    display: none
}

.hover .logo1 {
    display: inline-block
}

.hover:hover ol,
.hover:hover .logo {
    display: inline-block
}

.hover:hover .logo1 {
    display: none
}


/* .left li i{padding: 5px;} */

.layui-tab-title {
    /* padding-top: 5px; */
    height: 35px;
    background: #EFEEF0 url() 0 0 no-repeat;
    position: relative;
    z-index: 100;
}

layui-tab-title {
    position: relative;
    left: 0;
    height: 40px;
    white-space: nowrap;
    font-size: 0;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    transition: all .2s;
    -webkit-transition: all .2s;
}

.layui-tab-title .layui-this {
    background: #fff url() 0 0 no-repeat;
}

.layui-tab-title li {
    line-height: 35px;
}

.layui-tab-title .layui-this {
    color: #000;
}

.layui-tab-title li {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
    font-size: 14px;
    transition: all .2s;
    -webkit-transition: all .2s;
    position: relative;
    line-height: 40px;
    min-width: 65px;
    padding: 0 15px;
    text-align: center;
    cursor: pointer;
}

.time {
    width: 300px;
    height: 300px;
    border: 5px solid #000;
    border-radius: 50%;
    margin: 200px auto;
    position: relative;
}

.hours {
    width: 10px;
    height: 100px;
    background: #000;
    margin-left: -5px;
    top: 50px;
}

.minutes {
    width: 8px;
    height: 120px;
    background: #f00;
    margin-left: -4px;
    top: 30px;
}

.seconds {
    width: 6px;
    height: 140px;
    background: #ff0;
    margin-left: -3px;
    top: 10px;
}

.commonality {
    position: absolute;
    left: 50%;
    transform-origin: center bottom;
}

.time ul>li {
    list-style: none;
    width: 20px;
    height: 300px;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -10px;
}

.peg .fl span {
    cursor: pointer;
    display: inline-block;
    border: 1px solid;
    padding: 5px;
    margin: 3px;
    user-select: none;
    color: #000
}

.peg .bg {
    background: coral;
}

.layui-icon {
    padding: 5px;
    border-radius: 50%
}

.layui-icon:hover {
    background: red
}

.app .fl {
    float: left;
    width: 20%;
}

.app {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    line-height: 36px;
}

.app .isshow td {
    position: relative;
    height: 36px;
}

.app td,
th {
    border: 1px solid
}

.app .isshow>td>input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    line-height: 37px;
    border: none;
    display: none
}
</style>
