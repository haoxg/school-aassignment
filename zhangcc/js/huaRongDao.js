var huaRongDao=Vue.extend({
    template:`
        <div class="huaRongDao">
            <button v-for="i in 4" @click="cut(i+2)">{{(i+2)+'*'+(i+2)}}</button>
            {{timer}}
            <div class="box" :style="{width:len*100+'px',height:len*100+'px'}">
                <div v-for="item,i in arr1" @click="move(item,i)">{{item}}</div>
            </div>
        </div>
    `,
    data(){
        return {
            arr1:[],
            arr2:[],
            len:3,
            timer:0,
            n:0,
        }
    },
    methods:{
        move(item,i){
            if(this.n==0){
                timer=setInterval(()=>{
                    this.timer++;
                },1000)
            }
            this.n++;
            var index1;
            this.arr1.forEach((element,index) => {
                if(element==''){
                    index1=index;
                }
            });
            if(this.ismove(i,index1)){
                Vue.set(this.arr1,i,'');
                Vue.set(this.arr1,index1,item);
                if(this.arr1.join()==this.arr2.join()){
                    alert('用时'+this.timer+'秒')
                    clearInterval(timer)
                    this.cut(this.len);
                }
            }
        },
        ismove(i,index1){
            if(i%this.len==0){
                return (i+1==index1 || i-this.len==index1 || i+this.len==index1);
            }else if((i+1)%this.len==0){
                return (i-1==index1 || i-this.len==index1 || i+this.len==index1);
            }else{
                return (i+1==index1 || i-1==index1 || i-this.len==index1 || i+this.len==index1)
            }
        },
        cut(i){
            clearInterval(timer);
            this.n=0;
            this.timer=0;
            this.len=i;
            this.arr1=[];
            this.arr2=[];
            for(var i=0;i<(this.len*this.len);i++){
                if(i==(this.len*this.len)-1){
                    this.arr1.push('') 
                    this.arr2.push('') 
                }else{
                    this.arr1.push(i+1)
                    this.arr2.push(i+1) 
                }
            }
            this.arr1.sort(function(){ return 0.5 - Math.random()});
        }
    }
})