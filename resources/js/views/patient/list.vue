<template>
    <data-table
            :url="url"
            :tableHeadline="'Manage Patient'"
            :headers="headers"


    >
        <template slot="table" slot-scope="props">
            <td>{{ props.data.name }}</td>
            <td class="text-xs-center">{{ props.data.age }}</td>
            <td class="text-xs-center">{{ props.data.gender }}</td>
            <td class="text-xs-center">{{ props.data.mobile }}</td>
            <td class="text-xs-center">{{ props.data.care_of }}</td>
            <td class="text-xs-center">{{ props.data.address }}</td>
            <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.data)">edit</v-icon>
                <v-icon small @click="deleteItem(props.data)"> delete</v-icon>
            </td>

        </template>
    </data-table>


</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            url: 'ajax/patient/',
            headers: [
                {
                    text: 'Name',
                    align: 'left',
                    value: 'name'
                },
                {text: 'Age', value: 'age'},
                {text: 'Gender', value: 'gender'},
                {text: 'Mobile', value: 'mobile'},
                {text: 'Care of', value: 'care_of'},
                {text: 'Address', value: 'address'},
                {text: 'Actions', value: 'name', sortable: false}
            ],

        }),
        methods: {
            editItem(item) {
                alert('I am Edit Item')
            },

            deleteItem(item) {

               alert('I am delete bro')
            },
        }
    }
</script>

<style scoped>

</style>