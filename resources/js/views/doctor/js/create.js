export default {
    data:()=> ({
        valid:true,
        name:'',
        mobile:'',
        email:'',
        emailRules: [
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/doctor/create', {
                        name: this.name,
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
            this.email =''
            this.mobile =''
            this.$validator.reset()
        },
    }
}