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
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-splitter-panel", {
      "p-splitter-panel-nested": instance.isNested
    }];
  }
};
var SplitterPanelStyle = BaseStyle.extend({
  name: "splitterpanel",
  classes
});
var script$1 = {
  name: "BaseSplitterPanel",
  "extends": script$2,
  props: {
    size: {
      type: Number,
      "default": null
    },
    minSize: {
      type: Number,
      "default": null
    }
  },
  style: SplitterPanelStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "SplitterPanel",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      nestedState: null
    };
  },
  computed: {
    isNested: function isNested() {
      var _this = this;
      return this.$slots["default"]().some(function(child) {
        _this.nestedState = child.type.name === "Splitter" ? true : null;
        return _this.nestedState;
      });
    },
    getPTOptions: function getPTOptions() {
      return {
        context: {
          nested: this.isNested
        }
      };
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root", $options.getPTOptions)), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=splitterpanel.esm-CFGF7b6S.js.map
