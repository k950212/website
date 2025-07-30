<template>
  <div class="navbar-stack"></div>
  <div class="navbar-basic" style="z-index: 10000">
    <div class="container-fiuld" style="height: 100%">
      <div class="nav" style="height: 100%">
        <div class="title pointer" @click="goHome">個人網站</div>
        <div class="navLink">
          <div class="link" @click="openMask">
            專案介紹 <img class="px-1" src="@/assets/img/chevron-down.png" alt="" />
            <div class="link-dropdown" v-if="dropdown">
              <div class="link-dropdown-item mb-2" @click="goTo('familyMart')" :class="{ active: routerPath == 'family-mart' }">
                <div>全家記帳本(WebView)</div>
              </div>
              <div class="link-dropdown-item mb-2" @click="goTo('goYourStudio')" :class="{ active: routerPath == 'go-your-studio' }">
                <div>去你的工作室(租借場地)</div>
              </div>
              <div class="link-dropdown-item mb-2" @click="goTo('crestRma')" :class="{ active: routerPath == 'crest-rma-web' }">
                <div>八洋RMA(送修平台)</div>
              </div>
              <div class="link-dropdown-item mb-2" @click="goTo('charming')" :class="{ active: routerPath == 'charming-web' }">
                <div>碩美牙醫(形象官網)</div>
              </div>
              <div class="link-dropdown-item mb-2" @click="goTo('tongxin')" :class="{ active: routerPath == 'tongxin-xili-web' }">
                <div>協力國際(形象官網)</div>
              </div>
              <div class="link-dropdown-item mb-2" @click="goTo('bremsinn')" :class="{ active: routerPath == 'bremsinn-web' }">
                <div>慎行科技(形象官網)</div>
              </div>
              <div class="link-dropdown-item mb-2" @click="goTo('gaocheung')" :class="{ active: routerPath == 'gaocheung-web' }">
                <div>高強建設(形象官網)</div>
              </div>
              <div class="link-dropdown-item" @click="goTo('sinnigtool')" :class="{ active: routerPath == 'sinnigtool' }">
                <div>網路小工具(小工具)</div>
              </div>
              <div class="link-dropdown-item" @click="goTo('wintechWeb')" :class="{ active: routerPath == 'wintech-web' }">
                <div>成浩管理平台(監測平台)</div>
              </div>
              <div class="link-dropdown-item" @click="goTo('km5257')" :class="{ active: routerPath == 'km5257' }">
                <div>超群特產行(購物平台)</div>
              </div>
              <div class="link-dropdown-item" @click="goTo('gameStore')" :class="{ active: routerPath == 'gameStore' }">
                <div>GamerStore(購物平台)</div>
              </div>
              <div class="link-dropdown-item" @click="goTo('personalWebsite')" :class="{ active: routerPath == 'personalWebsite' }">
                <div>個人網站</div>
              </div>
            </div>
          </div>
          <div class="link">工作經歷</div>
          <div class="link" @click="goAbout">關於我</div>
          <button class="btn link" @click="setting">聯絡資訊</button>
        </div>
        <div class="navMenu">
          <img src="@/assets/img/menu_icons.png" alt="" style="width: 40px; height: 50px" />
        </div>
      </div>
    </div>
  </div>
  <div class="fullScreen" v-if="settingDisplay" @click="setting"></div>
</template>
<script setup>
import { onMounted } from "vue";

import apiMember from "@/apis/member";
import { commonFun } from "@/mixin/commonFun";
const { loginStatusCheck, loginStatus } = commonFun();

const route = useRoute();
const router = useRouter();
const props = defineProps(["login"]);
const routerPath = ref("");
onMounted(() => {
  loginStatusCheck();
  routerPath.value = route.name;
});
const settingDisplay = ref(false);
const setting = () => {
  settingDisplay.value = !settingDisplay.value;
  dropdown.value = false;
};
const goHome = () => {
  router.push("/");
};
const goAbout = () => {
  router.push("/about");
};
const goTo = (text) => {
  if (text == "familyMart") {
    router.push("/family-mart");
  } else if (text == "goYourStudio") {
    router.push("/go-your-studio");
  } else if (text == "crestRma") {
    router.push("/crest-rma-web");
  } else if (text == "charming") {
    router.push("/charming-web");
  } else if (text == "tongxin") {
    router.push("/tongxin-xili-web");
  } else if (text == "bremsinn") {
    router.push("/bremsinn-web");
  } else if (text == "gaocheung") {
    router.push("/gaocheung-web");
  } else if (text == "sinnigtool") {
    router.push("sinnigtool");
  } else if (text == "wintechWeb") {
    router.push("wintech-web");
  } else if (text == "km5257") {
    router.push("km5257");
  }
};
const dropdown = ref(false);
const openMask = () => {
  dropdown.value = !dropdown.value;
  settingDisplay.value = !settingDisplay.value;
};
</script>
<style scoped>
.navbar-stack {
  height: 80px;
}
.navbar-basic {
  top: 0;
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #dde1e6;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0rem 6rem;
    .navLink {
      position: relative;
      display: flex;
      flex-direction: row;
      cursor: pointer;
      .link {
        margin: 0rem 24px;
        display: flex;
        align-items: center;
      }
      button {
        padding: 16px 12px;
        background-color: #6192d3;
        color: white;
        border-radius: 6px;
        width: 122px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
      .link-dropdown {
        top: 80px;
        position: absolute;
        z-index: 100010 !important;
        box-shadow: 2px 3px 20px 0px #00000014;
        background-color: white;
        min-height: 200px;
        width: 260px;
        padding: 16px 20px;
        border-radius: 6px;
        .link-dropdown-item {
          display: flex;
          padding: 8px;
          &:hover {
            color: #6192d3;
            font-weight: bold;
          }
          img {
            margin-right: 4px;
          }
        }
      }
    }
  }
  .title {
    color: black;
    display: flex;
    align-items: center;
    font-size: 20px;
  }
}
.navMenu {
  display: none;
}

.fullScreen {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 5000;
  background-color: rgba(0, 0, 0, 0.5);
}
.active {
  color: #6192d3;
  font-weight: bold;
}
@media screen and (max-width: 991px) {
  .navbar-basic {
    .nav {
      padding: 0rem 2rem;
    }
  }

  .navMenu {
    display: block;
  }
  .navLink {
    display: none !important;
  }
}
</style>
