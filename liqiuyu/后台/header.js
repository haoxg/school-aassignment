var headTab = Vue.extend({
    template: `
    <div class="head clearfix">
        <div class="fl logo">L-admin v2.0</div>
        <span class="glyphicon glyphicon-th-list fl more" @click="menu"></span>
        <div class="fl nav_item" @mouseover="add_over" @mouseout="add_out">+ 新增
            <span class="glyphicon glyphicon-triangle-bottom" id="icon_tab_add"></span>
            <ul id="add">
                <li>资讯</li>
                <li>图片</li>
                <li>用户</li>
            </ul>
        </div>
        <div class="fr nav_item" @mouseover="admin_over" @mouseout="admin_out">admin
            <span class="glyphicon glyphicon-triangle-bottom" id="icon_tab_admin"></span>
            <ul id="admin">
                <li>个人信息</li>
                <li>切换账号</li>
                <li>退出</li>
            </ul>
        </div>
    </div>
    `,
    data() {
        return {
            on: true
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