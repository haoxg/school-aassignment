<template>
  <div id="city">
    <header>
      <input type="text"><span>确定</span>
    </header>
    <div class="citys">
        <h2>热门城市</h2>
        <ul>
          <li v-for="(city,index) in citys" :key="city.id" v-if="index<8">
            <btn :class="{selected:selectCity == city.id}" @click.native="jumpHome(city)">{{city.district}}</btn>
          </li>
        </ul>
        <h2>历史记录
          <a v-if="histroyCity.length" @click="clearHistory">清空记录</a>
        </h2>
        <ul v-if="histroyCity.length">
          <li v-for="c in histroyCity" :key="c.id">
            <btn  @click.native="jumpHome(city)">{{c.district}}</btn>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import btn from '@/components/btn'
  export default {
      components:{
        btn
      },
      created(){
        this.getCitys();
      },
      data() {
        return {
          histroyCity:[],
          selectCity: 0,
          citys:[],
        }
      },
      methods:{
        jumpHome(city){
          this.selectCity = city.id;
          var isPush = true;
          this.histroyCity.forEach(element => {
            if(element.id == city.id){
              isPush=false;
            }
          });
          if(isPush){
            this.histroyCity.push(city);  
          }
          console.log(city);
          this.$router.push({
            name:'in1',
            params:{
              city
            }
          });
        },
        clearHistory(){
          this.histroyCity = [];
        },
        getCitys(){
          var getUrl="/api/simpleWeather/cityList?city=&key=cbdb7fae8fa908281eed35e58e1ef7a0"
          console.log(getUrl)
          this.$http.get(getUrl).then((response) => {
            this.citys = response.data.result
            console.log(response)
          })
        }
      }
  }
</script>
<style>
  header{
    width: 98%;
    height: 2rem;
    padding: .133333rem .4rem;
    font-size: 14px;
    border-bottom: 2px solid #f2f2f2;
  }
  header input {
    width: 80%;
    float: left;
    border: none;
    background-color: #f2f2f2;
    color: #5c5c5c;
    padding: 0 .16rem;
    height: 1.5rem;
    border-radius: .053333rem;
  }
  header span {
  	float: left;
    display: block;
    width: 12%;
    line-height: 1.5rem;
    vertical-align: middle;
    text-align: center;
  }
  /*  */
  .citys{
    padding: 0 .4rem;
  }
  .citys h2{
    margin: .613333rem 0 .373333rem 0;
    font-size: 16px;
    font-weight: 500;
  }
  .citys ul>li{
  	text-align: center;
  	height: 2rem;
  	line-height: 2rem;
  	background: #ccc;
  	margin: .2rem .1rem;
  	width: 6rem;
    display: inline-block;
  }
  h2>a{
    float:right;
    font-size: 60%;
  }
</style>

