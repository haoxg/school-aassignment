<template>
  <div id="search">
    <div class="search-input">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" placeholder="请输入城市名" v-model="searchval" @input="searchajax">
      <span @click="searchArr=[];searchval=''">取消</span>
    </div>
    <ul class="search-list" v-if="searchval">
      <li v-for="item in searchArr" :key="item.id+'se'" @click="particular(item)">{{item.district+' '+item.province}}</li>
    </ul>
    <div class="hot-list" v-else>
      <h3>猜你想找</h3>
      <ul class="hot-list-box">
        <li class="active">定位</li>
        <li v-for="(item,index) in citylist" :key="index+'h'" @click="particular(item)" v-if="index<15">{{item.district}}</li> 
      </ul>
      <h3>历史记录<span @click="rmhistory"><i class="iconfont icon-lajitong"></i>清空</span></h3>
      <ul class="hot-list-box">
        <li v-for="(item,index) in historyArr" :key="index+'hot'" @click="particular(item)">{{item.district}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.cityajax();
  },
  data(){
    return{
      searchval:'',
      cityid:0,
      citylist:[],
      historyArr:[],
      searchArr:[],
    }
  },
  methods: {
    particular(weathercity){
      var idarr=[];
      this.cityid=weathercity.id;
      if(localStorage.arr){
        idarr=JSON.parse(localStorage.getItem('arr'))
      }
      var citytype=true;
      idarr.forEach(element => {
        if(element==weathercity.id){
          citytype=false;
        }
      });
      if(citytype){
        idarr.push(weathercity.id);
      }
      localStorage.setItem("arr",JSON.stringify(idarr))

      this.$router.push({name:'particular',params:weathercity})
    },
    showHistory(){
      var arr=[];
      if(localStorage.arr){
        arr=JSON.parse(localStorage.getItem('arr'));
      }
      arr.forEach(item=>{
        this.citylist.forEach(el=>{
          if(item==el.id){
            this.historyArr.push(el)
          }
        })
      })
    },
    rmhistory(){
      localStorage.removeItem('arr');
      this.historyArr=[];
    },
    cityajax(){
      var getUrl="/weather/citys?dtype=&key=41b7d14c1a69f20b8c6a11d084f87df9"
      this.$http.get(getUrl).then((response) => {
        this.citylist = response.data.result;
        this.showHistory();
      })
    },
    searchajax(){
      this.searchArr=[];
      this.citylist.forEach(item=>{
        if(item.province.indexOf(this.searchval)>-1||item.district.indexOf(this.searchval)>-1){
          this.searchArr.push(item)
        }
      })
    }
  },
}
</script>
<style>

  #search{
    width: 7.5rem;
    height: 100%;
    font-size: 0.2rem;
    padding-top: 0.28rem;
  }
  
  .search-input{
    width: 100%;
    padding-left: 0.3rem;
    position: relative;
    box-sizing: border-box;
    border-bottom: 0.01rem #ccc solid;
    padding-bottom: 0.13rem;
  }
  .search-input input{
    width: 6rem;
    height: 0.6rem;
    border: none;
    background: #eee;
    outline: none;
    border-radius: 0.1rem;
    padding-left:0.6rem;
    box-sizing: border-box;
    font-size: 0.25rem;
  }
  .search-input i{
    font-size: 0.28rem;
    position: absolute;
    left: 0.45rem;
    top: 0.14rem;
    color: #aaa;
  }
  .search-input span{
    font-size: 0.28rem;
    color: #000;
    padding: 0 0.15rem;
  }
  .search-list{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
  }
  .search-list li{
    width: 100%;
    font-size: 0.25rem;
    padding: 0.25rem;
    border-bottom: 1px solid #ccc;
  }
  .hot-list{
    height: 100%;
    width: 100%;
    padding: 0.3rem;
    box-sizing: border-box;
    overflow: auto;
  }
  .hot-list h3{
    line-height: 0.46rem;
    font-size: 0.32rem;
    color: #000;
  }
  .hot-list h3 span{
    float: right;
    font-size: 0.25rem;
  }
  .hot-list h3 span i{
    font-size: 0.36rem;
    margin-right: 0.05rem;
  }
  .hot-list-box{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0.3rem;
  }
  .hot-list-box li{
    height: 0.59rem;
    width: 2.19rem;
    border-radius: 0.1rem;
    margin-top: 0.16rem;
    text-align: center;
    line-height: 0.59rem;
    font-size: 0.25rem;
    background: #f2f2f2;
    border: 0.01rem #eee solid;
    box-sizing: border-box;
    margin-right: 0.11rem;
  }
  .hot-list-box .active{
    background: #4393ec;
    color: #fff;
    border: 0.01rem #6ba3e3 solid;
  }
</style>
