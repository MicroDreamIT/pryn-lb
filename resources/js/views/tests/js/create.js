export default {
    data:()=> ({
        valid:true,
        name:'',
        unit:'',
        range:'',
        type:'Heamatological',
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/tests/create', {
                        name: this.name,
                        unit: this.unit,
                        range: this.range,
                        type: this.type,
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
            this.type='Heamatological'
            this.$validator.reset()
        },
    }
}