<template>
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
</template>

<script>
export default {
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
                        title:'华容道',
                        router:'huaRongDao',
                    },{
                        title:'评分',
                        router:'grade',
                    },{
                        title:'货单',
                        router:'manifest',
                    },{
                        title:'钟表',
                        router:'horologe',
                    },{
                        title:'轮播图',
                        router:'slideshow',
                    }]
                },
                //  {
                //     icon: 'icon-zuanshi',
                //     title: '基本元素',
                //     arr: ['图标字体', '表单元素', '表单组合', '按钮', '导航/面包屑', '选项卡', '进度条', '面板', '微章', '时间线', '静态表格', '动画']
                // }, {
                //     icon: 'icon-weibiaoti--',
                //     title: '组件页面',
                //     arr: ['文件上传', '分页', '多级分类', '轮播图', '城市三级联动']
                // }, {
                //     icon: 'icon-yduipaibanleixingduicheng',
                //     title: '排版布局',
                //     arr: ['栅格', '排版']
                // }, {
                //     icon: 'icon-dingdanguanli',
                //     title: '订单管理',
                //     arr: ['订单列表']
                // }, {
                //     icon: 'icon-xiaoshouguanli',
                //     title: '管理员管理',
                //     arr: ['图标字体', '表单元素', '表单组合', '按钮', '选项卡']
                // }, {
                //     icon: 'icon-ren',
                //     title: '用户管理',
                //     arr: ['图标字体', '选项卡', '进度条', '面板', '微章', '时间线', '静态表格', '动画']
                // }, {
                //     icon: 'icon-guanli',
                //     title: '系统统计',
                //     arr: ['图标字体', '表单元素', '表单组合', '按钮', '选项卡', '进度条', '面板']
                // }
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

</style>
