<template>
  <div class="section">
      <div class="columns">
       <div class="column">
          <h3 class="subtitle">
            ลานนาการพิมพ์ ได้ก่อตั้งขึ้นในปี 2516 ตั้งแต่รุ่นคุณพ่อ เราได้พัฒนางานพิมพ์ให้ทันสมัยตามวิวัฒนาการสิ่งพิมพ์ที่เปลี่ยนแปลงในแต่ละยุคสมัย มีบุคลากรที่ชำนาญการ ทำหน้าหน้าดูแลและควบคุมและตรวจสอบงานให้มีประสิทธิภาพ มีฝ่ายขายที่คอยอำนวยความสะดวก รวดเร็วทั้งก่อนและหลังการขาย ที่สำคัญ มีทีมงานกราฟิกดีไซน์ระดับมืออาชีพ ที่ออกแบบงานให้ดูแปลกใหม่ ทันสมัย สร้างสรรค์ผลงานตามความต้องการของลูกค้า
        </h3>
        </div>
        <div class="column is-two-fifths"> 
          <img src="https://via.placeholder.com/600" alt="" srcset="">
        </div>
 
      </div>
      <!-- <div class="wrapper-item">
        <thumbnail-component v-for="(item, index) in 8" :key="index"/>
      </div> -->
    </div>
</template>

<script>
import ThumbnailComponent from '@/components/ThumbnailComponent'

export default {
  components: {
    ThumbnailComponent
  },

  data () {
    return {}
  }
}
</script>

<style scoped>
.caption-history {
  text-indent: 40px;
}

.wrapper-item {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

