export default {
    data:()=> ({
        valid:true,
        dr_name:'',
        dr_mobile:'',
        dr_email:'',
        emailRules: [
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/doctor/create', {
                        dr_name: this.dr_name,
                        dr_email: this.dr_email,
                        dr_mobile: this.dr_mobile,
                    }).then(res => {
                        this.$root.successMessage(res.data)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
        },
        clear() {
            this.dr_name = ''
            this.dr_email =''
            this.dr_mobile =''
            this.$validator.reset()
        },
    }
}