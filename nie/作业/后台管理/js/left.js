var left = Vue.extend({
    template: `
            <div class="left-nav" >
            <ul id="nav">
                <li v-for="item,index in arr" >
                    <a href="javascript:;" @click="click(index)">
                        <i class="iconfont icon" v-html=item.icon></i>{{item.type}}
                        <span class="span iconfont">&#xe644;</span>
                    </a>
                    <div class="submenu" :class="{submenu2:current==index}">
                        <p v-for="i,index in item.lists" @click='addTab(i)'>
                        <router-link :to="i.url">
                            <i class="iconfont">&#xe644;</i> {{i.title}}
                        </router-link>
                        </p>
                    </div>
                </li>
            </ul>
        </div> 
    `,
    data() {
        return {
            arr: data,
            current: 999999,
            options: false
        }
    },
    methods: {
        click(index) {
            if (this.current == index) {
                this.current = 9999999
            } else {
                this.current = index
            }
        },
        addTab(o) {
            console.log(o)
            this.$emit('addtab-event', o)
        },


    }
})