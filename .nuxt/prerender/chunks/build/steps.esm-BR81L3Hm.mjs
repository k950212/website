import { B as BaseStyle, D as DomHandler } from './server.mjs';
import { mergeProps, openBlock, createElementBlock, createElementVNode, Fragment, renderList, toDisplayString, createBlock, resolveDynamicComponent, createCommentVNode } from 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue@3.5.11_typescript@5.4.4/node_modules/vue/index.mjs';
import { s as script$2 } from './basecomponent.esm-DGNIWB7w.mjs';
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
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-steps p-component", {
      "p-readonly": props.readonly
    }];
  },
  menu: "p-steps-list",
  menuitem: function menuitem(_ref2) {
    var instance = _ref2.instance, item = _ref2.item, index = _ref2.index;
    return ["p-steps-item", {
      "p-highlight p-steps-current": instance.isActive(index),
      "p-disabled": instance.isItemDisabled(item, index)
    }];
  },
  action: "p-menuitem-link",
  step: "p-steps-number",
  label: "p-steps-title"
};
var StepsStyle = BaseStyle.extend({
  name: "steps",
  classes
});
var script$1 = {
  name: "BaseSteps",
  "extends": script$2,
  props: {
    id: {
      type: String
    },
    model: {
      type: Array,
      "default": null
    },
    readonly: {
      type: Boolean,
      "default": true
    },
    activeStep: {
      type: Number,
      "default": 0
    }
  },
  style: StepsStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Steps",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:activeStep", "step-change"],
  data: function data() {
    return {
      d_activeStep: this.activeStep
    };
  },
  watch: {
    activeStep: function activeStep(newValue) {
      this.d_activeStep = newValue;
    }
  },
  mounted: function mounted() {
    var firstItem = this.findFirstItem();
    firstItem && (firstItem.tabIndex = "0");
  },
  methods: {
    getPTOptions: function getPTOptions(key, item, index) {
      return this.ptm(key, {
        context: {
          item,
          index,
          active: this.isActive(index),
          disabled: this.isItemDisabled(item, index)
        }
      });
    },
    onItemClick: function onItemClick(event, item, index) {
      if (this.disabled(item) || this.readonly) {
        event.preventDefault();
        return;
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item
        });
      }
      if (index !== this.d_activeStep) {
        this.d_activeStep = index;
        this.$emit("update:activeStep", this.d_activeStep);
      }
      this.$emit("step-change", {
        originalEvent: event,
        index
      });
    },
    onItemKeydown: function onItemKeydown(event, item) {
      switch (event.code) {
        case "ArrowRight": {
          this.navigateToNextItem(event.target);
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          this.navigateToPrevItem(event.target);
          event.preventDefault();
          break;
        }
        case "Home": {
          this.navigateToFirstItem(event.target);
          event.preventDefault();
          break;
        }
        case "End": {
          this.navigateToLastItem(event.target);
          event.preventDefault();
          break;
        }
        case "Tab":
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space": {
          this.onItemClick(event, item);
          event.preventDefault();
          break;
        }
      }
    },
    navigateToNextItem: function navigateToNextItem(target) {
      var nextItem = this.findNextItem(target);
      nextItem && this.setFocusToMenuitem(target, nextItem);
    },
    navigateToPrevItem: function navigateToPrevItem(target) {
      var prevItem = this.findPrevItem(target);
      prevItem && this.setFocusToMenuitem(target, prevItem);
    },
    navigateToFirstItem: function navigateToFirstItem(target) {
      var firstItem = this.findFirstItem(target);
      firstItem && this.setFocusToMenuitem(target, firstItem);
    },
    navigateToLastItem: function navigateToLastItem(target) {
      var lastItem = this.findLastItem(target);
      lastItem && this.setFocusToMenuitem(target, lastItem);
    },
    findNextItem: function findNextItem(item) {
      var nextItem = item.parentElement.nextElementSibling;
      return nextItem ? nextItem.children[0] : null;
    },
    findPrevItem: function findPrevItem(item) {
      var prevItem = item.parentElement.previousElementSibling;
      return prevItem ? prevItem.children[0] : null;
    },
    findFirstItem: function findFirstItem() {
      var firstSibling = DomHandler.findSingle(this.$refs.list, '[data-pc-section="menuitem"]');
      return firstSibling ? firstSibling.children[0] : null;
    },
    findLastItem: function findLastItem() {
      var siblings = DomHandler.find(this.$refs.list, '[data-pc-section="menuitem"]');
      return siblings ? siblings[siblings.length - 1].children[0] : null;
    },
    setFocusToMenuitem: function setFocusToMenuitem(target, focusableItem) {
      target.tabIndex = "-1";
      focusableItem.tabIndex = "0";
      focusableItem.focus();
    },
    isActive: function isActive(index) {
      return index === this.d_activeStep;
    },
    isItemDisabled: function isItemDisabled(item, index) {
      return this.disabled(item) || this.readonly && !this.isActive(index);
    },
    visible: function visible(item) {
      return typeof item.visible === "function" ? item.visible() : item.visible !== false;
    },
    disabled: function disabled(item) {
      return typeof item.disabled === "function" ? item.disabled() : item.disabled;
    },
    label: function label(item) {
      return typeof item.label === "function" ? item.label() : item.label;
    },
    getMenuItemProps: function getMenuItemProps(item, index) {
      var _this = this;
      return {
        action: mergeProps({
          "class": this.cx("action"),
          onClick: function onClick($event) {
            return _this.onItemClick($event, item);
          },
          onKeyDown: function onKeyDown($event) {
            return _this.onItemKeydown($event, item);
          }
        }, this.getPTOptions("action", item, index)),
        step: mergeProps({
          "class": this.cx("step")
        }, this.getPTOptions("step", item, index)),
        label: mergeProps({
          "class": this.cx("label")
        }, this.getPTOptions("label", item, index))
      };
    }
  }
};
var _hoisted_1 = ["id"];
var _hoisted_2 = ["aria-current", "onClick", "onKeydown", "data-p-highlight", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", mergeProps({
    id: _ctx.id,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("ol", mergeProps({
    ref: "list",
    "class": _ctx.cx("menu")
  }, _ctx.ptm("menu")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.label(item) + "_" + index.toString()
    }, [$options.visible(item) ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      "class": [_ctx.cx("menuitem", {
        item,
        index
      }), item["class"]],
      style: item.style,
      "aria-current": $options.isActive(index) ? "step" : void 0,
      onClick: function onClick($event) {
        return $options.onItemClick($event, item, index);
      },
      onKeydown: function onKeydown($event) {
        return $options.onItemKeydown($event, item, index);
      }
    }, $options.getPTOptions("menuitem", item, index), {
      "data-p-highlight": $options.isActive(index),
      "data-p-disabled": $options.isItemDisabled(item, index)
    }), [!_ctx.$slots.item ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": _ctx.cx("action")
    }, $options.getPTOptions("action", item, index)), [createElementVNode("span", mergeProps({
      "class": _ctx.cx("step")
    }, $options.getPTOptions("step", item, index)), toDisplayString(index + 1), 17), createElementVNode("span", mergeProps({
      "class": _ctx.cx("label")
    }, $options.getPTOptions("label", item, index)), toDisplayString($options.label(item)), 17)], 16)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item,
      index,
      active: index === $data.d_activeStep,
      label: $options.label(item),
      props: $options.getMenuItemProps(item, index)
    }, null, 8, ["item", "index", "active", "label", "props"]))], 16, _hoisted_2)) : createCommentVNode("", true)], 64);
  }), 128))], 16)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=steps.esm-BR81L3Hm.mjs.map
