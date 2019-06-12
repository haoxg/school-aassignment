var header = Vue.extend({
    template: `
    <div class="con-top">
                <div class="login fl">
                    <a href="javascript:;"> L-admin v2.0</a>
                </div>
                <div class="left-open fl" @click="showa">
                    <i class="tubiao iconfont">&#xe60b;</i>
                </div>
                <div class="box fl">+新增
                    <i class="i iconfont">&#xe615;</i>
                    <i class="ziti iconfont">&#xe600;</i>
                    <div class="caidan">
                        <ul>
                            <li>资讯</li>
                            <li>图片</li>
                            <li>用户</li>
                        </ul>
                    </div>
                </div>
                <!-- 右 -->
                <div class="box2 fr ">admin
                    <i class="i iconfont">&#xe615;</i>
                    <i class="ziti2 iconfont">&#xe600;</i>
                    <div class="caidan2">
                        <ul>
                            <li>资讯</li>
                            <li>图片</li>
                            <li>用户</li>
                        </ul>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            show: true,
            show2: '-221',
        }
    },
    methods: {
        showa() {
            this.show = !this.show
            this.show2 = !this.show2
            this.$emit('is-show', this.show)
        },
    }
})