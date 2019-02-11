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
                                             v-model="name"
                                             :counter="50"
                                             label="Test Name"
                                             required
                                             data-vv-name="name"
                                             v-validate="'required|max:50'"
                                             :error-messages="errors.collect('name')"
                                             clearable
                                     ></v-text-field>
                                        <v-select
                                                :items="['Heamatological', 'Immunological', 'Other']"
                                             label="Test type"
                                             v-model="type"
                                        ></v-select>
                                    </v-card-text>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                                     <v-text-field
                                                     v-model="unit"
                                                     :counter="10"
                                                     label="Test Unit"
                                                     :error-messages="errors.collect('unit')"
                                                     clearable
                                             ></v-text-field>
                                    </v-card-text>

                                </v-flex>
                                <v-flex xs12 md4>

                                    <v-card-text class="px-0">
                                                 <v-text-field
                                                     v-model="range"
                                                     :counter="30"
                                                     label="Normal Range"
                                                     :error-messages="errors.collect('range')"
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