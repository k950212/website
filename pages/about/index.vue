<template>
  <Navbar />
  <div class="container">
    <div class="headImg my-2">
      <div class="img"></div>
    </div>
    <div class="content">
      <div class="f30 my-2">你好．我是張允豪</div>
      <div class="f20 my-1">一名前端工程師，使用Vue3與Nuxt做開發</div>
      <div class="f20 my-1">負責前端部分:Html Css切版、Js撰寫 Api串接、Vue框架。</div>
      <div class="f20 my-1">參與過不少專案開發，詳情請看專案介紹</div>
    </div>
    <div class="content">
      <div class="f30 my-2">經歷</div>
      <div class="f20">18.09-22.06 大同大學</div>
      <div class="f20">22.07-23.11 當兵＆自學前端</div>
      <div class="f20">23.12-25.08 慎行科技公司</div>
    </div>
    <div class="content">
      <div class="f30 my-2">聯絡我</div>
      <div class="centerText">
        <div class="center">
          <img src="@/assets/img/phone.svg" alt="" />
        </div>
        <div class="center">:0909786383</div>
      </div>
      <div class="centerText">
        <div class="center">
          <img src="@/assets/img/email.svg" alt="" />
        </div>
        <div class="center">:k950212@gmail.com</div>
      </div>
      <div class="centerText">
        <div class="center">
          <img src="@/assets/img/github.svg" alt="" />
        </div>
        <div class="center"><span @click="goGithub" style="color: blue">Link</span></div>
      </div>
      <div class="centerText">
        <div class="center">
          <img src="@/assets/img/location.svg" alt="" />
        </div>
        <div class="center">:台北市信義區XXXX</div>
      </div>
    </div>
  </div>

  <Footer />
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const goGithub = () => {
  window.open("https://github.com/k950212");
};
</script>
<style scoped>
.container {
  padding: 1rem;
  .headImg {
    display: flex;
    justify-content: center;
    .img {
      border: 1px solid black;
      height: 200px;
      width: 200px;
      border-radius: 50%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 20px;
    }

    .f30 {
      font-size: 30px;
      font-weight: bold;
    }
    .f20 {
      font-size: 20px;
      display: flex;
    }
    .centerText {
      font-size: 20px;
      display: flex;
      flex-direction: row;
      height: 40px;
      align-self: center;
      justify-content: center;
      .center {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
