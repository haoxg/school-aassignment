<template>
   <div class="right">
        <div class="ritop">
            <div class="cfd" v-for="item,index in arrdz" @click="dianjqh(item,index)">{{item.fil}}<span @click.seft="shancu(index)">×</span></div>
        </div>
        <router-view></router-view>
    </div>     
</template>
<script>
export default {
    props:["arr1"],
      data() {
                return {
                    arrdz: this.arr1,
                }
            },
            methods: {
                dianjqh(item, index) {
                    console.log(this.$router)
                    this.$router.push({
                        path: item.url1
                    });
                },
                shancu(index) {
                    if (index == this.arrdz.length - 1) {
                        this.arrdz.splice(index, 1)
                        setTimeout(() => {
                            this.$router.push('/');
                        }, 0)
                    } else if (index == this.arrdz.length - 1) {
                        this.arrdz.splice(index, 1)
                        setTimeout(() => {
                            this.$router.push(this.arrdz[index - 1].url);
                        }, 0)
                    } else {
                        this.arrdz.splice(index, 1)
                        setTimeout(() => {
                            this.$router.push(this.arrdz[index].url);
                        }, 0)
                    }

                }
            },
}
</script>
<style scope>
      .cfd {
            float: left;
            margin-right: 10px;
        }
     .ritop {
            width: 100%;
            height: 50px;
        }
          .right {
            float: left;
            width: 500px;
            height: 500px;
            background: burlywood;
        }
</style>