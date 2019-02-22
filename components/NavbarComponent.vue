<template>
  <div class="nav container">
      <p class="top">
         Hot Line : 053 211415 094-603-5554 ส่งไไฟล์งาน ติดต่อเรา<br>
        92 ถ.มณีนพรัตน์ ต.ศรีภูมิ อ.เมือง จ.เชียงใหม่ 50200 โทร/แฟกซ์ 0-5321-1415<br>
        E-mail : lannaprinting.cm@gmail.com
      </p> <!-- top -->
          <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <!-- <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"> -->
      logo ลานนาการพิมพ์
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <!-- <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/">
        Home
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div> -->

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <!-- <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.2/bulma-0.7.2.zip">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p> -->
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
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style scoped>
.navbar-item > a {
    color: #58595b;
}
</style>

