<template>
    <v-form ref="form" v-model="valid" lazy-validation>
         <v-text-field
                 v-model="test_name"
                 :counter="50" :rules="testNames" label="Test Name" required></v-text-field>
        <v-text-field v-model="test_unit" :counter="15" :rules="unitRules" label="Unit" ></v-text-field>
        <v-text-field v-model="test_normal_range" :counter="45" :rules="rangeRules" label="Normal Ranges" ></v-text-field>
        <v-card-actions>
            <v-btn @click="submit()" color="primary">submit</v-btn>
            <v-btn @click="clear()" color="error">clear</v-btn>
        </v-card-actions>
    </v-form>
</template>

<script src="./js/create.js"></script>
