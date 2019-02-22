<template>
    <div>
        <h1 class="title">Book</h1>
        <div class="columns">
            <div class="column">
               <input-component :fields="value" :apply="apply" />
            </div>
            <div class="column is-three-fifths">
                <index-component :data="data" />
            </div>
        </div>
    </div>
</template>

<script>
import Material from '@/assets/data.json'
import InputComponent from "@/components/Book/InputComponent"
import IndexComponent from "@/components/Book/IndexComponent"
import Firebase from '@/plugins/boydPlugins'

const Book = new Firebase('Books')

import moment from 'moment'
export default {
    components: {
        IndexComponent,
        InputComponent
    },
    data () {
        Book.onSnapshot().then(data => {
            this.data.data = data
        })
        return {
            data: {
                route: 'Book',
                data: [],
                config: [
                    {field: 'customerName', label: 'ชื่อ'},
                    {field: 'paperMaterial', label: 'วัสดุ'},
                    {field: 'total', label: 'จำนวน'}
                ]
            },
            value: {},
            material: Material,
            resault: {}
        }
    },

    methods: {
        apply: function (value) {
            Book.addDocument({
                ...value,
                timeStape: moment().locale('th').format('LLL'),
                process: 0
            }).then(data => this.data.data = data)
        }
    }
}
</script>

<style>

</style>
