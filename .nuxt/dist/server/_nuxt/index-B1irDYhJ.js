import { a as __nuxt_component_0, b as __nuxt_component_1 } from "./Footer-DjWCjm0y.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./link-DX4ZBd6R.js";
import { _ as _imports_0$1 } from "./goYourStudio1-ClRB0IYx.js";
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
const _imports_2 = "" + __buildAssetsURL("goYourStudio2.D53KB3c6.png");
const _imports_3 = "" + __buildAssetsURL("goYourStudio3.BzHElB-o.png");
const _imports_4 = "" + __buildAssetsURL("goYourStudio4.X_3s84t7.png");
const _imports_5 = "" + __buildAssetsURL("goYourStudio5.gUpsrlVk.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<div id="projectPage" data-v-6309ea44><div class="container" data-v-6309ea44><div class="title" data-v-6309ea44>去你的工作室 <img style="${ssrRenderStyle({ "cursor": "pointer" })}"${ssrRenderAttr("src", _imports_0)} alt="" data-v-6309ea44></div><div class="title-m" data-v-6309ea44>去你的工作室</div><div class="d-flex justify-content-center mt-3" data-v-6309ea44><div class="main-img" data-v-6309ea44><div class="main-border" data-v-6309ea44><div class="second-border" data-v-6309ea44><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-6309ea44></div></div></div></div><div class="background" data-v-6309ea44><div class="title mt-5 mb-3" data-v-6309ea44>專案背景</div><div class="content" data-v-6309ea44> 本專案旨在為工作室租借公司打造一個方便瀏覽，在線上即可預覽工作室的環境，現有的設備，並可依照地圖去檢視需求的工作室地點，想實際參訪也可以，輕鬆參觀，現在下訂預約即可立即使用． </div></div><div class="skill" data-v-6309ea44><div class="title" data-v-6309ea44>技術應用</div><ul style="${ssrRenderStyle({ "margin-left": "2rem", "margin-top": "1rem" })}" data-v-6309ea44><li data-v-6309ea44>使用：html、css、vue2、option Api、ElementPlus、PrimeVue、BootStrap、RWD</li></ul></div><div class="otherImg" data-v-6309ea44><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-6309ea44></div><div class="otherImg" data-v-6309ea44><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-6309ea44></div><div class="otherImg" data-v-6309ea44><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-6309ea44></div><div class="otherImg" data-v-6309ea44><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-6309ea44></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/go-your-studio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6309ea44"]]);
export {
  index as default
};
//# sourceMappingURL=index-B1irDYhJ.js.map
