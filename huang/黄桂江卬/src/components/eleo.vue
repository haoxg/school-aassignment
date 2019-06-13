<template>
         <div class="header">
                     <span @click="show" class="span2"></span>
                    <slot></slot>
                </div>
</template>
<script>
export default {
     data() {
                return {
                    down: true,
                }
            },
            methods: {
                show() {
                    if (this.down) {
                        this.down = false;
                    } else {
                        this.down = true;
                    }
                },
            }
}
</script>
<style scope>
     .header {
            width: 100%;
            height: 50px;
            background: black;
        }
         .span2 {
            width: 20px;
            height: 20px;
            display: inline-block;
            background: rebeccapurple;
            margin-right: 30px;
            user-select: none;
        }
</style>