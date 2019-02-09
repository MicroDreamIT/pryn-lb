<template>
    <v-layout row pb-2>
        <v-flex xs8 offset-xs2>
            <v-card class="card--flex-toolbar">
                <v-toolbar card prominent color="primary">
                    <v-toolbar-title class="body-2 white--text">Create New Test</v-toolbar-title>

                </v-toolbar>

                <v-divider></v-divider>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-text>
         <v-text-field
                 v-model="company_name"
                 :counter="40"
                 label="Company Name"
                 required
                 data-vv-name="company_name"
                 v-validate="'required|max:40'"
                 :error-messages="errors.collect('company_name')"
                 clearable
         ></v-text-field>
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
            <v-text-field
                    v-model="company_email"
                    :rules="emailRules"
                    data-vv-name="company_email"
                    label="Company's E-mail"
                    :error-messages="errors.collect('company_email')"
                    clearable
            ></v-text-field>

        <v-card-actions>
            <v-btn @click="submit()" color="primary">submit</v-btn>
            <v-btn @click="clear()" color="error">clear</v-btn>
        </v-card-actions>
        </v-card-text>
    </v-form>

            </v-card>
        </v-flex>
    </v-layout>
</template>

<script src="./js/create.js"></script>
