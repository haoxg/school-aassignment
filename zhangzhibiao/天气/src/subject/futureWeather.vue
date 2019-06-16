<template>
    <div id="futurn">
        <div class="timenav">
            <div class="timenav-item">
                <div>六</div>
                <span>6/15</span>
            </div>
            <div class="timenav-item">
                <div>六</div>
                <span>6/15</span>
            </div>
            
            <div class="timenav-item">
                <div>六</div>
                <span>6/15</span>
            </div>
            
            <div class="timenav-item">
                <div>六</div>
                <span>6/15</span>
            </div>

            
            <div class="timenav-item">
                <div>六</div>
                <span>6/15</span>
            </div>
            
            <div class="timenav-item">
                <div>六</div>
                <span>6/15</span>
            </div>
        </div>
        <div class="futurn-particulars">
            <div class="futurn-particulars-item">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #futurn{
        width: 100%;
        height: 100%;
    }
    .timenav{
        width: 100%;
        height: 1.25rem;
        overflow-x: scroll;
        white-space: nowrap;
    }
    .timenav-item{
        width: 1.5rem;
        height: 100%;
        display: inline-block;
        vertical-align: top;
    }
    .timenav-item div{
        height: 0.48rem;
        width:0.48rem ;
        border-radius: 50%;
        background: blue;
        font-size: 0.28rem;
        line-height: 0.48rem;
        margin: 0.12rem 0.55rem;
        text-align: center;
        color: #fff;
    }
    .timenav-item span{
        width: 100%;
        font-size: 0.2rem;
        float: left;
        text-align: center;
    }
</style>
