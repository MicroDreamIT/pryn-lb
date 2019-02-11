module.exports = [
    {
        path: '/patient/home',
        name: 'dashboard',
        component: require('../views/patient/home').default
    },
     {
        path: '/patient/create',
        name: 'patientCreate',
        component: require('../views/patient/create').default
    },
      {
        path: '/patient',
        name: 'patientList',
        component: require('../views/patient/list').default
    },
    {
        path: '/company/create',
        name: 'companyCreate',
        component: require('../views/company/create').default
    },
    {
        path: '/test/create',
        name: 'testsCreate',
        component: require('../views/tests/create').default
    },

    {
        path: '/doctor/create',
        name: 'doctorCreate',
        component: require('../views/doctor/create').default
    },
    {
        path: '/diagnosis/create',
        name: 'diagnosisCreate',
        component: require('../views/diagnosis/create').default
    },


]