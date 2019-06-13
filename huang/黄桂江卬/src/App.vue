<template>
  <div id="app">
      <elrow>
            <!-- header -->
            <eleo></eleo>
            <!-- left -->
            <leftzj :arr2="arrs">
            </leftzj>
            <!-- right -->
            <rifhtzj :arr1="arrs"></rifhtzj>
        </elrow>
  </div>
</template>

<script>
import eleo from '@/components/eleo'
import elrow from '@/components/elrow'
import leftzj from '@/components/leftzj'
import rifhtzj from '@/components/rifhtzj'
export default {

  name: 'app',
  data:function(){
			return {
				arrs:[],
			}
  },
  components:{
    eleo,
    elrow,
    leftzj,
    rifhtzj
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
