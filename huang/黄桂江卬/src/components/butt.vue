<template>
          <div>
             最小值：<input type="text" v-model='mins'><br>
             最大值：<input type="text" v-model='maxs'><br>
             步数：<input type="text" v-model='steps'><br>
            <button @click="sut" :disabled="disableds">-</button>
            <input type="text" v-model="value1" :disabled="disableds">
            <button @click="puls" :disabled="disableds">+</button>
        </div>
</template>
<script>
export default {
   
}
</script>
<style scope>
    
</style>