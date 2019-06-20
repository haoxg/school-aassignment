<template>
  <div class="home">
    <div class="swiper-container" id="nav">
      <div class="swiper-wrapper">
        <div
          :class="['swiper-slide',{active:activeIndex==index}]"
          @click="select(index)"
          v-for="(item,index) in type"
          :key="item.text"
        >{{item.txt}}</div>
      </div>
    </div>
    <!--  -->

    <div class="swiper-container" id="main">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="refresh">
            <img :class="['icon',{down:!isPullUp}]" width="12" src="../assets/arrow.png"/>
            {{refreshText}}
          </div>  
          <div class="load">{{loadText}}</div>
          <div class="news-container" id="abc">
            <template v-if="news.length>0">
              <p v-for="i in n" :key="i" style="padding:10px;border-bottom:2px solid red;">
                  {{news[i-1].category}} <br>
                  {{news[i-1].date}}<br>
                  {{news[i-1].title}}<br>
                  <img :src="news[i-1].thumbnail_pic_s"><br>
              </p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "home",
  data() {
    return {
      n:10,
      isPullUp:false,
      isPullDown:false,
      isLoadOver: false,
      bottom: null,
      refreshText: '下拉刷新',
      loadText: '上拉加载',
      swiper: null,

      activeIndex: 0,
      type: [
        {txt:'头条',key:'top'},
        {txt:'社会',key:'shehui'},
        {txt:'国内',key:'guonei'},
        {txt:'国际',key:'guoji'},
        {txt:'娱乐',key:'yule'},
        {txt:'体育',key:'tiyu'},
        {txt:'军事',key:'junshi'},
        {txt:'科技',key:'keji'},
        {txt:'财经',key:'caijing'},
        {txt:'时尚',key:'shishang'},
      ],
      news:[],
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    select(index) {
      this.activeIndex = index;
      this.getData();
    },
    getData(){
      var key = this.type[this.activeIndex].key || '';
      this.axios.get('/toutiao/index?type='+key+'&key=f53d292ce8d1d53e83e82adc737514c7').then((response) => {
        this.news = response.data.result.data;
        console.log(response.data.result.data);
        this.n = 10;
        this.isLoadOver = false;
        this.$nextTick(()=>{
          this.swiperRevert();
        });
      })
    },
    getMore(){
      setTimeout(()=>{
        if((this.n+10)>=this.news.length){
          this.n = this.news.length;
          this.isLoadOver = true;
          this.loadText = "已加载所有数据";
        }else{
          this.n +=10;
        }
        this.$nextTick(()=>{
          this.swiperRevert();
        })
      },1000)
    },
    initSwiper(){
      var _this = this;
      
      new Swiper("#nav", {
        slidesPerView: 5
      });

      this.swiper = new Swiper("#main", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        on:{
          touchEnd(){
            if(this.translate>50){
              _this.refreshText = '正在加载';
              this.setTransition(300);
              this.setTranslate(50);
              this.touchEventsData.isTouched = false;
              this.allowTouchMove = false;
              _this.getData();
            }
            if(this.translate<_this.bottom){
              if(_this.isLoadOver) return
              _this.loadText = '正在加载';
              this.setTransition(300);
              this.setTranslate(_this.bottom);
              this.touchEventsData.isTouched = false;
              this.allowTouchMove = false;
              _this.getMore();
            }
          },
          touchMove(){
            console.log(_this.bottom);
            if(this.translate>50){
              _this.refreshText = '释放刷新';
              _this.isPullUp = true;
            }else{
              _this.refreshText = '下拉刷新';
              _this.isPullUp = false;
            }
            if(this.translate<_this.bottom){
              if(_this.isLoadOver) return
              _this.loadText = '松开加载';
              _this.isPullDown = true;
            }else{
              if(_this.isLoadOver) return
              _this.loadText = '上拉加载';
              _this.isPullDown = false;
            }
          },
        }
      });

      _this.bottom = -(document.getElementById('abc').clientHeight-this.swiper.height +50);
    },
    swiperRevert(){
      this.swiper.touchEventsData.isTouched = true;
      this.swiper.allowTouchMove = true;
      if(this.isPullUp){
        this.swiper.setTransition(300);
        this.swiper.setTranslate(0);
      }
      if(this.isPullDown){
        this.swiper.setTransition(300);
        this.swiper.setTranslate(this.bottom+50);
      }
      this.swiper.update();
      this.bottom = -(document.getElementById('abc').clientHeight-this.swiper.height +50);
    }
  }
};
</script>
<style lang="scss">
$nav-color: #F90;
#nav {
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 2;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
#nav .swiper-slide{
  padding: 10px;
  vertical-align: middle;
  
}
#nav .swiper-slide.active {
  color: $nav-color;
}

.home,#main {
  height: 100%;
}
#main{
  padding-top: 42px;
}
#main .swiper-slide{
  height: auto;
  min-height: 100%;
}
.news-container {
  // background-color: red;
  min-height: 100%;
  padding: 10px;
  height: auto;
}
.refresh{
  position: absolute;
  left: 0;
  right: 0;
  top: -50px;
  line-height: 50px;
}
img.icon{
  width: 13px;
}
img.icon.down{
  transform: rotate(180deg);
}
.load{
  position: absolute;
  left: 0;
  right: 0;
  bottom: -50px;
  line-height: 50px;
  background: blue;
}
</style>


