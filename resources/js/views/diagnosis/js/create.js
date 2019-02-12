export default {
    data:()=> ({
        valid:true,
        patient:{},
        result:'',
        opinion:'',
        advice:'',
        prepared:'',
        checked_by:'',
        technician:'',
        date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
    }),
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/diagnosis/create', {
                        name: this.name,
                        result: this.result,
                        opinion:this.opinion,
                        advice:this.advice,
                        prepared: this.prepared,
                        checked_by: this.checked_by,
                        technician: this.technician,
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
            this.result=''
            this.opinion =''
            this.advice = ''
            this.prepared =''
            this.checked_by=''
            this.$validator.reset()
        },
    }
}