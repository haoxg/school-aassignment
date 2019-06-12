<template>
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
</template>

<script>
export default {
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
}
</script>

<style>
    /*  以下是分页器 */
    .pageBreak ul li{
        float: left;
        padding: 5px 10px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #000;
        user-select: none;
        cursor: pointer;
    }
    .pageBreak span{
        padding: 5px 10px;
        text-align: center;
        user-select: none;
        cursor: pointer;
    }
    .pageBreak .active{
        background-color: orange;
    }
    .pageBreak div{
        margin-top: 10px;
        margin-left: 10px;
        float: left;
    }
</style>
