<template>
  <div id="app">
    <head-er></head-er>
    <div class="weather-content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import './icon/iconfont.css'
import headEr from '@/components/head'

export default {
  name: 'App',
  components:{
    headEr,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
a{
  color: #000;
}
body,html{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.weather-content{
  width: 100%;
  height: 100%;
}
</style>
