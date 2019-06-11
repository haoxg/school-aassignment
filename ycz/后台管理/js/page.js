var pageBreak = Vue.extend({
    template: `
        <div class="page">
            <ul id="content">
                <li @click="first">首页</li>
                <li @click="prev">上一页</li>
                <li v-show="showLeft">1</li>
                <li v-show="showLeft">...</li>
                <li v-for="i,index in maxPageSize" @click="jump(firstPage+index)" :class="{'active':firstPage+index==currentPage}">{{firstPage+index}}</li>
                <li v-show="showRight">...</li>
                <li v-show="showRight">{{pages}}</li>
                <li @click="next">下一页</li>
                <li @click="last">尾页</li>
            </ul>
        </div>
    `,
    data() {
        return {
            pageSize: 9,
            currentPage: 1,
            pages: 50,
        }
    },
    computed: {
        showLeft() {
            if (this.pages > this.pageSize) {
                if (this.currentPage > Math.floor(this.pageSize / 2) + 1) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        showRight() {
            if (this.pages > this.pageSize) {
                if (this.currentPage > this.pages - Math.floor(this.pageSize / 2) - 1) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        maxPageSize() {
            return this.pages <= this.pageSize ? this.pages : this.pageSize;
        },
        firstPage() {
            if (this.currentPage <= Math.floor(this.pageSize / 2)) {
                return 1;
            } else if (this.currentPage >= this.pages - Math.floor(this.pageSize / 2)) {
                return this.pages - this.pageSize + 1;
            } else {
                return this.currentPage - Math.floor(this.pageSize / 2);
            }
        }
    },
    methods: {
        first() {
            this.currentPage = 1;
        },
        next() {
            if (this.currentPage >= this.pages) return
            this.currentPage++
        },
        prev() {
            if (this.currentPage <= 1) return
            this.currentPage--;
        },
        last() {
            this.currentPage = this.pages;
        },
        jump(page) {
            this.currentPage = page;
        }
    },
})