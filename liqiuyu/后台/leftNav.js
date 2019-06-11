var leftNav = Vue.extend({
    template: `<div class="lists" id="lists">
                    <ul>
                        <li v-for="item,index in arr" @click="select(item.type,index,item.datas)" id="li">
                            <span class="list_text">{{item.type}}</span>
                            <span class="glyphicon glyphicon-menu-right fr list_more"></span>
                            <ul v-show="false" class="options" >
                                    <!-- :style="{'height':option==true?54*item.datas.length+'px':'0px'}" -->
                                <li v-for="o in item.datas" @click.stop="addTab(o)">
                                    <router-link :to="o.url">
                                        <span class="glyphicon glyphicon-menu-right fl list_more"></span>{{o.title}}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>`,
    data() {
        return {
            option: false,
            i: '',
            arr: [{
                type: '主页',
                datas: [{
                    title: '控制台',
                    url: '/console'
                }]
            }, {
                type: '组件页面',
                datas: [{
                    title: '评分',
                    url: '/mygrade'
                }, {
                    title: 'abc',
                    url: '/abc'
                }, {
                    title: 'num',
                    url: '/num'
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
            for (var i = 0; i < li.length; i++) {
                li[i].children[2].style.display = 'none';
                li[i].className = '';
                if (li[i].children[1].classList[1] == 'glyphicon-menu-down') {
                    li[i].children[1].classList.replace('glyphicon-menu-down', 'glyphicon-menu-right');
                }
            }
            if (this.option) {
                li[index].children[2].style.display = 'block';
                li[index].className = 'open';
                li[index].children[1].classList.replace('glyphicon-menu-right', 'glyphicon-menu-down');
            }
            this.i = index;

        }
    }
})