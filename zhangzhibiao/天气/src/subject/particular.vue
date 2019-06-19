<template>
    <div id="particulars">
        <div class="loading" v-if="!showCard">加载中...</div>
        <div class="particulars-content"  >
            <div class="site-particulars">
                <router-link to="/">
                    <i class="iconfont icon-location"></i>
                    <span>{{cityjson.district}}</span>
                    <i class="iconfont icon-jiantou-up-down"></i>
                </router-link>
            </div>
            <div class="particulars-temperature" v-if="showCard">
                <h3 @click="future">{{cityweather.sk.temp}}°</h3>
                <div class="condition">{{cityweather.today.weather}}<span>|</span><div><i class="iconfont icon-huanbaoyezishuyemianxing"></i>46 优</div></div>
                <div class="windpower">
                    <span><i class="iconfont icon-fengli"></i>{{cityweather.sk.wind_strength}}</span>
                    <span><i class="iconfont icon-shuidi"></i>{{cityweather.sk.humidity}}</span>
                    <span><i class="iconfont icon-fengli"></i>99</span>
                </div>
            </div>
        </div>
        <div class="recently"  v-if="showCard">
            <div  @click="future" v-for="(item,index) in recentlylist" v-if="index<2" :key="index+'re'" class="day" :style="{'border-right':index==0?'#ccc 0.02rem solid':''}">
                <div class="day-condition">
                    {{index==0?'今天':'明天'}}
                    <div>优</div>
                    <span>{{item.temperature.replace('~','/')}}</span>
                </div>
                <div class="day-condition">
                    {{item.weather}}<span><i></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.weatherParticulars();
    },
    data(){
        return {
            cityweather:'',
            recentlylist:[],
            showCard:false,
        }
    },
    computed: {
        cityjson(){
            if(this.$route.params.id){
                return this.$route.params
            }else{
                return {
                    'id':'1',
                    'district':'北京',
                }
            }
        }
    },
    methods: {
         weatherParticulars(){
             console.log(this.cityjson)
            var cityid=this.cityjson.id;
            var getUrl="/weather/index?cityname="+cityid+"&type=&format=2&key=41b7d14c1a69f20b8c6a11d084f87df9";
            this.$http.get(getUrl).then((response) => {
                this.cityweather = response.data.result;
                console.log(response.data.result)
                this.recentlylist = response.data.result.future;
                this.showCard=true;
            })
         },
         future(){
             var arr=this.recentlylist;
             this.$router.push({name:'futureWeather',params:{arr}})
         }
    },
}
</script>

<style>
    #particulars{
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .loading{
        text-align: center;
        line-height: 1rem;
        font-size: 0.4rem;
    }
    .particulars-content{
        height: 9.04rem;
        width: 100%;
        background: linear-gradient(top,#90cbf5,#f6fbfe);
        padding-top: 0.45rem;
        box-sizing: border-box;
    }
    .site-particulars{
        width: 100%;
        height: 0.32rem;
        margin: 0 auto;
        font-weight: bolder;
        font-size: 0.32rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .site-particulars a{
        text-decoration: none;
        color: #000;
    }
    .site-particulars i{
        font-size: 0.32rem;
    }
    .site-particulars span{
        margin: 0 0.2rem;
    }
    .particulars-temperature{
        width: 100%;
        height: auto;
        margin-top: 2.04rem;
    }
    .particulars-temperature h3{
        font-size: 1.9rem;
        text-align: center;
        line-height: 1.9rem;
        font-weight: normal;
    }
    .condition{
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
        font-size: 0.3rem;
    }
    .condition span{
        margin: 0 0.2rem;
    }
    .condition div{
        height: 0.5rem;
        width: 1.4rem;
        background: #25b184;
        border-radius: 0.04rem;
        display: flex;
        justify-content: space-around;
        color: #fff;
        line-height: 0.5rem;
    }
    .windpower{
        font-size: 0.3rem;
        color: #676f70;
        text-align: center;
        margin-top: 0.35rem;
    }
    .windpower span{
        margin: 0 0.2rem;
    }
    .recently{
        width: 100%;
        height: 1.6rem;
        padding: 0.17rem 0;
        box-sizing: border-box;
        background: #f6fbff;
    }
    .recently .day{
        float: left;
        width: 3.75rem;
        height: 100%;
        padding: 0 0.25rem ;
        padding-top: 0.1rem;
        box-sizing: border-box;
        font-size: 0.3rem;
    }
    .day-condition{
        height: 0.56rem;
        line-height: 0.56rem;
    }
    .day-condition div{
        display: inline-block;
        width: 0.74rem;
        height: 0.36rem;
        line-height: 0.36rem;
        color: #fff;
        border-radius:0.05rem; 
        background: #25b184;
        text-align: center;
        margin-left: 0.07rem;
        font-size: 0.26rem;
    }
    .day-condition span{
        float:right;
    }
</style>
