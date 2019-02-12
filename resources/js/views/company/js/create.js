export default {
    data:()=> ({
        valid:true,
        name:'',
        sub_name:'',
        mobile:'',
        email:'',
        address:'',
        title: "Image Upload",
        dialog: false,
		imageName: '',
		imageUrl: '',
		imageFile: '',
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
        pickFile () {
            this.$refs.image.click ()
        },

		onFilePicked (e) {
			const files = e.target.files
			if(files[0] !== undefined) {
				this.imageName = files[0].name
				if(this.imageName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.imageUrl = fr.result
					this.imageFile = files[0] // this is an image file that can be sent to server...
				})
			} else {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
		}
    },
    }
