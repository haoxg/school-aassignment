<template>
    <div>
        <div class="banner" @mouseover="isshow=true" @mouseout="isshow=false">
            <transition-group :name="img">
                <img v-for="(item,index) in arr" :src="item" :key="index+'1'" v-show="index==currentImg">
            </transition-group>
            <transition name="left">
                <button v-show="isshow" class="left" @click="prev"><</button>
            </transition>
            <transition name="right">
                <button v-show="isshow" class="right" @click="next">></button>
            </transition>
            <ul class="dot">
                <li :key="i" v-for="i in arr.length" :class="{active:currentImg==i-1}"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
         data(){
             return {
                isshow: false,
                arr: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=959516763,3799946326&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2473323149,669750902&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=283299632,427497639&fm=26&gp=0.jpg'],
                img: 'fade',
                currentImg: 0

            }
         },
        methods: {
            prev() {
                this.img = 'refade';

                if (this.currentImg == 0) {
                    this.currentImg = this.arr.length - 1;
                } else {
                    this.currentImg--;
                    console.log(this.currentImg);
                }
            },
            next() {
                this.img = 'fade';

                if (this.currentImg == this.arr.length - 1) {
                    this.currentImg = 0;
                } else {
                    this.currentImg++;
                    console.log(this.currentImg);
                }
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        user-select: none;
    }
    
    .banner {
        width: 400px;
        height: 260px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }
    
    img {
        width: 400px;
        height: 260px;
        position: absolute;
        left: 0;
        top: 0;
    }
    
    .banner button {
        width: 30px;
        height: 30px;
        background: rgb(97, 105, 214);
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 50px;
        position: absolute;
        border: 0;
        outline: none;
    }
    
    .left {
        top: 120px;
        left: 20px;
    }
    
    .right {
        top: 120px;
        right: 20px;
    }
    
    .left-enter,
    .left-leave-to {
        opacity: 0;
        left: 0;
    }
    
    .left-enter-active,
    .left-leave-active {
        transition: 1s;
    }
    
    .left-enter-to,
    .left-leave {
        opacity: 1;
        left: 20px;
    }
    
    .right-enter,
    .right-leave-to {
        opacity: 0;
        right: 0;
    }
    
    .right-enter-active,
    .right-leave-active {
        transition: 1s;
    }
    
    .right-enter-to,
    .right-leave {
        opacity: 1;
        right: 20px;
    }
    
    .refade-enter-active,
    .refade-leave-active,
    .fade-enter-active,
    .fade-leave-active {
        transition: 1s;
    }
    
    .refade-enter {
        transform: translateX(-100%);
    }
    
    .refade-leave-to {
        transform: translateX(100%);
    }
    
    .refade-enter-to,
    .refade-leave {
        transform: translateX(0%);
    }
    
    .fade-enter {
        transform: translateX(100%);
    }
    
    .fade-leave-to {
        transform: translateX(-100%);
    }
    
    .fade-enter-to,
    .fade-leave {
        transform: translateX(0%);
    }
    
    ul {
        position: absolute;
        bottom: 20px;
    }
    
    ul li {
        list-style: none;
        width: 50px;
        height: 5px;
        background: rgb(168, 162, 201);
        display: inline-block;
        margin-left: 60px;
    }
    
    .active {
        background: rgb(77, 131, 231);
    }
</style>
