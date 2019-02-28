<template>
  <table class="table is-fullwidth is-hoverable">
    <!-- <pre> {{data.data}} </pre> -->
    <thead>
      <tr>
        <td v-for="(config, index) in data.config" :key="index"> {{config.label}} </td>
        <td>@</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data.data" :key="index" class="has-background-primary">
        <td v-for="(config, index) in data.config" :key="index">
          <span>{{item[config.name]}} </span>
        </td>
        <td> <nuxt-link :to="'/'+data.route+'/'+item._key">ดู</nuxt-link> </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import _ from 'lodash'
export default {
  props: {
    data: {}
  },
  filters: {
    status: function (value) {
      console.log(value)
    }
  },
  data () {
    // _.map(this.data.data.generate, e => {
    //   console.log('xx')
    //   true &&  e.active ?  resault = true: resault = false
    // })
    return {
      // status: false
    }
  }
}
</script>

<style>

</style>
