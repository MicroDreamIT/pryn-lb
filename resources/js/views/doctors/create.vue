<template>

      <v-container grid-list-lg class="form-style">
          <v-form ref="form" v-model="valid" lazy-validation>
                  <v-layout row wrap >
                                <v-flex xs12 md12>
                                    <v-toolbar card   color="secondary">
                                     <v-toolbar-title class="body-2 white--text">Create New Doctor</v-toolbar-title>
                                </v-toolbar>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                                 v-model="dr_name"
                                                 :counter="30"
                                                 label="Doctor Name"
                                                 required
                                                 data-vv-name="dr_name"
                                                 v-validate="'required|max:30'"
                                                 :error-messages="errors.collect('dr_name')"
                                                 clearable
                                         ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                          <v-text-field
                                                v-model="dr_mobile_no"
                                                mask="####-###########"
                                                required
                                                data-vv-name="dr_mobile_no"
                                                label="Doctor's Mobile No."
                                                :counter="25"
                                                v-validate="'required|max:25'"
                                                :error-messages="errors.collect('dr_mobile_no')"
                                                clearable
                                            ></v-text-field>
                                    </v-card-text>

                                </v-flex>
                                <v-flex xs12 md4>

                                    <v-card-text class="px-0">
                                                     <v-text-field
                                                        v-model="dr_email"
                                                        :rules="emailRules"
                                                        data-vv-name="dr_email"
                                                        label="Doctor's E-mail"
                                                        :error-messages="errors.collect('dr_email')"
                                                        clearable
                                                ></v-text-field>

                                    </v-card-text>

                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card-actions>
                                        <v-btn @click="submit()" color="primary">submit
                                          <v-icon dark right>check_circle</v-icon>
                                        </v-btn>

                                         <v-btn color="red" @click="clear()" dark>Decline
                                          <v-icon dark right>block</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                     </v-layout>
              </v-form>

      </v-container>

</template>





<script src="./js/create.js"></script>
