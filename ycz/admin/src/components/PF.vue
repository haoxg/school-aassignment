<template>
  <div>
            <ul>
                <li v-for='i in max' :class="{active:currentIndex>=i}" @mouseover="add(i)" @mouseout="remove" @click="click"></li>
                <!-- <span>{{texts}}</span> -->
            </ul>
        
        </div>
</template>

<script>
export default {
   data() {
        return {
            value111: 3,
        }
    },
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
            },
            watch: {
                activeIndex(v1) {
                    this.$emit('input', v1);
                }
            },
            data() {
                return {
                    activeIndex: this.value,
                    currentIndex: this.value,
                }
            },
            methods: {
                add(i) {
                    if (this.disabled) return;
                    this.currentIndex = i
                },
                remove() {
                    if (this.disabled) return;
                    this.currentIndex = this.activeIndex;
                },
                click() {
                    if (this.disabled) return;
                    this.activeIndex = this.currentIndex;
                }
            },
}
</script>

<style scoped>
 * {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        ul li {
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-left: 10px;
            border: 1px solid #ccc;
        }
        
        .active {
            transform: scale(1.2, 1.2);
            transition: all .3s;
            background-color: orange;
            border: 1px solid orange;
        }
</style>
