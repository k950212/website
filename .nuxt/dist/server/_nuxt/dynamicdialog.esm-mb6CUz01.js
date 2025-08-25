import script$2 from "./dialog.esm-DJMX-I-4.js";
import { r as DynamicDialogEventBus, U as UniqueComponentId } from "../server.mjs";
import { s as script$3 } from "./basecomponent.esm-DGNIWB7w.js";
import { resolveComponent, openBlock, createElementBlock, Fragment, renderList, createBlock, mergeProps, createSlots, withCtx, resolveDynamicComponent, normalizeProps, guardReactiveProps } from "vue";
import "./index.esm-CfYOiD8L.js";
import "./baseicon.esm-guqPmyCs.js";
import "./portal.esm-CdWWxjdD.js";
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
var DynamicDialogStyle = {};
var script$1 = {
  name: "BaseDynamicDialog",
  "extends": script$3,
  props: {},
  style: DynamicDialogStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "DynamicDialog",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      instanceMap: {}
    };
  },
  openListener: null,
  closeListener: null,
  currentInstance: null,
  mounted: function mounted() {
    var _this = this;
    this.openListener = function(_ref) {
      var instance = _ref.instance;
      var key = UniqueComponentId() + "_dynamic_dialog";
      instance.visible = true;
      instance.key = key;
      _this.instanceMap[key] = instance;
    };
    this.closeListener = function(_ref2) {
      var instance = _ref2.instance, params = _ref2.params;
      var key = instance.key;
      var currentInstance = _this.instanceMap[key];
      if (currentInstance) {
        currentInstance.visible = false;
        currentInstance.options.onClose && currentInstance.options.onClose({
          data: params,
          type: "config-close"
        });
        _this.currentInstance = currentInstance;
      }
    };
    DynamicDialogEventBus.on("open", this.openListener);
    DynamicDialogEventBus.on("close", this.closeListener);
  },
  beforeUnmount: function beforeUnmount() {
    DynamicDialogEventBus.off("open", this.openListener);
    DynamicDialogEventBus.off("close", this.closeListener);
  },
  methods: {
    onDialogHide: function onDialogHide(instance) {
      !this.currentInstance && instance.options.onClose && instance.options.onClose({
        type: "dialog-close"
      });
    },
    onDialogAfterHide: function onDialogAfterHide() {
      this.currentInstance && delete this.currentInstance;
      this.currentInstance = null;
    },
    getTemplateItems: function getTemplateItems(template) {
      return Array.isArray(template) ? template : [template];
    }
  },
  components: {
    DDialog: script$2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DDialog = resolveComponent("DDialog");
  return openBlock(true), createElementBlock(Fragment, null, renderList($data.instanceMap, function(instance, key) {
    return openBlock(), createBlock(_component_DDialog, mergeProps({
      key,
      visible: instance.visible,
      "onUpdate:visible": function onUpdateVisible($event) {
        return instance.visible = $event;
      },
      _instance: instance
    }, instance.options.props, {
      onHide: function onHide($event) {
        return $options.onDialogHide(instance);
      },
      onAfterHide: $options.onDialogAfterHide
    }), createSlots({
      "default": withCtx(function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(instance.content), normalizeProps(guardReactiveProps(instance.options.emits)), null, 16))];
      }),
      _: 2
    }, [instance.options.templates && instance.options.templates.header ? {
      name: "header",
      fn: withCtx(function() {
        return [(openBlock(true), createElementBlock(Fragment, null, renderList($options.getTemplateItems(instance.options.templates.header), function(header, index) {
          return openBlock(), createBlock(resolveDynamicComponent(header), mergeProps({
            key: index + "_header"
          }, instance.options.emits), null, 16);
        }), 128))];
      }),
      key: "0"
    } : void 0, instance.options.templates && instance.options.templates.footer ? {
      name: "footer",
      fn: withCtx(function() {
        return [(openBlock(true), createElementBlock(Fragment, null, renderList($options.getTemplateItems(instance.options.templates.footer), function(footer, index) {
          return openBlock(), createBlock(resolveDynamicComponent(footer), mergeProps({
            key: index + "_footer"
          }, instance.options.emits), null, 16);
        }), 128))];
      }),
      key: "1"
    } : void 0]), 1040, ["visible", "onUpdate:visible", "_instance", "onHide", "onAfterHide"]);
  }), 128);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=dynamicdialog.esm-mb6CUz01.js.map
