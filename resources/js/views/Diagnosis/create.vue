<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-select
        v-model="test-select"
        :items="Items"
        :rules ="[v => !! v || 'Test selection is required']''"
        label="Test Name"
        required
        >
        </v-select>
        <v-text-field v-model="test-result" :counter="50" :rules="testRules" label="Test result" required></v-text-field>
        <v-card-actions>
            <v-btn @click="submit()" color="primary">submit</v-btn>
            <v-btn @click="addnew()" color="primary">Add new</v-btn>
            <v-btn @click="clear()" color="error">clear</v-btn>
        </v-card-actions>
    </v-form>
</template>

<script src="./js/create.js"></script>
