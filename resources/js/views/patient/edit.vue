<template>

    <v-container grid-list-lg class="form-style">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout row wrap>
                <v-flex xs12 md12>
                    <v-toolbar card color="primary">
                        <v-toolbar-title class="body-2 white--text">Update Patient</v-toolbar-title>
                    </v-toolbar>
                </v-flex>
                <v-flex xs12 md4>
                    <v-card-text class="px-0">
                        <v-text-field
                                v-model="name"
                                :counter="25"
                                label="Name"
                                required
                                data-vv-name="name"
                                v-validate="'required|max:25'"
                                :error-messages="errors.collect('name')"
                                clearable
                        ></v-text-field>

                        <v-text-field
                                v-model="age"
                                :counter="3"
                                label="Age"
                                required
                                mask="###"
                                data-vv-name="age"
                                v-validate="'required|between:0.1,150'"
                                :error-messages="errors.collect('age')"
                                clearable
                        ></v-text-field>

                    </v-card-text>
                </v-flex>
                <v-flex xs12 md4>
                    <v-card-text class="px-0">
                        <v-select
                                :items="['Male', 'Female', 'Other']"
                                label="Gender"
                                v-model="gender"
                        ></v-select>

                        <v-text-field
                                v-model="care_of"
                                :counter="50"
                                label="Care of"
                                data-vv-name="care_of"
                                v-validate="'max:50'"
                                :error-messages="errors.collect('care_of')"
                                clearable
                        ></v-text-field>
                    </v-card-text>

                </v-flex>
                <v-flex xs12 md4>

                    <v-card-text class="px-0">
                        <v-text-field
                                v-model="mobile"
                                mask="####-###############"
                                label="Mobile Number"
                                :counter="20"
                                data-vv-name="mobile"
                                v-validate="'max:50'"
                                :error-messages="errors.collect('mobile')"
                                clearable
                        ></v-text-field>
                        <v-textarea
                                name="address"
                                v-model="address"
                                label="Address"
                                :counter="100"
                                data-vv-name="address"
                                v-validate="'max:100'"
                                :error-messages="errors.collect('address')"
                                clearable
                        ></v-textarea>

                    </v-card-text>

                </v-flex>
                <v-flex xs12 md4>
                    <v-card-actions>
                        <v-btn @click="submit()" color="primary">
                            submit
                            <!--<v-icon dark right>check_circle</v-icon>-->
                        </v-btn>

                        <v-btn color="red" @click="cancel()" dark>
                            Cancel
                            <!--<v-icon dark right>block</v-icon>-->
                        </v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-form>

    </v-container>

</template>


<script src="./js/edit.js"></script>
