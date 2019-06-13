<template>
    <div>
        <div id="box">
                <div class="clock aa" :style="{transform:'rotate('+cc+'deg)'}"></div>
                <div class="clock bb" :style="{transform:'rotate('+bb+'deg)'}"></div>
                <div class="clock cc" :style="{transform:'rotate('+aa+'deg)'}"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            aa: new Date().getSeconds() * 6,
            bb: new Date().getMinutes() * 6,
            cc: new Date().getHours() * 30
        }
    },
  
    methods: {
        dida() {
            setInterval(function() {
                this.aa = new Date().getSeconds() * 6
                this.bb = new Date().getMinutes() * 6
                this.cc = new Date().getHours() * 30

            }, 1000)
        }
    },
      created() {
        this.dida()
    },
}
</script>
<style scope>
     #box {
            width: 300px;
            height: 300px;
            border: 10px solid;
            border-radius: 50%;
            margin: 100px auto;
            position: relative;
        }
        
        .clock {
            position: absolute;
            transform-origin: center bottom;
        }
        
        .aa {
            width: 12px;
            height: 100px;
            background: red;
            left: 50%;
            margin-left: -6px;
            top: 50px;
        }
        
        .bb {
            width: 10px;
            height: 120px;
            background: blue;
            left: 50%;
            margin-left: -5px;
            top: 30px;
        }
        
        .cc {
            width: 8px;
            height: 140px;
            background: black;
            left: 50%;
            margin-left: -4px;
            top: 10px;
        }
</style>