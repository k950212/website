<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">個人網站 <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m">工作前個人練習網站</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/personalWeb1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">本專案在工作前依照所學，建立一個個人網站．</div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、JavaScript、Vue3、Composition API、Nuxt.js、AOS、BootStrap</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/personalWeb2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/personalWeb3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/personalWeb4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/personalWeb5.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("https://k950212.github.io/PersonalWebsite/dist/#/");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
