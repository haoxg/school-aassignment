<template>
	<div id="app">
		<header>
			<div class="logo" style="color: white;">L-admin v2.0</div>
		</header>
		<div class="left">
			<div class="lcontent">
				<div v-for="(i,$index) in arr" class="item">
					<p @click.stop='btn($event,$index)'>{{i.title}}</p>
					<div v-for="j,index in i.arr" @click="addtabs(j)">
						<router-link :to="j.urls" id="link" :key="index">{{j.title}}</router-link>
					</div>

				</div>
			</div>
		</div>
		<div class="right">
			<div class="pagtab">
				<ul>
					<li class="apgtab_li" v-for="i,index in tabs">
						<router-link :to="i.urls">{{i.title}}<i @click.stop.prevent="rmtabs(index)">x</i></router-link>
					</li>
				</ul>
			</div>
			<div>
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
						urls: '/zhongbiao'
					}, {
						title: '分页器',
						urls: '/fyq'
					}, {
						title: '华容道',
						urls: '/hrd'
					}, {
						title: '穿梭框',
						urls: '/csk'
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
			}
		}
	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	body,
	html {
		height: 100%;
	}
	
	#box {
		width: 100%;
		overflow: hidden;
		height: 100%;
		color: white;
	}
	
	.left {
		width: 220px;
		height: 100%;
		float: left;
		background: black;
	}
	
	.lcontent {
		height: 100%;
		overflow: hidden;
	}
	
	.right {
		width: calc(100% - 220px);
		height: 1000px;
		background-color: #000;
		float: left;
		padding: 30px 0;
	}
	.pagtab a{
		float: left;
		font-size: 20px;
		margin-right: 20px;
		color: purple;
	}
	.item {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		transition: all .5s;
		overflow: hidden;
		background: deeppink;
	}
	
	.item div {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	
	.item a {
		color: greenyellow;
	}
	
	header {
		width: 100%;
		height: 60px;
		background: black;
	}
	
	.logo {
		line-height: 60px;
		float: left;
		font-size: 30px;
		padding-left: 50px;
	}
	
	#link {
		width: 100%;
		display: inline-block;
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