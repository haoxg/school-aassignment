<template>
    <div>
        <div class="wuziqi">
            <div :key="'e'+item" class="box" v-drag="true" v-for="(item,a) in 100"></div>
            <div :key="'f'+item" class="blue" v-drag="true" v-for="(item,b) in 100"></div>
            <table>
                <tr :key="'g'+item" v-for="(item,c) in 15">
                    <td :key="'h'+item" v-for="(item,d) in 14"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            drag(el, binding) {
                if (binding.value) {
                    el.onmousedown = function(event) {
                        var x = event.clientX - el.offsetLeft;
                        var y = event.clientY - el.offsetTop;
                        document.onmousemove = function(event) {
                            var movex = event.clientX - x;
                            var movey = event.clientY - y;
                            var maxx = document.documentElement.clientWidth - el.offsetWidth;
                            var maxy = document.documentElement.clientHeight - el.offsetHeight;
                            movey = movey <= 0 ? 0 : movey;
                            movey = movey >= maxy ? maxy : movey;
                            if (movex <= 0) {
                                movex = 0;
                                el.classList.add('rotateleft');

                            } else {
                                el.classList.remove('rotateleft');
                            }
                            if (movex >= maxx) {
                                movex = maxx;
                                el.classList.add('rotateRight');
                            } else {
                                el.classList.remove('rotateRight');
                            }
                            el.style.left = movex + 'px';
                            el.style.top = movey + 'px';
                        }
                        document.onmouseup = function(event) {
                            document.onmousemove = null;
                        }
                    }

                }
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        user-select: none;
    }
    
    .box {
        width: 30px;
        height: 30px;
        position: absolute;
        border-radius: 50%;
        background: orange;
        text-align: center;
        line-height: 100px;
        color: #fff;
        left: 0;
    }
    
    .blue {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 0;
        border-radius: 50%;
        background: blue;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }
    
    .rotateleft {
        transform: translateX(-15px) rotate(-90deg);
        transition: .5s;
    }
    
    .rotateRight {
        transform: translateX(15px) rotate(90deg);
        transition: .5s;
    }
    
    table {
        margin: 0 auto;
        border-collapse: collapse;
    }
    
    table tr td {
        width: 50px;
        height: 50px;
        border: 3px solid #ccc;
    }
</style>
