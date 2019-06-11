var leftNav=Vue.extend({
    template:`
    <div class="classifylist" :style="{'transform':datatype?'translateX(0)':'translateX(-220px)'}">
        <ul>
            <li v-for="item,index in classifylist" :class="{'active':activeIndex==index,active1:activeIndexClick==index}">
                <div @mouseover="activeIndex=index" @mouseout="activeIndex='-1'" @click="listclick(index)">
                    <i class="iconfont left" :class="item.icon"></i>
                    {{item.title}}
                    <i class="iconfont right" :class="{'rotateActive':activeIndexClick==index}">&#xe688;</i>
                </div>
                <ol :style="{height:activeIndexClick==index?item.arr.length*50+'px':'0',opacity:activeIndexClick==index?'1':'0'}" v-if="item.arr&&item.arr.length>0">
                    <router-link :to="item1.router" v-for="item1,i in item.arr">
                        <li @click="addTab(item1)"><i class="iconfont">&#xe688;</i>{{item1.title}}</li>
                    </router-link>
                </ol>
            </li>
        </ul>
    </div>
    `,
    props:{
        datatype:{
            type:Boolean,
            default:false
        },
        dataArray:{
            type:Array,
            default:function(){
                return [{
                    icon: 'icon-zhuye',
                    title: '主页',
                    arr: [{
                        title:'分页器',
                        router:'pagination'
                    },{
                        title:'mine',
                        router:'/' 
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
})