var vm = new Vue({
    el: '#app',
    data: {
        arr: data,
        isShow: false,
        // logo2:'&#xe644;',
        subscript_list:999999
    },
    methods: {
        hide() {
            this.isShow = !this.isShow
        },
        list(index){
            if(this.subscript_list==index){
                this.subscript_list=9999999
            }else{
                this.subscript_list=index
            }
            
        }
    }
})