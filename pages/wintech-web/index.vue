<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">成浩管理平台 <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m"></div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/wintech1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">本專案旨在為建立一個時實監控數據的平台，為公司整理資料為圖表方便匯出與查看．</div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、JavaScript、Vue3、Composition API、chart.js、echarts、primevue、vue-i18n、BootStrap</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/wintech2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/wintech3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/wintech4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/wintech5.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/wintech6.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/wintech7.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("https://web-wintech.bremsinn.com/overview");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
