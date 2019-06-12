<template>
    <div id="slideshow" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <transition name="left">
            <button class="left" v-if="isShow" @click="jian" @mouseenter="mouseenter"><</button>
        </transition>
        <transition name="right">
            <button class="right" v-if="isShow" @click="jia" @mouseenter="mouseenter">></button>
        </transition>
        <transition-group tag="ul" :name="cutlist">
            <li v-for="item,i in list" v-if="i==activeindex" :key="i+1">
                <img :src="item" alt="">
            </li>
        </transition-group>
        <ol class="el-carousel__indicators">
            <li v-for="i in list.length" @click="dot(i-1)" :class="{active:i==activeindex+1}" :style="{width:200/list.length+'px'}"></li>
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeindex: 0,
            isShow: false,
            cutlist: 'list',
            olddotactive: 0,
        }
    },
    props: {
        list: {
            type: Array,
            default: function() {
                return ['http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg', 'http://b.hiphotos.baidu.com/image/h%3D300/sign=92afee66fd36afc3110c39658318eb85/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg', 'http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg'];
            },
        }
    },
    methods: {
        mouseenter() {
            this.isShow = true;
        },
        mouseleave() {
            this.isShow = false;
        },
        jian() {
            this.activeindex--;
            if (this.activeindex < 0) {
                this.activeindex = this.list.length - 1;
            }
            this.cutlist = 'list1';
        },
        jia() {
            this.activeindex++;
            if (this.activeindex >= this.list.length) {
                this.activeindex = 0;
            }
            this.cutlist = 'list'
        },
        dot(i) {
            this.olddotactive = this.activeindex;
            this.activeindex = i;
            if (this.olddotactive > this.activeindex) {
                this.cutlist = 'list1'
            } else {
                this.cutlist = 'list';
            }

        }
    }
}
</script>

<style>
    #slideshow {
        width: 600px;
        height: 400px;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
    }
    
    #slideshow ul {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
    }
    
    #slideshow ul li {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    
    #slideshow ul img {
        width: 100%;
        height: 100%;
    }
    
    #slideshow button {
        width: 40px;
        height: 40px;
        font-size: 30px;
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.7);
        border: none;
        top: 50%;
        margin-top: -20px;
        color: #fff;
        outline: none;
        z-index: 100;
    }
    
    #slideshow .left {
        left: 40px;
    }
    
    #slideshow  .right {
        right: 40px;
    }
    
    #slideshow  .left-enter,
    #slideshow  .left-leave-to {
        left: -40px;
    }
    
    #slideshow  .left-enter-active,
    #slideshow  .left-leave-active {
        transition: all .3s;
    }
    
    #slideshow  .left-enter-to,
    #slideshow  .left-leave {
        left: 40px;
    }
    
    #slideshow  .right-enter,
    #slideshow  .right-leave-to {
        right: -40px;
    }
    
    #slideshow  .right-enter-active,
    #slideshow  .right-leave-active {
        transition: all .3s;
    }
    
    #slideshow  .right-enter-to,
    #slideshow  .right-leave {
        right: 40px;
    }
    
    #slideshow  .list-enter-active,
    #slideshow  .list-leave-active,
    #slideshow  .list1-enter-active,
    #slideshow  .list1-leave-active {
        transition: all 1s linear;
    }
    
    #slideshow  .list-enter,
    #slideshow  .list1-leave-to {
        transform: translateX(100%);
    }
    
    #slideshow  .list-enter-to,
    #slideshow  .list-leave,
    #slideshow  .list1-enter-to,
    #slideshow  .list1-leave {
        transform: translateX(0);
    }
    
    #slideshow  .list-leave-to,
    #slideshow  .list1-enter {
        transform: translateX(-100%);
    }
    
    #slideshow  .el-carousel__indicators {
        width: 100%;
        height: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 10;
        bottom: 20px;
        left: 0;
    }
    
    #slideshow  .el-carousel__indicators li {
        height: 5px;
        background: #999;
        margin: 0 5px;
    }
    
    #slideshow  .el-carousel__indicators li.active {
        background: #fff;
    }
</style>
