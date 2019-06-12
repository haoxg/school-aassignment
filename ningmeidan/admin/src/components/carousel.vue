
<template>
    <div id="carousel" @mouseover="btn_show=true" @mouseout="btn_show=false">
            <transition name="btn1">
                <button :disabled="disabled" v-show="btn_show" class="btn prev" @click="prev"><</button>
            </transition>
            <transition name="btn2">
                <button :disabled="disabled" v-show="btn_show" class="btn next" @click="next">></button>
            </transition>

            <div class="banner">
                <transition-group :name="p" tag="div" v-on:enter="enter" v-on:after-enter="afterEnter">
                    <div class="p-list" v-for="(item,index) in list" :key="'p'+index" v-show="num==index">
                        <img :src="item">
                    </div>
                </transition-group>
            </div>
            <div class="dotAll">
                <transition-group name="dot-name">
                    <div class="dot" :class="{'active':num==index}" v-for="(item,index) in list" :key="'dot'+item"></div>
                </transition-group>
            </div>
        </div>
</template>

<script>
export default {
    data(){
            return {
                list: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560356660565&di=1d3b45afc2177387261b6d57dcc632e2&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fc5438ee12f9346b1cc487b10ce92e61d8c265c11.jpg',
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560356796384&di=4a51c1df6ba64fb44d1294f3b68918cd&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171019%2F1bae231f76aa4896b1fb368213e1f4fb.jpeg',
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560356796384&di=ba51a9b5c3c649e13bdf917984aa29d8&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F9fa6954bd81b1ae533092807b91ad7f4.jpeg'],
                num: 0,
                btn_show: false,
                p: 'vnext',
                disabled: false
            }
        },
        methods: {
            next() {
                this.p = 'vnext';
                this.num++;
                if (this.num > this.list.length - 1) {
                    this.num = 0;
                }
            },
            prev() {
                this.p = 'vprev';
                this.num--;
                if (this.num < 0) {
                    this.num = this.list.length - 1;
                }
            },
            afterEnter() {
                this.disabled = false;
            },
            enter() {
                this.disabled = true;
            }
        }
}
</script>

<style scoped="scoped">
* {
            padding: 0;
            margin: 0;
            list-style: none;
        }
        
        #carousel {
            width: 500px;
            height: 300px;
            border: 1px solid #ccc;
            margin: 50px auto;
            position: relative;
            overflow: hidden;
        }
        
        .btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #fff;
            border: 1px solid #000;
            font-size: 30px;
            outline: none;
            cursor: pointer;
            position: absolute;
            top: 50%;
            margin-top: -25px;
            z-index: 2;
            transition: 1s;
        }
        
        .prev {
            left: 30px;
        }
        
        .next {
            right: 30px;
        }
        
        .banner {
            width: 500px;
            height: 300px;
            position: absolute;
            left: 0;
            top: 0;
            transition: .5s;
        }
        
        .p-list {
            width: 500px;
            height: 300px;
            position: absolute;
            left: 0;
            top: 0;
        }
        
        .p-list img {
            width: 100%;
            height: 100%;
        }
        
        .dotAll {
            position: absolute;
            z-index: 5;
            bottom: 20px;
            left: 50%;
            margin-left: -90px;
        }
        
        .dotAll .dot {
            width: 50px;
            height: 5px;
            border-radius: 5px;
            background-color: #fff;
            float: left;
            margin: 0 5px;
        }
        
        .dotAll .dot.active {
            background-color: red;
            transition: 1s;
        }
        
        .btn1-enter,
        .btn1-leave-to {
            opacity: 0;
            transform: translateX(-30px);
        }
        
        .btn1-enter-active,
        .btn1-leave-active,
        .btn2-enter-active,
        .btn2-leave-active {
            transition: 1s;
        }
        
        .btn1-enter-to,
        .btn1-leave {
            opacity: 1;
            transform: translateX(0);
        }
        
        .btn2-enter,
        .btn2-leave-to {
            opacity: 0;
            transform: translateX(30px);
        }
        
        .btn2-enter-to,
        .btn2-leave {
            opacity: 1;
            transform: translateX(0);
        }
        
        .vnext-enter {
            transform: translateX(100%);
        }
        
        .vnext-enter-active,
        .vnext-leave-active {
            transition: 1s;
        }
        
        .vnext-enter-to,
        .vnext-leave {
            transform: translateX(0%);
        }
        
        .vnext-leave-to {
            transform: translateX(-100%);
        }
        
        .vprev-enter {
            transform: translateX(-100%);
        }
        
        .vprev-enter-active,
        .vprev-leave-active {
            transition: 1s;
        }
        
        .vprev-enter-to,
        .vprev-leave {
            transform: translateX(0);
        }
        
        .vprev-leave-to {
            transform: translateX(100%);
        }
</style>
