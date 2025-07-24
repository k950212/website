<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">慎行科技官方網站 <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m">慎行科技有限公司</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/bremsinnNew1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">本專案旨在為慎行科技有限公司打造一個形象網站．有新版(黑底)與舊版(白底)，新版未上線．</div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、JavaScript、Vue3、Composition API、Nuxt.js、vue3-recaptcha2、AOS、nuxt-primevue、BootStrap</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/bremsinnNew2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/bremsinnNew3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/bremsinnNew4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/bremsinnNew5.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/bremsinn1.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/bremsinn2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/bremsinn3.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("https://www.bremsinn.com/");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
