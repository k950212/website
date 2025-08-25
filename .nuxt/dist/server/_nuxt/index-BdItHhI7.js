import { a as __nuxt_component_0, b as __nuxt_component_1 } from "./Footer-DjWCjm0y.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./link-DX4ZBd6R.js";
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
const _imports_1 = "" + __buildAssetsURL("crestRma1.C0x_MO4o.png");
const _imports_2 = "" + __buildAssetsURL("crestRma2.DvnsJvLy.png");
const _imports_3 = "" + __buildAssetsURL("crestRma3.DFfcJB2N.png");
const _imports_4 = "" + __buildAssetsURL("crestRma4.fbgPo_ld.png");
const _imports_5 = "" + __buildAssetsURL("crestRma5.lSIMxUUL.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<div id="projectPage" data-v-13f26e45><div class="container" data-v-13f26e45><div class="title" data-v-13f26e45>八洋RMA送修平台 <img style="${ssrRenderStyle({ "cursor": "pointer" })}"${ssrRenderAttr("src", _imports_0)} alt="" data-v-13f26e45></div><div class="title-m" data-v-13f26e45>CREST Diving 八洋精密股份有限公司</div><div class="d-flex justify-content-center mt-3" data-v-13f26e45><div class="main-img" data-v-13f26e45><div class="main-border" data-v-13f26e45><div class="second-border" data-v-13f26e45><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-13f26e45></div></div></div></div><div class="background" data-v-13f26e45><div class="title mt-5 mb-3" data-v-13f26e45>專案背景</div><div class="content" data-v-13f26e45>本專案旨在為八洋精密公司打造一個送修平台，與八洋潛水錶app連動，當手錶有問題需要送修時，線上填寫資料並即時查看送修進度，有個別狀況也可與客服提出問題，在線回覆．</div></div><div class="skill" data-v-13f26e45><div class="title" data-v-13f26e45>技術應用</div><ul style="${ssrRenderStyle({ "margin-left": "2rem", "margin-top": "1rem" })}" data-v-13f26e45><li data-v-13f26e45>使用：html、css、JavaScript、vue3、Composition API、Nuxt.js、element-plus/nuxt、nuxt-primevue、BootStrap</li></ul></div><div class="otherImg" data-v-13f26e45><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-13f26e45></div><div class="otherImg" data-v-13f26e45><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-13f26e45></div><div class="otherImg" data-v-13f26e45><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-13f26e45></div><div class="otherImg" data-v-13f26e45><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-13f26e45></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/crest-rma-web/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13f26e45"]]);
export {
  index as default
};
//# sourceMappingURL=index-BdItHhI7.js.map
