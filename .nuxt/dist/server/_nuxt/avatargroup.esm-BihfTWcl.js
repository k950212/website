import { B as BaseStyle } from "../server.mjs";
import { s as script$2 } from "./basecomponent.esm-DGNIWB7w.js";
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
  root: "p-avatar-group p-component"
};
var AvatarGroupStyle = BaseStyle.extend({
  name: "avatargroup",
  classes
});
var script$1 = {
  name: "BaseAvatarGroup",
  "extends": script$2,
  style: AvatarGroupStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "AvatarGroup",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=avatargroup.esm-BihfTWcl.js.map
