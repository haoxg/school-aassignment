var fenye = {
    // el: '#app',
    template: '#fenye',
    data() {
        return {
            pageSize: 5,
            currentPage: 1,
            pages: 50,
            // leftt: false,
            // rightt: false
        }
    },
    computed: {
        leftt() {
            if (this.pages > this.pageSize) {
                if (this.currentPage > Math.floor(this.pageSize / 2) + 1) {
                    return true
                } else {
                    return false
                }
            }
        },
        rightt() {
            if (this.pages > this.pageSize) {
                if (this.currentPage > Math.floor(this.pageSize / 2) + 1) {
                    return true
                } else {
                    return false
                }
            }
        },

        maxpagesize() {
            return this.pages < this.pageSize ? this.pages : this.pageSize
        },
        firstPage() {
            if (this.currentPage <= Math.floor(this.pageSize / 2)) {
                return 1
            } else if (this.currentPage >= this.pages - Math.floor(this.pageSize / 2)) {
                return this.pages - this.pageSize + 1;
            } else {
                return this.currentPage - Math.floor(this.pageSize / 2)

            }
        }
    },
    methods: {
        first() {
            this.currentPage = 1
        },
        last() {
            this.currentPage = this.pages
        },
        prev() {
            if (this.currentPage <= 1) return

            this.currentPage--
        },
        next() {
            if (this.currentPage >= this.pages) return
            this.currentPage++
        },
        zhh(page) {
            this.currentPage = page
        }

    },
}