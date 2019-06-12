<template>
    <div>
        <div class="change">
            <button :key="'a'+item" @click="forms(item+2)" v-for="item in 5">{{item+2}}*{{item+2}}</button>
        </div>
        <div id="box" class="clearfix">
            <div :key="'b'+index" v-for="(item,index) in arr" @click="move(item,index)">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                arr: [],
                arr1: [],
                on: false,
                n: 0,
                timer: null,
                len: 3
            }
        },
        watch: {
            arr() {
                if (this.arr.toString() == this.arr1.toString()) {
                    alert('用时' + this.n + '秒');
                    clearInterval(this.timer);
                    this.forms(this.len);

                }
            }
        },
        mounted(){
            this.forms(3);
        },
        methods: {
            forms(wh) {
                this.arr = [];
                this.arr1 = [];
                this.len = wh;
                box.style.height = box.style.width = wh * 100 +2+'px';
                for (var i = 0; i < wh * wh; i++) {
                    if (i == wh * wh - 1) {
                        this.arr.push('');
                        this.arr1.push('');
                    } else {
                        this.arr.push(i + 1);
                        this.arr1.push(i + 1);
                    }
                }
                this.sort();
            },

            sort() {
                this.arr.sort((a, b) => {
                    if (this.arr.toString() == this.arr1.toString()) {
                        this.arr.sort();
                    } else {
                        return Math.random() - 0.5;
                    }

                })
            },

            move(item, index) {
                if (!this.on) {
                    this.on = true;
                    this.timer = setInterval(() => {
                        this.n++;
                    }, 1000);
                }

                var currentIndex = index;
                var emptyIndex;
                this.arr.forEach((element, index) => {
                    if (element == '') {
                        emptyIndex = index;
                    }
                });
                if (this.iscanmove(currentIndex, emptyIndex)) {
                    this.$set(this.arr, currentIndex, '');
                    this.$set(this.arr, emptyIndex, item);
                }
            },
            iscanmove(currentIndex, emptyIndex) {
                if (emptyIndex % this.len == 0) {
                    return (emptyIndex + this.len == currentIndex || emptyIndex - this.len == currentIndex || emptyIndex + 1 == currentIndex)
                } else if ((emptyIndex + 1) % this.len == 0) {
                    return (emptyIndex + this.len == currentIndex || emptyIndex - this.len == currentIndex || emptyIndex - 1 == currentIndex)
                } else {
                    return (emptyIndex + this.len == currentIndex || emptyIndex - this.len == currentIndex || emptyIndex + 1 == currentIndex || emptyIndex - 1 == currentIndex)
                }
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .clearfix:after,
    .clearfix:before {
        content: '';
        display: table;
    }

    .clearfix:after {
        clear: both;
    }

    .clearfix {
        zoom: 1;
    }
    #box {
        min-width: 300px;
        min-height: 300px;
        border: 1px solid #ccc;
        margin: 100px auto;
        user-select: none;
    }
    
    #box>div {
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 100px;
        vertical-align: top;
        box-sizing: border-box;
        float: left;
    }
    
    .change {
        text-align: center;
        padding-top: 50px;
    }
    
    .change button {
        width: 60px;
        height: 30px;
        margin: 0 5px;
    }
</style>
