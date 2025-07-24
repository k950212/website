<template>
  <Navbar />
  <div id="projectPage">
    <div class="container">
      <div class="title">八洋RMA送修平台 <img @click="openWeb()" style="cursor: pointer" src="@/assets/img/link.png" alt="" /></div>
      <div class="title-m">CREST Diving 八洋精密股份有限公司</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="main-img">
          <div class="main-border">
            <div class="second-border">
              <img src="@/assets/img/crestRma1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="title mt-5 mb-3">專案背景</div>
        <div class="content">本專案旨在為八洋精密公司打造一個送修平台，與八洋潛水錶app連動，當手錶有問題需要送修時，線上填寫資料並即時查看送修進度，有個別狀況也可與客服提出問題，在線回覆．</div>
      </div>
      <div class="skill">
        <div class="title">技術應用</div>
        <ul style="margin-left: 2rem; margin-top: 1rem">
          <li>使用：html、css、JavaScript、vue3、Composition API、Nuxt.js、element-plus/nuxt、nuxt-primevue、BootStrap</li>
        </ul>
      </div>
      <div class="otherImg">
        <img src="@/assets/img/crestRma2.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/crestRma3.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/crestRma4.png" alt="" />
      </div>
      <div class="otherImg">
        <img src="@/assets/img/crestRma5.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const openWeb = () => {
  window.open("https://rma.bremsinn.com/home");
};
</script>
<style scoped>
.navbarStack {
  height: 84px;
  background-color: black;
}
</style>
