export default {
    data:()=> ({
        valid:true,
        dr_name:'',
        dr_mobile_no:'',
        dr_email:'',
        emailRules: [
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/doctors/create', {
                        dr_name: this.dr_name,
                        dr_email: this.dr_email,
                        dr_mobile_no: this.dr_mobile_no,
                    }).then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
        },
        clear() {
            this.dr_name = ''
            this.dr_email =''
            this.dr_mobile_no =''
            this.$validator.reset()
        },
    }
}