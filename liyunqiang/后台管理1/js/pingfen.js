var pingfen = {
    template: '#pingfen',
    props: {
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
                return ['极差', '失望', '一般', '满意', '惊喜']
            }
        }

    },
    data() {
        return {
            currentindex: 0,
            activeindex: 0
        }

    },
    computed: {
        text() {
            return this.texts[this.activeindex - 1]
        }
    },
    methods: {
        yiru(i) {
            if (this.disabled) {
                return
            }
            this.currentindex = i;
        },
        yichu() {
            if (this.disabled) {
                return
            }
            this.currentindex = 0;
        },
        dian(i) {
            if (this.disabled) {
                return
            }
            this.activeindex = this.currentindex;
        }
    },
}