<template>
	<div class="box">
		<div class="miao" :style="{transform:'rotate('+s+'deg)'}"></div>
		<div class="fen" :style="{transform:'rotate('+m+'deg)'}"></div>
		<div class="shi" :style="{transform:'rotate('+h+'deg)'}"></div>
		<div class="sssss"></div>
		<ul class="time-ul">
			<li class="time_ul_li" v-for="i in 12" :style="{transform:'rotate('+i*30+'deg)'}">
				{{i}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "box",
		data() {
			return {
				s: new Date().getSeconds() * 6,
				m: new Date().getMinutes() * 6,
				h: new Date().getHours() * 30,
			}
		},
		created() {
			this.time()
		},
		methods: {
			time() {
				setInterval(() => {
					this.s = new Date().getSeconds() * 6;
					this.m = new Date().getMinutes() * 6;
					this.h = new Date().getHours() * 30;
				}, 1000)
			}
		}
	}
</script>

<style>
	.box {
		width: 300px;
		position: relative;
		height: 300px;
		border: 2px solid #000;
		border-radius: 50%;
		margin: 100px auto;
	}
	
	.miao {
		width: 6px;
		height: 140px;
		background: red;
		position: absolute;
		bottom: 50%;
		left: 50%;
		margin-left: -3px;
		transform-origin: center bottom;
	}
	
	.fen {
		width: 6px;
		height: 120px;
		background: blue;
		position: absolute;
		bottom: 50%;
		left: 50%;
		margin-left: -3px;
		transform-origin: center bottom;
	}
	
	.shi {
		width: 6px;
		height: 100px;
		background: #ccc;
		position: absolute;
		bottom: 50%;
		left: 50%;
		margin-left: -3px;
		transform-origin: center bottom;
	}
	
	.sssss {
		width: 10px;
		height: 10px;
		background: pink;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -5px;
		margin-left: -5px;
	}
	
	.time_ul_li {
		list-style: none;
		position: absolute;
		height: 98%;
		left: 47%;
		padding: 1%;
	}
</style>