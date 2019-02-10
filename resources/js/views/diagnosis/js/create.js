export default {
    data:()=> ({
        valid:true,
        test_name:'',
        test_unit:'',
        test_range:'',
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/diagnosis/create', {
                        test_name: this.test_name,
                        test_unit: this.test_unit,
                        test_range: this.test_range,
                    }).then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
        }
        ,
        clear() {
            this.test_name = ''
            this.test_unit = ''
            this.test_range = ''
            this.$validator.reset()
        },
    }
}