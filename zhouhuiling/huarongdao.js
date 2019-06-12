var Hua = Vue.extend({
    template: '#hua',
    data() {
        return {
            arr: [],
            n: ''
        }
    },
    methods: {
        sort(arr) {
            arr.sort(function(a) {
                return a > 0.5 ? 1 : -1
            })
        },
        btn(aa) {
            this.arr = [];
            for (var i = 1; i < aa * aa; i++) {
                this.arr.push(i);
            }
            this.arr.push('');
            this.sort(this.arr)
            this.n = Math.sqrt(this.arr.length)
        },
        move(item, index) {
            var dianindex = index;
            var kong;
            this.arr.forEach((element, index) => {
                if (element == '') {
                    kong = index
                }
            });
            if (this.isCanmove(dianindex, kong)) {
                this.$set(this.arr, index, '')
                Vue.set(this.arr, kong, item)
            }
        },

        isCanmove(dianindex, kong) {
            if (dianindex % this.n == 0) {
                if (dianindex + 1 == kong || dianindex - this.n == kong || dianindex + this.n == kong) {
                    return true
                }
            } else if (dianindex + 1 % this.n == 0) {
                if (dianindex - 1 == kong || dianindex - this.n == kong || dianindex + this.n == kong) {
                    return true
                }
            } else {
                if (dianindex + 1 == kong || dianindex - 1 == kong || dianindex - this.n == kong || dianindex + this.n == kong) {
                    return true
                }
            }
        }
    }

})