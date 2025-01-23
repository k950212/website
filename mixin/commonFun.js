import { ref, onBeforeMount, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export function commonFun() {
  const router = useRouter();
  const route = useRoute();
  const loginStatus = ref();
  // navbar判斷樣式
  const loginStatusCheck = () => {
    if (localStorage.getItem("login")) {
      loginStatus.value = localStorage.getItem("login");
    }
  };
  return {
    loginStatusCheck,
    loginStatus,
  };
}
