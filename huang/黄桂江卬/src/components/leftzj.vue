<template>
      <div class="left">
                    <div class="spot" v-for="item,index in filer" @click.stop="show1(item,index)">{{item.text}}
                        <div class="a" name="a" v-show="item.ztai" v-for="i,io in item.cont" @click.stop="show2(i,io)">{{i.font}}</div>
                    </div>
                </div>  
</template>
<script>
export default {
    props:["arr2"],
     data() {
                return {
                    arr1:this.arr2,
                    a: 0,
                    b: 0,
                    filer: [{
                        text: '主页',
                        ztai: false,
                        cont: [{
                            font: '控制台',
                            tent: '[1]',
                            url: '/avc'
                        }]
                    }, {
                        text: '基本元素',
                        ztai: false,
                        cont: [{
                            font: '图标字体',
                            tent: '[2]',
                        }, {
                            font: '表单元素',
                            tent: '[3]',
                        }, {
                            font: '表单组合',
                            tent: '[4]',
                        }, {
                            font: '按钮',
                            tent: '[5]',
                        }, {
                            font: '导航/面包屑',
                            tent: '[6]',
                        }, {
                            font: '选项卡',
                            tent: '[7]',
                        }, {
                            font: '进度条',
                            tent: '[8]',
                        }, {
                            font: '面板',
                            tent: '[9]',
                        }, {
                            font: '微章',
                            tent: '[10]',
                        }, {
                            font: '时间线',
                            tent: '[11]',
                        }, ]
                    }, {
                        text: '组件页面',
                        ztai: false,
                        cont: [{
                            font: '钟表',
                            tent: '[12]',
                            url: '/zhongbiao'
                        }, {
                            font: '分页',
                            tent: '[13]',
                            url: '/fenyeqi'
                        }, {
                            font: '拼图',
                            tent: '[14]',
                             url: '/pintu'
                        }, {
                            font: '轮播图',
                            tent: '[15]',
                        }, {
                            font: '超市三级联动',
                            tent: '[16]',
                        }, ]
                    }, {
                        text: '排版布局',
                        ztai: false,
                        cont: [{
                            font: '栅格',
                            tent: '[17]',
                        }, {
                            font: '排版',
                            tent: '[18]',
                        }, ]
                    }, {
                        text: '订单管理',
                        ztai: false,
                        cont: [{
                            font: '订单列表',
                            tent: '[19]',
                        }]
                    }, {
                        text: '管理员管理',
                        ztai: false,
                        cont: [{
                            font: '管理员列表',
                            tent: '[20]',
                        }, {
                            font: '角色管理',
                            tent: '[21]',
                        }, {
                            font: '权限分类',
                            tent: '[22]',
                        }, {
                            font: '权限管理',
                            tent: '[23]',
                        }, ]
                    }, {
                        text: '用户管理',
                        ztai: false,
                        cont: [{
                            font: '会员列表',
                            tent: '[24]',
                        }, {
                            font: '会员删除',
                            tent: '[25]',
                        }, {
                            font: '会员管理',
                            tent: '[26]',
                        }, ]
                    }, {
                        text: '系统统计',
                        ztai: false,
                        cont: [{
                            font: '拆线图',
                            tent: '[27]',
                        }, {
                            font: '柱状图',
                            tent: '[28]',
                        }, {
                            font: '地图',
                            tent: '[29]',
                        }, ]
                    }, ],
                }
            },
            methods: {
                show2(item, io) {
                    console.log(item.font)
                    this.b = io;
                    this.$router.push({
                        path: item.url
                    });
                    var isPush = true;
                    this.arr1.forEach(i => {
                        if (item.font == i.fil) {
                            isPush = false;
                        }
                    })
                    if (isPush) {
                        this.arr1.push({
                            fil: item.font,
                            url1: item.url
                        })
                    }
                },

                show1(item, index) {
                    this.a = index;
                    item.ztai = !item.ztai
                }
            },
}
</script>
<style scope>
    .a {
            width: 200px;
            height: auto;
            background: #ccc;
            color: black;
            border-left: 7px solid blue;
        }
          .spot {
            width: 200px;
            height: auto;
            line-height: 50px;
            text-align: center;
            color: aliceblue;
        }
         .left {
            width: 200px;
            height: 500px;
            background: black;
            float: left;
        }
        
</style>