<template>
  <div class="skill">
    <div class="title"><div>專業能力</div></div>

    <div class="container">
      <div class="box">
        <div class="img"><img src="@/assets/img/skill_web.png" alt="" /></div>
        <div class="text">
          <div>打造</div>
          <div>專屬網站</div>
        </div>
      </div>
      <div class="box">
        <div class="img"><img src="@/assets/img/skill_mobile.png" alt="" /></div>
        <div class="text">
          <div>RWD</div>
          <div>手機裝置</div>
        </div>
      </div>
      <div class="box">
        <div class="img"><img src="@/assets/img/skill_pad.png" alt="" /></div>
        <div class="text">
          <div>RWD</div>
          <div>平板裝置</div>
        </div>
      </div>
      <div class="box">
        <div class="img"><img src="@/assets/img/skill_cms.png" alt="" /></div>
        <div class="text">
          <div>後台cms</div>
          <div>數據管理</div>
        </div>
      </div>
      <div class="box">
        <div class="img"><img src="@/assets/img/skill_seo.png" alt="" /></div>
        <div class="text">
          <div>搜尋引擎</div>
          <div>SEO/SSR</div>
        </div>
      </div>
      <div class="box">
        <div class="img"><img src="@/assets/img/skill_api.png" alt="" /></div>
        <div class="text">
          <div>API調用</div>
          <div>串接應用</div>
        </div>
      </div>
      <div class="box">
        <div class="img"><img src="@/assets/img/logo_vue.svg" alt="" /></div>
        <div class="text">
          <div>前端框架</div>
          <div>Vue.js</div>
        </div>
      </div>
      <div class="box">
        <div class="img"><img src="@/assets/img/logo_javascript.png" alt="" /></div>
        <div class="text">
          <div>JavaScript</div>
          <div>語法</div>
        </div>
      </div>
      <div class="box">
        <div class="img"><img src="@/assets/img/logo_html.svg" alt="" /></div>
        <div class="text">
          <div>HTML5</div>
          <div>語義化標籤</div>
        </div>
      </div>
      <div class="box">
        <div class="img"><img src="@/assets/img/logo_css.svg" alt="" /></div>
        <div class="text">
          <div>CSS</div>
          <div>排版變化</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.skill {
  background-image: url("@/assets/img/skill_background.png");
  background-size: cover;
  min-height: 600px;
  padding: 3rem 0rem;

  .title {
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: 700;
    color: white;
    padding: 1rem 0rem;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 預設為 5 個格子，每列佔 1fr 空間 */
    gap: 20px;
    .box {
      background-color: rgba(255, 255, 255, 0.16);
      border-radius: 12px;
      padding: 20px; /* 內邊距 */
      text-align: center; /* 文字居中 */
      .img {
        height: 100px;
        img {
          height: 100%;
        }
      }
      .text {
        margin-top: 1rem;
      }
    }
  }
}
@media (max-width: 1200px) {
  .skill {
    .container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
@media (max-width: 991px) {
  .skill {
    .container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 767px) {
  .skill {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media (max-width: 520px) {
  .skill {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
