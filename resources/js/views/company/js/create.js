export default {
    data:()=> ({
        valid:true,
        name:'',
        sub_name:'',
        mobile:'',
        email:'',
        address:'',
        emailRules: [
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/company/create', {
                        name: this.name,
                        sub_name: this.sub_name,
                        address:this.address,
                        email: this.email,
                        mobile: this.mobile,
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
            this.sub_name=''
            this.email =''
            this.mobile =''
            this.address=''
            this.$validator.reset()
        },
    }
}