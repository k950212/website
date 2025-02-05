<template>
  <Navbar />
  <div class="container">
    <div class="project row">
      <div class="col-xl-5 col-md-12 left">
        <div class="img"></div>
      </div>
      <div class="col-xl-7 col-md-12 right">
        <div>
          <div><span class="bold">專案名稱：</span>全家記帳本 第一階段</div>
          <div><span class="bold">負責工作：</span>畫面切版(90%)、api串接(90%)、js function撰寫(80%)、測試、修bug</div>
          <div><span class="bold">使用套件：</span>bootstrap、chart.js、echarts、jquery、sass、swiper、vant</div>
          <div><span class="bold">開發時間：</span>113.6-113.12</div>
          <div><span class="bold">功能：</span>記帳、記帳分類 、發票、發票分類、發票對獎開獎、消費分析、圖表數據、載具連動</div>
          <div><span class="bold">平台：</span>webView 在全家app中記帳本功能</div>
          <div><span class="bold">開發環境：</span>vite vue3 Composition API、node.js v16.20.2、npm 8.19.4</div>
          <div><span class="bold">網址：</span><span class="link" @click="goFamilyMary">uat</span></div>
        </div>
      </div>
    </div>
    <div class="detail"></div>
  </div>

  <Footer />
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const goFamilyMary = () => {
  location.href =
    "https://daybook2wu.family.com.tw/mynote/overview?Trans_info2=VOOJp0lISGFiKDAx1YUDvfepHSXfdxMLtftabOFvYwyaa4AGvq1qBBZOHyRW2jYyCC%2F3TSQmsByu%2Btjw8%2F%2F0SwEaT%2FkY9elpviuSzaYqLu1qn1T2M7g9el37c3kH%2FK0NzpCN5Smkb%2F%2Fvlmj0bROrrYIsUJVD00LlqQ0Px2c9wukwf1qP1FKyutn1nh3FqtYf";
};
</script>
<style scoped>
.project {
  border: 2px solid #3966a2;
  border-radius: 8px;
  margin: 1rem 0rem;
  padding: 1rem;
  .left {
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    justify-content: center;
    .img {
      width: 370px;
      height: 600px;
      border: 1px solid black;
    }
  }
  .right {
    border: 1px solid black;
    padding: 2rem;
    display: flex;
    justify-content: center;
    font-size: 20px;
    .link {
      color: blue;
      cursor: pointer;
    }
  }
}
</style>
