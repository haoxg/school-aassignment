<template>
    <div class="classifylist" :style="{'transform':datatype?'translateX(0)':'translateX(-220px)'}">
        <ul>
            <li v-for="item,index in classifylist" :class="{'active':activeIndex==index,active1:activeIndexClick==index}" :key="index">
                <div @mouseover="activeIndex=index" @mouseout="activeIndex='-1'" @click="listclick(index)">
                    <i class="iconfont left" :class="item.icon"></i>{{item.title}}
                    <i class="iconfont right" :class="{'rotateActive':activeIndexClick==index}">&#xe688;</i>
                </div>
                <ol :style="{height:activeIndexClick==index?item.arr.length*50+'px':'0'}" v-if="item.arr&&item.arr.length>0">
                    <router-link :to="item1.router" v-for="item1,i in item.arr" tag="a" :key="i">
                        <li @click="addlabel(item1)" :style="{opacity:activeIndexClick==index?'1':'0','transition':activeIndexClick==index?'all '+0.3/item.arr.length+'s '+i*(0.3/item.arr.length)+'s linear':'all '+0.3/item.arr.length+'s '+(item.arr.length-i-1)*(0.3/item.arr.length)+'s linear'}"><i class="iconfont">&#xe688;</i>{{item1.title}}</li>
                    </router-link>
                </ol>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        datatype: {
            type: Boolean,
            default: false,
        },
        dataArr: {
            type: Array,
            default: function() {
                return [{
                        icon: 'icon-yezi',
                        title: '主页',
                    },{
                        icon: 'icon-weibiaoti--',
                        title: '组件页面',
                        arr: [{
                            title: '分页',
                            router: 'pagingDevice'
                        }, {
                            title: '华容道',
                            router: 'Klotski'
                        }, {
                            title: '货单',
                            router: 'manifest'
                        }, {
                            title: '钟表',
                            router: 'horologe'
                        }, {
                            title: '评分',
                            router: 'grade'
                        }, {
                            title: '轮播图',
                            router: 'slideshow'
                        }],
                    }
                    // }, {
                    //     icon: 'icon-zuanshi',
                    //     title: '基本元素',
                    //     arr: ['图标字体', '表单元素', '表单组合', '按钮', '导航/面包屑', '选项卡', '进度条', '面板', '微章', '时间线', '静态表格', '动画'],
                    // }, {
                    //     icon: 'icon-weibiaoti--',
                    //     title: '组件页面',
                    //     arr: ['文件上传', '分页', '多级分类', '轮播图', '城市三级联动'],
                    // }
                    // }, {
                    //     icon: 'icon-yduipaibanleixingduicheng',
                    //     title: '排版布局',
                    //     arr: ['栅格', '排版'],
                    // }, {
                    //     icon: 'icon-dingdanguanli',
                    //     title: '订单管理',
                    //     arr: ['订单列表'],
                    // }, {
                    //     icon: 'icon-xiaoshouguanli',
                    //     title: '管理员管理',
                    //     arr: ['图标字体元素', '表单组合', '按钮', '选项卡'],
                    // }, {
                    //     icon: 'icon-ren',
                    //     title: '用户管理',
                    //     arr: ['图标字体', '选项卡', '进度条', '面板', '微章', '时间线'],
                    // }, {
                    //     icon: 'icon-guanli',
                    //     title: '系统统计',
                    //     arr: ['图标字体', '表单元素', '表单组合', '按钮', '选项卡'],
                    // }]
                ]
            }
        }
    },
    methods: {
        listclick(index) {
            if (this.activeIndexClick == index) {
                this.activeIndexClick = '-1';
            } else {
                this.activeIndexClick = index;
            }
        },
        addlabel(item) {
            this.$emit('add-label', item)
        }
    },
    data() {
        return {
            activeIndex: '-1',
            activeIndexClick: '-1',
            classifylist: this.dataArr,
        }
    },
}
</script>
<style>
    .classifylist {
    padding-top: 10px;
    width: 220px;
    height: 100%;
    background: #222;
    color: #888;
    box-sizing: border-box;
    user-select: none;
    transition: all .5s linear;
    position: absolute;
    top: 0;
    left: 0;
}

.classifylist>ul>li {
    height: auto;
    line-height: 50px;
    margin-left: 3px;
    font-size: 14px;
    cursor: pointer;
    position: relative;
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
    transition: all .3s linear;
}

.classifylist>ul>li>ol a {
    color: #888;
}

.classifylist>ul>li>ol>a>li {
    line-height: 50px;
    height: 50px;
    opacity: 0;
}

.classifylist>ul>li>ol>a:hover {
    color: #fff;
    background: #333;
}

.classifylist>ul>li>ol i {
    margin-left: 30px;
    margin-right: 10px;
    font-size: 14px;
}
</style>
