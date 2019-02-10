export default {
        data: () => ({
            valid: true,
            name: '',
            age: '',
            care_of: '',
            gender: 'Male',
            mobile_number:'',
            address: null
        }),
        methods: {
            submit() {
                this.$validator.validateAll().then(value => {
                    if (value) {
                        axios.post('/ajax/patient/create', {
                            name: this.name,
                            age: this.age,
                            care_of: this.care_of,
                            gender: this.gender,
                            address: this.address,
                            mobile_number: this.mobile_number
                        }).then(res => {
                           this.$root.successMessage(res.data),
                            this.name='',
                            this.age='',
                            this.care_of='',
                            this.gender='Male',
                            this.address='',
                            this.mobile_number=''
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
            },
            clear() {
                this.name=''
                this.age=0
                this.gender=''
                this.care_of=''
                this.mobile_number=''
                this.$validator.reset()
            }
        }
    }