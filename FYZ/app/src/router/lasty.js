Vue.component('server', {
			template: `<div>
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
			</div>`,
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
						}]
					}],
					tabs:[]
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
				rmtabs(index){
					this.tabs.splice(index,1)
				},
				addtabs(item){
					var addtype = true;
                    this.tabs.forEach(element => {
                        if (element.title == item.title) {
                            addtype = false;
                        }
                    });
                    if (addtype) {
                        this.tabs.push(item);
                    }
					console.log(this.tabs)
				}
			}
		})