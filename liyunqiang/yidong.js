var select = {
    template: '#select',
    data() {
        return {
            indexl: 0, //左导航下标
            arr: [{
                name: '牛奶面包',
                con: [{
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }]
            }, {
                name: '休闲',
                con: [{
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559237502578&di=5aa84e25e6056eabd8807f6034401f99&imgtype=0&src=http%3A%2F%2Fpic33.nipic.com%2F20131011%2F2531170_205042654000_2.jpg ",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559237663429&di=ac9823cad1f5b9d0bcc48a9994cbc9be&imgtype=0&src=http%3A%2F%2Fwww.coreldrawchina.com%2FWebSource%2Fcoreldraw%2Fnews%2Fold%2Fuploads%2Fimages%2Fsupport3%2Fzhaopian-tubiao-7.png ",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }]
            }, {
                name: '休闲零食',
                con: [{
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }]
            }, {
                name: '数码电器',
                con: [{
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }]
            }, {
                name: '运动户外',
                con: [{
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }, {
                    img: "http://img4.imgtn.bdimg.com/it/u=4253815709,2032032765&fm=26&gp=0.jpg",
                    text: 'e/盒新鲜特价盒新鲜特价盒新鲜特价',
                    jiage: '12'
                }]
            }]
        }
    },
    methods: {
        showItem(index) {
            this.indexl = index;
            console.log(index)
        },
        add(item) {
            if (item.num) {
                item.num++
            } else {
                Vue.set(item, 'num', 1)
            }
        },
        del(item) {
            if (item.num) {
                if (item.num == 0) return
                item.num--
            }
        },
    },
    computed: {
        select() {
            var arr1 = []
            this.arr.forEach(element => {
                if (element.con && element.con.length > 0) {
                    element.con.forEach(el => {
                        if (el.num) {
                            arr1.push(el)
                        }
                    })
                }
            });
            return arr1
        },
        total() {
            var n = 0
            this.select.forEach(element => {
                n += element.jiage * element.num
                console.log(element.num * element.jiage)
            })
            return n.toFixed(2)
        }
    },
    watch: {
        select(v1) {
            console.log(v1)
        }
    },
}
var routes = [{
    path: '/',
    component: select,
}, {
    path: '/jiesuan',
    name: 'jiesuan',
}]
var router = new VueRouter({
    routes
})
var vm = new Vue({
    router,
    el: '#app',
})