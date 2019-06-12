<template>
    <table id="table1">
            <tr>
                <td style="width:200px; height:70px;">品名</td>
                <td style="width:200px;">数量</td>
                <td style="width:200px;">单价(元)</td>
                <td :rowspan="productLength+1">
                    <table id="table2">
                        <tr>
                            <td colspan="10" style="height:40px;">金额</td>
                        </tr>
                        <tr class="t2">
                            <td>万</td>
                            <td>千</td>
                            <td>百</td>
                            <td>十</td>
                            <td>元</td>
                        </tr>
                        <tr v-for="(amount,index) in amountList" class="t3" :key="'amount'+index">
                            <td v-for="a in amount" :key="a">{{a}}</td>
                        </tr>
                    </table>
                </td>
                <td style="width:200px; height:70px;">备注</td>

            </tr>
            <tr v-for="(product,index) in productList" class="ti" :key="'product'+index">
                <td @click.self="showInput" style=" height:75px;">{{product.name}}<input @blur="hideInput" type="text" v-model="product.name"></td>
                <td @click.self="showInput">{{product.number}}<input type="text" @blur="hideInput" v-model="product.number"></td>
                <td @click.self="showInput">{{product.price}}<input type="text" @blur="hideInput" v-model="product.price"></td>
                <td @click.self="showInput">{{product.remark}}<input type="text" @blur="hideInput" v-model="product.remark"></td>
            </tr>
            <tr>
                <td style="height:70px;">合计人民币(大写)</td>
                <td colspan="4">{{total|chinese}}</td>
            </tr>
        </table>
</template>

<script>
export default {
    data(){
        return {
            productList: [{
                    name: '苹果',
                    number: '',
                    price: '',
                    remark: ''
                }, {
                    name: '苹果',
                    number: '',
                    price: '',
                    remark: ''
                }, {
                    name: '苹果',
                    number: '',
                    price: '',
                    remark: ''
                }]
            }
    },
        methods: {
            showInput(event) {
                event.target.children[0].style.display = "block";
                event.target.children[0].focus();
            },
            hideInput(event) {
                event.target.style.display = "none";
            }
        },
        filters: {
            chinese(value) {
                var list1 = ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
                var list2 = ['整元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', ];
                value += '';
                var a = '';
                for (var i = value.length; i > 0; i--) {
                    a += value.charAt(i - 1) == 0 ? '零' : list2[value.length - i]
                    a += list1[value.charAt(i - 1)];
                };
                return a.split("").reverse().join("");
            }
        },
        computed: {
            productLength() {
                return this.productList.length;
            },
            amountList(index) {
                var arr = [];
                this.productList.forEach(element => {
                    var a = element.price * element.number + '';
                    var b = 5 - a.length;
                    for (var i = 0; i < b; i++) {
                        a = ' ' + a;
                    }
                    arr.push(a);
                });
                console.log(arr);
                return arr;
            },
            total() {
                var total = 0;
                this.productList.forEach(element => {
                    total += element.price * element.number
                })
                return total;
            }
        }
    }

</script>

<style scoped="scoped">
#table1 {
        width: 1000px;
        height: 220px;
        border-collapse: collapse;
    }
    
    td {
        border: 1px solid #000;
        text-align: center
    }
    
    #table2 {
        width: 400px;
        border-collapse: collapse;
    }
    
    .t2 td {
        height: 30px;
    }
    
    input {
        width: 100%;
        height: 100%;
        border: 0;
        position: absolute;
        left: 0;
        top: 0;
        display: none;
        text-align: center;
        font-size: 16px;
    }
    
    .ti td {
        position: relative;
    }
    
    .t3 td {
        height: 74px;
    }
</style>
