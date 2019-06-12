<template>
    <div class="source">
                <div class="el-input-number">
                    <button :disabled="disabled" @click="minus" class="el-input-number__decrease">
                        <i>-</i>
                    </button>
                    <button :disabled="disabled" @click="plus" class="el-input-number__decrease">
                        <i>+</i>
                    </button>
                </div>
                <div class="el-input">
                    <input :disabled="disabled" v-model="value" type="text" class="el-input__inner">
                </div>
            </div>
</template>

<script>
export default {
    props: ['value1', 'min', 'max', 'step', 'disabled'],
        data() {
            return {
                value: 1,
            }
        },
        watch: {
            value(v1) {
                this.$emit('change', v1);
                this.$emit('input', v1);
            }
        },
        methods: {
            plus() {
                this.value += this.step || 1;
                if (this.value >= this.max) {
                    this.value = this.max;
                    return;
                };
            },
            minus() {
                this.value -= this.step || 1;
                if (this.value <= this.min || 0) {
                    this.value = this.min || 0;
                    return;
                }
            }
        }
}
</script>

<style>

</style>
