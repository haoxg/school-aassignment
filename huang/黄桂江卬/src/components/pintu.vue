<template>
     <div>
      <input type="text" v-model="n" @input="don(n)">
        <p>{{n}}</p>
        <button @click="don(4)">4*4</button>
        <button @click="don(5)">5*5</button>
        <button @click="don(6)">6*6</button>
        <button @click="don(7)">7*7</button>
        <div class="box" :style="{ width: 100*n+'px', height: 100*n+ 'px' }">
            <div v-for="item,index in arr" @click="move(item,index)">{{item}}</div>
        </div>  </div>
</template>
<script>
export default {

            data() {
                return{
                    arr: [3, 5, 6, 8, 7, 1, 4, 2, ''],
                list1: [1, 2, 3, 4, 5, 6, 7, 8, ''],
                n: 3
                }     
                    },
            methods: {
                don(aa) {
                    this.arr = [];
                    for (var i = 1; i < aa * aa; i++) {
                        this.arr.push(i);
                    }
                    this.arr.push('');
                    this.n = Math.sqrt(this.arr.length)
                },
                move(item, index) {

                    var vacancy;
                    var cindex = index;
                    this.arr.forEach(function(item, index) {
                        if (item == '') {
                            vacancy = index;
                        }
                    });

                    if (this.coom(vacancy, cindex)) {
                        this.$set(this.arr, index, '')
                        this.$set(this.arr, vacancy, item)
                    }
                    if (this.arr.toString() == this.list1.toString()) {
                        alert('OK')
                        console.log(11)
                    }
                },
                coom(vacancy, cindex) {
                    if (cindex % this.n == 0) {
                        return cindex + 1 == vacancy || cindex + this.n == vacancy || cindex - this.n == vacancy
                    } else if (cindex + 1 % this.n == 0) {
                        return truecindex - 1 == vacancy || cindex + this.n == vacancy || cindex - this.n == vacancy
                    } else {
                        return cindex + 1 == vacancy || cindex - 1 == vacancy || cindex + this.n == vacancy || cindex - this.n == vacancy
                    }
                }
            }
}
</script>
<style scope>
      .box {
            height: 300px;
            border: 1px solid black;
        }
        
        .box>div {
            width: 100px;
            height: 100px;
            border: 1px solid black;
            box-sizing: border-box;
            text-align: center;
            line-height: 100px;
            display: inline-block;
            vertical-align: top;
        }
</style>