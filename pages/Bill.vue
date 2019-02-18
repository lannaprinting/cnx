<template>
<div>
  <h1 class="title"> Bill </h1>
  <div class="columns test">
    <div class="column is-three-fifths">
      <input-component :fields="fields" :apply="apply" :cancel="cancel" />
    </div>
    <div class="column">
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque architecto aperiam in maiores facilis possimus consectetur nulla iste magnam alias, accusantium molestias illum, labore eveniet aspernatur nobis amet blanditiis officia?</p> -->
        <div class="card">
            <div class="card-header">
                <p class="card-header-title">Customer <br> header</p>
            </div>
            <div class="card-content">
                <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, at soluta eos harum pariatur beatae libero. Magnam, et doloribus velit optio reiciendis atque aut sit totam deleniti rerum autem porro.</p> -->
                <ul>
                    <li> <b>ขนาดกระดาษ</b> </li>
                    <li> <b>ลงได้</b> </li>
                    <li> <b>ชั้นของกระดาษ</b> </li>
                    <li> <b>จำนวนเล่ม</b> </li>
                    <li> <b>ใช้กระดาษทั้งหมดไปกี่แผ่น</b> </li>
                </ul>
            </div>
            <div class="card-footer">
                <a class="card-footer-item">aaa</a>
                <a class="card-footer-item">aaa</a>
                <a class="card-footer-item">aaa</a>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import InputComponent from '@/components/Bill/InputComponent'
import _ from 'lodash'

import {fireDb} from '@/plugins/Firebase'


let calculateTotalbook = (callback) => {
  let expendBook = []
  for (let i = callback.totalBooks[0]; i <= callback.totalBooks[1]; i++) {
    expendBook.push(i)
  }
  return expendBook
}

export default {
    components: {
        InputComponent
    },

    data () {
        return {
            fields: {
                totalBooks: [],
                generate: []
            },
            test: 'pass'
        }
    },

    methods: {
        apply: function (callback) {
            // console.log(callback)

            let sheetsPerBook = callback.paperLayers.length * 50
            let totalSheets = (sheetsPerBook * calculateTotalbook(callback).length) / callback.paperDivision
            let sheetsPerLayer = totalSheets / callback.paperLayers.length
            // console.log(sheetsPerBook, totalSheets, sheetsPerLayer)

            let path = totalSheets / (callback.paperLayers.length * 200)

            // หารแล้วปัดเศษขึ้น
            path = Math.ceil(path)
            _.times(path, e => {
                this.fields.generate.push({
                    label: 'พาร๋ที่ ' +e,
                    active: false,
                    timeStamp: Date.now()
                })
            })

        },

        cancel: function () {
            this.fields = {
                totalBooks: []
            }
        }
    },
}
</script>

<style lang="scss">
.test {
}
</style>
