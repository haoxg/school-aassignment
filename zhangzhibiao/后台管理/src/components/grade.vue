<template>
    <ul id="grade">
        <li v-for="i in max" :class="{active:cruu>=i}" @mouseover="add(i)" @mouseout="rm" @click="click"></li>
        <span>{{text}}</span>
    </ul>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 5,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        texts: {
            type: Array,
            default: function() {
                return ['极差', '失望', '一般', '满意', '惊喜']
            }
        }
    },
    computed: {
        text() {
            return this.texts[parseInt((this.activeindex - 1) / (this.max / 5))];
        }
    },
    data() {
        return {
            activeindex: this.value,
            cruu: this.value,
        }
    },
    watch: {
        activeindex(v1) {
            this.$emit('input', v1)
        }
    },
    methods: {
        add(i) {
            if (this.disabled) return;
            this.cruu = i;
        },
        rm() {
            if (this.disabled) return;
            this.cruu = this.activeindex;
        },
        click() {
            if (this.disabled) return;
            this.activeindex = this.cruu;
        }
    },
}
</script>

<style>
    #grade{
        display: flex;
        justify-content: center;
    }
    #grade>li {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px #ccc solid;
        border-radius: 50%;
        background: #eee;
    }
    #grade span{
        display: inline-block;
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    #grade .active {
        background: orange;
    }
</style>
