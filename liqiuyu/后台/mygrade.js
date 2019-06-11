var Mygrade = {
    template: '#myGrade',
    props: {
        value: {
            type: Number,
        },
        max: {
            type: Number,
            default: 5
        },
        disabled: {
            type: Boolean,
            default: false
        },
        test: {
            type: Array,
            default: function() {
                return ['极差', '失望', '一般', '满意', '惊喜']
            }
        }
    },
    watch: {
        ActiveIndex(v1) {
            this.$emit('input', v1);
        }
    },
    data() {
        return {
            currentIndex: 0,
            ActiveIndex: this.value
        }
    },
    computed: {
        test1() {
            return this.test[this.ActiveIndex - 1]
        }
    },
    methods: {
        addActive(i) {
            if (this.disabled) {
                return
            }
            this.currentIndex = i;
        },
        rmActive() {
            if (this.disabled) {
                return
            }
            this.currentIndex = 0;
        },
        definedActive() {
            if (this.disabled) {
                return
            }
            this.ActiveIndex = this.currentIndex;
        }
    }
}