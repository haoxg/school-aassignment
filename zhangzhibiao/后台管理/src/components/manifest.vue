<template>
    <div class="manifest">
        <div class="clearfix">
            <ul class="commodity_box clearfix">
                <li class="width_30">品名</li>
                <li class="width_35">数量</li>
                <li class="width_35">单价(元)</li>
            </ul>
            <ul class="price_box">
                <li v-for="item in arr">{{item}}</li>
            </ul>
            <div class="remark">备注</div>
        </div>
        <div v-for='item,i in arr1' class="clearfix">
            <ul class="commodity_box clearfix">
                <li class="width_30" @click.self="tabclick">{{item.name}}<input @ blur="tabblur" type="text" v-model="item.name"></li>
                <li class="width_35" @click.self="tabclick">{{item.number}}<input @blur="tabblur" type="text" v-model="item.number"></li>
                <li class="width_35" @click.self="tabclick">{{item.price}}<input @blur="tabblur" type="text" v-model="item.price"></li>
            </ul>
            <ul class="price_box clearfix">
                <li v-for="item1 in commoditylist[i]">{{item1}}</li>
            </ul>
            <div class="remark" @click.self="tabclick">{{item.text}}<input @blur="tabblur" type="text" v-model="item.text"></div>
        </div>
        <div @click="add()" class="add">增加商品</div>
        <div class="totalPrices_box clearfix">
            <div :style="{width:'15%'}">合计(大写)</div>
            <div :style="{width:'85%'}">{{totalPrices|China}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){ 
        return {
            arr: ['千万', '百万', '十万', '万', '千', '百', '十', '元', '角', '分'],
            arr1: [{
                name: '',
                number: '',
                price: '',
                text: '',
            }, ],
        }
    },
    filters: {
        China(num) {
            var ChinaArr = ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
            var ChinaArr1 = ['', '拾', '佰', '仟', '万', '拾', '佰', '仟'];
            var ChinaArr2 = ['角', '分'];
            var a = num.split('.')
            var str = '元';
            var str1 = '点';
            a.forEach((item, index) => {
                if (index == '0') {
                    var itemarr = item.split('');
                    for (var i = itemarr.length - 1; i >= 0; i--) {
                        if (ChinaArr[itemarr[i]] == '') {
                            str += '零';
                        } else {
                            str += ChinaArr1[itemarr.length - 1 - i]
                            str += ChinaArr[itemarr[i]];

                        }
                    }
                } else {
                    if (item == '00') {
                        str1 = '';
                    } else {
                        var itemarr = item.split('');
                        for (var i = 0; i < itemarr.length; i++) {
                            str1 += ChinaArr[itemarr[i]]
                            str1 += ChinaArr2[i]
                        }
                    }

                }
            });
            return str.split('').reverse().join('') + str1;
        }
    },
    computed: {
        len() {
            return this.arr1.length;
        },
        commoditylist() {
            var arr = [];
            this.arr1.forEach(item => {
                var a = ((item.number * item.price).toFixed(2) + '').split('.');
                if (a.length !== 2) {
                    a.push('')
                }
                var str;
                a.forEach((item1, index) => {
                    if (index == '0') {
                        str = item1;
                        var b = this.arr.length - (item1.split('').length) - 2;
                        for (var i = 0; i < b; i++) {
                            str = ' ' + str;
                        }
                    } else {
                        str += item1;
                    }
                });
                arr.push(str)
            });
            return arr;
        },
        totalPrices() {
            var num = 0;
            this.arr1.forEach(item => {
                num += item.number * item.price
            });
            return (num).toFixed(2);
        }
    },
    methods: {
        add() {
            this.arr1.push({
                name: '',
                number: '',
                price: '',
                text: '',
            })
            console.log(this.arr1)
        },
        tabclick(ev) {
            ev.target.children[0].style.display = 'block';
            ev.target.children[0].focus();
        },
        tabblur(ev) {
            ev.target.style.display = 'none';
        },
    }
}
</script>

<style>
    
    .manifest {
        width: 1000px;
        height: auto;
        border: 1px #000 solid;
        user-select: none;
        margin: 0 auto;
    }
    
    .manifest .commodity_box {
        float: left;
        width: 400px;
        height: 50px;
    }
    
    .manifest .price_box {
        float: left;
        width: 400px;
        height: 50px;
    }
    
    .manifest .commodity_box li {
        position: relative;
    }
    
    .manifest .commodity_box input,
    .manifest .remark input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .manifest li {
        text-align: center;
        border: 1px #000 solid;
        float: left;
        height: 100%;
        line-height: 50px;
        box-sizing: border-box;
    }
    
    .manifest .width_30 {
        width: 30%;
    }
    
    .manifest .width_35 {
        width: 35%;
    }
    
    .manifest .price_box li {
        width: 10%;
    }
    
    .manifest .add {
        border: 1px #000 solid;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
    }
    
    .manifest .totalPrices_box {
        width: 100%;
    }
    
    .manifest .totalPrices_box>div {
        height: 50px;
        line-height: 50px;
        text-align: center;
        float: left;
        border: 1px #000 solid;
        box-sizing: border-box;
    }
    
    .manifest .remark {
        text-align: center;
        line-height: 50px;
        float: left;
        width: 200px;
        height: 50px;
        border: 1px #000 solid;
        box-sizing: border-box;
        position: relative;
    }
</style>
