<template>

      <v-container grid-list-lg class="form-style">
          <v-form ref="form" v-model="valid" lazy-validation>
                  <v-layout row wrap >
                                <v-flex xs12 md12>
                                    <v-toolbar card   color="primary">
                                     <v-toolbar-title class="body-2 white--text">Create New Company</v-toolbar-title>
                                </v-toolbar>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                           <v-text-field
                                             v-model="name"
                                             :counter="50"
                                             label="Company Name"
                                             required
                                             data-vv-name="name"
                                             v-validate="'required|max:50'"
                                             :error-messages="errors.collect('name')"  >

                                           </v-text-field>

                                          <v-text-field
                                            v-model="mobile"
                                            mask="###-################"
                                            required
                                            data-vv-name="mobile"
                                            label="Company Mobile No."
                                            :counter="20"
                                            v-validate="'required|max:20'"
                                            :error-messages="errors.collect('mobile')"
                                            clearable
                                        ></v-text-field>
                                    </v-card-text>
                                </v-flex>

                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                       <v-text-field
                                     v-model="sub_name"
                                     :counter="50"
                                     data-vv-name="sub_name"
                                     label="Company Sub Name"
                                     v-validate="'max:20'"
                                     :error-messages="errors.collect('sub_name')"
                                     clearable
                                         ></v-text-field>

                                          <v-text-field
                                                v-model="email"
                                                :rules="emailRules"
                                                data-vv-name="email"
                                                :counter="30"
                                                label="Company E-mail"
                                                v-validate="'max:30'"
                                                :error-messages="errors.collect('email')"
                                                clearable
                                        ></v-text-field>

                                    </v-card-text>

                                </v-flex>

                                <v-flex xs12 md4>
                                    <v-card-text class="px-0">
                                         <v-text-field
                                                         v-model="address"
                                                         :counter="100"
                                                         label="Company Address"
                                                         required
                                                         data-vv-name="address"
                                                         v-validate="'required|max:100'"
                                                         :error-messages="errors.collect('address')"
                                                         clearable
                                                 ></v-text-field>
                                    </v-card-text>

                                </v-flex>
<v-flex xs12 md4>
					<img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Select Company Logo" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
					<input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
				</v-flex>
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
