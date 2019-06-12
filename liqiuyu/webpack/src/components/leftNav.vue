<template>
    <ul>
        <li :key="'b'+index" v-for="(item,index) in arr" @click="select(item.type,index,item.datas)" ref="li">
            <span class="list_text">{{item.type}}</span>
            <span class="glyphicon glyphicon-menu-right fr list_more"></span>
            <ul v-show="false" class="options" >
                <li :key="'a'+i" v-for="(o,i) in item.datas" @click.stop="addTab(o)">
                    <router-link :to="o.url">
                        <span class="glyphicon glyphicon-menu-right fl list_more"></span>{{o.title}}
                    </router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    export default {
         data() {
            return {
                option: false,
                i: '',
                arr: [{
                    type: '组件页面',
                    datas: [{
                        title: '评分',
                        url: '/mygrade'
                    },{
                        title: '时钟',
                        url: '/clock'
                    },{
                        title: '华容道',
                        url: '/huarongdao'
                    },{
                        title: '货币单',
                        url: '/huobidan'
                    },{
                        title: '五子棋',
                        url: '/wuziqi'
                    },{
                        title: '轮播',
                        url: '/lunbo'
                    },{
                        title: '代办事项',
                        url: '/daiban'
                    }]
                }]
            }
        },
        methods: {
            addTab(o) {
                this.$emit('addtab-event', o)
            },
            select(item, index, datas) {
                if (this.i == index) {
                    this.option = !this.option;
                } else {
                    this.option = true;
                }
                for (var i = 0; i < this.$refs.li.length; i++) {
                    this.$refs.li[i].children[2].style.display = 'none';
                    this.$refs.li[i].className = '';
                    if (this.$refs.li[i].children[1].classList[1] == 'glyphicon-menu-down') {
                        this.$refs.li[i].children[1].classList.replace('glyphicon-menu-down', 'glyphicon-menu-right');
                    }
                }
                if (this.option) {
                    this.$refs.li[index].children[2].style.display = 'block';
                    this.$refs.li[index].className = 'open';
                    this.$refs.li[index].children[1].classList.replace('glyphicon-menu-right', 'glyphicon-menu-down');
                }
                this.i = index;

            }
        }
    }
</script>

<style scoped>
    .lists ul li {
        font-size: 14px;
        padding: 7px 7px;
        cursor: pointer;
        color: #8e8e8e;
        line-height: 30px;
        position: relative;
    }

    .lists ul li a {
        width: 100%;
        height: 100%;
        display: inline-block;
        color: #8e8e8e;
        text-decoration: none;
    }

    .list_more {
        padding-right: 10px;
        font-size: 16px;
        color: rgb(142, 142, 142);
        padding-top: 5px;
    }

    .list_text {
        font-size: 14px;
    }

    .main {
        padding: 20px;
    }
    .my_tit_icon {
        padding-right: 5px;
        font-size: 16px;
    }

    .lists>ul>li:hover>span {
        color: #fff;
    }

    .lists>ul>li:hover {
        border-left: 4px solid rgb(66, 184, 241);
        background: rgb(24, 24, 24);
    }

    .open {
        border-left: 4px solid rgb(66, 184, 241);
        background: rgb(24, 24, 24);
    }

    .options {
        transition: .5s;
    }

    .lists .options li,
    .lists .options li span {
        font-size: 12px;
    }

    .options li:hover {
        background: #282b33;
    }

    .lists .options li span {
        position: absolute;
        top: 12px;
        left: 30px;
    }

    [v-cloak] {
        display: none;
    }

</style>
