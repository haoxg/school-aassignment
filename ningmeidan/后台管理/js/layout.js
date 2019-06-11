Vue.component('layout', {
    template: `
    <div id="container" class="clearfix">

            <!-- 头部 -->
            <div id="header" class="clearfix">
                <slot name="page-header"></slot>
            </div>
            <!-- 头部over -->

            <!--主体 -->
            <div id="content" class="clearfix">
                <!-- 左边导航 -->
                <transition name="slide">
                        <div id="main_left" v-show="navShow">
                            <slot name="page-nav"></slot>
                        </div>
                </transition>
                <!-- 左边导航 over-->

                <!-- 右边内容 -->
                <div id="main_right" :style="{left:navShow?'221px':'0'}">
                    <div class="page-tab">
                        <slot name="page-tab"></slot>
                    </div>
                    <div class="right-cont">
                        <div class="right-page"><slot></slot></div>
                    </div>
                </div>
                <!-- 右边内容over -->
            </div>
            <!-- 主体over -->
        </div>
    `,
    data() {
        return {
            navShow: true,
        }
    },
    methods: {
        shrink() {
            this.navShow = !this.navShow;
        }
    }
})