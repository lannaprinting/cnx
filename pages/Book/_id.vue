<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title">
                {{item.customerName}}
                {{item.title}}
            </p>
        </div>
        <div class="card-content">
            <div class="columns">
                <div class="column">
                    <ul>
                        <li> <b>ขนาดงาน</b> {{item.artworkSize}} </li>
                        <li> <b>แกรม</b> {{item.paperGrams}} </li>
                        <li> <b>วัสดุ</b> {{item.paperMaterial}} </li>
                        <li> <b>ขนาดกระดาษ</b> {{item.paperSize}} </li>
                        <li> <b>วันที่</b> {{item.timeStamp}} </li>
                        <li> <b>จำนวนหน้า</b> {{item.totalPages}} </li>
                        <li> <b>ประเภทงาน</b> {{item.type}} </li>
                    </ul>
                </div>
                <div class="column is-three-fifths state">
                    <span> จำนวนทั้งหมด {{item.total}} </span>
                    <p>{{item.process}}</p>
                    <!-- <div class="field">
                        <div class="control">
                        <span>พิมพ์ได้</span> 
                            <span class="is-size-1"> {{item.process}} </span>
                        </div>
                    </div> !-->
                    <div class="field is-grouped is-grouped-centered">
                        <div class="control">
                            <button class="button is-light" @click="decrement">-</button>
                        </div>
                        <div class="control">
                            <button v-if="item.total != item.process" class="button is-primary" @click="increment">+</button>
                            <button v-else class="button is-primary" disabled @click="increment">เสร็จสิ้น</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-footer">
            <nuxt-link to="/Book" class="card-footer-item">ย้อนกับ</nuxt-link>
            <a @click="remove" class="card-footer-item">ลบ</a>
        </div>
        <!-- <pre> {{item}} </pre> -->
    </div>
</template>

<script>
import Firebase from '@/plugins/boydPlugins'
const book = new Firebase('Books')
export default {
  async asyncData({ params }) {
    let resault = await book.getDocumentByName(params.id)
    return {
      item: resault
    }
  },

  methods: {
      increment: function () {
          this.item.process +=1
          book.updateDocumentByName(this.$route.params.id, this.item)
      },

      decrement: function () {
          this.item.process -=1
          book.updateDocumentByName(this.$route.params.id, this.item)
      },

      remove: function () {
          if (confirm('ต้องการลบหรือไม่')) {
              book.removeDocument(this.$route.params.id)
              this.$router.push('/Book')
          }
      }
  }
}
</script>

<style lang="scss">
.state {
    p {
        text-align: center;
        font-size: 3em;
    }
    // background-color: red;
}

</style>
