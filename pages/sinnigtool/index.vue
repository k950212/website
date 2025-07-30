<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">網路小工具 <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m"></div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/sinnigtool1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">本專案旨在為透過網路小工具賺取google廣告流量．</div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、JavaScript、Vue3、Composition API、Nuxt.js、nuxt-primevue、nuxt-gtag、AOS、BootStrap</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/sinnigtool2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/sinnigtool3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/sinnigtool4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/sinnigtool5.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("https://www.sinnigtool.com/");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
