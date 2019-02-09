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
    <v-text-field v-model="test-result" :counter="50"
    </v-form>
</template>

<script>
    export default {
        name: "create.vue"
    }
</script>

<style scoped>

</style>