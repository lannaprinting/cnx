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
      <tr v-for="(item, index) in data.data" :key="index">
        <td v-for="(config, index) in data.config" :key="index">
          <span>{{item[config.field]}} </span>
        </td>
        <td> <nuxt-link :to="'/'+data.route+'/'+item._key">ดู</nuxt-link> </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    data: {}
  }
}
</script>

<style>

</style>
