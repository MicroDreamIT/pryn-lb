<template>

    <v-layout row pb-2>
        <v-flex xs8 offset-xs2>
            <v-card class="card--flex-toolbar">
                <v-toolbar card prominent color="primary">
                    <v-toolbar-title class="body-2 white--text">Create New Patient</v-toolbar-title>

                </v-toolbar>

                <v-divider></v-divider>
                <v-form ref="form" v-model="valid" lazy-validation>

                    <v-card-text>

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

                        <v-select
                                :items="['Male', 'Female', 'Other']"
                                label="Gender"
                                v-model="gender"
                                required
                                data-vv-name="gender"
                                v-validate="'required'"
                                :error-messages="errors.collect('gender')"
                        ></v-select>

                        <v-text-field
                                v-model="care_of"
                                :counter="25"
                                label="Care of"
                                clearable
                        ></v-text-field>

                        <v-text-field
                                v-model="mobile_number"
                                mask="####-###########"
                                required
                                label="Mobile"
                                :counter="25"
                                clearable
                                v-validate="'required'"
                        ></v-text-field>
                         <v-textarea
                            name="address"
                            v-model="address"
                            label="Address"
                            hint="Address goes here"
                          ></v-textarea>


                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="submit()" color="primary">submit</v-btn>
                        <v-btn @click="clear()" color="error">clear</v-btn>
                    </v-card-actions>

                </v-form>

            </v-card>
        </v-flex>
    </v-layout>

</template>

<script src="./js/create.js"></script>