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
                                             :counter="50"
                                             label="Test Name"
                                             required
                                             data-vv-name="name"
                                             v-validate="'required|max:50'"
                                             :error-messages="errors.collect('name')"
                                             clearable
                                     ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                       <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="opinion"
                                             :counter="100"
                                             label="Opinion"
                                             :error-messages="errors.collect('opinion')"
                                             clearable
                                     ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                      <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="advice"
                                             :counter="40"
                                             label="Advice"
                                             :error-messages="errors.collect('advice')"
                                             clearable
                                     ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                      <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="prepared"
                                             :counter="40"
                                             label="Prepared by"
                                             :error-messages="errors.collect('prepared')"
                                             clearable
                                     ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                      <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="checked_by"
                                             :counter="40"
                                             label="Checked by"
                                             :error-messages="errors.collect('checked_by')"
                                             clearable
                                     ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                      <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="technician"
                                             :counter="40"
                                             label="Lab Technician"
                                             :error-messages="errors.collect('technician')"
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
