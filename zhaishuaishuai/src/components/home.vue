<!--  -->
<template>
  <div>
    <header><a @click="his" href="javascript:;">返回</a><i>墨迹天气</i></header>
    <div class="p">
      <p>{{msg.province}} {{msg.city}} {{msg.district}}</p>
      <p>{{msg1.today.date_y}}</p>
      <p>{{msg1.today.week}}</p>
      <p>{{msg1.today.temperature}}</p>
      <p>{{msg1.today.weather}}</p>
    </div>

    <div class="dl">
      <dl v-for="(i,v,index) in msg1.future" :key='index' :class="{p:index==0}">
        <dt>{{i.date}}</dt>
        <dt>{{i.week}}</dt>
        <dt>{{i.temperature}}</dt>
        <dd>{{i.direct}}</dd>
        <dd>{{i.wind}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dataid:'',
      msg: [],
      msg1:[]
    };
  },
  mounted() {
    this.msg = this.$route.params.city;
    
  },
  methods:{
    his(){
      history.go(-1)
    }
  },
  watch: {
    msg:{
      handler(v1,v2){
        var getUrl ="/weather/index?cityname=" + v1.id +  "&dtype=&format=&key=1403dfa65e863deb1e2ee8796049b4bb";
          this.axios.get(getUrl).then(response => {
          this.msg1 =response.data.result ;
          console.log(this.msg1)
        })
        immediate: true;
        deep:true
      }
    }
  },
  component:{
    
  }
};
</script>
<style scoped>
header{
  font-size:0.5rem
}
header i{margin-left: 2.5rem;}
.p{
  text-align: center;
  font-size: 1rem;
}
.dl{
  margin: .625rem;
  box-sizing: border-box;
  font-size: .5rem;
}
dl{
  border: 1px solid;
  margin: 5px;
  line-height: 1rem;
  text-align: center;
}
dl:first-child{
 display: none
}
</style>