<template>
<div class="slideshow">
  <div class="box" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <transition name="left">
      <button class="left" v-if="isShow" @click="prev"><</button>
    </transition>
    <transition name="right">
      <button class="right" @click="next" v-if="isShow">></button>
    </transition>
    <transition-group tag="ul" :name="cutimgs">
      <li v-for="item,index in arr" v-if="activeIndex==index" :key="index+1">
        <img :src="item">
      </li>
    </transition-group>
    <ol class="carousel-indicators">
      <li v-for="item in arr.length" :class="{active:activeIndex+1==item}" @click="dot(item-1)"></li>
    </ol>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2139259649,262724823&fm=27&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2659291914,3206279943&fm=27&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3222425735,2896192499&fm=27&gp=0.jpg"],
      activeIndex: 0,
      outIndex: 0,
      isShow: false,
      cutimgs: "imgs"
    };
  },
  methods: {
    mouseenter() {
      this.isShow = true;
    },
    mouseleave() {
      this.isShow = false;
    },
    prev() {
      this.activeIndex--;
      if (this.activeIndex < 0) {
        this.activeIndex = this.arr.length - 1;
      }
      this.cutimgs = "imgs1";
    },
    next() {
      this.activeIndex++;
      if (this.activeIndex > this.arr.length - 1) {
        this.activeIndex = 0;
      }
      this.cutimgs = "imgs";
    },
    dot(item) {
      this.outIndex = this.activeIndex;
      this.activeIndex = item;
      if (this.outIndex > this.activeIndex) {
        this.cutimgs = "imgs1";
      } else {
        this.cutimgs = "imgs";
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.slideshow .box ul {
  width: 579px;
  height: 300px;
  position: relative;
}
.slideshow .box ul li {
  position: absolute;
}
.slideshow .box ul li img {
  width: 193px;
  height: 300px;
  float: left;
}
.slideshow .box {
  width: 193px;
  height: 300px;
  margin: 100px auto;
  position: relative;
  overflow: hidden;
}
.slideshow button {
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: none;
  position: absolute;
  color: white;
  cursor: pointer;
  outline: none;
  z-index: 12;
}
.slideshow .left {
  position: absolute;
  top: 50%;
  left: 10px;
  margin-top: -15px;
}
.slideshow .right {
  position: absolute;
  top: 50%;
  right: 10px;
  margin-top: -15px;
}
.slideshow .left-enter,
.slideshow .left-leave-to {
  left: -40px;
}
.slideshow .left-enter-active,
.slideshow .left-leave-active {
  transition: all 1s;
}
.slideshow .left-enter-to,
.slideshow .left-leave {
  left: 15px;
}
.slideshow .right-enter,
.slideshow .left-leave-to {
  right: -40px;
}
.right-enter-active,
.left-leave-active {
  transition: all 1s;
}
.right-enter-to,
.left-leave {
  right: 15px;
}
.carousel-indicators {
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 10;
  position: absolute;
  bottom: 10px;
  left: 0;
}
.carousel-indicators li {
  width: 20px;
  height: 10px;
  background-color: white;
  float: left;
  margin-left: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.carousel-indicators li.active {
  background-color: orange;
}
.imgs-enter-active,
.imgs-leave-active,
.imgs1-enter-active,
.imgs1-leave-active {
  transition: all 1s linear;
}
.imgs-enter,
.imgs1-leave-to {
  transform: translateX(100%);
}
.imgs-enter-to,
.imgs-leave,
.imgs1-enter-to,
.imgs1-leave {
  transform: translateX(0);
}
.imgs-leave-to,
.imgs1-enter {
  transform: translateX(-100%);
}
</style>
