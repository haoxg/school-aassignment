<template>
    <div id="app">
        <h5>hello</h5>
        <input type="text" v-model="value" ref="input">
        <button class="btn" @click="add">添加事项</button>
        <p>待办事项</p>
        <ul>
            <li v-if="list1.length==''">还未添加待办事项</li>
            <li :key="index" v-else class="clearfix" v-for="(item,index) in list1">{{item}}
                <button @click="done(index)">完成</button>
            </li>
        </ul>
        <p>完成事项</p>
        <ul>
            <li v-if="list2.length==''">还未添加完成事项</li>
            <li :key="index" v-else class="clearfix" v-for="(item,index) in list2">{{item}}
                <button @click="remove(index)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value: '',
                list1: [],
                list2: []
            }
        },
        methods: {
            add() {
                if (this.value) {
                    this.list1.push(this.value);
                    this.value = '';
                    this.$refs.input.focus();
                }
            },
            done(index) {
                var str = this.list1.splice(index, 1);
                this.list2.push(str[0])
            },
            remove(index) {
                this.list2.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    #app {
        width: 400px;
        min-height: 500px;
        border: 1px solid #bbb;
        margin: 0 auto;
        color: #666;
        box-sizing: border-box;
    }
    
    h5 {
        font-size: 26px;
        text-align: center;
        border-bottom: 2px solid #ccc;
        background: #eee;
        color: #666;
    }
    
    input {
        width: 99%;
        height: 35px;
        border: 2px solid #ccc;
        color: #666;
        margin: 5px 0;
        font-size: 16px;
    }
    
    .btn {
        width: 100%;
        background: #eee;
        font-size: 18px;
        height: 35px;
        color: #666;
        outline: none;
    }
    
    p {
        font-size: 18px;
        margin: 20px 10px;
    }
    
    button {
        width: 50px;
        height: 40px;
        font-size: 16px;
        background: #eee;
        float: right;
    }
    
    ul li {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        padding: 0 10px;
        background: rgba(243, 243, 247, 0.993);
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
    }
    
    .clearfix:after,
    .clearfix:before {
        content: '';
        display: table;
    }
    
    .clearfix:after {
        clear: both;
    }
    
    .clearfix {
        zoom: 1;
    }
</style>
