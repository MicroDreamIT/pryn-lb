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
        created(){
          axios.get('/ajax/patient/'+this.$route.params.id+'/edit').then(res=>{
                this.name=res.data.result[0].name
                this.age=res.data.result[0].age
                this.gender=res.data.result[0].gender
                this.mobile=res.data.result[0].mobile
                this.care_of=res.data.result[0].care_of
                this.address=res.data.result[0].address
          })
        },

        methods: {
            submit() {
                this.$validator.validateAll().then(value => {
                    if (value) {
                        axios.patch('/ajax/patient/'+this.$route.params.id+'/update', {
                            name: this.name,
                            age: this.age,
                            care_of: this.care_of,
                            gender: this.gender,
                            address: this.address,
                            mobile: this.mobile,
                        }).then(res => {
                           this.$root.successMessage(res.data),
                               this.$router.push({name:'patientList'})
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