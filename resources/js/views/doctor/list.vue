<template>
    <data-table
            :url="url"
            :tableHeadline="'Manage Doctor'"
            :headers="headers"
            :addBtnLink="'doctorCreate'"
    >

        <template slot="table" slot-scope="props">
            <td>{{ props.data.name }}</td>
            <td class="text-xs-center">{{ props.data.mobile }}</td>
            <td class="text-xs-center">{{ props.data.email }}</td>
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
            url: 'ajax/doctor/',
            headers: [
                {
                    text: 'Name',
                    align: 'left',
                    value: 'name'
                },
                {text: 'Mobile', value: 'mobile'},
                {text: 'E-mail', value: 'email'},
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