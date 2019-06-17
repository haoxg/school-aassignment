<!-- 搜索 -->
<template>
  <div id="city">
    <header>
      <input type="text" v-model="value">
      <ul class="fiex">
        <li
          v-for="(i,index) in arr2"
          :key="index"
          @click="jumpHome(i)"
        >{{i.province}}------{{i.city}}------{{i.district}}</li>
      </ul>
    </header>
    <div class="citys">
      <h2>热门城市</h2>
      <ul>
        <li v-for="(item,index) in arr" :key="index" v-if="index<15">
          <button
            :class="{selected:selectCity == item.id}"
            @click="jumpHome(item)"
          >{{item.district}}</button>
        </li>
      </ul>
      <h2>
        历史记录
        <a v-if="histroyCity.length" @click="clearHistory">清空记录</a>
      </h2>
      <ul v-if="histroyCity.length">
        <li v-for="c in histroyCity" :key="c.id">
          <button @click="jumpHome(c)">{{c.district}}</button>
        </li>
      </ul>
    </div>
  </div>
  <!-- -->
</template>
<script>
export default {
  created() {
    this.getCitys();
  },
  data() {
    return {
      histroyCity: [],
      selectCity: 0,
      arr: [],
      value: "",
      arr1: [],
      arr2: []
    };
  },
  methods: {
    jumpHome(city) {
      this.selectCity = city.id;
      if (localStorage.data) {
        localStorage.data += "," + JSON.stringify(city);
      } else {
        localStorage.data = JSON.stringify(city);
      }
      this.$router.push({
        name: "home",
        params: {
          city
        }
      });
    },
    clearHistory() {
      localStorage.data = "";
    },
    getCitys() {
      var getUrl = "/weather/citys?dtype=&key=1403dfa65e863deb1e2ee8796049b4bb";
      this.axios.get(getUrl).then(response => {
        this.arr = response.data.result;
        this.$nextTick(function(){
          this.getHistroy()
        })
      });
    },
    getHistroy() {
      var hcs = localStorage.data;
      if (hcs) {
        var arr3 = hcs.split(",");
        this.arr.forEach(element => {
          arr3.forEach(el => {
            if (element.id == el) {
              this.histroyCity.push(element);
            }
          });
        });
      }
    }
  },
  watch: {
    value(v1, v2) {
      console.log(v2);
      this.arr1 = [];
      this.arr2 = [];
      this.arr.forEach(element => {
        if (element.district == v1) {
          this.arr1.push(element);
        }
        if (element.city == v1) {
          this.arr1.push(element);
        }
        if (element.province == v1) {
          this.arr1.push(element);
        }

        this.arr2 = Array.from(new Set(this.arr1));
      });
    }
  }
};
</script>
<style>
header {
  width: 10rem;
  padding: 0.133333rem 0.4rem;
  font-size: 14px;
  border-bottom: 2px solid #f2f2f2;
  position: relative;
}
header input {
  width: 88%;
  border: none;
  background-color: #f2f2f2;
  color: #5c5c5c;
  padding: 0 0.16rem;
  height: 0.8rem;
  border-radius: 0.053333rem;
}
span {
  display: inline-block;
  width: 12%;
  line-height: 0.8rem;
  vertical-align: middle;
  text-align: center;
}
header .fiex {
  position: fixed;
  top: 1rem;
  left: 0;
  overflow: auto;
  width: 100%;
  max-height: 50%;
}
.fiex li {
  background: #ccc;
  font-size: 0.5rem;
  border-bottom: #5c5c5c 1px solid;
  line-height: 1rem;
}
/*  */
.citys {
  padding: 0 0.4rem;
}
.citys h2 {
  margin: 0.613333rem 0 0.373333rem 0;
  font-size: 16px;
  font-weight: 500;
}
.citys ul > li {
  display: inline-block;
}
h2 > a {
  float: right;
  font-size: 60%;
}
button {
  background: #ccc;
  width: 3rem;
  margin: 2px;
  height: 1.5rem;
  border-radius: 0.3125rem;
  box-sizing: border-box;
  outline: none;
  border: none;
}
.selected {
  background: rgb(1, 155, 245);
}
</style>

