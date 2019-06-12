<!-- 钟表 -->
<template>
  <div class="time">
            <div class="commonality hours" :style="{transform: 'rotateZ('+hours+'deg)'}"></div>
            <div class="commonality minutes" :style="{transform: 'rotateZ('+minutes+'deg)'}"></div>
            <div class="commonality seconds" :style="{transform: 'rotateZ('+seconds+'deg)'}"></div>
            <ul>
                <li v-for='(i,o) in 12' :style="{transform: 'rotateZ('+i*30+'deg)'}" :key='o'>{{i}}</li>
            </ul>
        </div>
</template>

<script>
export default {
  data() {
        return {
            hours: new Date().getHours() * 30,
            minutes: new Date().getMinutes() * 6,
            seconds: new Date().getSeconds() * 6
        }
    },
    created() {
        this.set()
    },
    methods: {
        set() {
            setInterval(() => {
                this.hours = new Date().getHours() * 30
                this.minutes = new Date().getMinutes() * 6
                this.seconds = new Date().getSeconds() * 6
            }, 1000)
        }
    }
}

</script>
<style scoped>

.time {
    width: 300px;
    height: 300px;
    border: 5px solid #000;
    border-radius: 50%;
    margin: 200px auto;
    position: relative;
}

.hours {
    width: 10px;
    height: 100px;
    background: #000;
    margin-left: -5px;
    top: 50px;
}

.minutes {
    width: 8px;
    height: 120px;
    background: #f00;
    margin-left: -4px;
    top: 30px;
}

.seconds {
    width: 6px;
    height: 140px;
    background: #ff0;
    margin-left: -3px;
    top: 10px;
}

.commonality {
    position: absolute;
    left: 50%;
    transform-origin: center bottom;
}

.time ul>li {
    list-style: none;
    width: 20px;
    height: 300px;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -10px;
}

</style>