<!--  -->
<template>
  <ul class="left">
    <li :class="{br:o==index}" v-for="(i,o) in arr" :key="o">
      <div @click="lie(o)">
        <i class="iconfont" v-html="i.icon"></i>
        {{i.type}}
        <i class="iconfont fr">&#xe644;</i>
      </div>
      <ol class="hide" :class='{"show":o==index}'>
        <li v-for="(i,o) in a" @click="open(i)" :key="o">
          <i class="iconfont">&#xe644;</i>
          {{i.title}}
        </li>
      </ol>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          type: "主页",
          icon: "&#xe61e;",
          lists: [
            {
              title: "钟表",
              url: "/horologe"
            },
            {
              title: "分页",
              url: "/page"
            },
            {
              title: "主页",
              url: "/num"
            }
          ]
        }
      ],
      index: 9,
      a: [],
    };
  },
  methods: {
    lie(i) {
        this.a=[]
        for (var q = 0; q < this.arr[i].lists.length; q++) {
          this.a.push(this.arr[i].lists[q]);
        }

      if (this.index == i) {
        this.index = 9999999;
      } else {
        this.index = i;
      }
    },
    open(i) {
      this.page = i;
      this.$emit("data-page", i);
    }
  }
};
</script>
<style scoped>
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.hide {
  display: none;
}
a {
  color: aliceblue;
}
.show {
  display: block;
}

.fl {
  float: left;
}

.fr {
  float: right;
}
.left {
  line-height: 55px;
  background-color: rgb(17, 17, 17);
  max-width: 220px;
  min-width: 220px;
  width: 220px;
  transition: 0.3s;
  position: absolute;
  top: 55px;
  bottom: 0px;
  left: 0;
}
.br {
  border-left: aquamarine 2px solid;
}
</style>