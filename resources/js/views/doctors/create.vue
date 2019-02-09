<template>
    <v-layout row pb-2>
        <v-flex xs8 offset-xs2>
            <v-card class="card--flex-toolbar">
                <v-toolbar card prominent color="primary">
                    <v-toolbar-title class="body-2 white--text">Create New Doctor</v-toolbar-title>

                </v-toolbar>

                <v-divider></v-divider>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-text>
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
            <v-text-field
                    v-model="dr_email"
                    :rules="emailRules"
                    data-vv-name="dr_email"
                    label="Doctor's E-mail"
                    :error-messages="errors.collect('dr_email')"
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
