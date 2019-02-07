export default {
        data: () => ({
            valid: true,
            name: '',
            age: 0,
            care_of: '',
            gender: 'male',
            mobile_number:0
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
                            mobile_number: this.mobile_number
                        }).then(res => {
                            console.log(res)
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