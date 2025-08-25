import { a as __nuxt_component_0, b as __nuxt_component_1 } from "./Footer-DjWCjm0y.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./link-DX4ZBd6R.js";
import { _ as _imports_3 } from "./wintech3-IPBaMTK3.js";
import { _ as _export_sfc } from "../server.mjs";
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
const _imports_1 = "" + __buildAssetsURL("wintech1.gcPzljVw.png");
const _imports_2 = "" + __buildAssetsURL("wintech2.BEm4h8XR.png");
const _imports_4 = "" + __buildAssetsURL("wintech4.D1pr2iHj.png");
const _imports_5 = "" + __buildAssetsURL("wintech5.ClXTYldb.png");
const _imports_6 = "" + __buildAssetsURL("wintech6.-b1LvIn3.png");
const _imports_7 = "" + __buildAssetsURL("wintech7.PrZ2394N.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<div id="projectPage" data-v-383cd213><div class="container" data-v-383cd213><div class="title" data-v-383cd213>成浩管理平台 <img style="${ssrRenderStyle({ "cursor": "pointer" })}"${ssrRenderAttr("src", _imports_0)} alt="" data-v-383cd213></div><div class="title-m" data-v-383cd213></div><div class="d-flex justify-content-center mt-3" data-v-383cd213><div class="main-img" data-v-383cd213><div class="main-border" data-v-383cd213><div class="second-border" data-v-383cd213><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-383cd213></div></div></div></div><div class="background" data-v-383cd213><div class="title mt-5 mb-3" data-v-383cd213>專案背景</div><div class="content" data-v-383cd213>本專案旨在為建立一個時實監控數據的平台，為公司整理資料為圖表方便匯出與查看．</div></div><div class="skill" data-v-383cd213><div class="title" data-v-383cd213>技術應用</div><ul style="${ssrRenderStyle({ "margin-left": "2rem", "margin-top": "1rem" })}" data-v-383cd213><li data-v-383cd213>使用：html、css、JavaScript、Vue3、Composition API、chart.js、echarts、primevue、vue-i18n、BootStrap</li></ul></div><div class="otherImg" data-v-383cd213><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-383cd213></div><div class="otherImg" data-v-383cd213><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-383cd213></div><div class="otherImg" data-v-383cd213><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-383cd213></div><div class="otherImg" data-v-383cd213><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-383cd213></div><div class="otherImg" data-v-383cd213><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-383cd213></div><div class="otherImg" data-v-383cd213><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-383cd213></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wintech-web/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-383cd213"]]);
export {
  index as default
};
//# sourceMappingURL=index-DsQ0R_5v.js.map
