<template>
    <div id="clock">
    <div id="content">
        <div id="hours" :style="{transform:'rotate('+hoursDeg+'deg)'}"></div>
        <div id="minutes" :style="{transform:'rotate('+minutesDeg+'deg)'}"></div>
        <div id="seconds" :style="{transform:'rotate('+secondsDeg+'deg)'}"></div>
        <ul>
            <li v-for="i in 12" :style="{transform:'rotate('+i*30+'deg)'}">{{i}}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
     data() {
        return {
            hoursDeg: new Date().getHours() * 30,
            minutesDeg: new Date().getMinutes() * 6,
            secondsDeg: new Date().getSeconds() * 6,
        }
    },
    created() {
        this.dida();
    },
    methods: {
        dida() {
            setInterval(() => {
                this.hoursDeg = new Date().getHours() * 30
                this.minutesDeg = new Date().getMinutes() * 6
                this.secondsDeg = new Date().getSeconds() * 6
            }, 1000)
        }
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
}
    #clock #content {
    width: 300px;
    height: 300px;
    border: 10px solid #000;
    margin: 100px auto;
    border-radius: 50%;
    position: relative;
}

#clock #hours {
    width: 10px;
    height: 100px;
    background-color: red;
    position: absolute;
    left: 50%;
    margin-left: -5px;
    top: 50px;
    transform-origin: center bottom;
}

#clock #minutes {
    width: 8px;
    height: 120px;
    background-color: green;
    position: absolute;
    left: 50%;
    margin-left: -4px;
    top: 30px;
    transform-origin: center bottom;
}

#clock #seconds {
    width: 6px;
    height: 140px;
    background-color: blue;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    top: 10px;
    transform-origin: center bottom;
}

#clock ul>li {
    position: absolute;
    height: 100%;
    left: 50%;
    width: 2em;
    margin-left: -1em;
    top: 0;
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
}
</style>
