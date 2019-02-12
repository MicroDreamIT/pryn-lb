export default {
    data:()=> ({
        valid:true,
        patient:{},
        result:'',
        type:'',
        test:'',
        referred_by:'',
        checked_by:'',
        technician:'',
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        reportData:[
            {
                type:'',
                test:'',
                result:'',
                lab_no:''
            }
        ],
    }),
    created(){
      axios.get('/ajax/diagnosis/create').then(res=>{
            console.log('hi')
      })
    },
    methods: {
        submit() {
            this.$validator.validateAll().then(value => {
                if (value) {
                    axios.post('/ajax/diagnosis/store', {
                        date: this.date,
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
        addMore(){
                this.reportData.push({ type:'', test:'',result:'',lab_no:''})
        },
        removeMore(index){
            this.reportData.splice(index,1)
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