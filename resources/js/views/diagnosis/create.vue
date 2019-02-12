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
        <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Picker without buttons"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
      </v-menu>
                                     </v-card-text>
                                </v-flex>

                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-select
                                                   v-model="patient"
                                                   :items="['test1', 'test2', 'Other']"
                                                   label="Select Patient"
                                        ></v-select>

                                          <v-text-field
                                             v-model="prepared"
                                             :counter="50"
                                             label="Prepared by"
                                             data-vv-name="prepared"
                                             v-validate="'max:50'"
                                             :error-messages="errors.collect('prepared')"
                                             clearable
                                     ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                       <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="opinion"
                                             label="Opinion"
                                             :error-messages="errors.collect('opinion')"
                                             clearable
                                     ></v-text-field>

                                          <v-text-field
                                             v-model="checked_by"
                                             :counter="50"
                                             label="Checked by"
                                             data-vv-name="checked_by"
                                             v-validate="'max:50'"
                                             :error-messages="errors.collect('checked_by')"
                                             clearable
                                     ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                      <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="advice"
                                             label="Advice"
                                             :error-messages="errors.collect('advice')"
                                             clearable
                                     ></v-text-field>
                                          <v-text-field
                                                     v-model="technician"
                                                     :counter="50"
                                                     label="Lab Technician"
                                                     data-vv-name="technician"
                                                     v-validate="'max:50'"
                                                     :error-messages="errors.collect('technician')"
                                                     clearable
                                     ></v-text-field>
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
