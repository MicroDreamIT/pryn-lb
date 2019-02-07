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
]