var vm = new Vue({
    el: '#app',
    data: {
        arr: data,
        isShow: false,
        logo:'&#xe600;',
        logo1:'&#xe600;',
        logo2:'&#xe644;',
        active:false,
        active1:false,
        subscript_list:999999
    },
    methods: {
        hide() {
            this.isShow = !this.isShow
        },
        look(){          
            this.logo='&#xe615;'
            this.active=true  
        },
        show(){
            this.logo='&#xe600;'
            this.active=false
        },
        look1(){
            this.active1=true
            this.logo1='&#xe615;'
        },
        show1(){
            this.active1=false
            this.logo1='&#xe600;'
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