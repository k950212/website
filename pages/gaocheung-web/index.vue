<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">高強建設官方網站 <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m">高強建設有限公司</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/gaocheung1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">本專案旨在為高強建設有限公司打造一個形象網站．可以線上瀏覽建案，了解週遭環境，室內佔比等．</div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、JavaScript、Vue3、Composition API、Nuxt.js、element-plus/nuxt、vue3-recaptcha2、AOS、nuxt-swiper、nuxt-gtag、BootStrap</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gaocheung2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gaocheung3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gaocheung4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gaocheung5.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("http://www.gaocheung.com/");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
