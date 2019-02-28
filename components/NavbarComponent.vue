<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
        <img src="@/assets/Logo.jpg" width="28">
      </nuxt-link>

      <a role="button" @click="toggle" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="toggleMenu ? 'is-active' : ''">
      <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">หน้าแรก</nuxt-link>
          <nuxt-link class="navbar-item" to="/Bill">บิล</nuxt-link>
          <nuxt-link class="navbar-item" to="/Book">หนังสือ</nuxt-link>
          <!-- <nuxt-link class="navbar-item" to="AboutPage">เกี่ยวกับเรา<br>ABOUNT US</nuxt-link>
          <nuxt-link class="navbar-item" to="UploadPage">อัพโหลดงาน<br>upload</nuxt-link>
          <nuxt-link class="navbar-item" to="OrderAndPaymentPage">สั่งงานและชำระเงิน<br>ORDER & PAYMENT</nuxt-link>
          <nuxt-link class="navbar-item" to="ContactUsPage">ติดต่อเรา<br>CONTACT US</nuxt-link> -->

        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- <div class="nav container">
      <p class="top">
         Hot Line : 053 211415 094-603-5554 ส่งไไฟล์งาน ติดต่อเรา<br>
        92 ถ.มณีนพรัตน์ ต.ศรีภูมิ อ.เมือง จ.เชียงใหม่ 50200 โทร/แฟกซ์ 0-5321-1415<br>
        E-mail : lannaprinting.cm@gmail.com
      </p>
          <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      logo ลานนาการพิมพ์
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="navbar-item"><nuxt-link to="/">หน้าแรก<br>HOME</nuxt-link></p>
          <p class="navbar-item"><nuxt-link to="/Bill">Bill<br>บิล</nuxt-link></p>
          <p class="navbar-item"><nuxt-link to="/Book">Book<br>หนังสือ</nuxt-link></p>
          <p class="navbar-item"><nuxt-link to="AboutPage">เกี่ยวกับเรา<br>ABOUNT US</nuxt-link></p>
          <p class="navbar-item"><nuxt-link to="UploadPage">อัพโหลดงาน<br>upload</nuxt-link></p>
          <p class="navbar-item"><nuxt-link to="OrderAndPaymentPage">สั่งงานและชำระเงิน<br>ORDER & PAYMENT</nuxt-link></p>
          <p class="navbar-item"><nuxt-link to="ContactUsPage">ติดต่อเรา<br>CONTACT US</nuxt-link></p>
        </div>
      </div>
    </div>
  </div>
</nav> 
  </div> -->

<!-- 
    <nav class="navbar" aria-label="navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      Docs
    </a>

    <div class="">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 0.7.4
      </div>
    </div>
  </div>
</nav> -->
</template>

<script>
export default {
    data () {
        return {
          toggleMenu: false
        }
    },
    methods: {
      toggle: function () {
        this.toggleMenu = !this.toggleMenu
      }
    }
}
</script>

<style scoped>
.navbar-item > a {
    color: #58595b;
}
</style>

