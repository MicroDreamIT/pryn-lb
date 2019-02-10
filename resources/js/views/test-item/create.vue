<template>

      <v-container grid-list-lg class="form-style">
          <v-form ref="form" v-model="valid" lazy-validation>
                  <v-layout row wrap >
                                <v-flex xs12 md12>
                                    <v-toolbar card   color="primary">
                                     <v-toolbar-title class="body-2 white--text">Create New Patient</v-toolbar-title>
                                </v-toolbar>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="test_name"
                                             :counter="50"
                                             label="Test Name"
                                             required
                                             data-vv-name="test_name"
                                             v-validate="'required|max:50'"
                                             :error-messages="errors.collect('test_name')"
                                             clearable
                                     ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                                     <v-text-field
                                                     v-model="test_unit"
                                                     :counter="10"
                                                     label="Test Unit"
                                                     required
                                                     data-vv-name="test_unit"
                                                     v-validate="'required|max:10'"
                                                     :error-messages="errors.collect('test_unit')"
                                                     clearable
                                             ></v-text-field>
                                    </v-card-text>

                                </v-flex>
                                <v-flex xs12 md4>

                                    <v-card-text class="px-0">
                                                 <v-text-field
                                                     v-model="test_normal_range"
                                                     :counter="30"
                                                     label="Normal Range"
                                                     data-vv-name="test_normal_range"
                                                     v-validate="'required|max:30'"
                                                     :error-messages="errors.collect('test_normal_range')"
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
