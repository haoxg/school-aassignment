<template>
  <div id="app">
     <layout>
          <template slot="head-nav">
              <head-tab></head-tab>
          </template>
          <template slot="page-nav">
              <left-nav @addtab-event="addTab"></left-nav>
          </template>
          <router-view></router-view>
          <template slot="page-tab">
              <ul>
                  <li :key="'a'+index" v-for="(item,index) in tabs">
                      <router-link :to="item.url">{{item.title}}<i @click.prevent="rmtab(index)">x</i></router-link>
                  </li>
              </ul>
          </template>
      </layout>
  </div>
</template>

<script>
import layout from '@/components/layout'
import leftNav from '@/components/leftNav'
import headTab from '@/components/headTab'
export default {
  name: 'App',
  components:{
    layout,
    leftNav,
    headTab
  },
  data(){
    return {
        tabs: []
    }
  },
  methods: {
      rmtab(index) {
          if (index == this.tabs.length - 1) {
              if (this.tabs.length == 1) {
                  this.tabs.splice(index, 1)
                  setTimeout(() => {
                      this.$router.push('/')
                  }, 0)
              } else {
                  this.tabs.splice(index, 1)
                  setTimeout(() => {
                      this.$router.push(this.tabs[index - 1].url)
                  }, 0)
              }
          } else {
              this.tabs.splice(index, 1)
              this.$router.push(this.tabs[index].url)
          }
      },
      addTab(item) {
          var isAdd = true;
          this.tabs.forEach(i => {
              if (item.title == i.title) {
                  isAdd = false;
              }
          });
          if (isAdd) {
              this.tabs.push(item);
          }
      }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
