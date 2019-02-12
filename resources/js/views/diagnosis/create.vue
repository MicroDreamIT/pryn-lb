<template>

    <v-container grid-list-lg class="form-style">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout row wrap>
                <v-flex xs12 md12>
                    <v-toolbar card color="primary">
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
                                    label="Date"
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

                    </v-card-text>
                </v-flex>

                 <v-flex xs12 md4>

                </v-flex>
                <template>
                <v-layout v-for="(count,index) in appendCount" :key="index">
                 <v-flex xs12 md3>
                    <v-card-text class="px-0">
                        <v-select
                                v-model="type"
                                :items="['test1', 'test2', 'Other']"
                                label="Diagnosis Type"
                        ></v-select>

                    </v-card-text>
                </v-flex>
                <v-flex xs12 md4>
                    <v-card-text class="px-0">
                        <v-select
                                v-model="test"
                                :items="['test1', 'test2', 'Other']"
                                label="Test Name"
                        ></v-select>

                    </v-card-text>
                </v-flex>
                <v-flex xs12 md4>
                    <v-card-text class="px-0">
                          <v-text-field
                                v-model="result"
                                label="Result"
                                required
                                data-vv-name="result"
                                :error-messages="errors.collect('result')"
                                clearable
                        ></v-text-field>

                    </v-card-text>
                </v-flex>
                  <v-flex xs1 md1 v-if="count==1">
                    <v-card-text class="px-0">
                          <v-btn @click="addMore()" color="primary">+ Add
                            <!--<v-icon dark right>check_circle</v-icon>-->
                        </v-btn>

                    </v-card-text>
                </v-flex>
                </v-layout>

            </template>

                <v-flex xs12 md12>
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
