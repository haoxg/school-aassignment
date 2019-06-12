<template id="mygrade">
        <div class="my_grade">
            <h2>评分</h2>
            <ul class="cleafix gradeList">
                <li class="star" :class="{'active':currentIndex>=i || activeIndex>=i}" v-for="(i,index) in max" :key="'a'+index" @click="defineActive()" @mouseover="addActive(i)" @mouseout="rmActive()"></li>
                <li style="margin-left:10px;">{{text1}}</li>
            </ul>
        </div>
</template>


<script>
export default {
    props: {
        value: {
            type: Number
        },
        max: {
            type: Number,
            default: 5
        },
        disabled: {
            type: Boolean,
            default: false
        },
        texts: {
            type: Array,
            default: function() {
                return ['极差', '一般', '满意', '很好', '惊喜']
            }
        }
    },
    data() {
        return {
            activeIndex: this.value,
            currentIndex: 0
        }
    },
    computed: {
        text1() {
            return this.texts[this.activeIndex - 1]
        }
    },
    watch: {
        activeIndex(v1) {
            this.$emit('input', v1)
        }
    },
    methods: {
        addActive(i) {
            if (this.disabled) {
                return;
            }
            this.currentIndex = i;
        },
        rmActive() {
            if (this.disabled) {
                return;
            }
            this.currentIndex = 0;
        },
        defineActive() {
            if (this.disabled) {
                return;
            }
            this.activeIndex = this.currentIndex;
        }
    }
}
</script>

<style scoped="scoped">
    .my_grade {
        height: 100%;
    }
    
    .my_grade ul>li {
        list-style-type: none;
        float: left;
    }
    
    .my_grade ul>li.star {
        width: 20px;
        height: 20px;
        border: 1px solid #ccc;
        margin-left: 10px;
    }
    
    .my_grade ul>li.active {
        background-color: orange;
        border: 1px solid orange;
    }
</style>
