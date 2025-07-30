<template>
  <div class="footer-stack"></div>
  <div class="footer">
    <div class="content container">
      <!-- <div class="item"><img src="@/assets/img/LOGO_udigit_2.png" alt="" /></div> -->
      <div class="item">
        <div class="title">專案介紹</div>
        <div class="link">全家記帳本</div>
        <div class="link">去你的工作室</div>
        <div class="link">電商網站(工作前)</div>
        <div class="link">個人網站(工作前)</div>
      </div>
      <div class="item">
        <div class="title">工作經歷</div>
        <div class="link">慎行科技 23.12-25.08</div>
      </div>
      <div class="item">
        <div class="title">關於我</div>
        <div class="link">個人簡介</div>
      </div>
      <div class="item">
        <div class="title">聯絡資訊</div>
        <div class="link">地址：<span style="font-weight: bold">台北市信義區忠孝東路五段xxx號x樓</span></div>
        <div class="link">電話：<span style="font-weight: bold">09 0978 6383</span></div>
      </div>
      <div class="item item-desk">
        <div class="title">社群平台</div>
        <div><img src="@/assets/img/facebook.png" alt="" style="margin-right: 1rem" /> <img src="@/assets/img/linkedin.png" alt="" /></div>
      </div>
    </div>
    <div class="footer-text py-2">
      <div>此為個人練習作品 無商業用途</div>
      <div>2025.01.22</div>
    </div>
  </div>
</template>
<style scoped>
.footer-stack {
  /* height: 380px; */
}
.footer {
  z-index: 20000;
  bottom: 0;
  /* position: fixed; */
  width: 100%;
  height: auto;
  background-color: #0c1829;
  .content {
    display: flex;
    border-bottom: 1px solid #c1c7cd;
    .item {
      margin: 2rem;
      color: #ffffff;
      font-weight: lighter;
      .title {
        font-weight: bold;
        color: white;
        font-size: 18px;
        margin-bottom: 1rem;
      }
      .link {
        margin: 4px 0px;
      }
    }
  }
  .footer-text {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 991px) {
  .footer {
    .content {
      display: flex;
      flex-direction: column;
      .item {
        margin: 0.5rem 1rem 0.5rem 1rem;
        border-bottom: 1px solid white;
        .link {
          margin-bottom: 1rem;
        }
      }
      .item-desk {
        border-bottom: 0px solid white !important;
      }
    }
  }
}
</style>
