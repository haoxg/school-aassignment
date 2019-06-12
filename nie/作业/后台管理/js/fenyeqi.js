var fenyeqi = Vue.extend({
    template: '#fenyeqi',
    data() {
        return {
            pageAll: 50,
            pageSize: 9,
            cur: 1,
        }
    },
    computed: {
        qqq() {
            if (this.cur - Math.floor(this.pageSize / 2) > 1) {
                return true
            }
        },
        aaa() {
            if (this.cur - Math.floor(this.pageSize / 2) < this.pageAll - this.pageSize) {
                return true
            }
        },
        maxSize() {
            return this.pageAll < this.pageSize ? this.pageAll : this.pageSize
        },
        firetPage() {
            if (this.cur <= Math.floor(this.pageSize / 2)) {
                return 1
            } else if (this.cur >= this.pageAll - Math.floor(this.pageSize / 2)) {

                return this.pageAll - this.pageSize + 1
            } else {
                this.preClipped = true
                this.pre = true
                return this.cur - Math.floor(this.pageSize / 2)
            }

        }
    },
    methods: {
        fliert() {
            this.cur = 1
        },
        list() {
            this.cur = this.pageAll
        },
        prev() {
            if (this.cur == 1) return
            this.cur--
        },
        next() {

            if (this.cur >= this.pageAll) return
            this.cur++
        },
        curr(index) {

            this.cur = index
        }
    }
})