<template>
  <div class="">
      <navbar-component />

      <div class="container">
        <nuxt /> <!-- content on change -->
      </div>

      <hero-component />
    <!-- xxx -->

    <!-- footer -->
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
import HeroComponent from '@/components/HeroComponent'

export default {
  components: {
    NavbarComponent,
    HeroComponent
  }
}
</script>


<style>

</style>
