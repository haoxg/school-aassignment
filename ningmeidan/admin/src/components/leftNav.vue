
<template>
    <div id="side_nav">
        <ul id="nav">
            <li ref="li" v-for="(item,index) in list" @click="choosed(index)" :key="'b'+index" :class="{'active':item.isShow}">
                <a href="javascript:;">{{item.main_nav}}</a>
                <span class="glyphicon" :class="{'glyphicon-menu-right':item.isShow==false,'glyphicon-menu-down':item.isShow==true}"></span>
                <ul class="sencond_nav" v-show="item.isShow">
                    <li v-for="(o,i) in item.second_nav" :key="'c'+i" @click.stop="addTab(o)">
                        <router-link :to="o.url">
                            <span class="glyphicon glyphicon-menu-right s-right"></span>
                            <i>{{o.title}}</i>
                        </router-link> 
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hoverIndex: 0,
            on: false,

            list: [{
                main_nav: '主页',
                second_nav: [{
                    title: '主页',
                    url: '/'

                }],
                isShow: false
            }, {
                main_nav: '基本元素',
                second_nav: [{
                    title: '评分',
                    url: '/Grade'

                }, {
                    title: '时钟',
                    url: '/clock'
                },{
                    title: '走马灯',
                    url: '/carousel'
                },{
                    title: '货币单',
                    url: '/currency'
                },{
                    title: '华容道',
                    url: '/klotski'
                },{
                    title: 'todolist',
                    url: '/todolist'
                }],
                isShow: false
            }],
        }
    },
    methods: {
        choosed(index) {
            if (index == this.hoverIndex) {
                this.list[index].isShow = !this.list[index].isShow;
            } else {
                this.list[this.hoverIndex].isShow = false;
                this.list[index].isShow = true;
            }
            this.hoverIndex = index;

        },
        addTab(o) {
            this.$emit('tab-event', o)
        },
    }
}
</script>

<style scoped="scoped">
#nav li {
    line-height: 50px;
    font-size: 14px;
    /* padding: 0 20px; */
}

#nav li a {
    text-decoration: none;
    color: #8e8e8e;
    padding-left: 20px;
}

#nav li span {
    padding-right: 20px;
}

#nav>li:hover {
    border-left: 5px solid aqua;
    background-color: #3e403f;
}

#nav>li:hover a {
    color: #fff;
}

#nav .active {
    border-left: 5px solid aqua;
    background-color: #3e403f;
}

#nav .active a {
    color: #fff;
}

.glyphicon-menu-right {
    float: right;
    color: #8e8e8e;
    line-height: 50px;
    font-size: 12px;
}

.glyphicon-menu-down {
    float: right;
    color: #8e8e8e;
    line-height: 50px;
    font-size: 12px;
}

.sencond_nav {
    transition: .5s;
    background-color: rgb(34, 35, 36);
}

.sencond_nav.sencond_show {
    display: block;
}

.sencond_nav li {
    height: 50px;
    transition: 0.5s;
}

#nav .sencond_nav li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #8e8e8e;
    padding: 0;
}

#nav .sencond_nav li .router-link-active {
    background-color: rgb(51, 52, 53);
}

#nav .sencond_nav li span {
    padding-left: 20px;
}

</style>
