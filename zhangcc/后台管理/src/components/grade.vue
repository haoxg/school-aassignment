<template>
    <div class="grade">
            <ul>
                <li v-for='i in max' :class="{active:currentIndex>=i}" @mouseover="add(i)" @mouseout="remove" @click="click"></li>
                <span>{{text}}</span>
            </ul>
        </div>
</template>

<script>
export default {
    props:{
        value:{
            type:Number,
            default:0,
        },
        max:{
            type:Number,
            default:5,
        },
        disabled:{
            type:Boolean,
            default:false,
        },
        texts:{
            type:Array,
            default:function(){
                return ['极差','失望','一般','不错','优秀','真棒']
            }
        }
    },
    computed: {
        text(){
            return this.texts[this.activeIndex-1];
        }
    },
    watch: {
        activeIndex(v1){
            this.$emit('input',v1);
        }
    },
    data(){
        return {
            activeIndex:this.value,
            currentIndex:this.value,
        }
    },
    methods: {
        add(i){
            if(this.disabled) return;
            this.currentIndex=i
        },
        remove(){
            if(this.disabled) return;
            this.currentIndex=this.activeIndex;
        },
        click(){
            if(this.disabled) return;
            this.activeIndex=this.currentIndex;
        }
    },
}
</script>

<style>
    .grade ul{width:304px;height:30px;line-height:30px;margin: 30px auto;}
    .grade ul li{
            float: left;
            width: 30px;
            height: 30px;
            margin-left: 10px;
            border: 1px solid #ccc;
            border-radius: 50%;
        }
        .grade .active{
            transform: scale(1.2,1.2);
            transition: all .3s;
            background-color: orange;
            border: 1px solid orange;
        }
        .grade ul li:last-of-type{
            margin-right: 20px;
        }
        .grade .box{
            width: 50px;
            height: 50px;
            line-height: 50px;
            background-color: hotpink;
            border-radius: 50%;
            margin: 20px auto;
            text-align: center; 
            font-size: 30px;
            color: white;  
        }
</style>
