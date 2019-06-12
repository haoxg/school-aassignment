<template>
	<div class="hdd">
		<button @click="two()" class="sxs">2*2</button>
		<button @click="three()" class="sxs">3*3</button>
		<button @click="four()" class="sxs">4*4</button>
		<button @click="five()" class="sxs">5*5</button>
		<div id="nicai" :style="{width:100*n+'px',height:100*n+'px'}">
			<div v-for="item,index in arr" @click="move(item,index)">{{item}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "hdd",
		data() {
			return {
				arr: [1, 2, 3, 4, 5, 6, 7, 8, ''],
				n: 3,
				bushu: 0
			}
		},
		methods: {
			two() {
				this.n = 2
				this.arr = []
				for(var i = 1; i < 2 * 2; i++) {
					this.arr.push(i)
				}
				this.arr.splice(this.arr.length, 1, '')
				this.arr.sort(() => Math.random() - 0.5);

			},
			three() {
				this.n = 3
				this.arr = []
				for(var i = 1; i < 3 * 3; i++) {
					this.arr.push(i)
				}
				this.arr.splice(this.arr.length, 1, '')
				this.arr.sort(() => Math.random() - 0.5);
			},
			four() {
				this.n = 4
				this.arr = []
				for(var i = 1; i < 4 * 4; i++) {
					this.arr.push(i)
				}
				this.arr.splice(this.arr.length, 1, '')
				this.arr.sort(() => Math.random() - 0.5);
			},
			five() {
				this.n = 5
				this.arr = []
				for(var i = 1; i < 5 * 5; i++) {
					this.arr.push(i)
				}
				this.arr.splice(this.arr.length, 1, '')
				this.arr.sort(() => Math.random() - 0.5);
			},
			move(item, index) {
				this.bushu++
					var currentIndex = index
				var kongge;
				this.arr.forEach((element, ppp) => {
					if(element == '') {
						kongge = ppp
					}
				})
				if(this.isCanMove(currentIndex, kongge)) {
					Vue.set(this.arr, index, '')
					Vue.set(this.arr, kongge, item)
				}
			},
			isCanMove(currentIndex, kongge) {
				if(currentIndex % this.n == 0) {
					return(currentIndex + 1 == kongge || currentIndex + this.n == kongge || currentIndex - this.n == kongge)
				} else if((currentIndex + 1) % this.n == 0) {
					return(currentIndex - 1 == kongge || currentIndex + this.n == kongge || currentIndex - this.n == kongge)
				} else {
					return(currentIndex - 1 == kongge || currentIndex + 1 == kongge || currentIndex + this.n == kongge || currentIndex - this.n == kongge)
				}
			}
		}
	}
</script>

<style>
	.hdd{
		margin-top: 80px;
	}
	#nicai {
		margin: 0 auto;
		border: 1px solid red;
	}
	
	#nicai div {
		width: 100px;
		height: 100px;
		float: left;
		text-align: center;
		line-height: 100px;
		border: red solid 1px;
		box-sizing: border-box;
	}
	
	.sxs {
		width: 60px;
		height: 60px;
		float: left;
		background: #f56c6c;
		border: solid 1px #000;
		margin-left: 5px;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		color: inherit;
		text-align: center;
		cursor: default;
		outline: none;
		text-rendering: auto;
		letter-spacing: normal;
		word-spacing: normal;
		text-transform: none;
		text-indent: 0px;
		text-shadow: none;
		font: 400 13.3333px Arial;
		border-radius: 5px;
		-webkit-writing-mode: horizontal-tb !important;
	}
</style>