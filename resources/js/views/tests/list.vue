<template>
    <data-table
            :url="url"
            :tableHeadline="'Manage Test Item'"
            :headers="headers"
    >
        <template slot="table" slot-scope="props">
            <td>{{ props.data.name }}</td>
            <td class="text-xs-center">{{ props.data.unit}}</td>
            <td class="text-xs-center">{{ props.data.range}}</td>
            <td class="text-xs-center">{{ props.data.type}}</td>
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
            url: 'ajax/tests/',
            headers: [
                {
                    text: 'Name',
                    align: 'left',
                    value: 'name'
                },
                {text: 'Test Name', value: 'name'},
                {text: 'Test Unit', value: 'unit'},
                {text: 'Test Range', value: 'range'},
                {text: 'Test Type', value: 'type'},
                {text: 'Actions', value: 'name', sortable: false}
            ],

        }),
        methods: {}
    }
</script>

<style scoped>

</style>