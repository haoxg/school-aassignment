//创建模板
var Home = {
	template: "#fff",
	data() {
		return {
			ahour: new Date().getHours() * 30,
			aminute: new Date().getMinutes() * 6,
			asecond: new Date().getSeconds() * 6
		}

	},
	created() {
		this.dida()
	},
	methods: {
		dida() {
			setInterval(() => {
				this.ahour = new Date().getHours() * 30
				this.aminute = new Date().getMinutes() * 6
				this.asecond = new Date().getSeconds() * 6
			}, 1000)
		}
	}

};
var News = {
	template: "#paging",
	data() {
		return {
			arr: 100,
			xh: 10,
			n: 1,
			yi: 1,
			//show: false
		}
	},
	computed: {
		show() {
			if(this.n < this.arr - Math.floor(this.xh / 2) + 1) {
				return true
			}
		},
		firstPage() {
			if(this.n <= this.xh / 2) {
				return 1
			} else if(this.n > this.arr - Math.floor(this.xh / 2)) {
				return(this.arr - this.xh) + 1
			} else {
				return this.n - Math.floor(this.xh / 2)
			}
		},

	},
	methods: {
		aClik(index) {
			this.n = this.firstPage + index
		},

		xia() {
			this.n >= this.arr ? this.n == this.arr : this.n++;
		},
		shang() {
			this.n > 1 ? this.n-- : this.n
		},
		one() {
			this.n = this.yi
		},
		wei() {
			this.n = this.arr
		}
	}
};

var Stars = {
	template: "#tare",
	data() {
		return {
			currentindex: 0,
			activeindex: 0,
		}
	},
	methods: {
		click(i) {
			this.currentindex = i;
		},
		hover(i) {
			this.activeindex = i
		},
		out(i) {
			this.activeindex = 0
		}

	},
}

