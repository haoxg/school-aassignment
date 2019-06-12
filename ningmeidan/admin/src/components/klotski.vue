<template>
        <div>
            <div class="btn">
                <button :key="'a'+index" v-for="(item,index) in 5" @click="create(index+3)">{{index+3}}*{{index+3}}</button>
            </div>
            <div id="box">
                <div :key="'b'+index" v-for="(item,index) in arr " @click="move(item,index) ">{{item}}</div>
            </div>
        </div>
</template>

<script>
export default {
 data(){
        return {
            arr: [],
            arr1: [],
            n: 0,
            on: false,
            timer: null,
            len: 3
         }
    },
    watch: {
        arr() {
            if (this.arr.toString() == this.arr1.toString()) {
                clearInterval(this.timer);
                alert('用时' + this.n + '秒');
            }
        }
    },
    mounted(){
        this.sort()
        this.create(3)
    },
    methods: {
        sort() {
            this.arr.sort(function(a, b) {
                return Math.random() - Math.random();
            })
        },
        move(item, index) {
            if (!this.on) {
                this.on = true;
                this.timer = setInterval(() => {
                    this.n++;
                }, 1000)

            }
            var currentIndex = index;
            var vacancy;
            this.arr.forEach((o, i) => {
                if (o == '') {
                    vacancy = i;
                }
            })
            if (this.isCanMove(currentIndex, vacancy)) {
                this.$set(this.arr, index, '');
                this.$set(this.arr, vacancy, item);
            }

        },
        isCanMove(currentIndex, vacancy) {
            if (vacancy % this.len == 0) {
                return (vacancy + 1 == currentIndex || vacancy + this.len == currentIndex || vacancy - this.len == currentIndex);
            } else if ((vacancy + 1) % this.len == 0) {
                return (vacancy - 1 == currentIndex || vacancy + this.len == currentIndex || vacancy - this.len == currentIndex);
            } else {
                return (vacancy - 1 == currentIndex || vacancy + 1 == currentIndex || vacancy + 1 == currentIndex || vacancy + this.len == currentIndex || vacancy - this.len == currentIndex)
            }
        },
        create(num) {
            this.arr = [];
            this.arr1 = [];
            this.len = num;
            box.style.height = box.style.width = num * 100 + 'px';
            for (var i = 0; i < num * num; i++) {
                if (i == num * num - 1) {
                    this.arr.push('');
                    this.arr1.push('');
                } else {
                    this.arr.push(i + 1);
                    this.arr1.push(i + 1);
                }
            }
            this.sort();
        }
    }
}
</script>

<style scoped="scoped">
* {
    margin: 0;
    padding: 0;
}

#box {
    width: 300px;
    height: 300px;
    margin: 50px auto;
    user-select: none;
}

#box>div {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    line-height: 100px;
}

.btn {
    width: 300px;
    margin: 0 auto; 
}

.btn button {
    width: 50px;
    height: 30px;
    margin-right: 10px;
}
</style>
