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
                     <router-link :to="{name:addBtnLink}"><v-btn color="primary">+ Add</v-btn></router-link>
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
             addBtnLink: {
                type: String,
                default: () => ''
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