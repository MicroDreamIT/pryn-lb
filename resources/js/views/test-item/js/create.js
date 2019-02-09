export default {
    data:()=> ({
        valid:true,
        test_name:'',
        test_unit:'',
        test_normal_range:'',

        testNames: [
            v => !! v || "Test Name is required",
            v => ( v && v.length <= 50) || "Test Name less than 50 characters "

        ]
    })
}