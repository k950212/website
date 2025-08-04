<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">GamerStore <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m">工作前個人練習網站</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/gamerStore1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">本專案在工作前透過udemy線上學習後，透過六角學院使用課程付的後端最終做成成品．使用Vue開發一個電商網站，產品下單、新增刪除查詢等功能，最後付款送出訂單。</div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、JavaScript、vite、Vue2、Option API、AOS、swiper、vee-validate、BootStrap</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gamerStore2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gamerStore3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gamerStore4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gamerStore5.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gamerStore6.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gamerStore7.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gamerStore8.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gamerStore9.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/gamerStore10.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("https://k950212.github.io/GamerStore/dist/#/");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
