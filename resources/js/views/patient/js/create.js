export default {
        data: () => ({
            valid: true,
            name: '',
            age: '',
            care_of: '',
            gender: 'Male',
            mobile_no:'',
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
                            mobile_no: this.mobile_no,
                        }).then(res => {
                           this.$root.successMessage(res.data),
                            this.name='',
                            this.age='',
                            this.care_of='',
                            this.gender='Male',
                            this.address='',
                            this.mobile_no=''
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
                this.mobile_no=''
                this.$validator.reset()
            }
        }
    }