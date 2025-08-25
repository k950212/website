import script$2 from './inputtext.esm-hitGUgg7.mjs';
import { s as script$3 } from './basecomponent.esm-DGNIWB7w.mjs';
import { B as BaseStyle } from './server.mjs';
import { resolveComponent, openBlock, createElementBlock, mergeProps, Fragment, renderList, renderSlot, createVNode, normalizeClass } from 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue@3.5.11_typescript@5.4.4/node_modules/vue/index.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/renderer.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue-bundle-renderer@2.1.1/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/ufo@1.5.3/node_modules/ufo/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue@3.5.11_typescript@5.4.4/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/@unhead+ssr@1.11.7/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.3.2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.3.2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.3.2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.3.2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/unhead@1.11.7/node_modules/unhead/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/@unhead+shared@1.11.7/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue-router@4.3.0_vue@3.5.11/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/@fortawesome+fontawesome-svg-core@6.5.2/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/@fortawesome+vue-fontawesome@3.0.6_@fortawesome+fontawesome-svg-core@6.5.2_vue@3.5.11/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.5.2/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/@fortawesome+free-regular-svg-icons@6.5.2/node_modules/@fortawesome/free-regular-svg-icons/index.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/@fortawesome+free-brands-svg-icons@6.6.0/node_modules/@fortawesome/free-brands-svg-icons/index.mjs';

var classes = {
  root: "p-inputotp p-component",
  input: "p-inputotp-input"
};
var InputOtpStyle = BaseStyle.extend({
  name: "inputotp",
  classes
});
var script$1 = {
  name: "BaseInputOtp",
  "extends": script$3,
  props: {
    modelValue: {
      type: null,
      "default": false
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    variant: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": null
    },
    length: {
      type: Number,
      "default": 4
    },
    mask: {
      type: Boolean,
      "default": false
    },
    integerOnly: {
      type: Boolean,
      "default": false
    }
  },
  style: InputOtpStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputOtp",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "change", "focus", "blur"],
  data: function data() {
    return {
      tokens: []
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function handler(newValue) {
        this.tokens = newValue ? newValue.split("") : new Array(this.length);
      }
    }
  },
  methods: {
    getTemplateAttrs: function getTemplateAttrs(index) {
      return {
        value: this.tokens[index]
      };
    },
    getTemplateEvents: function getTemplateEvents(index) {
      var _this = this;
      return {
        input: function input(event) {
          return _this.onInput(event, index);
        },
        keydown: function keydown(event) {
          return _this.onKeyDown(event);
        },
        focus: function focus(event) {
          return _this.onFocus(event);
        },
        blur: function blur(event) {
          return _this.onBlur(event);
        },
        paste: function paste(event) {
          return _this.onPaste(event);
        }
      };
    },
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          checked: this.checked,
          disabled: this.disabled
        }
      });
    },
    onInput: function onInput(event, index) {
      this.tokens[index] = event.target.value;
      this.updateModel(event);
      if (event.inputType === "deleteContentBackward") {
        this.moveToPrev(event);
      } else if (event.inputType === "insertText" || event.inputType === "deleteContentForward") {
        this.moveToNext(event);
      }
    },
    updateModel: function updateModel(event) {
      var newValue = this.tokens.join("");
      this.$emit("update:modelValue", newValue);
      this.$emit("change", {
        originalEvent: event,
        value: newValue
      });
    },
    moveToPrev: function moveToPrev(event) {
      var prevInput = this.findPrevInput(event.target);
      if (prevInput) {
        prevInput.focus();
        prevInput.select();
      }
    },
    moveToNext: function moveToNext(event) {
      var nextInput = this.findNextInput(event.target);
      if (nextInput) {
        nextInput.focus();
        nextInput.select();
      }
    },
    findNextInput: function findNextInput(element) {
      var nextElement = element.nextElementSibling;
      if (!nextElement)
        return;
      return nextElement.nodeName === "INPUT" ? nextElement : this.findNextInput(nextElement);
    },
    findPrevInput: function findPrevInput(element) {
      var prevElement = element.previousElementSibling;
      if (!prevElement)
        return;
      return prevElement.nodeName === "INPUT" ? prevElement : this.findPrevInput(prevElement);
    },
    onFocus: function onFocus(event) {
      event.target.select();
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.$emit("blur", event);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.ctrlKey || event.metaKey) {
        return;
      }
      switch (event.code) {
        case "ArrowLeft":
          this.moveToPrev(event);
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          break;
        case "Backspace":
          if (event.target.value.length === 0) {
            this.moveToPrev(event);
            event.preventDefault();
          }
          break;
        case "ArrowRight":
          this.moveToNext(event);
          event.preventDefault();
          break;
        default:
          if (this.integerOnly && !(Number(event.key) >= 0 && Number(event.key) <= 9) || this.tokens.join("").length >= this.length && event.code !== "Delete") {
            event.preventDefault();
          }
          break;
      }
    },
    onPaste: function onPaste(event) {
      if (this.readonly || this.disabled) {
        return;
      }
      var paste = event.clipboardData.getData("text");
      if (paste.length) {
        var pastedCode = paste.substring(0, this.length + 1);
        if (!this.integerOnly || !isNaN(pastedCode)) {
          this.tokens = pastedCode.split("");
          this.updateModel(event);
        }
      }
      event.preventDefault();
    }
  },
  computed: {
    inputMode: function inputMode() {
      return this.integerOnly ? "numeric" : "text";
    },
    inputType: function inputType() {
      return this.mask ? "password" : "text";
    }
  },
  components: {
    OtpInputText: script$2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_OtpInputText = resolveComponent("OtpInputText");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.length, function(i) {
    return renderSlot(_ctx.$slots, "default", {
      key: i,
      events: $options.getTemplateEvents(i - 1),
      attrs: $options.getTemplateAttrs(i - 1),
      index: i
    }, function() {
      return [createVNode(_component_OtpInputText, {
        value: $data.tokens[i - 1],
        type: $options.inputType,
        "class": normalizeClass(_ctx.cx("input")),
        inputmode: $options.inputMode,
        variant: _ctx.variant,
        readonly: _ctx.readonly,
        disabled: _ctx.disabled,
        invalid: _ctx.invalid,
        tabindex: _ctx.tabindex,
        unstyled: _ctx.unstyled,
        onInput: function onInput2($event) {
          return $options.onInput($event, i - 1);
        },
        onFocus: _cache[0] || (_cache[0] = function($event) {
          return $options.onFocus($event);
        }),
        onBlur: _cache[1] || (_cache[1] = function($event) {
          return $options.onBlur($event);
        }),
        onPaste: _cache[2] || (_cache[2] = function($event) {
          return $options.onPaste($event);
        }),
        onKeydown: _cache[3] || (_cache[3] = function($event) {
          return $options.onKeyDown($event);
        }),
        pt: _ctx.ptm("input")
      }, null, 8, ["value", "type", "class", "inputmode", "variant", "readonly", "disabled", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=inputotp.esm-CKB_YNat.mjs.map
