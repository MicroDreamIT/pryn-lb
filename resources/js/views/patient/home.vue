<template>
    <div>

        <v-card class="dashboard-content-adjust">

            <v-container fluid grid-list-lg>
                <v-layout>
                    <v-flex xs12>
                        <v-card class="pt-2 pl-2 pb-2 primary--text">
                            <h3>
                                <i class="mdi mdi-apps"></i> Dashboard
                            </h3>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-flex xs12 md4>
                        <v-card color="#6CCAC7" class="white--text">
                            <v-layout row>
                                <v-flex xs5>
                                    <v-img class="dashboard-icons"
                                           src="https://cdn4.iconfinder.com/data/icons/medical-14/512/9-512.png"
                                           height="125px"
                                           contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Doctors</div>
                                            <div>402</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-2">
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-card color="indigo" class="white--text">
                            <v-layout row>
                                <v-flex xs5>
                                    <v-img class="dashboard-icons"
                                           src="https://cdn3.iconfinder.com/data/icons/medical-health-care-blue-series-set-2/64/nurse_blue-02-512.png"
                                           height="125px"
                                           contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Nurse</div>
                                            <div>122</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-2">
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-card color="cyan" class="white--text">
                            <v-layout row>
                                <v-flex xs5>
                                    <v-img class="dashboard-icons"
                                           src="https://png.pngtree.com/svg/20150911/pharmacist_900254.png"
                                           height="125px"
                                           contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Pharmacist</div>
                                            <div>40</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-2">
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-card color="orange" class="white--text">
                            <v-layout row>
                                <v-flex xs5>
                                    <v-img class="dashboard-icons"
                                           src="https://cdn2.iconfinder.com/data/icons/modern-life/512/microscope-512.png"
                                           height="125px"
                                           contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Laboratorist</div>
                                            <div>54</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-2">
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-card color="blue-grey" class="white--text">
                            <v-layout row>
                                <v-flex xs5>
                                    <v-img class="dashboard-icons"
                                           src="https://cdn4.iconfinder.com/data/icons/businessman/100/Accountant-512.png"
                                           height="125px"
                                           contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Accountant</div>
                                            <div>42</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-2">
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-card color="amber" class="white--text">
                            <v-layout row>
                                <v-flex xs5>
                                    <v-img class="dashboard-icons"
                                           src="https://www.freeiconspng.com/uploads/patient-icon-9.png"
                                           height="125px"
                                           contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Patient</div>
                                            <div>126</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-2">
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-card color="green" class="white--text">
                            <v-layout row>
                                <v-flex xs5>
                                    <v-img class="dashboard-icons"
                                           src="https://www.shareicon.net/download/2016/11/15/853280_medical_512x512.png"
                                           height="125px"
                                           contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Madicines</div>
                                            <div>12</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-2">
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-card color="brown" class="white--text">
                            <v-layout row>
                                <v-flex xs5>
                                    <v-img class="dashboard-icons"
                                           src="https://www.shareicon.net/download/2015/11/27/678434_people_512x512.png"
                                           height="125px"
                                           contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Beds</div>
                                            <div>42</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-2">
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-card color="grey" class="white--text">
                            <v-layout row>
                                <v-flex xs5>
                                    <v-img class="dashboard-icons"
                                           src="https://cdn0.iconfinder.com/data/icons/medical-101/64/Medical-03-512.png"
                                           height="125px"
                                           contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Others</div>
                                            <div>42</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-2">
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "home.vue"
    }
</script>

<style scoped>

</style>