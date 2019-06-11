var Grade = {
    template: '#mygrade',
    props: {
        value: {
            type: Number
        },
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
                return ['极差', '一般', '满意', '很好', '惊喜']
            }
        }
    },
    data() {
        return {
            activeIndex: this.value,
            currentIndex: 0
        }
    },
    computed: {
        text1() {
            return this.texts[this.activeIndex - 1]
        }
    },
    watch: {
        activeIndex(v1) {
            this.$emit('input', v1)
        }
    },
    methods: {
        addActive(i) {
            if (this.disabled) {
                return;
            }
            this.currentIndex = i;
        },
        rmActive() {
            if (this.disabled) {
                return;
            }
            this.currentIndex = 0;
        },
        defineActive() {
            if (this.disabled) {
                return;
            }
            this.activeIndex = this.currentIndex;
        }
    }
}