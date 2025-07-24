<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">協力國際形象網站 <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m">協力國際管理顧問有限公司</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/tongxin1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">本專案旨在為協力國際管理顧問有限公司打造一個形象網站．</div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、JavaScript、Swiper、AOS、BootStrap</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/tongxin2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/tongxin3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/tongxin4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/tongxin5.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("https://www.tongxin-xili.com.tw/");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
