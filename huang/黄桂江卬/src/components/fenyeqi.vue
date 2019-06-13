<template>
    <div>
            <span>总页{{sice}}</span>
<span @click="boom">首页</span>
<span @click="bom">上一页</span>
<span>{{0}}</span>
<span v-show="stop">...</span>
<div @click="move(firterPage+index)" class="abca" v-for="itme,index in  maxPageSize" :class="{actived:firterPage+index==currentPage }">{{firterPage+index}}</div> <span v-show="stop1">...</span><span>{{sice+1}}</span>
<span @click="bot">下一页</span>
<span @click="boot">尾页</span>
<input type="text" @keyup.enter="a"></div>
</template>
<script>
export default {
      data() {
        return {
            currentPage: 5,
            num: 9,
            sice: 30,
        }
    },
    computed: {
        stop() {
            console.log(this.currentPage)
            if (this.currentPage > Math.floor(this.num / 2) + 1) {
                return true
            }
        },
        stop1() {
            if (this.currentPage < this.sice - Math.floor(this.num / 2) + 1) {
                return true
            }
        },
        maxPageSize() {
            return this.num < this.sice ? this.num : this.sice;
        },
        firterPage() {
            if (this.currentPage <= Math.floor(this.num / 2)) {
                return 1
            } else if (this.currentPage >= this.sice - Math.floor(this.num / 2)) {
                return this.sice - this.num + 1
            } else {
                return this.currentPage - Math.floor(this.num / 2)
            }
        }
    },
    methods: {
        a() {
            console.log(1)
        },
        move(itme) {
            this.currentPage = itme
        },
        bot() {
            this.currentPage++;
            if (this.currentPage >= this.sice) {
                this.currentPage = this.sice
            }
            console.log(this.currentPage)
        },
        bom() {
            this.currentPage--;
            if (this.currentPage <= 1) {
                this.currentPage = 1
            }
            console.log(this.currentPage)
        },
        boom() {
            console.log(44)
            this.currentPage = 1;
        },
        boot() {
            this.currentPage = this.sice;
        }
    }
}
</script>
<style scope>
     .abca {
            display: inline-block;
            width: 20px;
            height: 20px;
            user-select: none;
            text-align: center;
        }
        .actived {
            background: red;
            
        }
</style>
