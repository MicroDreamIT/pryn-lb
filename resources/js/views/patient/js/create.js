export default {
        data: () => ({
            valid: true,
            name: '',
            age: '',
            care_of: '',
            gender: 'Male',
            mobile:'',
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
                            mobile: this.mobile,
                        }).then(res => {
                           this.$root.successMessage(res.data),
                            this.name='',
                            this.age='',
                            this.care_of='',
                            this.gender='Male',
                            this.address='',
                            this.mobile=''
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
            },
            cancel() {
               this.$router.push({name:'patientList'})
            }
        }
    }