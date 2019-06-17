<template>
	<div id="app">
		<p class="title">{{arr.data.data.city}}</p>

		<div class="hhh">{{arr.data.data.wendu}}°</div>
		<div class="atsp">
			<p>{{arr.data.data.ganmao}}</p>
		</div>

		<div class="wl">
			<ul class="wl_ul">
				<li class="wl_ul_li" v-for="i in arr.data.data.forecast">
					<p>{{i.date}}</p>
					<p>{{i.type}}</p>
					<p>{{i.high}}</p>
					<p>{{i.low}}</p>
					<p>{{i.fengxiang}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				arr:[],
				name:this.$route.params.city.district,
			}
		},
			created() {
				
			var getUrl='https://www.apiopen.top/weatherApi?city='+this.name+''
        	this.$http.get(getUrl).then((response) => {
            this.arr=response
            console.log(getUrl)
            console.log(this.$route.params.city.district)
          })
			}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	html,
	body {
		height: 100%;
	}
	
	#app {
		position: relative;
		height: 100%;
		background: -webkit-linear-gradient(#70a2ea, white);
	}
	
	.title {
		text-align: center;
		position: absolute;
		top: 0.666rem;
		left: 44%;
		font-size: 30px;
	}
	
	.hhh {
		width: 100%;
		margin-left: -50%;
		text-align: right;
		position: absolute;
		top: 2.666rem;
		left: 50%;
		font-size: 128px;
		text-align: center;
		font-weight: 100;
	}
	
	.atsp {
		height: 1.333rem;
		position: absolute;
		top: 12.2rem;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.atsp p {
		text-align: center;
	}
	
	
	.wl {
		width: 100%;
		position: absolute;
		top: 16rem;
	}
	
	.wl_ul {
		width: 80%;
		padding: 0 10%;
	}
	
	.wl_ul_li {
		width: 100%;
		height: 3rem;
		float: left;
		background: #ddebff;
		border-bottom: 1px solid #ccc;
		text-align: center;
	}
	
	.wl_ul_li>p {
		float: left;
		text-align: center;
		margin: 0 .1rem;
		line-height: 3rem;
	}
</style>