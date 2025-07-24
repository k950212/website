<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">碩美牙醫形象網站 <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m">碩美牙醫診所</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/charming1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">本專案旨在為碩美牙醫診所打造一個形象網站，並設SEO方便使用者查詢到推薦．</div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、JavaScript、vue2、Option API、Nuxt.js、nuxt-swiper、pinia/nuxt、nuxt-gtag、BootStrap</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/charming2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/charming3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/charming4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/charming5.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/charming6.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("https://www.charmingdent.com.tw/");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
