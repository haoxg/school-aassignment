var paginationBox = Vue.extend({
    template:`
        <div class='pagination'>
            <ul>
                <li @click='first'>首页</li>
                <li @click='next'>下一页</li>
                <li>{{1}}</li>
                <li v-show="before">...</li>
                <li @click='jump(firstPage+index)' v-for='item,index in maxpageSize' :class="{active:firstPage+index==currentPage}">{{firstPage+index}}</li>
                <li v-show="after">...</li>
                <li>{{pages}}</li>
                <li @click='prev'>上一页</li>
                <li @click='last'>尾页</li>
            </ul>
        </div>   
    `,
    data(){
        return {
            pageSize:9,
            currentPage:5,//当前的页数
            pages:100,//总共的页数
        }
    },
    computed:{
        before(){
            if(this.pages>this.pageSize){
                if(this.currentPage>Math.floor(this.pageSize/2)+1){
                   return true;
                }else{
                   return false;
                }
            }
        },
        after(){
            if(this.pages>this.pageSize){
                if(this.currentPage<this.pages-Math.floor(this.pageSize/2)-1){
                   return true;
                }else{
                   return false;
                }
            }
        },
        maxpageSize(){
            return this.pages<this.pageSize?this.pages:this.pageSize;
        },
        firstPage(){
            if(this.currentPage<=Math.floor(this.pageSize/2)){
                return 1;
            }else if(this.currentPage>=this.pages-Math.floor(this.pageSize/2)){
                return this.pages-this.pageSize+1;
            }
            else{
                return this.currentPage-Math.floor(this.pageSize/2);
            }
           
        }
    },
    methods: {
        first(){
            this.currentPage=1;
        },
        last(){
            this.currentPage=this.pages;
        },
        prev(){
            if(this.currentPage<=1) return;
            this.currentPage--;
           
        },
        next(){
            if(this.currentPage>=this.pages) return;
            this.currentPage++;
            
        },
        jump(page){
            this.currentPage=page;
        },
    },
})