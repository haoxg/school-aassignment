<template>
    <div class="container">
        <h4>hello</h4>
        <input type="text" v-model='value' ref='input'><br>
        <button @click="add" class="add">添加待办事项</button>
        <p>待办事项</p>
        <ul>
            <li v-if="list1.length==0" class="wei ">还未输入代办事项！</li>
            <li v-else v-for="(item,index) in list1 " :key="'a'+index"><span>{{item}}</span><button @click="done(index)">完成</button>
            </li>
        </ul>
        <p>完成事项</p>
        <ul>
            <li v-if="list2.length==0" class="wei ">还未输入完成事项！</li>
            <li v-else v-for="(item,index) in list2 " :key="'b'+index"><span>{{item}}</span><button @click="remove(index)">移除</button></li>
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
                // console.log(this.value);
                this.list1.push(this.value);
                this.value = '';
                this.$refs.input.focus();
            } else {
                alert('请输入内容');
                return;
            }
        },
        done(index) {
            var str = this.list1.splice(index, 1);
            this.list2.push(str[0]);
        },
        remove(index) {
            this.list2.splice(index, 1);
        }
    }
}
</script>

<style scoped="scoped">
    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .container {
            width: 400px;
            min-height: 500px;
            margin: 0 auto;
            border: 1px solid #000;
            padding: 10px 20px;
            box-sizing: border-box;
            line-height: 30px;
        }
        
        h4 {
            text-align: center;
        }
        
        #app input,
        #app .add {
            width: 100%;
            height: 30px;
            margin-top: 10px;
        }
        
        .wei {
            color: rgb(150, 147, 147);
            border: 1px solid;
            text-align: center;
        }
        
        ul {
            padding-left: 30px;
        }
        
        ul li span {
            display: inline-block;
            width: 290px;
            border: 1px solid #ccc;
        }
        
        ul li {
            margin-top: 10px;
        }
        
        ul li button {
            height: 30px;
        }
</style>
