<template>
		<div id="ap">
			<div class="lef">
				<ul id="list_l">
					<li v-for="i in arr">
						<input type="checkbox" name="" id="" value="" />{{i}}
					</li>
				</ul>
			</div>
			<button @click="l" class="t"><</button>
			<button @click="r" class="t">></button>
			<div class="righ">
				<ul id="list_r">
					<li v-for="i in arr1"><input type="checkbox" name="" id="" value="" />{{i}}</li>
				</ul>
			</div>
		</div>
</template>

<script>
	export default {
		name: "ap",
		data() {
			return {
				arr: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
				arr1: [],
				slarr: []
			}
		},
		methods: {
			r() {
				this.slarr = [];
				for(var i = 0; i < list_l.childNodes.length; i++) {
					if(list_l.childNodes[i].childNodes[0].checked) {
						this.slarr.push(list_l.childNodes[i].childNodes[1].data.trim())
						for(var j = 0; j < this.slarr.length; j++) {
							var idx = this.arr.indexOf(this.slarr[0])
							this.slarr.splice(j, 1)
							this.arr.splice(idx, 1)
						}
						this.arr1.push(list_l.childNodes[i].childNodes[1].data.trim())
						list_l.childNodes[i].childNodes[0].checked = false
					}
				}
			},
			l() {
				this.slarr = [];
				for(var i = 0; i < list_r.childNodes.length; i++) {
					if(list_r.childNodes[i].childNodes[0].checked) {
						this.slarr.push(list_l.childNodes[i].childNodes[1].data.trim())
						for(var j = 0; j < this.slarr.length; j++) {
							var idx = this.arr1.indexOf(this.slarr[0])
							this.slarr.splice(j, 1)
							this.arr1.splice(idx, 1)
						}
						this.arr.push(list_r.childNodes[i].childNodes[1].data.trim())
						list_r.childNodes[i].childNodes[0].checked = false
					}
				}
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	#ap{
		margin-top: 80px;
		margin-left: 200px;	
	}
	.lef {
		width: 150px;
		height: 200px;
		color: white;
		background: #000;
		overflow-y: scroll;
		float: left;
	}
	
	.t {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		float: left;
		border: none;
		outline: none;
		margin-top: 70px;
	}
	
	.righ {
		width: 150px;
		height: 200px;
		background: #ccc;
		overflow-y: scroll;
		float: left;
	}
</style>