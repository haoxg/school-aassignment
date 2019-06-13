<template>
	<div>
		<button class="btn" @click="san">3*3</button>
		<button class="btn" @click="si">4*4</button>
		<button class="btn" @click="wu">5*5</button>
		<div class="boxnum" :style="{width:100*n+'px',height:100*n+'px'}">
			<div v-for="item,index in arr" @click="move(item,index)">{{item}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [1, 2, 3, 4, 5, 6, 7, 8, ''],
				n: 3
			}

		},
		methods: {
			asd() {
				this.arr = [];
				for(var i = 0; i < this.n * this.n; i++) {
					this.arr.push(i + 1)
				}
				this.arr.sort(() => Math.random() - 0.5);
				this.arr.splice(this.arr.length - 1, 1, '')
			},
			si() {
				this.n = 4;
				this.asd()
			},
			san() {
				this.n = 3;
				this.asd()
			},
			wu() {
				this.n = 5;
				this.asd()
			},
			move(item, index) {
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
	.btn{width: 60px;height: 30px;background: #ccc;}
	.boxnum {
		margin: 0 auto;
		border: 1px solid red;
	}
	
	.boxnum div {
		width: 100px;
		height: 100px;
		float: left;
		text-align: center;
		line-height: 100px;
		border: red solid 1px;
		box-sizing: border-box;
	}
</style>