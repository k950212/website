<template>
  <Navbar />
  <div class="section1">
    <div class="title">前端工程師</div>
  </div>
  <div class="container-fluid swiper-boxs" style="margin: 0">
    <swiper :slidesPerView="3" :spaceBetween="30" :modules="modules" class="mySwiper" :loop="true">
      <swiper-slide class="box"><img src="@/assets/img/goYourStudio1.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/crestRma2.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/charming1.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/tongxin1.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/bremsinnNew1.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/bremsinn1.png" alt="" /></swiper-slide>
    </swiper>
  </div>
  <div class="section2">
    <div class="title">Kevin.Chang</div>
  </div>

  <div class="project container">
    <div class="title f20 themeColor mb-2">參與專案 慎行公司 2023.12~2025.07</div>
    <div class="d-flex row justify-content-center py-3">
      <template v-for="item in projectList">
        <div class="col-xl-2 col-sm-4 col-6">
          <div class="box-wrapper">
            <div class="box mb-2" @click="goToProject(item.link)">
              <div class="fancy-text">{{ item.name }}</div>
              <img src="@/assets/img/king.png" alt="" v-if="item.name == '全家記帳本'" />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <div class="skill-circle">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-sm-12">
          <div class="skill-circle-box">
            <div class="rate">
              <van-circle v-model:current-rate="vueRate" :rate="95" :text="`${vueRate}%`" :stroke-width="100" start-position="right" layer-color="#ffffff" color="#6192d38f" />
            </div>
            <div class="content">
              <div class="title">vue.js</div>
              <div>常使用Nuxt、Vite開發專案 Vue cli 也ok,熟悉 vue3 composition api 與 vue2 options api 寫法.</div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-sm-12">
          <div class="skill-circle-box">
            <div class="rate">
              <van-circle v-model:current-rate="cssRate" :rate="100" :text="`${cssRate}%`" :stroke-width="100" start-position="right" layer-color="#ffffff" color="#6192d38f" />
            </div>
            <div class="content">
              <div class="title">html、css</div>
              <div>html寫過許多靜態與動態網頁,css 寫法為sass 巢狀結構</div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-sm-12">
          <div class="skill-circle-box">
            <div class="rate">
              <van-circle v-model:current-rate="jsRate" :rate="85" :text="`${jsRate}%`" :stroke-width="100" start-position="right" layer-color="#ffffff" color="#6192d38f" />
            </div>
            <div class="content">
              <div class="title">javaScript</div>
              <div>熟悉使用javaScript於資料串接,數值變化.</div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-sm-12">
          <div class="skill-circle-box">
            <div class="rate">
              <van-circle v-model:current-rate="cRate" :rate="75" :text="`${cRate}%`" :stroke-width="100" start-position="right" layer-color="#ffffff" color="#6192d38f" />
            </div>
            <div class="content">
              <div class="title">C</div>
              <div>資工系就讀時以C語言打基礎,在學習更多程式語言</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="section3">
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <div class="content_left"></div>
        </div>
        <div class="col-xl-8">
          <div class="content_right"></div>
        </div>
      </div>
    </div>
  </div> -->

  <Skill />
  <div class="home-bottom">
    <div class="content container">
      <div>
        <div class="f20" style="color: rgba(57, 102, 162, 1); font-weight: 700">以上個人網站 如有興趣 歡迎聯繫我</div>
        <div class="f42" style="color: rgba(20, 40, 68, 1); font-weight: 700">104 找工作中 前端工程師</div>
        <!-- <div class="f18" style="color: rgba(33, 39, 42, 1); font-weight: 400">如有興趣 歡迎與我聯繫</div> -->
      </div>
      <div class="d-flex align-items-center"><button class="btn word-nowrap">立即聯繫</button></div>
    </div>
  </div>

  <Footer />
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Skill from "~/components/Skill.vue";
const modules = [Pagination, Navigation, Autoplay];
const projectList = ref([
  {
    name: "全家記帳本",
    link: "https://daybook2wu.family.com.tw/mynote/index?Trans_info2=VOOJp0lISGFiKDAx1YUDvfepHSXfdxMLtftabOFvYwyaa4AGvq1qBBZOHyRW2jYyE%2BvQrF6uAgsyZwtH%2BBRKVmS%2FPrTzBk7BR0Zow2C2uwGUfHOYaaGU7LdpCIUXqvG21xqTrQ8BhPWOIavY9DM7RZz3fmQggU6Hv%2Bi1USeOzmLaoXK0T8DrPDfbqOJN0BPB",
  },
  {
    name: "去你的工作室",
    link: "https://goyourstudio.com/book/?openExternalBrowser=1",
  },
  {
    name: "八洋RMA ",
    link: "https://rma.bremsinn.com/home",
  },
  {
    name: "碩美牙醫",
    link: "https://www.charmingdent.com.tw/",
  },
  {
    name: "協力國際",
    link: "https://www.tongxin-xili.com.tw/",
  },
  {
    name: "慎行官網",
    link: "https://www.bremsinn.com/",
  },
  {
    name: "高強建設官網",
    link: "",
  },
  {
    name: "網路小工具",
    link: "https://www.sinnigtool.com/",
  },
  {
    name: "超群特產購物網",
    link: "https://km5257.bremsinn.com/",
  },
  {
    name: "EIP系統",
    link: "https://eip.bremsinn.com/hr/dashboard",
  },
  {
    name: "PM系統",
    link: "https://pm.bremsinn.com/login",
  },
]);
const vueRate = ref(0);
const cssRate = ref(0);
const jsRate = ref(0);
const cRate = ref(0);
const nuxtRate = ref(0);
const viteRate = ref(0);
const goToProject = (link) => {
  window.open(link);
};
</script>
<style scoped>
.section1 {
  height: 100px;
  position: relative;
  top: 50px;
  z-index: 1000;
  background-color: white;
  border-bottom: 2px solid #6192d38f;
  border-radius: 0px 0px 40% 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    margin-top: 0rem;
    font-size: 48px;
    font-weight: 600;
    color: #3966a2;
  }
}
.section2 {
  height: 100px;
  position: relative;
  top: -50px;
  z-index: 1000;
  background-color: white;
  border-top: 2px solid #6192d38f;
  border-radius: 40% 40% 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    margin-top: 0rem;
    font-size: 48px;
    font-weight: 600;
    color: #3966a2;
  }
}
.swiper-boxs {
  position: relative;
  z-index: 10;
  .box {
    height: 400px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.section3 {
  position: relative;
  padding-top: 60px;
  min-height: 600px;
  z-index: 1000;
  background-image: url("@/assets/img/背景@1x.png");
  background-size: cover;
  .content_left {
    border-radius: 20px;
    min-height: 500px;
    background-color: #6192d38f;
    transform: rotate(-10deg);
  }
  .content_right {
    border-radius: 20px;
    min-height: 400px;
  }
}
.skill-circle {
  .skill-circle-box {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    .rate {
      width: 30%;
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      width: 70%;
      /* border: 1px solid blue; */
      font-size: 16px;
      .title {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 4px;
      }
    }
  }
}

.project {
  .title {
    display: flex;
    justify-content: center;
    font-weight: 700;
  }
  .box {
    position: relative;
    padding: 1rem;
    border-radius: 8px;
    background-color: #6192d38f;
    cursor: pointer;
    color: white;
    text-align: center;
    .fancy-text {
      font-weight: bold;
      background: linear-gradient(90deg, #ffffff, #00c8ff);
      background-size: 200% auto;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      transition: background-position 1s ease;
    }
    img {
      position: absolute;
      height: 50px;
      left: -20px;
      top: -30px;
      transform: rotate(-10deg);
    }
  }
  .box-wrapper {
    /* display: inline-block; */
    &:hover {
      border-radius: 9px;
      background: linear-gradient(to bottom right, #6192d38f, rgb(0, 157, 255));
      /* box-shadow: 0px 0px 10px 0px rgba(255, 158, 69, 0.5); */
    }
  }
}
.home-bottom {
  width: 100%;
  background-image: url("@/assets/img/home-banner.png");
  background-size: contain;
  padding: 4rem;
  display: flex;
  align-items: center;
  min-height: 300px;
  img {
    width: 100%;
    height: 300px;
  }
  .content {
    padding: 1rem 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      background-color: rgba(97, 146, 211, 1);
      padding: 16px;
      border-radius: 6px;
      color: white;
    }
  }
}
.popupBg {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
@media (max-width: 500px) {
  .home-bottom {
    .content {
      flex-direction: column;
    }
  }
}
</style>
