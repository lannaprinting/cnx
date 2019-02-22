<template>
<div class="wrap">
  <div class="field">
    <label for="" class="label">ชื่อลูกค้า</label>
    <p class="control has-icons-left">
      <input type="text" v-model="fields.customerName" class="input is-large">
      <span class="icon is-left">
        <i class="fas fa-user"></i>
      </span>
    </p>
  </div>
 
  <div class="field">
    <label for="" class="label">ชื่อบิล</label>
    <p class="control has-icons-left">
      <input type="text" v-model="fields.billName" class="input is-large">
      <span class="icon is-left">
        <i class="fas fa-user"></i>
      </span>
    </p>
  </div>
 
  <div class="field">
    <label for="" class="label">ขนาดกระดาษ</label>
    <div class="control">
      <div class="select is-fullwidth is-large">
        <select v-model="fields.paperSize">
          <option value="7.75x10.7นิ้ว">7.75x10.75นิ้ว</option>
          <option value="8.5x12นิ้ว">8.5x12นิ้ว</option>
          <option value="9x12นิ้ว">9x12นิ้ว</option>
          <option value="5x7นิ้ว">5x7นิ้ว</option>
          <option value="A4">A4</option>
        </select>
      </div>
    </div>
  </div>
  <div class="field">
    <label for="" class="label">ลงได้</label>
    <p class="control has-icons-left">
      <input type="text" v-model="fields.paperDivision" class="input is-large">
      <span class="icon is-left">
        <i class="fas fa-user"></i>
      </span>
    </p>
  </div>
  <!-- <multiselect v-model="fields.paperLayers" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="value" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect> -->
  <div class="field">
    <label for="" class="label">ชั้นของกระดาษ</label>
    <multiselect v-model="fields.paperLayers" tag-placeholder="Add this as new tag" placeholder="เลือกชั้นของกระดาษ"
      label="value" track-by="value" :options="Layers" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
    <!-- <multiselect v-model="value" :options="options"></multiselect> -->
  </div>

  <div class="field">
      <label class="label">เล่มที่</label>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded has-icons-left">
          <input class="input is-large" type="number" v-model="fields.totalBooks[0]" placeholder="เริ่มต้น ">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control is-expanded has-icons-left has-icons-right">
          <input class="input is-large" type="nomber" v-model="fields.totalBooks[1]" placeholder="สิ้นสุด">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
    </div>
  </div>

  <div class="field is-grouped is-grouped-centered">
  <p class="control" v-if="cancel">
    <a class="button is-light" @click="cancel">
      ยกเลิก
    </a>
  </p>
  <p class="control" v-if="apply">
    <a class="button is-primary" @click="apply(fields)">
      ตกลง
    </a>
  </p>
</div>
    </div>
</template>

<script>
export default {
  props: {
    cancel: {type: Function},
    apply: { type: Function},
    fields: {}
  },

  data () {
      return {
        Layers: [
            {value: 'ปอนด์', label: 'ปอนด์'},
            {value: 'แบงค์ฟ้า', label: 'แบงค์ฟ้า'},
            {value: 'แบงค์เหลือง', label: 'แบงค์เหลือง'},
            {value: 'แบงค์ชมพู', label: 'แบงค์ชมพู'},
            {value: 'ปรูฟ', label: 'ปรูฟ'},
            {value: 'กระดาษเคมี บนขาว', label: 'กระดาษเคมี บนขาว'},
            {value: 'กระดาษเคมี บนชมพู', label: 'กระดาษเคมี บนชมพู'},
            {value: 'กระดาษเคมี กลางชมพู', label: 'กระดาษเคมี กลางชมพู'},
            {value: 'กระดาษเคมี กลางเหลือง', label: 'กระดาษเคมี กลางเหลือง'},
            {value: 'กระดาษเคมี ล่างฟ้า', label: 'กระดาษเคมี ล่างฟ้า'},
            {value: 'กระดาษเคมี ล่างเหลือง', label: 'กระดาษเคมี ล่างเหลือง'}
        ]
      }
  },

  methods: {
      addTag: function () {
          console.log('pass..')
      }
  }
}
</script>

<style lang="scss">
// @import "~bulma/sass/utilities/_all.sass";
// @import "~bulma/sass/components/_all.sass";
@import "~bulma/bulma.sass";
.wrap {
    margin: 100px 0;
    color: $primary;
    .multiselect--above {
      background-color: red
    }
    .multiselect--active {
      background-color: red
    }
    .multiselect {
        // background-color: red;
        all: unset;
        
        @extend .input
    }
    .multiselect__select {
        all:unset;
        // text-align: right;
        // border-style: none;
        &:before {
          border-style: none;
        }
    }
    
    .multiselect__tags {
        padding: 8px 12px;
    }
}

</style>
