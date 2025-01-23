<template>
  <Navbar />
  <div class="section1">
    <div class="title">Lorem ipsum dolor sit amet.</div>
  </div>
  <div class="container-fluid swiper-boxs" style="margin: 0">
    <swiper :slidesPerView="3" :spaceBetween="30" :modules="modules" class="mySwiper" :loop="true">
      <swiper-slide class="box"><img src="@/assets/img/swiper1.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/swiper2.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/swiper3.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/swiper4.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/swiper5.png" alt="" /></swiper-slide>
      <swiper-slide class="box"><img src="@/assets/img/swiper6.png" alt="" /></swiper-slide>
    </swiper>
  </div>
  <div class="section2">
    <div class="title">Lorem ipsum dolor sit amet.</div>
  </div>
  <div class="project container">
    <div class="title f20 themeColor mb-2">參與專案 慎行 2023.12~2025.02</div>
    <div class="d-flex row justify-content-center py-3">
      <template v-for="item in projectList">
        <div class="col-xl-2 col-sm-4 col-6">
          <div class="box mb-2">{{ item.name }}</div>
        </div>
      </template>
    </div>
  </div>
  <div class="section3"></div>

  <Skill />
  <div class="home-bottom">
    <div class="content container">
      <div>
        <div class="f20" style="color: rgba(57, 102, 162, 1); font-weight: 700">以上個人網站 如有興趣 歡迎聯繫我</div>
        <div class="f42" style="color: rgba(20, 40, 68, 1); font-weight: 700">尋找更好的工作機會！</div>
        <!-- <div class="f18" style="color: rgba(33, 39, 42, 1); font-weight: 400">如有興趣 歡迎與我聯繫</div> -->
      </div>
      <div class="d-flex align-items-center"><button class="btn">立即聯繫</button></div>
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
    link: "",
  },
  {
    name: "去你的工作室",
    link: "",
  },
  {
    name: "八洋RMA ",
    link: "",
  },
  {
    name: "碩美牙醫",
    link: "",
  },
  {
    name: "協力國際",
    link: "",
  },
  {
    name: "EIP系統",
    link: "",
  },
]);
</script>
<style scoped>
.section1 {
  height: 100px;
  position: relative;
  top: 50px;
  z-index: 1000;
  background-color: white;
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
}
.project {
  .title {
    display: flex;
    justify-content: center;
    font-weight: 700;
  }
  .box {
    padding: 1rem;
    border-radius: 8px;
    background-color: #6192d38f;
    color: white;
    text-align: center;
  }
}
.home-bottom {
  width: 100%;
  background-image: url("@/assets/img/home-banner.png");
  background-size: contain;
  padding: 4rem;
  display: flex;
  align-items: center;
  height: 300px;
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
</style>
