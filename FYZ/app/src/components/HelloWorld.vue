<template>
  <div>
				<header>
					<div class="logo">
						LOGO
					</div>
					<div class="gl">管理</div>
				</header>
				<div class="left">
					<div class="lcontent">
						<div v-for="(i,$index) in arr" class="item">
							<p @click.stop='btn($event,$index)'>{{i.title}}</p>
							<div v-for="j,index in i.arr" @click="addtabs(j)">
								<router-link :to="j.urls" id="link":key="index">{{j.title}}</router-link>
							</div>
							
						</div>
					</div>
				</div>
				<div class="right">
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
