<template>
  <div class="classifylist" :style="{'left':datatype?'0':'-220px'}">
    <ul>
      <li  v-for="(item,index) in classifylist" :key="index+'W'" :class="{'active':activeIndex==index,active1:activeIndexClick==index}"  >
      
       
    
        <div @mouseover="activeIndex=index" @mouseout="activeIndex='-1'" @click="listclick(index)">
          <i class="iconfont left" :class="item.icon"></i>
          {{item.title}}
          <i
            class="iconfont right"
            :class="{'rotateActive':activeIndexClick==index}"
          >&#xe688;</i>
        </div>
        <ol
          :style="{height:activeIndexClick==index?item.arr.length*50+'px':'0',opacity:activeIndexClick==index?'1':'0'}"
          v-if="item.arr&&item.arr.length>0"
        >
          <router-link :to="item1.router" v-for="(item1,i) in item.arr" :key="'h'+i">
            <li @click="addTab(item1)">
              <!-- <i class="iconfont">&#xe688;</i> -->
              {{item1.title}}
            </li>
          </router-link>
        </ol>
      </li>
    </ul>
  </div>
</template>
<script>

export default{
      data() {
        return {
            activeIndex:'-1',
            activeIndexClick:'-1',
            classifylist: this.dataArray,
        }
    },
    props:{
        datatype:{
            type:Boolean,
            default:false
        },
        dataArray:{
            type:Array,
            default:function(){
                return [{
                 
                    title: '主页',
                    arr: [{
                        title:'分页器',
                        router:'pagination'
                    },{
                        title:'时钟',
                        router:'clock' 
                    },{
                        title:'走马灯',
                        router:'Carousel' 
                    },{
                      title:'货单',
                      router:'currency'
                    }]
                  
                },
         
             ]
            }
        }
    },
    methods: {
        listclick(index){
            console.log(index)
            if(this.activeIndexClick==index){
                this.activeIndexClick='-1';
            }else{
                this.activeIndexClick=index;
            }
        },
        addTab(item1){
            this.$emit('addtab-event',item1)
        },
    },
    data() {
        return {
            activeIndex:'-1',
            activeIndexClick:'-1',
            classifylist: this.dataArray,
        }
    },
}
</script>


<style>

 .classifylist {
   
    position: absolute;
    top:0px;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding-top: 10px;
    background-color: #222324;
    width: 220px;
    max-width: 220px;
    overflow: hidden;
    border-right: 1px solid #131e26;
    }
    .classifylist>ul>li {
   
    line-height: 50px;
    border-left: 4px solid #222324;
    transition: background-color ease .3s;

    font-size: 14px;
    cursor: pointer;
    color: #8e8e8e;
    }
    .classifylist>ul>li>div {
    padding: 0 20px;
    box-sizing: border-box;
    height: 50px;
    }
    .classifylist>ul>li>div .rotateActive {
    display: inline-block;
    transform: rotate(90deg);
    transition: all .2s linear;
    }
    .classifylist>ul .active {
    margin-left: 0;
    border-left: 3px solid #42b8f1;
    background-color: #000;
    color: #fff;
    }
    .classifylist>ul .active1 {
    margin-left: 0;
    border-left: 3px solid #42b8f1;
    background-color: #000;
    }
    .left {
    margin-right: 10px;
    }
    .right {
    float: right;
    }
    .classifylist>ul>li>ol {
    height: 0;
    display: block;
    line-height: 50px;
    color: #888;
    transition: all .5s linear;
    opacity: 0;
    }
    .classifylist>ul>li>ol>a{
        color: #888;
    }
    .classifylist>ul>li>ol>a li{
    line-height: 50px;
    height: 50px;
    }
    .classifylist>ul>li>ol>a li:hover {
    color: #fff;
    background: #333;
    }
    .classifylist>ul>li>ol i {
    margin-left: 30px;
    margin-right: 10px;
    font-size: 14px;
    }
</style>