<template>

      <v-container grid-list-lg class="form-style">
          <v-form ref="form" v-model="valid" lazy-validation>
                  <v-layout row wrap >
                                <v-flex xs12 md12>
                                    <v-toolbar card   color="secondary">
                                     <v-toolbar-title class="body-2 white--text">Create New Patient</v-toolbar-title>
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

                        <v-select
                                :items="['Male', 'Female', 'Other']"
                                label="Gender"
                                v-model="gender"
                        ></v-select>

                                    <v-text-field
                                            v-model="care_of"
                                            :counter="25"
                                            label="Care of"
                                            clearable
                                    ></v-text-field>
                                    </v-card-text>

                        <v-text-field
                                v-model="mobile"
                                mask="####-############"
                                label="Mobile Number"
                                :counter="25"
                                clearable
                        ></v-text-field>
                         <v-textarea
                            name="address"
                            v-model="address"
                            label="Address"
                            hint="Address goes here"
                            clearable
                          ></v-textarea>
                                </v-flex>
                    <v-card-actions>
                        <v-btn @click="submit()" color="primary">submit</v-btn>
                        <v-btn @click="clear()" color="error">clear</v-btn>
                    </v-card-actions>

                  </v-layout>

          </v-form>
      </v-container>
</template>



<script src="./js/create.js"></script>