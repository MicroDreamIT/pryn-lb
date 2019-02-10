<template>

      <v-container grid-list-lg class="form-style">
          <v-form ref="form" v-model="valid" lazy-validation>
                  <v-layout row wrap >
                                <v-flex xs12 md12>
                                    <v-toolbar card prominent color="deep-purple">
                                     <v-toolbar-title class="body-2 white--text">Create New Patient</v-toolbar-title>
                                </v-toolbar>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="company_name"
                                             :counter="40"
                                             label="Company Name"
                                             required
                                             data-vv-name="company_name"
                                             v-validate="'required|max:40'"
                                             :error-messages="errors.collect('company_name')"  >

                                           </v-text-field>

                                          <v-text-field
                                            v-model="company_mobile_no"
                                            mask="####-###########"
                                            required
                                            data-vv-name="company_mobile_no"
                                            label="Company's Mobile No."
                                            :counter="25"
                                            v-validate="'required|max:25'"
                                            :error-messages="errors.collect('company_mobile_no')"
                                            clearable
                                        ></v-text-field>
                                    </v-card-text>
                                </v-flex>

                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                       <v-text-field
                                     v-model="company_sub_name"
                                     :counter="50"
                                     label="Company Sub Name"
                                     required
                                     data-vv-name="company_sub_name"
                                     v-validate="'required|max:50'"
                                     :error-messages="errors.collect('company_sub_name')"
                                     clearable
                                         ></v-text-field>

                                          <v-text-field
                                                v-model="company_email"
                                                :rules="emailRules"
                                                data-vv-name="company_email"
                                                label="Company's E-mail"
                                                :error-messages="errors.collect('company_email')"
                                                clearable
                                        ></v-text-field>

                                    </v-card-text>

                                </v-flex>

                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                         <v-text-field
                                                         v-model="company_address"
                                                         :counter="50"
                                                         label="Company Address"
                                                         required
                                                         data-vv-name="company_address"
                                                         v-validate="'required|max:50'"
                                                         :error-messages="errors.collect('company_address')"
                                                         clearable
                                                 ></v-text-field>
                                         <v-text-field
                                                v-model="company_email"
                                                :rules="emailRules"
                                                data-vv-name="company_email"
                                                label="Company's E-mail"
                                                :error-messages="errors.collect('company_email')"
                                                clearable
                                        ></v-text-field>
                                    </v-card-text>

                                </v-flex>

                                <v-flex xs12 md12>
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
