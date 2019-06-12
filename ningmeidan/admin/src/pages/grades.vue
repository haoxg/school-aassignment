<template>
    <div>
        <blog-post  :max="5" :disabled="false" :value="val"></blog-post>
        <blog-post  :max="5" :disabled="true" :value="val"></blog-post>
    </div>
</template>

<script>
import Grade from '@/components/grade'
export default {
    data(){
            return {
                val: 3
            }
        },
    components:{
        'blog-post':Grade
    }
}
</script>

<style>

</style>
