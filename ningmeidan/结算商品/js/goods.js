var Goods = {
    template: '#goodsCont',
    data() {
        return {
            currentIndex: '0',
            navList: [{
                    title: '热销新品',
                    goodsList: [{
                        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1817699105,3731418859&fm=26&gp=0.jpg',
                        infor: '111新鲜青柠500g/盒新鲜待价新鲜特价新鲜特价',
                        price: '20.8'
                    }, {
                        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=302546753,428540576&fm=26&gp=0.jpg',
                        infor: '111新鲜青柠500g/盒新鲜待价新鲜特价新鲜特价',
                        price: '10.8'
                    }, {
                        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1817699105,3731418859&fm=26&gp=0.jpg',
                        infor: '111新鲜青柠500g/盒新鲜待价新鲜特价新鲜特价',
                        price: '12.8'
                    }]

                }, {
                    title: '优选水果',
                    goodsList: [{
                        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1817699105,3731418859&fm=26&gp=0.jpg',
                        infor: '111新鲜青柠500g/盒新鲜待价新鲜特价新鲜特价',
                        price: '15.8'
                    }, {
                        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=302546753,428540576&fm=26&gp=0.jpg',
                        infor: '111新鲜青柠500g/盒新鲜待价新鲜特价新鲜特价',
                        price: '14.8'
                    }, {
                        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1817699105,3731418859&fm=26&gp=0.jpg',
                        infor: '111新鲜青柠500g/盒新鲜待价新鲜特价新鲜特价',
                        price: '19.8'
                    }, {
                        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=302546753,428540576&fm=26&gp=0.jpg',
                        infor: '111新鲜青柠500g/盒新鲜待价新鲜特价新鲜特价',
                        price: '13.8'
                    }]

                },

            ]
        }

    },
    mounted() {
        this.choosed(0);
    },
    computed: {
        selectList() {
            var arr = [];
            this.navList.forEach(element => {
                if (element.goodsList && element.goodsList.length > 0) {
                    element.goodsList.forEach(el => {
                        if (el.num) {
                            arr.push(el);
                        }
                    })
                }

            });
            return arr;


        },
        total() {
            var n = 0;
            this.selectList.forEach(el => {
                n += el.price * el.num;
            })
            return n.toFixed(2);
        }
    },
    methods: {
        choosed(index) {
            this.currentIndex = index;
        },
        minus(o) {
            if (o.num) {
                if (o.num == 0) return;
                o.num--;
            }
        },
        plus(o) {
            if (o.num) {
                o.num++;

            } else {
                this.$set(o, 'num', 1);
            }
        }
    }
}