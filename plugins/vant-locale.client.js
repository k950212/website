import { Locale } from "vant";
import zhTW from "vant/es/locale/lang/zh-TW";

export default defineNuxtPlugin(() => {
  Locale.use("zh-TW", zhTW);
});
