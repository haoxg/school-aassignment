<template>
	<div class="hhh">
		<button class="fyq_button" @click="sy">首页</button>
		<button class="fyq_button" @click="syy">上一页</button>
		<ul class="fyq_ul">
			<li class="fyq_ul_li" v-show="left">...</li>
			<li class="fyq_ul_li" v-for="i,index in maxPageSize" @click="dq(first+index)" :class="{active:first+index==n}">{{first+index}}</li>
			<li class="fyq_ul_li" v-show="right">...</li>
			<li class="fyq_ul_li">共{{ages}}页</li>
		</ul>
		<button class="fyq_button" @click="xy">下一页</button>
		<button class="fyq_button" @click="wy">尾页</button>
	</div>
</template>

<script>
	export default {
		name: "hhh",
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

		}
	}
</script>

<style>
	html,body{
		color: white;
	}
	.fyq_button {
		width: 60px;
		height: 60px;
		float: left;
		background: #409eff;
		border: solid 1px #000;
		margin-left: 5px;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		color: inherit;
		text-align: center;
		cursor: default;
		text-rendering: auto;
		letter-spacing: normal;
		word-spacing: normal;
		text-transform: none;
		text-indent: 0px;
		text-shadow: none;
		font: 400 13.3333px Arial;
		-webkit-writing-mode: horizontal-tb !important;
		outline: none;
		border-radius: 5px;
	}
	
	.fyq_ul {
		float: left;
		overflow: hidden;
		height: 60px;
	}
	
	.fyq_ul_li {
		float: left;
		height: 60px;
		border: 1px solid #000;
		padding: 15px;
		margin-left: 20px;
		-webkit-user-select: none;
		box-sizing: border-box;
		border-radius: 5px;
	}
	
	.fyq_ul_li.active {
		height: 60px;
		background: blue;
	}
	.hhh{
		margin-top: 100px;
	}
</style>