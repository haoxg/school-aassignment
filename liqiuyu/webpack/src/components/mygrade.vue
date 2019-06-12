<template id="myGrade">
    <div class="grade">
        <ul>
            <li class="star" :key="'c'+i" v-for="i in max" :class="{'active':currentIndex>=i|| ActiveIndex>=i}" @mouseover="addActive(i)"  @mouseout="rmActive" @click="definedActive"></li>
            <li>{{test1}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
         props: {
            value: {
                type: Number,
            },
            max: {
                type: Number,
                default: 5
            },
            disabled: {
                type: Boolean,
                default: false
            },
            test: {
                type: Array,
                default: function() {
                    return ['极差', '失望', '一般', '满意', '惊喜']
                }
            }
        },
        watch: {
            ActiveIndex(v1) {
                this.$emit('input', v1);
            }
        },
        data() {
            return {
                currentIndex: 0,
                ActiveIndex: this.value
            }
        },
        computed: {
            test1() {
                return this.test[this.ActiveIndex - 1]
            }
        },
        methods: {
            addActive(i) {
                if (this.disabled) {
                    return
                }
                this.currentIndex = i;
            },
            rmActive() {
                if (this.disabled) {
                    return
                }
                this.currentIndex = 0;
            },
            definedActive() {
                if (this.disabled) {
                    return
                }
                this.ActiveIndex = this.currentIndex;
            }
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .grade ul>li {
        list-style: none;
        display: inline-block;
    }

    .grade ul>li.star {
        width: 20px;
        height: 20px;
        border: 1px solid #ccc;
        margin-right: 10px;
    }

    .grade ul>li.active {
        background: orange;
        border: 1px solid orange;
    }
</style>

