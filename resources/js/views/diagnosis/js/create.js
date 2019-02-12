export default {
    data:()=> ({
        valid:true,
        name:'',
        test_name:'',
        result:'',
        opinion:'',
        advice:'',
        refer_by:'',
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/diagnosis/create', {
                        name: this.name,
                        test_name: this.test_name,
                        result: this.result,
                        opinion:this.opinion,
                        advice:this.advice,
                        prepared: this.prepared,
                        checked_by: this.checked_by,
                        technician: this.technician,
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
            this.result=''
            this.opinion =''
            this.advice = ''
            this.test_name=''
            this.$validator.reset()
        },
    }
}