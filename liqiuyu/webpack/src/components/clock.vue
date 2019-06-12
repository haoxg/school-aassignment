<template>
    <div class="clock">
        <div id="hours" :style="{transform:'rotate('+hoursDeg+'deg)'}"></div>
        <div id="minutes" :style="{transform:'rotate('+minutesDeg+'deg)'}"></div>
        <div id="seconds" :style="{transform:'rotate('+secondsDeg+'deg)'}"></div>
        <ul>
            <li :key="i" v-for="i in 12" :style="{transform:'rotate('+i*30+'deg)'}">{{i}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
         data() {
            return {
                hoursDeg: new Date().getHours() * 30 + (new Date().getMinutes() / 60 * 30),
                minutesDeg: new Date().getMinutes() * 6,
                secondsDeg: new Date().getSeconds() * 6
            }
        },
        created() {
            this.dida()
        },
        methods: {
            dida() {
                setInterval(() => {
                    this.hoursDeg = new Date().getHours() * 30 + (new Date().getMinutes() / 60 * 30);
                    this.minutesDeg = new Date().getMinutes() * 6;
                    this.secondsDeg = new Date().getSeconds() * 6;

                }, 1000)
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

    .clock {
        width: 300px;
        height: 300px;
        border: 10px solid #000;
        margin: 100px auto;
        border-radius: 50%;
        position: relative;
    }

    .clock::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: black;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -10px;
        margin-top: -10px;
        z-index: 1;
    }

    #hours {
        width: 12px;
        height: 100px;
        background: red;
        position: absolute;
        left: 50%;
        margin-left: -6px;
        top: 40px;
        transform-origin: center bottom;
    }

    #minutes {
        width: 8px;
        height: 120px;
        background-color: green;
        position: absolute;
        left: 50%;
        margin-left: -4px;
        top: 20px;
        transform-origin: center bottom;
    }

    #seconds {
        width: 4px;
        height: 130px;
        background-color: blue;
        position: absolute;
        left: 50%;
        margin-left: -2px;
        top: 10px;
        transform-origin: center bottom;
    }

    .clock ul>li {
        position: absolute;
        height: 100%;
        left: 50%;
        width: 2em;
        margin-left: -1em;
        top: 0;
        text-align: center;
        padding-top: 10px;
    }
</style>
