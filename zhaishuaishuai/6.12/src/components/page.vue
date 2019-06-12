<!--  -->
<template>
  <div class="peg">
    <div class="fl">
      <span @click="btn1">首页</span>
      <span @click="inup">上一页</span>
    </div>
    <div class="fl">
      <span v-show="qqq">1</span>
      <span v-show="qqq">...</span>
      <span v-for="(i,o) in maxSize" @click="color(abc+o)" :class="{bg:abc+o==bgclass}" :key="o">{{abc+o}}</span>
      <span v-show="aaa">...</span>
      <span v-show="aaa">{{list}}</span>
    </div>
    <div class="fl">
      <span @click="up">下一页</span>
      <span @click="btn10">尾页</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lee: 9,
      list: 100,
      bgclass: 55
    };
  },
  computed: {
    qqq() {
      if (this.bgclass - Math.floor(this.lee / 2) > 1) {
        return true;
      }
    },
    aaa() {
      if (this.bgclass - Math.floor(this.lee / 2) < this.list - this.lee) {
        return true;
      }
    },
    maxSize() {
      return this.list > this.lee ? this.lee : this.list;
    },
    abc() {
      if (this.bgclass <= Math.floor(this.lee / 2)) {
        return 1;
      } else if (this.bgclass >= this.list - Math.floor(this.lee / 2)) {
        return this.list - this.lee + 1;
      } else {
        return this.bgclass - Math.floor(this.lee / 2);
      }
    }
  },
  methods: {
    up() {
      this.bgclass = this.bgclass < this.list ? ++this.bgclass : this.list;
    },
    inup() {
      this.bgclass = this.bgclass > 1 ? --this.bgclass : 1;
    },
    btn1() {
      this.bgclass = 1;
    },
    btn10() {
      this.bgclass = this.list;
    },
    color(i) {
      this.bgclass = i;
    }
  }
};
</script>
<style scoped>
.peg .fl span {
  cursor: pointer;
  display: inline-block;
  border: 1px solid;
  padding: 5px;
  margin: 3px;
  user-select: none;
  color: #000;
}

.peg .bg {
  background: coral;
}
</style>