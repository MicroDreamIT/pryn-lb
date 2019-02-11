<template>

    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <v-toolbar flat color="white">
                    <v-toolbar-title>{{tableHeadline}}</v-toolbar-title>
                    <v-divider
                            class="mx-2"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.protein"
                                                          label="Protein (g)"></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
                <v-data-table
                        :headers="headers"
                        :items="items"
                        :pagination.sync="pagination"
                        :total-items="pagination.totalItems"
                        :loading="loading"
                        class="elevation-1"
                        :rows-per-page-items="[5,10,50,100,200]"
                        @update:pagination="getData"
                >
                    <template slot="items" slot-scope="props">
                         <slot name="table" :data="props.item"></slot>
                    </template>

                    <template slot="no-data">
                        <v-btn color="primary" @click="getData">Reset</v-btn>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    export default {
        props: {
            url: {
                type: String,
                default: () => ''
            },
            tableHeadline: {
                type: String,
                default: () => ''
            },
            headers: {
                type: Array,
                default: () => []
            },
        },
        data: () => ({
            dialog: false,
            loading: false,
            items: [],
            totalItem: 0,
            editedIndex: -1,
            pagination: {},

            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            },

        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            }
        },

        watch: {
            dialog(val) {
                val || this.close()
            }
        },

        methods: {
            getData() {
                this.loading=true
                axios(this.url, {
                    params: {
                        rowsPerPage: this.pagination.rowsPerPage,
                        sortBy: this.pagination.sortBy,
                        sortOrder: this.pagination.descending?'ASC':'DESC',
                        page: this.pagination.page,
                    }
                }).then(res => {
                    this.items = res.data.data
                     this.loading=false
                    this.pagination.totalItems = res.data.totalItems
                })
            },

            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.items[this.editedIndex], this.editedItem)
                } else {
                    this.items.push(this.editedItem)
                }
                this.close()
            }
        }
    }
</script>

<style scoped>

</style>