import { s as script$2 } from "./basecomponent.esm-DGNIWB7w.js";
import { B as BaseStyle } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, renderSlot } from "vue";
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
import "vue-router";
import "radix3";
import "devalue";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "vue/server-renderer";
var classes = {
  root: "p-input-icon"
};
var InputIconStyle = BaseStyle.extend({
  name: "inputicon",
  classes
});
var script$1 = {
  name: "BaseInputIcon",
  "extends": script$2,
  style: InputIconStyle,
  props: {
    "class": null
  },
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputIcon",
  "extends": script$1,
  inheritAttrs: false,
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": $options.containerClass
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=inputicon.esm-BEXvIEMS.js.map
