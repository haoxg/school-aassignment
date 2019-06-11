Vue.component('layout', {
    template: `<div class="content">
                    <div class="head clearfix">
                        <slot name="head-nav"></slot>
                    </div>
                    <div  class="lists" id="lists">
                        <slot name="page-nav"></slot>
                    </div>
                    <div  class="tab_cont" id="tab_cont">
                        <div class="my_tit">
                            <span class="glyphicon glyphicon-home my_tit_icon"></span> 我的桌面
                            <slot name="page-tab"></slot>
                        </div>
                        <slot></slot>
                    </div>
                </div>`,
})