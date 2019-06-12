var Pag = Vue.extend({
    template: '#Pag',
    data() {
        return {
            page: 0, //当前页数的下标
        }
    },
    methods: {
        head() { //首页
            this.page = 0;
        },
        top() { //上一页
            this.page--
                if (this.page < 0) {
                    this.page = 0
                }
        },
        bom() { //下一页
            this.page++
                if (this.page >= 10) {
                    this.page = 9
                }
        },
        last() { //尾页
            this.page = 9
        },
        move(v) { //点击li
            this.page = v
        }
    }
})