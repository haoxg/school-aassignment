var pagingDevice = Vue.extend({
    template: `
    <div class="pagingDevice">
        <span @click="shouye()">首页</span>
        <span @click="prev()">上一页</span>
        <ul>
            <li v-show="pageprev">{{1}}</li>
            <li v-show="pageprev">...</li>
            <li v-for="item,index in showpagearr" @click="_this(index+page)" :class="{'active':i==index+page}">{{item+page}}</li>
            <li v-show="pagenext">...</li>
            <li v-show="pagenext">{{maxpage}}</li>
        </ul>
        <span @click="next()">下一页</span>
        <span @click="weiye()">尾页</span>
        <div>{{i+1}}/{{maxpage}}</div>
    </div>
    `,
    data() {
        return {
            showpage: 9,
            maxpage: 20,
            i: 0,
        }
    },
    computed: {
        pagenext() {
            if (this.i < this.maxpage - (Math.floor(this.showpage / 2) + 1)) {
                return true;
            }
        },
        pageprev() {
            if (this.i > Math.floor(this.showpage / 2)) {
                return true;
            }
        },
        showpagearr() {
            return this.showpage > this.maxpage ? this.maxpage : this.showpage
        },
        page() {
            if (this.i < Math.floor(this.showpage / 2)) {
                return 0;
            } else if (this.i >= this.maxpage - Math.floor(this.showpage / 2)) {
                if (this.showpage > this.maxpage) return 0;
                return this.maxpage - this.showpage;
            } else {
                if (this.showpage > this.maxpage) return 0;
                return this.i - Math.floor(this.showpage / 2)
            }
        },
    },
    methods: {
        prev() {
            this.i--;
            if (this.i < 0) {
                this.i = 0
            }
        },

        next() {
            this.i++;
            if (this.i >= this.maxpage) {
                this.i = this.maxpage - 1;
            }
        },
        shouye() {
            this.i = 0;
        },
        weiye() {
            this.i = this.maxpage - 1;
        },
        _this(v) {
            this.i = v;
        },
    }
})