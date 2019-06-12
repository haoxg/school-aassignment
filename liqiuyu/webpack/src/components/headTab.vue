<template>
    <div>
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
</template>

<script>
    export default {
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
    }
</script>

<style>
    .logo {
        color: #fff;
        font-size: 18px;
        padding-left: 20px;
        line-height: 50px;
        width: 220px;
        transition: .3s;
    }
    .more {
        background: rgba(255, 255, 255, .1) url() 0 0 no-repeat;
        color: #fff;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 3px;
        text-align: center;
        margin-top: 10px;
        cursor: pointer;
        transition: ease .3s;
    }
    .nav_item {
        color: #ccc;
        cursor: pointer;
        font-size: 14px;
        line-height: 50px;
        padding: 0 25px;
        position: relative;
    }
    #add,
    #admin {
        display: none;
        position: absolute;
        left: 0;
        top: 50px;
        min-width: 100%;
        line-height: 36px;
        padding: 5px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
        border: 1px solid #d2d2d2;
        background-color: #fff;
        z-index: 100;
        border-radius: 2px;
        white-space: nowrap;
        text-align: center;
        color: #333;
    }

    #add li:hover,
    #admin li:hover {
        background-color: #f2f2f2;
        color: #000;
    }
</style>
