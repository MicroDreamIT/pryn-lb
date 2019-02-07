<template>
    <div>
        <h1>Create Patient</h1>
        <v-form v-model="valid">
            <v-container>
                <v-layout>
                    <v-flex>
                         <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            :counter="25"
                            label="name"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex>
                         <v-text-field
                            v-model="age"
                            :rules="ageRules"
                            :counter="3"
                            label="age"
                            required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        data:()=>({
            valid:false,
            name:'',
            age:0,
            ageRules:[
                v=>!!v||'Age required',
                v=>v>0 && v.length<4 ||'age must be greater than 0 and less then 999',
            ],
            nameRules:[
                v=>!!v||'Name is required',
                v=>v.length<=25||'name must be less thn 10 characters'
            ]
        })
    }
</script>