import { _ as _imports_0, a as __nuxt_component_0, b as __nuxt_component_1 } from "./Footer-DjWCjm0y.js";
import { _ as _export_sfc, f as useRoute, u as useRouter } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import "vue-router";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "devalue";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-brands-svg-icons";
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.0.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M112%20128C85.5%20128%2064%20149.5%2064%20176C64%20191.1%2071.1%20205.3%2083.2%20214.4L291.2%20370.4C308.3%20383.2%20331.7%20383.2%20348.8%20370.4L556.8%20214.4C568.9%20205.3%20576%20191.1%20576%20176C576%20149.5%20554.5%20128%20528%20128L112%20128zM64%20260L64%20448C64%20483.3%2092.7%20512%20128%20512L512%20512C547.3%20512%20576%20483.3%20576%20448L576%20260L377.6%20408.8C343.5%20434.4%20296.5%20434.4%20262.4%20408.8L64%20260z'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.0.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M237.9%20461.4C237.9%20463.4%20235.6%20465%20232.7%20465C229.4%20465.3%20227.1%20463.7%20227.1%20461.4C227.1%20459.4%20229.4%20457.8%20232.3%20457.8C235.3%20457.5%20237.9%20459.1%20237.9%20461.4zM206.8%20456.9C206.1%20458.9%20208.1%20461.2%20211.1%20461.8C213.7%20462.8%20216.7%20461.8%20217.3%20459.8C217.9%20457.8%20216%20455.5%20213%20454.6C210.4%20453.9%20207.5%20454.9%20206.8%20456.9zM251%20455.2C248.1%20455.9%20246.1%20457.8%20246.4%20460.1C246.7%20462.1%20249.3%20463.4%20252.3%20462.7C255.2%20462%20257.2%20460.1%20256.9%20458.1C256.6%20456.2%20253.9%20454.9%20251%20455.2zM316.8%2072C178.1%2072%2072%20177.3%2072%20316C72%20426.9%20141.8%20521.8%20241.5%20555.2C254.3%20557.5%20258.8%20549.6%20258.8%20543.1C258.8%20536.9%20258.5%20502.7%20258.5%20481.7C258.5%20481.7%20188.5%20496.7%20173.8%20451.9C173.8%20451.9%20162.4%20422.8%20146%20415.3C146%20415.3%20123.1%20399.6%20147.6%20399.9C147.6%20399.9%20172.5%20401.9%20186.2%20425.7C208.1%20464.3%20244.8%20453.2%20259.1%20446.6C261.4%20430.6%20267.9%20419.5%20275.1%20412.9C219.2%20406.7%20162.8%20398.6%20162.8%20302.4C162.8%20274.9%20170.4%20261.1%20186.4%20243.5C183.8%20237%20175.3%20210.2%20189%20175.6C209.9%20169.1%20258%20202.6%20258%20202.6C278%20197%20299.5%20194.1%20320.8%20194.1C342.1%20194.1%20363.6%20197%20383.6%20202.6C383.6%20202.6%20431.7%20169%20452.6%20175.6C466.3%20210.3%20457.8%20237%20455.2%20243.5C471.2%20261.2%20481%20275%20481%20302.4C481%20398.9%20422.1%20406.6%20366.2%20412.9C375.4%20420.8%20383.2%20435.8%20383.2%20459.3C383.2%20493%20382.9%20534.7%20382.9%20542.9C382.9%20549.4%20387.5%20557.3%20400.2%20555C500.2%20521.8%20568%20426.9%20568%20316C568%20177.3%20455.5%2072%20316.8%2072zM169.2%20416.9C167.9%20417.9%20168.2%20420.2%20169.9%20422.1C171.5%20423.7%20173.8%20424.4%20175.1%20423.1C176.4%20422.1%20176.1%20419.8%20174.4%20417.9C172.8%20416.3%20170.5%20415.6%20169.2%20416.9zM158.4%20408.8C157.7%20410.1%20158.7%20411.7%20160.7%20412.7C162.3%20413.7%20164.3%20413.4%20165%20412C165.7%20410.7%20164.7%20409.1%20162.7%20408.1C160.7%20407.5%20159.1%20407.8%20158.4%20408.8zM190.8%20444.4C189.2%20445.7%20189.8%20448.7%20192.1%20450.6C194.4%20452.9%20197.3%20453.2%20198.6%20451.6C199.9%20450.3%20199.3%20447.3%20197.3%20445.4C195.1%20443.1%20192.1%20442.8%20190.8%20444.4zM179.4%20429.7C177.8%20430.7%20177.8%20433.3%20179.4%20435.6C181%20437.9%20183.7%20438.9%20185%20437.9C186.6%20436.6%20186.6%20434%20185%20431.7C183.6%20429.4%20181%20428.4%20179.4%20429.7z'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.0.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M128%20252.6C128%20148.4%20214%2064%20320%2064C426%2064%20512%20148.4%20512%20252.6C512%20371.9%20391.8%20514.9%20341.6%20569.4C329.8%20582.2%20310.1%20582.2%20298.3%20569.4C248.1%20514.9%20127.9%20371.9%20127.9%20252.6zM320%20320C355.3%20320%20384%20291.3%20384%20256C384%20220.7%20355.3%20192%20320%20192C284.7%20192%20256%20220.7%20256%20256C256%20291.3%20284.7%20320%20320%20320z'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<div class="container" data-v-a71b8466><div class="headImg my-2" data-v-a71b8466><div class="img" data-v-a71b8466></div></div><div class="content" data-v-a71b8466><div class="f30 my-2" data-v-a71b8466>你好．我是張允豪</div><div class="f20 my-1" data-v-a71b8466>一名前端工程師，使用Vue3與Nuxt做開發</div><div class="f20 my-1" data-v-a71b8466>負責前端部分:Html Css切版、Js撰寫 Api串接、Vue框架。</div><div class="f20 my-1" data-v-a71b8466>參與過不少專案開發，詳情請看專案介紹</div></div><div class="content" data-v-a71b8466><div class="f30 my-2" data-v-a71b8466>經歷</div><div class="f20" data-v-a71b8466>18.09-22.06 大同大學</div><div class="f20" data-v-a71b8466>22.07-23.11 當兵＆自學前端</div><div class="f20" data-v-a71b8466>23.12-25.08 慎行科技公司</div></div><div class="content" data-v-a71b8466><div class="f30 my-2" data-v-a71b8466>聯絡我</div><div class="centerText" data-v-a71b8466><div class="center" data-v-a71b8466><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-a71b8466></div><div class="center" data-v-a71b8466>:0909786383</div></div><div class="centerText" data-v-a71b8466><div class="center" data-v-a71b8466><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-a71b8466></div><div class="center" data-v-a71b8466>:k950212@gmail.com</div></div><div class="centerText" data-v-a71b8466><div class="center" data-v-a71b8466><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-a71b8466></div><div class="center" data-v-a71b8466><span style="${ssrRenderStyle({ "color": "blue" })}" data-v-a71b8466>Link</span></div></div><div class="centerText" data-v-a71b8466><div class="center" data-v-a71b8466><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-a71b8466></div><div class="center" data-v-a71b8466>:台北市信義區XXXX</div></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a71b8466"]]);
export {
  index as default
};
//# sourceMappingURL=index-CUPJe-Bm.js.map
