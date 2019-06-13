<template>
	<div class="box1">
		<button class="fyq_button" @click="sy">首页</button>
		<button class="fyq_button" @click="syy">上一页</button>
		<ul class="fyq_ul">
			<li v-show="left">...</li>
			<li v-for="i,index in maxPageSize" @click="dq(first+index)" :class="{active:first+index==n}">{{first+index}}</li>
			<li v-show="right">...</li>
			<li>共{{ages}}页</li>
		</ul>
		<button class="fyq_button" @click="xy">下一页</button>
		<button class="fyq_button" @click="wy">尾页</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				agesize: 9,
				n: 1,
				ages: 50,
				left: false,
				right: false,
			}
		},
		computed: {

			maxPageSize() {
				return this.ages < this.agesize ? this.ages : this.agesize
			},
			first() {
				if(this.n >= Math.floor(this.agesize / 2)) {
					this.right = false
				} else {
					this.right = true
				}
				if(this.n >= Math.floor(this.agesize / 2 + 2)) {
					this.left = true
				} else {
					this.left = false
				}
				if(this.n <= Math.floor(this.agesize / 2)) {
					return 1;
				} else if(this.n >= this.ages - Math.floor(this.agesize / 2)) {
					return this.ages - this.agesize + 1
				} else {
					return this.n - Math.floor(this.agesize / 2)
				}
			}
		},
		methods: {
			sy() {
				this.n = 1
			},
			syy() {
				if(this.n <= 1) return
				this.n--
			},
			dq(age) {
				this.n = age
			},
			xy() {
				if(this.n >= this.ages) return
				this.n++
			},
			wy() {
				this.n = this.ages

			}

		},
		components: {}
	}

</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.fyq_button {
		float: left;
		line-height: 50px;
	}
	
	.fyq_ul {
		float: left;
		overflow: hidden;
		height: 53px;
	}
	
	.fyq_ul>li {
		border: 1px solid #000;
		padding: 15px;
		display: inline-block;
		-webkit-user-select: none;
	}
	
	.fyq_ul>li.active {
		background: blue;
	}
</style>