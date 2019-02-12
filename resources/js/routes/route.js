module.exports = [
    {
        path: '/home',
        name: 'dashboard',
        component: require('../views/home').default
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
        path: '/patient/:id/edit',
        name: 'patientEdit',
        component: require('../views/patient/edit').default
    },
    {
        path: '/patient/edit',
        name: 'patientEdit',
        component: require('../views/patient/edit').default
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
        path: '/test',
        name: 'testsList',
        component: require('../views/tests/list').default
    },

    {
        path: '/doctor/create',
        name: 'doctorCreate',
        component: require('../views/doctor/create').default
    },
     {
        path: '/doctor',
        name: 'doctorList',
        component: require('../views/doctor/list').default
    },
    {
        path: '/diagnosis/create',
        name: 'diagnosisCreate',
        component: require('../views/diagnosis/create').default
    },
]