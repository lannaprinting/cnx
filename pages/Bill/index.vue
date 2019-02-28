<template>
<div>
  <div class="columns">
    <div class="column">
        <h1 class="title"> Bill </h1>
      <input-component :fields="fields" :apply="apply" :cancel="cancel"  />
    </div>
    <div class="column is-three-fifths">
        <div class="field">
            <div class="control has-icons-left">
                <input type="text" class="input is-large" placeholder="ค้นหา" @keyup="search">
                <span class="icon">
                    <i class="fas fa-search"></i>
                </span>
            </div>
        </div>
        <index-component :data="items"/>       
    </div>
  </div>
</div>
</template>

<script>
import InputComponent from '@/components/Bill/InputComponent'
import IndexComponent from '@/components/Bill/IndexComponent'
import _ from 'lodash'
import moment from 'moment'
import Fuse from 'fuse.js'

import Firestore from '@/plugins/boydPlugins'

let Bill = new Firestore('Bills')


let calculateTotalbook = (callback) => {
    return _.range(callback.totalBooks[0], callback.totalBooks[1])
}

export default {
    components: {
        InputComponent,
        IndexComponent
    },

    data () {
        Bill.onSnapshot().then(data => {
            this.items.data = data
            this.data = data
        })
        return {
            fields: {
                totalBooks: [],
                generate: []
            },
            data: [],
            items: {
                data: [],
                config: [
                    {name: 'customerName', label: 'ชื่อลูกค้า'},
                    {name: 'billName', label: 'ชื่อบิล'},
                    {name: 'totalBooks', label: 'จำนวนเล่ม'},
                    {name: 'paperSize', label: 'ขนาด'}
                ],
                route: 'Bill'
            }
        }
    },

    methods: {
        apply: async function (callback) {
            let Book = calculateTotalbook(callback)

            let multiple = 200
            callback.paperLayers.length == 4 ? multiple = 100 : multiple

            // กระดาษต่อ 1 เล่ม
            let sheetsPerBook = callback.paperLayers.length * 50
            // กระดาษที่ใช้ทั้งหมด
            let totalSheets = (sheetsPerBook * (Book.length + 1)) / callback.paperDivision

            // 1 ชั้นใช้กระดาษกี่แผ่น
            let sheetsPerLayer = totalSheets / callback.paperLayers.length

            // แยกพาร์ท
            let path = totalSheets / (callback.paperLayers.length * multiple)
            // หารแล้วปัดเศษขึ้น
            path = Math.ceil(path)
            
            // reset generate
            this.fields.generate = []
            
            // push item to genrate
            _.times(path, e => {
                this.fields.generate.push({
                    label: 'พาร์ทที่ ' + (e+1),
                    active: false,
                    timeStamp: moment().locale('th').format('LLL')
                })
            })

            Bill.addDocument({
                totalSheets: totalSheets, // กระดาษที่ใช้ทั้งหมด
                ...this.fields,
                rangeBook: this.fields.totalBooks,
                totalBooks: Book.length + 1, // จำนวนเล่ม
            })

            // update item
            Bill.onSnapshot().then(data => this.items.data = data)
        },

        cancel: function () {
            this.fields = {
                totalBooks: []
            }
        },

        search: function (event) {
            // console.log('search...')
            // console.log(event.target.value)
           
            this.items.data = new Fuse(this.data, {keys: ['customerName', 'billName']}).search(event.target.value)
            if (event.target.value == '') {
                this.items.data = this.data
            }
        }

    },
}
</script>
