<!--  -->
<template>
  <div class="right" style="width:100%;;height: 100%;">
    <ul class="layui-tab-title">
      <router-link :to="'/'">
        <li class="home layui-this">我的桌面</li>
      </router-link>
      <router-link v-for="(i,index) in page" :to="i.url" :key="index">
        <li class="home layui-this">
          {{i.title}}
          <i
            class="layui-icon layui-unselect layui-tab-close"
            @click.prevent="rmover(index)"
          >&times;</i>
        </li>
      </router-link>
    </ul>
    <router-view style="padding:19px"></router-view>
  </div>
</template>

<script>
export default {
  props: ["lopage"],
  data() {
    return {
      page: this.lopage
    };
  },
  methods: {
    rmover(index) {
      console.log(index);

      if (index == this.page.length - 1) {
        if (index == 0) {
          this.page.splice(index, 1);
          this.$router.push("/");
        } else {
          this.page.splice(index, 1);
          this.$router.push(this.page[index - 1].url);
        }
      } else {
        this.page.splice(index, 1);
        this.$router.push(this.page[index].url);
      }
    }
  }
};
</script>
<style  scoped>
.right {
  background: white;
  height: 100%;
  transition: 0.3s;
  position: absolute;
  top: 55px;
  bottom: 0px;
  left: 220px;
  width: 100%;
}
.layui-tab-title {
  /* padding-top: 5px; */
  height: 35px;
  background: #efeef0 url() 0 0 no-repeat;
  position: relative;
  z-index: 100;
}

layui-tab-title {
  position: relative;
  left: 0;
  height: 40px;
  white-space: nowrap;
  font-size: 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
}

.layui-tab-title .layui-this {
  background: #fff url() 0 0 no-repeat;
}

.layui-tab-title li {
  line-height: 35px;
}

.layui-tab-title .layui-this {
  color: #000;
}

.layui-tab-title li {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
  font-size: 14px;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  position: relative;
  line-height: 40px;
  min-width: 65px;
  padding: 0 15px;
  text-align: center;
  cursor: pointer;
}
</style>