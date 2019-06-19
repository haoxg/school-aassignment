<template>
    <div id="futurn">
        <div class="timenav">
            <swiper :options="swiperOption" ref="swiper">
                <swiper-slide v-for="(item,index) in futureWeather" :key="item.date">
                    <div class="timenav-item" @click="cut(index)">
                        <div :class="{active:index==activeindex}">{{item.week.split('星期')[1]}}</div>
                        <span :style="{color:index==activeindex?'blue':'#000'}">{{item.date.split('2019')[1]}}</span>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="futurn-particulars">
            <swiper :options="swiperOption1" ref="swiper1" @slideChange="change">
                <swiper-slide v-for="(item,index) in futureWeather" :key="item.date+'fu'">
                    <div class="futurn-particulars-item">
                        <div class="futurn-particulars-img">
                            <div class="img">

                            </div>
                            <div class="temperature">
                                <h3>{{item.temperature.replace('~','/')}}</h3>
                                <div>{{item.weather}}<span>优</span></div>
                            </div>
                        </div>
                        <ul class="futurn-particulars-hint">
                            <li><i class="iconfont icon-fengli"></i>风力<span>{{item.wind}}&emsp;3级</span></li>
                            <li><i class="iconfont icon-fengli"></i>日出 - 日落<span>04:45 - 19:45                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </span></li>
                            <li><i class="iconfont icon-fengli"></i>限行尾号<span>不限行</span></li>
                        </ul>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components:{
        swiper,
        swiperSlide,
    },
    created() {
        console.log(this.futureWeather)
    },
    data(){
        return {
            swiperOption: {
                slidesPerView:5,
            },
            swiperOption1: {
                slidesPerView:1,
            },
            activeindex:0,
        }
    },
    computed: {
        futureWeather(){
            return this.$route.params.arr
        },
        swiper(){
            return this.$refs.swiper.swiper         
        },
        swiper1(){
            return this.$refs.swiper1.swiper
        },
    },
    methods: {
        cut(index){
            this.activeindex=index;
            this.swiper1.slideTo(index)
        },
        change(){
            this.activeindex=this.swiper1.activeIndex;
            this.swiper.slideTo(this.swiper1.activeIndex)
        }
    },
}
</script>

<style>
    #futurn{
        width: 100%;
        height: 100%;
    }
    .timenav{
        width: 100%;
        height: 1.25rem;
    }
    .timenav-item{
        width: 100%;
        height: 100%;
    }
    .timenav-item div{
        height: 0.48rem;
        width:0.48rem ;
        border-radius: 50%;
        font-size: 0.28rem;
        line-height: 0.48rem;
        margin: 0.12rem 0.55rem;
        text-align: center;
        color: #000;
        font-weight: 600;
    }
    .timenav-item .active{
        background: blue;
        color: #fff;
    }
    .timenav-item span{
        width: 100%;
        font-size: 0.2rem;
        float: left;
        text-align: center;
    }
    .futurn-particulars{
        width: 100%;
        height: 6rem;
    }
    .futurn-particulars-item{
        width: 100%;
        height: 6rem;
    }
    .futurn-particulars-img{
        width: 100%;
        height: 2.8rem;
        background: linear-gradient(left,#8fa7c9,#afc7e9)
    }
    .futurn-particulars-img .img{
        float: left;
        width: 3.5rem;
        height: 100%;
    }
    .futurn-particulars-img .temperature{
        float: left;
        width: 3.5rem;
        height: 100%;
        padding-top: 0.94rem;
        box-sizing: border-box;
    }
    .temperature h3{
        font-size: 0.54rem;
        color: #fff;
        font-weight: bolder;
    }
    .temperature div{
        width: 100%;
        height: 0.42rem;
        line-height: 0.42rem;
        font-size: 0.32rem;
        color: #fff;
        margin-top: 0.17rem;
    }
    .temperature div span{
        display: inline-block;
        width: 0.82rem;
        height: 0.42rem;
        border-radius: 0.03rem;
        text-align: center;
        line-height: 0.42rem;
        font-size: 0.26rem;
        color: #fff;
        background: #25b086;
        margin-left: 0.1rem;
    }
    .futurn-particulars-hint{
        width: 100%;
        height: auto;
        padding: 0.4rem 0.25rem;
        box-sizing: border-box;
    }
    .futurn-particulars-hint li{
        width: 100%;
        height: 0.86rem;
        line-height: 0.42rem;
        padding: 0.22rem 0;
        font-size: 0.28rem;
        color: #666;
        box-sizing: border-box;
    }
    .futurn-particulars-hint li span{
        float: right;
        font-size: 0.28rem;
        color: #000;
    }
    .futurn-particulars-hint li i{
        width: 0.42rem;
        height: 0.42rem;
        margin-right: 0.08rem;
        background: #4590eb;
        float: left;
        color: #fff;
        border-radius:50%;
        font-size: 0.25rem; 
        text-align: center;
        line-height: 0.42rem;
        transform: rotate(45deg)
    }
</style>
