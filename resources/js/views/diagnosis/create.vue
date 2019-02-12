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
                                           <v-select
                                                   v-model="name"
                                                   :items="['patient1', 'patient2', 'Other']"
                                                   label="Select Patient"
                                        ></v-select>
<v-text-field
                                             v-model="opinion"
                                             label="Opinion"
                                             :error-messages="errors.collect('opinion')"
                                             clearable
                                     ></v-text-field>

                                    </v-card-text>
                                </v-flex>
                       <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                        <v-select
                                                   v-model="refer_by"
                                                   :items="['doctor1', 'doctor2', 'Other']"
                                                   label="Referred By"
                                        ></v-select>
                                        <v-text-field
                                             v-model="advice"
                                             label="Advice"
                                             :error-messages="errors.collect('advice')"
                                             clearable
                                     ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                      <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                        <v-select
                                                   v-model="test_name"
                                                   :items="['test1', 'test2', 'Other']"
                                                   label="Select Test"
                                        ></v-select>

                                    </v-card-text>


                                </v-flex>

                                <v-flex xs12 md4>
                                    <v-card-actions>
                                        <v-btn @click="submit()" color="primary">submit
                                          <!--<v-icon dark right>check_circle</v-icon>-->
                                        </v-btn>

                                         <v-btn color="red" @click="clear()" dark>Decline
                                          <!--<v-icon dark right>block</v-icon>-->
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                     </v-layout>
              </v-form>

      </v-container>

</template>




<script src="./js/create.js"></script>
