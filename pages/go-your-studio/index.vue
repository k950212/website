<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">去你的工作室 <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m">去你的工作室</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/goYourStudio1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">
          本專案旨在為工作室租借公司打造一個方便瀏覽，在線上即可預覽工作室的環境，現有的設備，並可依照地圖去檢視需求的工作室地點，想實際參訪也可以，輕鬆參觀，現在下訂預約即可立即使用．
        </div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、vue2、option Api、ElementPlus、PrimeVue、BootStrap、RWD</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/goYourStudio2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/goYourStudio3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/goYourStudio4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/goYourStudio5.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("https://goyourstudio.com/book/?openExternalBrowser=1");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
