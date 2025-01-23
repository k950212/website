<template>
  <div class="navbar-stack"></div>
  <div class="navbar-basic" style="z-index: 10000">
    <div class="container-fiuld" style="height: 100%">
      <div class="nav" style="height: 100%">
        <div class="title pointer" @click="goHome">個人網站</div>
        <div class="navLink">
          <div class="link" @click="dropdown = !dropdown">
            專案介紹 <img class="px-1" src="@/assets/img/chevron-down.png" alt="" />
            <div class="link-dropdown" v-if="dropdown">
              <div class="link-dropdown-item mb-2">
                <div>全家記帳本</div>
              </div>
              <div class="link-dropdown-item mb-2">
                <div>去你的工作室</div>
              </div>
              <div class="link-dropdown-item mb-2">
                <div>八洋RMA</div>
              </div>
              <div class="link-dropdown-item mb-2">
                <div>碩美牙醫</div>
              </div>
              <div class="link-dropdown-item mb-2">
                <div>協力國際</div>
              </div>
              <div class="link-dropdown-item">
                <div>EIP 系統</div>
              </div>
            </div>
          </div>
          <div class="link">工作經歷</div>
          <div class="link">關於我</div>
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

onMounted(() => {
  loginStatusCheck();
});
const settingDisplay = ref(false);
const setting = () => {
  settingDisplay.value = !settingDisplay.value;
};
const goHome = () => {
  // router.push("/home");
};

const dropdown = ref(false);
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
        box-shadow: 2px 3px 20px 0px #00000014;
        background-color: white;
        min-height: 200px;
        width: 200px;
        padding: 16px 20px;
        border-radius: 6px;
        .link-dropdown-item {
          display: flex;
          padding: 8px;
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
  z-index: 100;
  background-color: rgba(255, 255, 255, 0);
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
