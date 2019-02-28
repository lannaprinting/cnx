<template>
  <div>
    <div class="field">
      <label class="label">ประเภท</label>
      <div class="control-has-icons-left">
        <div class="select is-fullwidth is-large">
          <select v-model="fields.type">
            <option v-for="(m, index) in material.Type" :key="index" :value="m"> {{m}} </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">ชื่อลูกค้า</label>
      <p class="control has-icons-left">
        <input type="text" v-model="fields.customerName" class="input is-large">
      </p>
    </div>
    <div class="field">
      <label class="label">ชื่องาน</label>
      <p class="control has-icons-left">
        <input type="text" v-model="fields.title" class="input is-large">
      </p>
    </div>
    <hr>
    <div class="field">
      <label class="label">พิมพ์</label>
      <div class="control-has-icons-left">
        <div class="select is-fullwidth is-large">
          <select v-model="fields.print">
            <option v-for="(m, index) in material.Print" :key="index" :value="m"> {{m}} </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">ขนาดกระดาษ</label>
      <div class="control-has-icons-left">
        <div class="select is-fullwidth is-large">
          <select v-model="fields.paperSize">
            <option v-for="(m, index) in material.Size" :key="index" :value="m"> {{m}} </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">วัสดุ</label>
      <div class="control-has-icons-left">
        <div class="select is-fullwidth is-large">
          <select v-model="fields.paperMaterial">
            <option v-for="(m, index) in material.Material" :key="index" :value="m"> {{m}} </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">จำนวนแกรม</label>
      <div class="control-has-icons-left">
        <div class="select is-fullwidth is-large">
          <select v-model="fields.paperGrams">
            <option v-for="(m, index) in material.Grams" :key="index" :value="m"> {{m}} </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">ขนาดงาน</label>
      <div class="control-has-icons-left">
        <div class="select is-fullwidth is-large">
          <select v-model="fields.artworkSize">
            <option v-for="(m, index) in material.Size" :key="index" :value="m"> {{m}} </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">จำนวนหน้า</label>
      <p class="control has-icons-left">
        <input type="text" v-model="fields.totalPages" class="input is-large">
      </p>
    </div>
    <div class="field">
      <label class="label">จำนวน</label>
      <p class="control has-icons-left">
        <input type="text" v-model="fields.total" class="input is-large">
      </p>
    </div>
    <div class="field is-grouped is-grouped-centered">
        <div class="control"> 
            <button class="button">ยกเลิก</button>
        </div>
        <div class="control" v-if="apply"> 
            <button class="button is-primary" @click="apply(fields)">ตกลง</button>
        </div>
    </div>
    <div class="field">
        <pre> {{fields}} </pre>
    </div>
  </div>
</template>

<script>
import Material from '@/assets/data.json'
export default {
    props: {
      fields: {type: Object},
      apply: {type: Function}
    },
    data () {
        return {
            material: Material
        }
    }
}
</script>

<style>

</style>
