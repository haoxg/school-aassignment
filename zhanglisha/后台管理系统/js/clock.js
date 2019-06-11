var clockhtml = Vue.extend({
    template: `
        <div class="clock">
            <div class='clock-zhen hour' :style="{transform:'rotate('+ hourDeg+'deg)'}"></div>
            <div class='clock-zhen minute' :style="{transform:'rotate('+minuteDeg+'deg)'}"></div>
            <div class='clock-zhen second' :style="{transform:'rotate('+secondDeg+'deg)'}"></div>
            <ul>
                <li v-for='i in 12' :style="{transform:'rotate('+i*30+'deg)'}">{{i}}</li>
            </ul>
        </div>
    `,
    data(){
        return {
            hourDeg: new Date().getHours() * 30,
            minuteDeg: new Date().getMinutes() * 6,
            secondDeg: new Date().getSeconds() * 6,
        }
    },
    created(){
        this.dida();
    },
    methods:{
        dida() {
            setInterval(() => {
                this.hourDeg = new Date().getHours() * 30;
                this.minuteDeg = new Date().getMinutes() * 6;
                this.secondDeg = new Date().getSeconds() * 6;
            }, 1000)
        }
    }
})