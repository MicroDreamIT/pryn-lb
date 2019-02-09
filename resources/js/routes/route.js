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
        path: '/company/create',
        name: 'companyCreate',
        component: require('../views/company/create').default
    },
    {
        path: '/test-item/create',
        name: 'test-itemCreate',
        component: require('../views/test-item/create').default
    },
    {
        path: '/doctors/create',
        name: 'doctorsCreate',
        component: require('../views/doctors/create').default
    },
]