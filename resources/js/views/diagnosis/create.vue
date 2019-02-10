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
                 v-model="test_name"
                 :counter="50"
                 label="Test Name"
                 required
                 data-vv-name="test_name"
                 v-validate="'required|max:50'"
                 :error-messages="errors.collect('test_name')"
                 clearable
         ></v-text-field>
        <v-text-field
                 v-model="test_unit"
                 :counter="10"
                 label="Test Unit"
                 required
                 data-vv-name="test_unit"
                 v-validate="'max:10'"
                 :error-messages="errors.collect('test_unit')"
                 clearable
         ></v-text-field>
        <v-text-field
                 v-model="test_range"
                 :counter="30"
                 label="Normal Range"
                 data-vv-name="test_range"
                 v-validate="'max:30'"
                 :error-messages="errors.collect('test_range')"
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
