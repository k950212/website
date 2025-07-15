<template>
  <Navbar />
  <div class="container">
    <div class="project row">
      <div class="col-xl-5 col-md-12 left">
        <div class="img">
          <swiper
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
            :loop="true"
          >
            <swiper-slide class="swiper-img"><img src="@/assets/img/family1-1.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family1-2.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family1-3.png" alt="" /></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="col-xl-7 col-md-12 right">
        <div class="m-3">
          <div><span class="bold">專案名稱：</span>全家記帳本</div>
          <div><span class="bold">負責工作：</span>畫面切版(90%)、api串接(90%)、js function撰寫(80%)、測試、修bug</div>
          <div><span class="bold">使用套件：</span>bootstrap、chart.js、echarts、jquery、sass、swiper、vant</div>
          <div><span class="bold">開發時間：</span>113.6-114.2</div>
          <div><span class="bold">維護時間(處理bug)：</span>114.3-至今</div>
          <div><span class="bold">功能：</span>記帳、記帳分類 、發票、發票分類、發票對獎開獎、消費分析、圖表數據、載具連動、掃描發票</div>
          <div><span class="bold">平台：</span>webView 在全家app中記帳本功能</div>
          <div><span class="bold">開發環境：</span>vite vue3 Composition API、node.js v16.20.2、npm 8.19.4</div>
          <div><span class="bold">網址：</span><span class="link" @click="goFamilyMary">uat</span></div>
        </div>
      </div>
    </div>
    <div class="project row">
      <div class="col-xl-7 col-md-12 right">
        <div class="m-3">
          <div><span class="bold">記帳明細頁(列表)：</span>依日期顯示每筆記帳，可以使用年月去篩選區間記帳，也可以使用日歷去查看單日記帳，日歷顯示橘點表示當日有記帳．</div>
          <div><span class="bold">發票明細(詳細)：</span>顯示Title&發票號碼&金額&時間&明細等等，可針對整筆記帳去選擇主分類，對各筆明細選擇主分類與子分類，輸入備註．</div>
          <div><span class="bold">主分類&子分類：</span>除了主分類為現有的無法新增，子分類可以額外新增子分類，給使用者自訂分類．</div>
          <div><span class="bold">搜尋：</span>以關鍵字搜尋現有的發票＆記帳</div>
          <div><span class="bold">消費分析頁(類別分析)：</span>依照月、年、自訂區間去顯示所有消費的圖表與細項</div>
          <div><span class="bold">消費分析頁(排行)：</span>依照消費的金額排序店家，依照產品的金額排序</div>
          <div><span class="bold">我的發票頁(列表)：</span>依日期區間顯示發票，可以區段選擇日期顯示發票．</div>
          <div><span class="bold">我的發票(詳細)：</span>顯示公司名、載具名稱、消費時間、一中獎情形顯示額外icon</div>
          <div><span class="bold">手動新增發票(掃描需在app端操作)：</span>手動輸入</div>
          <div><span class="bold">手動新增繳費：</span>手動輸入</div>
          <div><span class="bold">手動新增記帳：</span>手動輸入</div>
          <div><span class="bold">手動新增收入：</span>手動輸入</div>
          <div><span class="bold">我的載具：</span>列出載具與條碼</div>
        </div>
      </div>
      <div class="col-xl-5 col-md-12 left">
        <div class="img">
          <swiper
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
            :loop="true"
          >
            <swiper-slide class="swiper-img"><img src="@/assets/img/family2-1.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family2-2.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family2-3.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family2-4.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family2-5.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family2-6.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family2-7.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family2-8.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family3-1.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family3-2.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family3-3.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family3-4.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family3-5.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family3-6.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family4-1.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family4-2.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family4-3.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family4-4.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family4-5.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family4-6.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family4-7.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family4-8.png" alt="" /></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="project row">
      <div class="col-xl-5 col-md-12 left">
        <div class="img">
          <swiper
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
            :loop="true"
          >
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-1.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-2.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-3.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-4.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-5.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-6.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-7.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-8.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-9.png" alt="" /></swiper-slide>
            <swiper-slide class="swiper-img"><img src="@/assets/img/family5-10.png" alt="" /></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="col-xl-7 col-md-12 right">
        <div class="m-3">
          <div><span class="bold">睡前打卡頁：</span>每天可在活動期間內到這頁，下注全家點數報名，指定時間再度打卡即可參加最終抽獎．</div>
          <div><span class="bold">任務中心頁：</span>載具綁定任務、邀請好友任務、發票累積任務、店家獎品任務 領取與邀請．</div>
          <div><span class="bold">邀請好友任務：</span>分享出連結，好友點擊後會到登入頁並帶入好友邀請碼．</div>
          <div><span class="bold">綁定載句任務：</span>完成綁定後，記帳本才會提取您最新的發票，並有更多額外功能．</div>
          <div><span class="bold">發票累積任務：</span>依照使用者最近的發票比例去估算每階段要求發票張數，達到指定發票數會獲得點數，全部完成會獲得神秘大獎．</div>
          <div><span class="bold">店家獎項任務：</span>後台可新增多個店家任務，有達成次數、消費金額、購買指定商品等等，完成可獲得點數或獎品．</div>
          <div><span class="bold">獲獎紀錄：</span>完成的任務獲得點數or獎品均會記錄在此．</div>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const modules = [Pagination];

const goFamilyMary = () => {
  window.open(
    "https://daybook2wu.family.com.tw/mynote/overview?Trans_info2=VOOJp0lISGFiKDAx1YUDvfepHSXfdxMLtftabOFvYwyaa4AGvq1qBBZOHyRW2jYyE%2BvQrF6uAgsyZwtH%2BBRKVmS%2FPrTzBk7BR0Zow2C2uwGUfHOYaaGU7LdpCIUXqvG21xqTrQ8BhPWOIavY9DM7RZz3fmQggU6Hv%2Bi1USeOzmLaoXK0T8DrPDfbqOJN0BPB"
  );
};
</script>
<style scoped>
.project {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  margin: 1rem 0rem;
  padding: 1rem;
  .left {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    .img {
      width: 370px;
      height: 600px;
    }
  }
  .right {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
.swiper-img {
  background-color: bisque;
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 500px) {
  .project {
    .left {
      .img {
        width: 300px;
        height: 567px;
        .swiper-img {
          height: 567px;
        }
      }
    }
  }
}
@media (max-width: 400px) {
  .project {
    .left {
      .img {
        width: 270px;
        height: 510px;
        .swiper-img {
          height: 510px;
        }
      }
    }
  }
}
</style>
