var horologe=Vue.extend({
    template:`
        <div class="clock">
                <div class="hour" :style="{transform: 'rotate('+hourDeg+'deg)'}"></div>
                <div class="minute" :style="{transform: 'rotate('+minuteDeg+'deg)'}"></div>
                <div class="second" :style="{transform: 'rotate('+secondDeg+'deg)'}"></div>
                <ul>
                    <li v-for="item in 12" :style="{transform: 'rotate('+item*30+'deg)'}">{{item}}</li>
                </ul>
                <ol>
                    <li v-for="item in 60" :style="{transform: 'rotate('+item*6+'deg)'}"><i></i></li>
                </ol>
            </div>
        `,
        data(){
            return {
                hourDeg:new Date().getHours()*30+(new Date().getMinutes()/60*30),
                minuteDeg:new Date().getMinutes()*6+(new Date().getSeconds()/60*6),
                secondDeg: new Date().getSeconds()*6
            }
        },
        created(){
            this.dida();
        },
        methods:{
            dida(){
                setInterval(()=>{
                    this.hourDeg=new Date().getHours()*30+(new Date().getMinutes()/60*30),
                    this.minuteDeg=new Date().getMinutes()*6+(new Date().getSeconds()/60*6),
                    this.secondDeg=new Date().getSeconds()*6
                },1000)
            }
        }
})