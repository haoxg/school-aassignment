var leftNav = Vue.extend({
    template: `
            <div id="side_nav">
                <ul id="nav">
                    <li ref="li" v-for="item,index in list" @click="choosed(index)" :class="{'active':item.isShow}">
                        <a href="javascript:;">{{item.main_nav}}</a>
                        <span class="glyphicon" :class="{'glyphicon-menu-right':item.isShow==false,'glyphicon-menu-down':item.isShow==true}"></span>
                        <ul class="sencond_nav" v-show="item.isShow">
                            <li v-for="o,i in item.second_nav" @click.stop="addTab(o)">
                                <router-link :to="o.url">
                                    <span class="glyphicon glyphicon-menu-right s-right"></span>
                                    <i>{{o.title}}</i>
                                </router-link> 
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    `,
    data() {
        return {
            hoverIndex: 0,
            on: false,

            list: [{
                main_nav: '主页',
                second_nav: [{
                    title: '控制台',
                    url: '/controls'
                }],
                isShow: false
            }, {
                main_nav: '基本元素',
                second_nav: [{
                    title: '评分',
                    url: '/Grade'

                }, {
                    title: 'abc',
                    url: '/abc'
                }, {
                    title: 'num',
                    url: '/num'
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

})