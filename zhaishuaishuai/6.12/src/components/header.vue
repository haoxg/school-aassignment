<!--  -->
<template>
  <header class=" container color1">
            <div class="col-md-2 fl">L-admin V2.0</div>
            <ul class="clearfix">
                <li class="fl" @click='hide' style="cursor:pointer"><span class="iconfont color">&#xe60b;</span></li>
                <li class="fl hover" style="position:relative;" >
                    <a href="javascript:;" class="color"> +新增 <i class="iconfont logo1">&#xe600;</i><i class="iconfont logo">&#xe615;</i></a>
                    <ol class="style">
                        <li><a href="javascript:;">咨询</a> </li>
                        <li><a href="javascript:;">图片</a></li>
                        <li><a href="javascript:;">用户</a></li>
                    </ol>
                </li>
                <li class="fr">
                    <a href="javascript:;" class="color">前台首页</a>
                </li>
                <li class="fr hover">
                    <a href="javascript:;" class="color"> admin <i class="iconfont logo1">&#xe600;</i><i class="iconfont logo">&#xe615;</i></a>
                    <ol class="style">
                        <li><a href="javascript:;">咨询</a></li>
                        <li><a href="javascript:;">图片</a></li>
                        <li><a href="javascript:;">用户</a></li>
                    </ol>
                </li>
            </ul>

        </header>
</template>

<script>
export default {
  data() {
            return {
                isShow: true,
            }
        },
        methods: {
            hide() {
                this.isShow = !this.isShow
                this.$emit('is-show', this.isShow)
            }
        }
}

</script>
<style  scoped>

.container {
    height: 55px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    width: 100%;
    min-width: 700px;
}

.color {
    margin: 10px;
    line-height: 55px;
}

.color1 {
    color: white
}
.col-md-2 {
    width: 200px;
    padding-left: 20px;
    line-height: 55px;
}
header {
    background: #000
}

header a:hover {
    color: white;
}

.hover ol,
.hover .logo {
    display: none
}

.hover .logo1 {
    display: inline-block
}

.hover:hover ol,
.hover:hover .logo {
    display: inline-block
}

.hover:hover .logo1 {
    display: none
}

</style>