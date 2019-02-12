export default {
    data:()=> ({
        urine:{
            physical:[
                {name:'color',value:'k'},
                {name:'appearance',value:''},
                {name:'volume',value:''},
                {name:'sediment',value:''},
                {name:'specifie gravity',value:''},
            ],
            chemical:[
                {name:'reaction',value:''},
                {name:'bence-jones protien',value:''},
                {name:'excess phosphate',value:''},
                {name:'albumin',value:''},
                {name:'sugar',value:''},
                {name:'acetone',value:''},
                {name:'bile salts',value:''},
                {name:'urobilinogen',value:''},
            ],
            microscopic:[
                {name:'epithelial cells',value:''},
                {name:'RBC',value:''},
                {name:'pus cells',value:''},
                {name:'casts',value:''},
                {name:'crystals',value:''},
                {name:'a) amor phosphate',value:''},
                {name:'b) tripole phosphate',value:''},
                {name:'c) cal. oxalate/uric acid',value:''},
                {name:'spermatoz',value:''},
                {name:'24. hr urine vol',value:''},
                {name:'24. hr urine protein',value:''},
                {name:'creatinine clearance',value:''},
                {name:'24. hr total urine sugar',value:''},
                {name:'24. hr urine calcium',value:''},
                {name:'sodium',value:''},
                {name:'potassium',value:''},
                {name:'osmolality',value:''},
            ]
        },
        cbc:[
            {name:'WBC',value:''},
            {name:'RBC',value:''},
            {name:'PCV',value:''},
            {name:'MCV',value:''},
            {name:'MCH',value:''},
            {name:'MCHC',value:''},
            {name:'HGB (haemoglobin) (cyn meth method)',value:''},
            {name:'ESR (westergren)',value:''},
            {name:'neutrophils',value:''},
            {name:'lymphocytes',value:''},
            {name:'eosinophils',value:''},
            {name:'basophils',value:''},
            {name:'monocyters',value:''},
            {name:'platelets count',value:''},
            {name:'reticulocyte count',value:''},
            {name:'MP',value:''},
            {name:'BT',value:''},
            {name:'CT',value:''},
        ],
        widal:[
            {name:'TO',value:''},
            {name:'TH',value:''},
            {name:'AH',value:''},
            {name:'BH',value:''},

        ],
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