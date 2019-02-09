export default {
    data:()=> ({
        valid:true,
        company_name:'',
        company_sub_name:'',
        company_mobile_no:'',
        company_email:'',
        company_address:'',
        emailRules: [
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/company/create', {
                        company_name: this.company_name,
                        company_sub_name: this.company_sub_name,
                        company_address:this.company_address,
                        company_email: this.company_email,
                        company_mobile_no: this.company_mobile_no,
                    }).then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
        },
        clear() {
            this.company_name = ''
            this.company_sub_name=''
            this.company_email =''
            this.company_mobile_no =''
            this.company_address=''
            this.$validator.reset()
        },
    }
}