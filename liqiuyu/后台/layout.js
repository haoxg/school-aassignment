Vue.component('layout', {
    template: `<div class="content">
                    <div class="head clearfix">
                        <slot name="header"></slot>
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
    data() {
        return {
            on: true,
        }
    },
    methods: {
        menu() {
            this.on = !this.on;
            if (!this.on) {
                lists.style.left = '-220px';
                tab_cont.style.left = '0px';
            } else {
                lists.style.left = '0';
                tab_cont.style.left = '220px';
            }
        },
        add_over() {
            add.style.display = 'block';
            icon_tab_add.classList.replace('glyphicon-triangle-bottom', 'glyphicon-triangle-top');

        },
        add_out() {
            add.style.display = 'none';
            icon_tab_add.classList.replace('glyphicon-triangle-top', 'glyphicon-triangle-bottom');
        },
        admin_over() {
            admin.style.display = 'block';
            icon_tab_admin.classList.replace('glyphicon-triangle-bottom', 'glyphicon-triangle-top');
        },
        admin_out() {
            admin.style.display = 'none';
            icon_tab_admin.classList.replace('glyphicon-triangle-top', 'glyphicon-triangle-bottom');
        }
    }
})