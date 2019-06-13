<template>
	<div id="app">
		<header>
			<div class="logo">
				LOGO
			</div>
			<div class="gl" @click="gl" id="gl">管理</div>
		</header>
		<div class="left" id="zuo">
			<div class="lcontent">
				<div v-for="(i,$index) in arr" class="item">
					<p @click.stop='btn($event,$index)'>{{i.title}}</p>
					<div v-for="j,index in i.arr" @click="addtabs(j)">
						<router-link :to="j.urls" id="link" :key="index">{{j.title}}</router-link>
					</div>

				</div>
			</div>
		</div>
		<div class="right" id="you">
			<div class="pagtab">
				<ul>
					<li class="apgtab_li" v-for="i,index in tabs">
						<router-link :to="i.urls">
							{{i.title}}<i @click.stop.prevent="rmtabs(index)">x</i>
						</router-link>
					</li>
				</ul>
			</div>
			<div>
				<!--<times></times>-->
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				cc: '',
				types: true,

				arr: [{
					title: 'VUE',
					arr: [{
						title: '钟表',
						urls: '/'
					}, {
						title: '分页器',
						urls: '/fyq'
					}, {
						title: '华容道',
						urls: '/num'
					}, {
						title: '转换',
						urls: '/zhuanhuan'
					}]
				}],
				tabs: []
			}
		},
		methods: {
			btn(e, a) {
				this.types = !this.types;
				if(this.types == true) {
					e.srcElement.parentElement.style.height = '50px';
				} else {
					e.srcElement.parentElement.style.height = (this.arr[a].arr.length + 1) * 50 + 'px'
				}
			},
			rmtabs(index) {
				this.tabs.splice(index, 1)
			},
			addtabs(item) {
				var addtype = true;
				this.tabs.forEach(element => {
					if(element.title == item.title) {
						addtype = false;
					}
				});
				if(addtype) {
					this.tabs.push(item);
				}
				console.log(this.tabs)
			},
			gl(){
				var a = true
				gl.onclick = function(){
					if(a){
						zuo.style.width = '0px'
						you.style.width = '100%'
					}else{
						zuo.style.width = '220px'
						you.style.width = 'calc(100% - 220px)'
						a = !a
					}
				}
			}

		}
	}
	
	
	
	
</script>

<style>
	body {
		position: relative;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		width: 100%;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		position: absolute;
		top: 0;
		color: #fff;
	}
	
	body,
	html {
		height: 100%;
	}
	
	.pagtab {
		width: 100%;
		height: 30px;
		overflow: hidden;
		background: #ccc;
	}
	
	.apgtab_li {
		width: 80px;
		height: 30px;
		background: #222;
		float: left;
		color: #fff;
		list-style: none;
		border-right:1px solid springgreen ;
	}
	
	.pagtab a {
		color: #fff;
		font-size: 16px;
		line-height: 30px;
		text-decoration: none;
	}
	
	.apgtab_li i {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		background: #red;
		text-align: center;
		line-height: 20px;
		float: right;
		margin-top: 5px;
		border-radius: 50%;
	}
	
	.apgtab_li i:hover {
		background: #000;
		color: #FFF;
	}
	
	#box {
		overflow: hidden;
		width: 100%;
		height: 100%;
		color: #ccc;
	}
	
	.left {
		width: 220px;
		height: 700px;
		float: left;
		background: #111111;
	}
	
	.lcontent {
		height: 700px;
		overflow: hidden;
	}
	
	.right {
		width:calc(100% - 220px);
		height: 700px;
		background-color: #121212;
		float: left;
		position: relative;
	}
	
	.item {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		transition: all .5s;
		overflow: hidden;
		background-color: #111111;
		border-bottom: 1px solid #ccc;
	}
	
	.item div {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-decoration: none;
		background-color: #222324;
	}
	.item a{
		text-decoration: none;
		color: #ccc;
	}
	
	header {
		width: 100%;
		height: 60px;
		background: #222324;
	}
	
	.gl {
		width: 100px;
		height: 60px;
		line-height: 60px;
		float: left;
	}
	
	.logo {
		width: 80px;
		height: 60px;
		line-height: 60px;
		float: left;
		margin-left: 160px;
	}
</style>