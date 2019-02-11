export default {
    data:()=> ({
        valid:true,
        name:'',
        unit:'',
        range:'',
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/tests/create', {
                        name: this.name,
                        unit: this.unit,
                        range: this.range,
                    }).then(res => {
                        this.$root.successMessage(res.data)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
        },
        clear() {
            this.name = ''
            this.unit =''
            this.range =''
            this.$validator.reset()
        },
    }
}