<template>
  <div class="card">
    <!-- <pre> {{item}} </pre>  -->
    <div class="card-header">
      <p class="card-header-title"> {{item.customerName}} {{item.billName}} </p>
    </div>
    <div class="card-content">
      <ul>
        <li> <b>ขนาดกระดาษ</b> {{item.paperSize}} </li>
        <li> <b>ลงได้</b> {{item.paperDivision}} </li>
        <li> <b>ชั้นของกระดาษ</b> <span v-for="(paper, index) in item.paperLayers" :key="index"> {{paper.label}} </span>
        </li>
        <li> <b>จำนวนเล่ม</b> {{item.totalBooks}} </li>
        <li v-if="item.rangeBook"> <b>เริ่มเล่มที่</b> {{item.rangeBook[0]}} <b>ถึงเล่มที่</b> {{item.rangeBook[1]}}  </li>
        <li> <b>ใช้กระดาษทั้งหมดไปกี่แผ่น</b> {{item.totalSheets}}</li>
      </ul> <br>
      <div class="tags are-medium">
        <span class="tag" :class="i.active ? 'is-primary': ''" v-for="(i, index) in item.generate" :key="index" @click="active(index)">
            <i v-if="!i.active">{{i.label}}</i>
            <b v-else> {{i.label}} {{i.timeStamp}} </b>
        </span>
      </div>
    </div>
    <div class="card-footer">
      <nuxt-link to="/Bill" class="card-footer-item">ย้อนกับ</nuxt-link>
      <a class="card-footer-item is-danger" @click="remove"> ลบ </a>
    </div>
  </div>
</template>

<script>
import Firestore from '@/plugins/boydPlugins'
import moment from 'moment'

let Bill = new Firestore('Bills')
export default {
    async asyncData ({params}) {
        let item = await Bill.getDocumentByName(params.id)
        return {
            item: item
        }
    },
    
    methods: {
        remove: function () {
            const id = this.$route.params.id
            if (confirm('ต้องการลบหรือไม่')) {
                Bill.removeDocument(id).then(data => {
                    this.$router.push('/Bill')
                })
            }
        },

        active: function (index) {
            // console.log('pass')
            // console.log(this.item.generate[index])
            const id = this.$route.params.id
            this.item.generate[index].active = !this.item.generate[index].active
            this.item.generate[index].timeStamp = moment().locale('th').format('LLL')
            Bill.updateDocumentByName(id, this.item)
        }
    }
}
</script>

<style>

</style>
