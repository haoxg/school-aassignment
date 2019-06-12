var pageBreak=Vue.extend({
    template:`
        <div class="pageBreak">
            <ul>
                <li @click="first">首页</li>
                <li @click="prev"><上一页</li>
                <li>{{1}}</li>
                <li v-show="pagePrev">...</li>
                <li @click="jump(firstPage+index)" v-for="i,index in maxPageSize" :class="{active:firstPage+index==currentPage}">{{firstPage+index}}</li>
                <li v-show="pageNext">...</li>
                <li>{{pages}}</li>
                <li @click="next">下一页></li>
                <li @click="last">尾页</li>
            </ul>
            <div>第<span>{{currentPage}}页</span>/共100页</div>
        </div>
    `,
    data(){
        return {
            pageSize:9,
            pages:100,
            currentPage:1,
        }
    },
    computed: {
        pagePrev(){
            if(this.pages>this.pageSize){
                if(this.currentPage>Math.floor(this.pageSize/2)+1){
                    return true;
                }else{
                    return false;
                }
            }
        },
        pageNext(){
            if(this.pages>this.pageSize){
                if(this.currentPage<this.pages-Math.floor(this.pageSize/2)-1){
                    return true;
                }else{
                    return false;
                }
            }
        },
        maxPageSize(){
            return this.pages<this.pageSize?this.pages:this.pageSize;
        },
        firstPage(){
            if(this.currentPage<=Math.floor(this.pageSize/2)){
                return 1;
            }else if(this.currentPage>=this.pages-Math.floor(this.pageSize/2)){
                return this.pages-this.pageSize+1;
            }else{
                return this.currentPage-Math.floor(this.pageSize/2);
            }
        }
    },
    methods: {
        first(){
            this.currentPage=1
        },
        last(){
            this.currentPage=this.pages;
        },
        prev(){
            if(this.currentPage<=1) return
            this.currentPage--;
        },
        next(){
            if(this.currentPage>=this.pages) return
            this.currentPage++;
        },
        jump(page){
            this.currentPage=page;
        },
    },
})