import { ref, reactive, defineComponent, computed, createVNode, provide, watchEffect, inject, mergeProps, Transition, Teleport, watch, nextTick, Fragment, withKeys, getCurrentInstance, onUnmounted, withDirectives, vShow, toRaw, useSSRContext, onActivated, unref, isRef, withCtx, isVNode } from 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue@3.5.11_typescript@5.4.4/node_modules/vue/index.mjs';
import { c as navigateTo, b as useRuntimeConfig, f as useRoute$1, u as useRouter, _ as _export_sfc } from './server.mjs';
import { ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue@3.5.11_typescript@5.4.4/node_modules/vue/server-renderer/index.mjs';
import { useRouter as useRouter$1, useRoute as useRoute$2 } from 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue-router@4.3.0_vue@3.5.11/node_modules/vue-router/dist/vue-router.node.mjs';

function noop() {
}
const extend = Object.assign;
const isObject = (val) => val !== null && typeof val === "object";
const isDef = (val) => val !== void 0 && val !== null;
const isFunction = (val) => typeof val === "function";
const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch);
const isNumeric = (val) => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
function get(object, path) {
  const keys = path.split(".");
  let result = object;
  keys.forEach((key) => {
    var _a;
    result = isObject(result) ? (_a = result[key]) != null ? _a : "" : "";
  });
  return result;
}
function pick(obj, keys, ignoreUndefined) {
  return keys.reduce(
    (ret, key) => {
      if (!ignoreUndefined || obj[key] !== void 0) {
        ret[key] = obj[key];
      }
      return ret;
    },
    {}
  );
}
const unknownProp = null;
const numericProp = [Number, String];
const truthProp = {
  type: Boolean,
  default: true
};
const makeNumberProp = (defaultVal) => ({
  type: Number,
  default: defaultVal
});
const makeNumericProp = (defaultVal) => ({
  type: numericProp,
  default: defaultVal
});
const makeStringProp = (defaultVal) => ({
  type: String,
  default: defaultVal
});
var isWindow = (val) => val === void 0;
var makeDOMRect = (width2, height2) => ({
  top: 0,
  left: 0,
  right: width2,
  bottom: height2,
  width: width2,
  height: height2
});
var useRect = (elementOrRef) => {
  const element = unref(elementOrRef);
  if (isWindow(element)) {
    const width2 = element.innerWidth;
    const height2 = element.innerHeight;
    return makeDOMRect(width2, height2);
  }
  if (element == null ? void 0 : element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }
  return makeDOMRect(0, 0);
};
function useParent(key) {
  const parent = inject(key, null);
  if (parent) {
    const instance = getCurrentInstance();
    const { link, unlink, internalChildren } = parent;
    link(instance);
    onUnmounted(() => unlink(instance));
    const index = computed(() => internalChildren.indexOf(instance));
    return {
      parent,
      index
    };
  }
  return {
    parent: null,
    index: ref(-1)
  };
}
function flattenVNodes(children) {
  const result = [];
  const traverse = (children2) => {
    if (Array.isArray(children2)) {
      children2.forEach((child) => {
        var _a;
        if (isVNode(child)) {
          result.push(child);
          if ((_a = child.component) == null ? void 0 : _a.subTree) {
            result.push(child.component.subTree);
            traverse(child.component.subTree.children);
          }
          if (child.children) {
            traverse(child.children);
          }
        }
      });
    }
  };
  traverse(children);
  return result;
}
var findVNodeIndex = (vnodes, vnode) => {
  const index = vnodes.indexOf(vnode);
  if (index === -1) {
    return vnodes.findIndex(
      (item) => vnode.key !== void 0 && vnode.key !== null && item.type === vnode.type && item.key === vnode.key
    );
  }
  return index;
};
function sortChildren(parent, publicChildren, internalChildren) {
  const vnodes = flattenVNodes(parent.subTree.children);
  internalChildren.sort(
    (a, b) => findVNodeIndex(vnodes, a.vnode) - findVNodeIndex(vnodes, b.vnode)
  );
  const orderedPublicChildren = internalChildren.map((item) => item.proxy);
  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a);
    const indexB = orderedPublicChildren.indexOf(b);
    return indexA - indexB;
  });
}
function useChildren(key) {
  const publicChildren = reactive([]);
  const internalChildren = reactive([]);
  const parent = getCurrentInstance();
  const linkChildren = (value) => {
    const link = (child) => {
      if (child.proxy) {
        internalChildren.push(child);
        publicChildren.push(child.proxy);
        sortChildren(parent, publicChildren, internalChildren);
      }
    };
    const unlink = (child) => {
      const index = internalChildren.indexOf(child);
      publicChildren.splice(index, 1);
      internalChildren.splice(index, 1);
    };
    provide(
      key,
      Object.assign(
        {
          link,
          unlink,
          children: publicChildren,
          internalChildren
        },
        value
      )
    );
  };
  return {
    children: publicChildren,
    linkChildren
  };
}
function onMountedOrActivated(hook) {
  onActivated(() => {
  });
}
var width;
var height;
function useWindowSize() {
  if (!width) {
    width = ref(0);
    height = ref(0);
  }
  return { width, height };
}
var overflowScrollReg = /scroll|auto|overlay/i;
var defaultRoot = void 0;
function isElement(node) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === ELEMENT_NODE_TYPE;
}
function getScrollParent(el, root = defaultRoot) {
  let node = el;
  while (node && node !== root && isElement(node)) {
    const { overflowY } = (void 0).getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}
const stopPropagation = (event) => event.stopPropagation();
function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
const { width: windowWidth, height: windowHeight } = useWindowSize();
function addUnit(value) {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value);
  }
  return void 0;
}
function getSizeStyle(originSize) {
  if (isDef(originSize)) {
    if (Array.isArray(originSize)) {
      return {
        width: addUnit(originSize[0]),
        height: addUnit(originSize[1])
      };
    }
    const size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
}
function getZIndexStyle(zIndex) {
  const style = {};
  if (zIndex !== void 0) {
    style.zIndex = +zIndex;
  }
  return style;
}
const camelizeRE = /-(\w)/g;
const camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());
const kebabCase = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
const { hasOwnProperty } = Object.prototype;
function assignKey(to, from, key) {
  const val = from[key];
  if (!isDef(val)) {
    return;
  }
  if (!hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), val);
  }
}
function deepAssign(to, from) {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key);
  });
  return to;
}
var stdin_default$a = {
  name: "\u59D3\u540D",
  tel: "\u7535\u8BDD",
  save: "\u4FDD\u5B58",
  clear: "\u6E05\u7A7A",
  cancel: "\u53D6\u6D88",
  confirm: "\u786E\u8BA4",
  delete: "\u5220\u9664",
  loading: "\u52A0\u8F7D\u4E2D...",
  noCoupon: "\u6682\u65E0\u4F18\u60E0\u5238",
  nameEmpty: "\u8BF7\u586B\u5199\u59D3\u540D",
  addContact: "\u6DFB\u52A0\u8054\u7CFB\u4EBA",
  telInvalid: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",
  vanCalendar: {
    end: "\u7ED3\u675F",
    start: "\u5F00\u59CB",
    title: "\u65E5\u671F\u9009\u62E9",
    weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
    monthTitle: (year, month) => `${year}\u5E74${month}\u6708`,
    rangePrompt: (maxRange) => `\u6700\u591A\u9009\u62E9 ${maxRange} \u5929`
  },
  vanCascader: {
    select: "\u8BF7\u9009\u62E9"
  },
  vanPagination: {
    prev: "\u4E0A\u4E00\u9875",
    next: "\u4E0B\u4E00\u9875"
  },
  vanPullRefresh: {
    pulling: "\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",
    loosing: "\u91CA\u653E\u5373\u53EF\u5237\u65B0..."
  },
  vanSubmitBar: {
    label: "\u5408\u8BA1:"
  },
  vanCoupon: {
    unlimited: "\u65E0\u95E8\u69DB",
    discount: (discount) => `${discount}\u6298`,
    condition: (condition) => `\u6EE1${condition}\u5143\u53EF\u7528`
  },
  vanCouponCell: {
    title: "\u4F18\u60E0\u5238",
    count: (count) => `${count}\u5F20\u53EF\u7528`
  },
  vanCouponList: {
    exchange: "\u5151\u6362",
    close: "\u4E0D\u4F7F\u7528",
    enable: "\u53EF\u7528",
    disabled: "\u4E0D\u53EF\u7528",
    placeholder: "\u8F93\u5165\u4F18\u60E0\u7801"
  },
  vanAddressEdit: {
    area: "\u5730\u533A",
    areaEmpty: "\u8BF7\u9009\u62E9\u5730\u533A",
    addressEmpty: "\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",
    addressDetail: "\u8BE6\u7EC6\u5730\u5740",
    defaultAddress: "\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"
  },
  vanAddressList: {
    add: "\u65B0\u589E\u5730\u5740"
  }
};
const lang = ref("zh-CN");
const messages = reactive({
  "zh-CN": stdin_default$a
});
const Locale = {
  messages() {
    return messages[lang.value];
  },
  use(newLang, newMessages) {
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },
  add(newMessages = {}) {
    deepAssign(messages, newMessages);
  }
};
var stdin_default$9 = Locale;
function createTranslate(name2) {
  const prefix = camelize(name2) + ".";
  return (path, ...args) => {
    const messages2 = stdin_default$9.messages();
    const message = get(messages2, prefix + path) || get(messages2, path);
    return isFunction(message) ? message(...args) : message;
  };
}
function genBem(name2, mods) {
  if (!mods) {
    return "";
  }
  if (typeof mods === "string") {
    return ` ${name2}--${mods}`;
  }
  if (Array.isArray(mods)) {
    return mods.reduce(
      (ret, item) => ret + genBem(name2, item),
      ""
    );
  }
  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genBem(name2, key) : ""),
    ""
  );
}
function createBEM(name2) {
  return (el, mods) => {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }
    el = el ? `${name2}__${el}` : name2;
    return `${el}${genBem(el, mods)}`;
  };
}
function createNamespace(name2) {
  const prefixedName = `van-${name2}`;
  return [
    prefixedName,
    createBEM(prefixedName),
    createTranslate(prefixedName)
  ];
}
const BORDER = "van-hairline";
const BORDER_TOP = `${BORDER}--top`;
const BORDER_LEFT = `${BORDER}--left`;
const BORDER_SURROUND = `${BORDER}--surround`;
const HAPTICS_FEEDBACK = "van-haptics-feedback";
const TAP_OFFSET = 5;
function callInterceptor(interceptor, {
  args = [],
  done,
  canceled,
  error
}) {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args);
    if (isPromise(returnVal)) {
      returnVal.then((value) => {
        if (value) {
          done();
        } else if (canceled) {
          canceled();
        }
      }).catch(error || noop);
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}
function withInstall(options) {
  options.install = (app) => {
    const { name: name2 } = options;
    if (name2) {
      app.component(name2, options);
      app.component(camelize(`-${name2}`), options);
    }
  };
  return options;
}
const popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: numericProp,
  // whether to show overlay
  overlay: truthProp,
  // transition duration
  duration: numericProp,
  // teleport
  teleport: [String, Object],
  // prevent body scroll
  lockScroll: truthProp,
  // whether to lazy render
  lazyRender: truthProp,
  // callback function before close
  beforeClose: Function,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: unknownProp,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: truthProp
};
const popupSharedPropKeys = Object.keys(
  popupSharedProps
);
function useExpose(apis) {
  const instance = getCurrentInstance();
  if (instance) {
    extend(instance.proxy, apis);
  }
}
function getDirection(x, y) {
  if (x > y) {
    return "horizontal";
  }
  if (y > x) {
    return "vertical";
  }
  return "";
}
function useTouch() {
  const startX = ref(0);
  const startY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const direction = ref("");
  const isTap = ref(true);
  const isVertical = () => direction.value === "vertical";
  const isHorizontal = () => direction.value === "horizontal";
  const reset = () => {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = "";
    isTap.value = true;
  };
  const start = (event) => {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };
  const move = (event) => {
    const touch = event.touches[0];
    deltaX.value = (touch.clientX < 0 ? 0 : touch.clientX) - startX.value;
    deltaY.value = touch.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);
    const LOCK_DIRECTION_DISTANCE = 10;
    if (!direction.value || offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
    if (isTap.value && (offsetX.value > TAP_OFFSET || offsetY.value > TAP_OFFSET)) {
      isTap.value = false;
    }
  };
  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
    isTap
  };
}
let totalLockCount = 0;
const BODY_LOCK_CLASS = "van-overflow-hidden";
function useLockScroll(rootRef, shouldLock) {
  const touch = useTouch();
  const DIRECTION_UP = "01";
  const DIRECTION_DOWN = "10";
  const onTouchMove = (event) => {
    touch.move(event);
    const direction = touch.deltaY.value > 0 ? DIRECTION_DOWN : DIRECTION_UP;
    const el = getScrollParent(
      event.target,
      rootRef.value
    );
    const { scrollHeight, offsetHeight, scrollTop } = el;
    let status = "11";
    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? "00" : "01";
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = "10";
    }
    if (status !== "11" && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
      preventDefault(event, true);
    }
  };
  const lock = () => {
    (void 0).addEventListener("touchstart", touch.start);
    (void 0).addEventListener("touchmove", onTouchMove, { passive: false });
    if (!totalLockCount) {
      (void 0).body.classList.add(BODY_LOCK_CLASS);
    }
    totalLockCount++;
  };
  const unlock = () => {
    if (totalLockCount) {
      (void 0).removeEventListener("touchstart", touch.start);
      (void 0).removeEventListener("touchmove", onTouchMove);
      totalLockCount--;
      if (!totalLockCount) {
        (void 0).body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };
  onMountedOrActivated();
  watch(shouldLock, (value) => {
    value ? lock() : unlock();
  });
}
function useLazyRender(show) {
  const inited = ref(false);
  watch(
    show,
    (value) => {
      if (value) {
        inited.value = value;
      }
    },
    { immediate: true }
  );
  return (render) => () => inited.value ? render() : null;
}
const POPUP_TOGGLE_KEY = Symbol();
function onPopupReopen(callback) {
  const popupToggleStatus = inject(POPUP_TOGGLE_KEY, null);
  if (popupToggleStatus) {
    watch(popupToggleStatus, (show) => {
      if (show) {
        callback();
      }
    });
  }
}
let globalZIndex = 2e3;
const useGlobalZIndex = () => ++globalZIndex;
const setGlobalZIndex = (val) => {
  globalZIndex = val;
};
const useScopeId = () => {
  var _a;
  const { scopeId } = ((_a = getCurrentInstance()) == null ? void 0 : _a.vnode) || {};
  return scopeId ? { [scopeId]: "" } : null;
};
const [name$9, bem$9] = createNamespace("badge");
const badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp("div"),
  color: String,
  offset: Array,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp("top-right")
};
var stdin_default$8 = defineComponent({
  name: name$9,
  props: badgeProps,
  setup(props, {
    slots
  }) {
    const hasContent = () => {
      if (slots.content) {
        return true;
      }
      const {
        content,
        showZero
      } = props;
      return isDef(content) && content !== "" && (showZero || content !== 0 && content !== "0");
    };
    const renderContent = () => {
      const {
        dot,
        max,
        content
      } = props;
      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content();
        }
        if (isDef(max) && isNumeric(content) && +content > +max) {
          return `${max}+`;
        }
        return content;
      }
    };
    const getOffsetWithMinusString = (val) => val.startsWith("-") ? val.replace("-", "") : `-${val}`;
    const style = computed(() => {
      const style2 = {
        background: props.color
      };
      if (props.offset) {
        const [x, y] = props.offset;
        const {
          position
        } = props;
        const [offsetY, offsetX] = position.split("-");
        if (slots.default) {
          if (typeof y === "number") {
            style2[offsetY] = addUnit(offsetY === "top" ? y : -y);
          } else {
            style2[offsetY] = offsetY === "top" ? addUnit(y) : getOffsetWithMinusString(y);
          }
          if (typeof x === "number") {
            style2[offsetX] = addUnit(offsetX === "left" ? x : -x);
          } else {
            style2[offsetX] = offsetX === "left" ? addUnit(x) : getOffsetWithMinusString(x);
          }
        } else {
          style2.marginTop = addUnit(y);
          style2.marginLeft = addUnit(x);
        }
      }
      return style2;
    });
    const renderBadge = () => {
      if (hasContent() || props.dot) {
        return createVNode("div", {
          "class": bem$9([props.position, {
            dot: props.dot,
            fixed: !!slots.default
          }]),
          "style": style.value
        }, [renderContent()]);
      }
    };
    return () => {
      if (slots.default) {
        const {
          tag
        } = props;
        return createVNode(tag, {
          "class": bem$9("wrapper")
        }, {
          default: () => [slots.default(), renderBadge()]
        });
      }
      return renderBadge();
    };
  }
});
const Badge = withInstall(stdin_default$8);
const [name$8, bem$8] = createNamespace("config-provider");
const CONFIG_PROVIDER_KEY = Symbol(name$8);
const configProviderProps = {
  tag: makeStringProp("div"),
  theme: makeStringProp("light"),
  zIndex: Number,
  themeVars: Object,
  themeVarsDark: Object,
  themeVarsLight: Object,
  themeVarsScope: makeStringProp("local"),
  iconPrefix: String
};
function insertDash(str) {
  return str.replace(/([a-zA-Z])(\d)/g, "$1-$2");
}
function mapThemeVarsToCSSVars(themeVars) {
  const cssVars = {};
  Object.keys(themeVars).forEach((key) => {
    const formattedKey = insertDash(kebabCase(key));
    cssVars[`--van-${formattedKey}`] = themeVars[key];
  });
  return cssVars;
}
defineComponent({
  name: name$8,
  props: configProviderProps,
  setup(props, {
    slots
  }) {
    const style = computed(() => mapThemeVarsToCSSVars(extend({}, props.themeVars, props.theme === "dark" ? props.themeVarsDark : props.themeVarsLight)));
    provide(CONFIG_PROVIDER_KEY, props);
    watchEffect(() => {
      if (props.zIndex !== void 0) {
        setGlobalZIndex(props.zIndex);
      }
    });
    return () => createVNode(props.tag, {
      "class": bem$8(),
      "style": props.themeVarsScope === "local" ? style.value : void 0
    }, {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
      }
    });
  }
});
const [name$7, bem$7] = createNamespace("icon");
const isImage = (name2) => name2 == null ? void 0 : name2.includes("/");
const iconProps = {
  dot: Boolean,
  tag: makeStringProp("i"),
  name: String,
  size: numericProp,
  badge: numericProp,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var stdin_default$7 = defineComponent({
  name: name$7,
  props: iconProps,
  setup(props, {
    slots
  }) {
    const config = inject(CONFIG_PROVIDER_KEY, null);
    const classPrefix = computed(() => props.classPrefix || (config == null ? void 0 : config.iconPrefix) || bem$7());
    return () => {
      const {
        tag,
        dot,
        name: name2,
        size,
        badge,
        color
      } = props;
      const isImageIcon = isImage(name2);
      return createVNode(Badge, mergeProps({
        "dot": dot,
        "tag": tag,
        "class": [classPrefix.value, isImageIcon ? "" : `${classPrefix.value}-${name2}`],
        "style": {
          color,
          fontSize: addUnit(size)
        },
        "content": badge
      }, props.badgeProps), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots), isImageIcon && createVNode("img", {
            "class": bem$7("image"),
            "src": name2
          }, null)];
        }
      });
    };
  }
});
const Icon = withInstall(stdin_default$7);
const [name$6, bem$6] = createNamespace("overlay");
const overlayProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  className: unknownProp,
  lockScroll: truthProp,
  lazyRender: truthProp,
  customStyle: Object,
  teleport: [String, Object]
};
var stdin_default$6 = defineComponent({
  name: name$6,
  props: overlayProps,
  setup(props, {
    slots
  }) {
    const root = ref();
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
    const renderOverlay = lazyRender(() => {
      var _a;
      const style = extend(getZIndexStyle(props.zIndex), props.customStyle);
      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`;
      }
      return withDirectives(createVNode("div", {
        "ref": root,
        "style": style,
        "class": [bem$6(), props.className]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vShow, props.show]]);
    });
    return () => {
      const Content = createVNode(Transition, {
        "name": "van-fade",
        "appear": true
      }, {
        default: renderOverlay
      });
      if (props.teleport) {
        return createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [Content]
        });
      }
      return Content;
    };
  }
});
const Overlay = withInstall(stdin_default$6);
const popupProps = extend({}, popupSharedProps, {
  round: Boolean,
  position: makeStringProp("center"),
  closeIcon: makeStringProp("cross"),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: makeStringProp("top-right"),
  destroyOnClose: Boolean,
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
});
const [name$5, bem$5] = createNamespace("popup");
var stdin_default$5 = defineComponent({
  name: name$5,
  inheritAttrs: false,
  props: popupProps,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
  setup(props, {
    emit,
    attrs,
    slots
  }) {
    let opened;
    const zIndex = ref();
    const popupRef = ref();
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
    const style = computed(() => {
      const style2 = {
        zIndex: zIndex.value
      };
      if (isDef(props.duration)) {
        const key = props.position === "center" ? "animationDuration" : "transitionDuration";
        style2[key] = `${props.duration}s`;
      }
      return style2;
    });
    const open = () => {
      if (!opened) {
        opened = true;
        zIndex.value = props.zIndex !== void 0 ? +props.zIndex : useGlobalZIndex();
        emit("open");
      }
    };
    const close = () => {
      if (opened) {
        callInterceptor(props.beforeClose, {
          done() {
            opened = false;
            emit("close");
            emit("update:show", false);
          }
        });
      }
    };
    const onClickOverlay = (event) => {
      emit("clickOverlay", event);
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const renderOverlay = () => {
      if (props.overlay) {
        return createVNode(Overlay, mergeProps({
          "show": props.show,
          "class": props.overlayClass,
          "zIndex": zIndex.value,
          "duration": props.duration,
          "customStyle": props.overlayStyle,
          "role": props.closeOnClickOverlay ? "button" : void 0,
          "tabindex": props.closeOnClickOverlay ? 0 : void 0
        }, useScopeId(), {
          "onClick": onClickOverlay
        }), {
          default: slots["overlay-content"]
        });
      }
    };
    const onClickCloseIcon = (event) => {
      emit("clickCloseIcon", event);
      close();
    };
    const renderCloseIcon = () => {
      if (props.closeable) {
        return createVNode(Icon, {
          "role": "button",
          "tabindex": 0,
          "name": props.closeIcon,
          "class": [bem$5("close-icon", props.closeIconPosition), HAPTICS_FEEDBACK],
          "classPrefix": props.iconPrefix,
          "onClick": onClickCloseIcon
        }, null);
      }
    };
    let timer;
    const onOpened = () => {
      if (timer)
        clearTimeout(timer);
      timer = setTimeout(() => {
        emit("opened");
      });
    };
    const onClosed = () => emit("closed");
    const onKeydown = (event) => emit("keydown", event);
    const renderPopup = lazyRender(() => {
      var _a;
      const {
        destroyOnClose,
        round,
        position,
        safeAreaInsetTop,
        safeAreaInsetBottom,
        show
      } = props;
      if (!show && destroyOnClose) {
        return;
      }
      return withDirectives(createVNode("div", mergeProps({
        "ref": popupRef,
        "style": style.value,
        "role": "dialog",
        "tabindex": 0,
        "class": [bem$5({
          round,
          [position]: position
        }), {
          "van-safe-area-top": safeAreaInsetTop,
          "van-safe-area-bottom": safeAreaInsetBottom
        }],
        "onKeydown": onKeydown
      }, attrs, useScopeId()), [(_a = slots.default) == null ? void 0 : _a.call(slots), renderCloseIcon()]), [[vShow, show]]);
    });
    const renderTransition = () => {
      const {
        position,
        transition,
        transitionAppear
      } = props;
      const name2 = position === "center" ? "van-fade" : `van-popup-slide-${position}`;
      return createVNode(Transition, {
        "name": transition || name2,
        "appear": transitionAppear,
        "onAfterEnter": onOpened,
        "onAfterLeave": onClosed
      }, {
        default: renderPopup
      });
    };
    watch(() => props.show, (show) => {
      if (show && !opened) {
        open();
        if (attrs.tabindex === 0) {
          nextTick(() => {
            var _a;
            (_a = popupRef.value) == null ? void 0 : _a.focus();
          });
        }
      }
      if (!show && opened) {
        opened = false;
        emit("close");
      }
    });
    useExpose({
      popupRef
    });
    useLockScroll(popupRef, () => props.show && props.lockScroll);
    provide(POPUP_TOGGLE_KEY, () => props.show);
    return () => {
      if (props.teleport) {
        return createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderOverlay(), renderTransition()]
        });
      }
      return createVNode(Fragment, null, [renderOverlay(), renderTransition()]);
    };
  }
});
const Popup = withInstall(stdin_default$5);
const routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function route({
  to,
  url,
  replace,
  $router: router
}) {
  if (to && router) {
    router[replace ? "replace" : "push"](to);
  } else if (url) {
    replace ? (void 0).replace(url) : (void 0).href = url;
  }
}
function useRoute() {
  const vm = getCurrentInstance().proxy;
  return () => route(vm);
}
const [name$4, bem$4] = createNamespace("loading");
const SpinIcon = Array(12).fill(null).map((_, index) => createVNode("i", {
  "class": bem$4("line", String(index + 1))
}, null));
const CircularIcon = createVNode("svg", {
  "class": bem$4("circular"),
  "viewBox": "25 25 50 50"
}, [createVNode("circle", {
  "cx": "50",
  "cy": "50",
  "r": "20",
  "fill": "none"
}, null)]);
const loadingProps = {
  size: numericProp,
  type: makeStringProp("circular"),
  color: String,
  vertical: Boolean,
  textSize: numericProp,
  textColor: String
};
var stdin_default$4 = defineComponent({
  name: name$4,
  props: loadingProps,
  setup(props, {
    slots
  }) {
    const spinnerStyle = computed(() => extend({
      color: props.color
    }, getSizeStyle(props.size)));
    const renderIcon = () => {
      const DefaultIcon = props.type === "spinner" ? SpinIcon : CircularIcon;
      return createVNode("span", {
        "class": bem$4("spinner", props.type),
        "style": spinnerStyle.value
      }, [slots.icon ? slots.icon() : DefaultIcon]);
    };
    const renderText = () => {
      var _a;
      if (slots.default) {
        return createVNode("span", {
          "class": bem$4("text"),
          "style": {
            fontSize: addUnit(props.textSize),
            color: (_a = props.textColor) != null ? _a : props.color
          }
        }, [slots.default()]);
      }
    };
    return () => {
      const {
        type,
        vertical
      } = props;
      return createVNode("div", {
        "class": bem$4([type, {
          vertical
        }]),
        "aria-live": "polite",
        "aria-busy": true
      }, [renderIcon(), renderText()]);
    };
  }
});
const Loading = withInstall(stdin_default$4);
const [name$3, bem$3] = createNamespace("button");
const buttonProps = extend({}, routeProps, {
  tag: makeStringProp("button"),
  text: String,
  icon: String,
  type: makeStringProp("default"),
  size: makeStringProp("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: makeStringProp("button"),
  loadingSize: numericProp,
  loadingText: String,
  loadingType: String,
  iconPosition: makeStringProp("left")
});
var stdin_default$3 = defineComponent({
  name: name$3,
  props: buttonProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots
  }) {
    const route2 = useRoute();
    const renderLoadingIcon = () => {
      if (slots.loading) {
        return slots.loading();
      }
      return createVNode(Loading, {
        "size": props.loadingSize,
        "type": props.loadingType,
        "class": bem$3("loading")
      }, null);
    };
    const renderIcon = () => {
      if (props.loading) {
        return renderLoadingIcon();
      }
      if (slots.icon) {
        return createVNode("div", {
          "class": bem$3("icon")
        }, [slots.icon()]);
      }
      if (props.icon) {
        return createVNode(Icon, {
          "name": props.icon,
          "class": bem$3("icon"),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };
    const renderText = () => {
      let text;
      if (props.loading) {
        text = props.loadingText;
      } else {
        text = slots.default ? slots.default() : props.text;
      }
      if (text) {
        return createVNode("span", {
          "class": bem$3("text")
        }, [text]);
      }
    };
    const getStyle = () => {
      const {
        color,
        plain
      } = props;
      if (color) {
        const style = {
          color: plain ? color : "white"
        };
        if (!plain) {
          style.background = color;
        }
        if (color.includes("gradient")) {
          style.border = 0;
        } else {
          style.borderColor = color;
        }
        return style;
      }
    };
    const onClick = (event) => {
      if (props.loading) {
        preventDefault(event);
      } else if (!props.disabled) {
        emit("click", event);
        route2();
      }
    };
    return () => {
      const {
        tag,
        type,
        size,
        block,
        round,
        plain,
        square,
        loading,
        disabled,
        hairline,
        nativeType,
        iconPosition
      } = props;
      const classes = [bem$3([type, size, {
        plain,
        block,
        round,
        square,
        loading,
        disabled,
        hairline
      }]), {
        [BORDER_SURROUND]: hairline
      }];
      return createVNode(tag, {
        "type": nativeType,
        "class": classes,
        "style": getStyle(),
        "disabled": disabled,
        "onClick": onClick
      }, {
        default: () => [createVNode("div", {
          "class": bem$3("content")
        }, [iconPosition === "left" && renderIcon(), renderText(), iconPosition === "right" && renderIcon()])]
      });
    };
  }
});
const Button = withInstall(stdin_default$3);
const useHeight = (element, withSafeArea) => {
  const height2 = ref();
  const setHeight = () => {
    height2.value = useRect(element).height;
  };
  onPopupReopen(() => nextTick(setHeight));
  watch([windowWidth, windowHeight], setHeight);
  return height2;
};
function usePlaceholder(contentRef, bem2) {
  const height2 = useHeight(contentRef);
  return (renderContent) => createVNode("div", {
    "class": bem2("placeholder"),
    "style": {
      height: height2.value ? `${height2.value}px` : void 0
    }
  }, [renderContent()]);
}
const [name$2, bem$2] = createNamespace("action-bar");
const ACTION_BAR_KEY = Symbol(name$2);
const actionBarProps = {
  placeholder: Boolean,
  safeAreaInsetBottom: truthProp
};
var stdin_default$2 = defineComponent({
  name: name$2,
  props: actionBarProps,
  setup(props, {
    slots
  }) {
    const root = ref();
    const renderPlaceholder = usePlaceholder(root, bem$2);
    const {
      linkChildren
    } = useChildren(ACTION_BAR_KEY);
    linkChildren();
    const renderActionBar = () => {
      var _a;
      return createVNode("div", {
        "ref": root,
        "class": [bem$2(), {
          "van-safe-area-bottom": props.safeAreaInsetBottom
        }]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
    return () => {
      if (props.placeholder) {
        return renderPlaceholder(renderActionBar);
      }
      return renderActionBar();
    };
  }
});
const ActionBar = withInstall(stdin_default$2);
const [name$1, bem$1] = createNamespace("action-bar-button");
const actionBarButtonProps = extend({}, routeProps, {
  type: String,
  text: String,
  icon: String,
  color: String,
  loading: Boolean,
  disabled: Boolean
});
var stdin_default$1 = defineComponent({
  name: name$1,
  props: actionBarButtonProps,
  setup(props, {
    slots
  }) {
    const route2 = useRoute();
    const {
      parent,
      index
    } = useParent(ACTION_BAR_KEY);
    const isFirst = computed(() => {
      if (parent) {
        const prev = parent.children[index.value - 1];
        return !(prev && "isButton" in prev);
      }
    });
    const isLast = computed(() => {
      if (parent) {
        const next = parent.children[index.value + 1];
        return !(next && "isButton" in next);
      }
    });
    useExpose({
      isButton: true
    });
    return () => {
      const {
        type,
        icon,
        text,
        color,
        loading,
        disabled
      } = props;
      return createVNode(Button, {
        "class": bem$1([type, {
          last: isLast.value,
          first: isFirst.value
        }]),
        "size": "large",
        "type": type,
        "icon": icon,
        "color": color,
        "loading": loading,
        "disabled": disabled,
        "onClick": route2
      }, {
        default: () => [slots.default ? slots.default() : text]
      });
    };
  }
});
const ActionBarButton = withInstall(stdin_default$1);
const [name, bem, t] = createNamespace("dialog");
const dialogProps = extend({}, popupSharedProps, {
  title: String,
  theme: String,
  width: numericProp,
  message: [String, Function],
  callback: Function,
  allowHtml: Boolean,
  className: unknownProp,
  transition: makeStringProp("van-dialog-bounce"),
  messageAlign: String,
  closeOnPopstate: truthProp,
  showCancelButton: Boolean,
  cancelButtonText: String,
  cancelButtonColor: String,
  cancelButtonDisabled: Boolean,
  confirmButtonText: String,
  confirmButtonColor: String,
  confirmButtonDisabled: Boolean,
  showConfirmButton: truthProp,
  closeOnClickOverlay: Boolean,
  keyboardEnabled: truthProp
});
const popupInheritKeys = [...popupSharedPropKeys, "transition", "closeOnPopstate"];
var stdin_default = defineComponent({
  name,
  props: dialogProps,
  emits: ["confirm", "cancel", "keydown", "update:show"],
  setup(props, {
    emit,
    slots
  }) {
    const root = ref();
    const loading = reactive({
      confirm: false,
      cancel: false
    });
    const updateShow = (value) => emit("update:show", value);
    const close = (action) => {
      var _a;
      updateShow(false);
      (_a = props.callback) == null ? void 0 : _a.call(props, action);
    };
    const getActionHandler = (action) => () => {
      if (!props.show) {
        return;
      }
      emit(action);
      if (props.beforeClose) {
        loading[action] = true;
        callInterceptor(props.beforeClose, {
          args: [action],
          done() {
            close(action);
            loading[action] = false;
          },
          canceled() {
            loading[action] = false;
          }
        });
      } else {
        close(action);
      }
    };
    const onCancel = getActionHandler("cancel");
    const onConfirm = getActionHandler("confirm");
    const onKeydown = withKeys((event) => {
      var _a, _b;
      if (!props.keyboardEnabled) {
        return;
      }
      if (event.target !== ((_b = (_a = root.value) == null ? void 0 : _a.popupRef) == null ? void 0 : _b.value)) {
        return;
      }
      const onEventType = {
        Enter: props.showConfirmButton ? onConfirm : noop,
        Escape: props.showCancelButton ? onCancel : noop
      };
      onEventType[event.key]();
      emit("keydown", event);
    }, ["enter", "esc"]);
    const renderTitle = () => {
      const title = slots.title ? slots.title() : props.title;
      if (title) {
        return createVNode("div", {
          "class": bem("header", {
            isolated: !props.message && !slots.default
          })
        }, [title]);
      }
    };
    const renderMessage = (hasTitle) => {
      const {
        message,
        allowHtml,
        messageAlign
      } = props;
      const classNames = bem("message", {
        "has-title": hasTitle,
        [messageAlign]: messageAlign
      });
      const content = isFunction(message) ? message() : message;
      if (allowHtml && typeof content === "string") {
        return createVNode("div", {
          "class": classNames,
          "innerHTML": content
        }, null);
      }
      return createVNode("div", {
        "class": classNames
      }, [content]);
    };
    const renderContent = () => {
      if (slots.default) {
        return createVNode("div", {
          "class": bem("content")
        }, [slots.default()]);
      }
      const {
        title,
        message,
        allowHtml
      } = props;
      if (message) {
        const hasTitle = !!(title || slots.title);
        return createVNode("div", {
          "key": allowHtml ? 1 : 0,
          "class": bem("content", {
            isolated: !hasTitle
          })
        }, [renderMessage(hasTitle)]);
      }
    };
    const renderButtons = () => createVNode("div", {
      "class": [BORDER_TOP, bem("footer")]
    }, [props.showCancelButton && createVNode(Button, {
      "size": "large",
      "text": props.cancelButtonText || t("cancel"),
      "class": bem("cancel"),
      "style": {
        color: props.cancelButtonColor
      },
      "loading": loading.cancel,
      "disabled": props.cancelButtonDisabled,
      "onClick": onCancel
    }, null), props.showConfirmButton && createVNode(Button, {
      "size": "large",
      "text": props.confirmButtonText || t("confirm"),
      "class": [bem("confirm"), {
        [BORDER_LEFT]: props.showCancelButton
      }],
      "style": {
        color: props.confirmButtonColor
      },
      "loading": loading.confirm,
      "disabled": props.confirmButtonDisabled,
      "onClick": onConfirm
    }, null)]);
    const renderRoundButtons = () => createVNode(ActionBar, {
      "class": bem("footer")
    }, {
      default: () => [props.showCancelButton && createVNode(ActionBarButton, {
        "type": "warning",
        "text": props.cancelButtonText || t("cancel"),
        "class": bem("cancel"),
        "color": props.cancelButtonColor,
        "loading": loading.cancel,
        "disabled": props.cancelButtonDisabled,
        "onClick": onCancel
      }, null), props.showConfirmButton && createVNode(ActionBarButton, {
        "type": "danger",
        "text": props.confirmButtonText || t("confirm"),
        "class": bem("confirm"),
        "color": props.confirmButtonColor,
        "loading": loading.confirm,
        "disabled": props.confirmButtonDisabled,
        "onClick": onConfirm
      }, null)]
    });
    const renderFooter = () => {
      if (slots.footer) {
        return slots.footer();
      }
      return props.theme === "round-button" ? renderRoundButtons() : renderButtons();
    };
    return () => {
      const {
        width: width2,
        title,
        theme,
        message,
        className
      } = props;
      return createVNode(Popup, mergeProps({
        "ref": root,
        "role": "dialog",
        "class": [bem([theme]), className],
        "style": {
          width: addUnit(width2)
        },
        "tabindex": 0,
        "aria-labelledby": title || message,
        "onKeydown": onKeydown,
        "onUpdate:show": updateShow
      }, pick(props, popupInheritKeys)), {
        default: () => [renderTitle(), renderContent(), renderFooter()]
      });
    };
  }
});
const _imports_0$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADVSURBVHgB7Y+xDsFAGMe/j0Vr0KRtYmxr0NEjSJAYvYGORm/Am+A5KsHWTWy1lN1JWMpS5wgJ1at7gPsll7vc5fv/7g8gkUiKWZem2/HKem2imPb1QnabvICq27UUw16rpoMxiYL0eyFriFKqUaQNBJzqbqufF55AsqBALbyhBaIN4mMUqIaD7Nhkkh774T7d5CsccHbY+gNhwVNCoiVP8hMe+h4vhyvgSSpG/Swa/gBBAMNtj9k2ek2cgIImEv63wZvPJmyVRMOFBSnJioTzIUgkEmHuQAdilbyrp/cAAAAASUVORK5CYII=";
const _imports_1$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.0.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M320%20312C386.3%20312%20440%20258.3%20440%20192C440%20125.7%20386.3%2072%20320%2072C253.7%2072%20200%20125.7%20200%20192C200%20258.3%20253.7%20312%20320%20312zM290.3%20368C191.8%20368%20112%20447.8%20112%20546.3C112%20562.7%20125.3%20576%20141.7%20576L498.3%20576C514.7%20576%20528%20562.7%20528%20546.3C528%20447.8%20448.2%20368%20349.7%20368L290.3%20368z'/%3e%3c/svg%3e";
const _imports_0$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.0.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M224.2%2089C216.3%2070.1%20195.7%2060.1%20176.1%2065.4L170.6%2066.9C106%2084.5%2050.8%20147.1%2066.9%20223.3C104%20398.3%20241.7%20536%20416.7%20573.1C493%20589.3%20555.5%20534%20573.1%20469.4L574.6%20463.9C580%20444.2%20569.9%20423.6%20551.1%20415.8L453.8%20375.3C437.3%20368.4%20418.2%20373.2%20406.8%20387.1L368.2%20434.3C297.9%20399.4%20241.3%20341%20208.8%20269.3L253%20233.3C266.9%20222%20271.6%20202.9%20264.8%20186.3L224.2%2089z'/%3e%3c/svg%3e";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAqCAYAAADWFImvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgB7VbLccIwEF0LHzhSAiWQA8PnElEBUAFQAXRAqCBJBUAFIRXgG9ziVBB3EI5wgbw1EhGChBgfMh70ZoSl/Wl3pV1E5OCQEXiXBMrlcimXy5UoHYLlchn9JuDTBfi+P97tdqkcgX6Izx2lcQRG2vhISoHtdhuSQ1bhqiaxI65qbh6uahI74qrGwcEhK4hbfLValfl8PgyCYGUL1Ov1EhrSilt0rVZrocEVDHYEesD6vOC5ZkgpC+v1ugXahOebzUYuFouZaRt6Xew7430FFkXQ5lAa2E4wD068keqscKLveV4T06IxGF3QX5StGLDHDo/1HLqPdIqxkvtu8TDUx+fBEhzCwAq8AwHrV47StshyauMGXQFhGAo5VXqtopNw4q//E1P+wfEN6AqYf3ojjCHGRK0lRkCnT4UOnLzXm5v3AughoDn4M0qIQ0a0QX3xlFMjWwEZeqd99FO+4CaPLzT4z6TuRhLYz4A4K+pY4scM5kcCfIRWFo6AyniCThMODSBLRgCFc/IIJq5UYRJ5A/UI4mxM6Xr0UG0dw27ElxkODjWN5xyUbhnCtqBSG/0UNZchjHyocfYIeGMhhH2sDdhuVSqVTx60L4Q2/Re4ufEgB4eE+AJvWgBDIluNoAAAAABJRU5ErkJggg==";
const paramsSerializer = (params) => {
  if (!params)
    return;
  const query = useCloneDeep(params);
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === "object" && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v) => JSON.stringify(v));
      delete query[key];
    }
  });
  return query;
};
$fetch.create({
  // 请求拦截器
  onRequest({ options }) {
    options.params = paramsSerializer(options.params);
    const {
      public: { apiBase }
    } = useRuntimeConfig();
    options.baseURL = apiBase;
    options.headers = new Headers();
    options.headers.set("apikey", "09590fc741424fbb96fb7bb37e0ff891");
    options.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  },
  // 响应拦截
  onResponse({ response }) {
    if (response.status === 200) {
      if (response._data.code == 401) {
        navigateTo("/");
      }
      return response._data;
    } else {
      return response._data;
    }
  },
  // 错误处理
  onResponseError({ response }) {
    var _a;
    return Promise.reject((_a = response == null ? void 0 : response._data) != null ? _a : null);
  }
});
function commonFun() {
  useRouter$1();
  useRoute$2();
  const loginStatus = ref();
  const loginStatusCheck = () => {
    if (localStorage.getItem("login")) {
      loginStatus.value = localStorage.getItem("login");
    }
  };
  return {
    loginStatusCheck,
    loginStatus
  };
}
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: ["login"],
  setup(__props) {
    commonFun();
    useRoute$1();
    useRouter();
    const routerPath = ref("");
    const settingDisplay = ref(false);
    const dialogShow = ref(false);
    const dropdown = ref(false);
    const phoneMenu = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_van_dialog = stdin_default;
      _push(`<!--[--><div class="navbar-stack" data-v-df7b2633></div><div class="navbar-basic" style="${ssrRenderStyle({ "z-index": "10000" })}" data-v-df7b2633><div class="container-fiuld" style="${ssrRenderStyle({ "height": "100%" })}" data-v-df7b2633><div class="nav" style="${ssrRenderStyle({ "height": "100%" })}" data-v-df7b2633><div class="title pointer" data-v-df7b2633>\u500B\u4EBA\u7DB2\u7AD9</div><div class="navLink" data-v-df7b2633><div class="link" data-v-df7b2633> \u5C08\u6848\u4ECB\u7D39 <img class="px-1"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-df7b2633>`);
      if (unref(dropdown)) {
        _push(`<div class="link-dropdown" data-v-df7b2633><div class="${ssrRenderClass([{ active: unref(routerPath) == "family-mart" }, "link-dropdown-item mb-2"])}" data-v-df7b2633><div data-v-df7b2633>\u5168\u5BB6\u8A18\u5E33\u672C(WebView)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "go-your-studio" }, "link-dropdown-item mb-2"])}" data-v-df7b2633><div data-v-df7b2633>\u53BB\u4F60\u7684\u5DE5\u4F5C\u5BA4(\u79DF\u501F\u5834\u5730)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "crest-rma-web" }, "link-dropdown-item mb-2"])}" data-v-df7b2633><div data-v-df7b2633>\u516B\u6D0BRMA(\u9001\u4FEE\u5E73\u53F0)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "charming-web" }, "link-dropdown-item mb-2"])}" data-v-df7b2633><div data-v-df7b2633>\u78A9\u7F8E\u7259\u91AB(\u5F62\u8C61\u5B98\u7DB2)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "tongxin-xili-web" }, "link-dropdown-item mb-2"])}" data-v-df7b2633><div data-v-df7b2633>\u5354\u529B\u570B\u969B(\u5F62\u8C61\u5B98\u7DB2)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "bremsinn-web" }, "link-dropdown-item mb-2"])}" data-v-df7b2633><div data-v-df7b2633>\u614E\u884C\u79D1\u6280(\u5F62\u8C61\u5B98\u7DB2)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "gaocheung-web" }, "link-dropdown-item mb-2"])}" data-v-df7b2633><div data-v-df7b2633>\u9AD8\u5F37\u5EFA\u8A2D(\u5F62\u8C61\u5B98\u7DB2)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "sinnigtool" }, "link-dropdown-item"])}" data-v-df7b2633><div data-v-df7b2633>\u7DB2\u8DEF\u5C0F\u5DE5\u5177(\u5C0F\u5DE5\u5177)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "wintech-web" }, "link-dropdown-item"])}" data-v-df7b2633><div data-v-df7b2633>\u6210\u6D69\u7BA1\u7406\u5E73\u53F0(\u76E3\u6E2C\u5E73\u53F0)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "km5257" }, "link-dropdown-item"])}" data-v-df7b2633><div data-v-df7b2633>\u8D85\u7FA4\u7279\u7522\u884C(\u8CFC\u7269\u5E73\u53F0)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "gamer-store" }, "link-dropdown-item"])}" data-v-df7b2633><div data-v-df7b2633>GamerStore(\u8CFC\u7269\u5E73\u53F0)</div></div><div class="${ssrRenderClass([{ active: unref(routerPath) == "personal-web" }, "link-dropdown-item"])}" data-v-df7b2633><div data-v-df7b2633>\u500B\u4EBA\u7DB2\u7AD9</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="link" data-v-df7b2633>\u95DC\u65BC\u6211</div><button class="btn link" data-v-df7b2633>\u806F\u7D61\u8CC7\u8A0A</button></div><div class="navMenu" data-v-df7b2633><img${ssrRenderAttr("src", _imports_1$1)} alt="" style="${ssrRenderStyle({ "width": "35px", "height": "35px", "margin-right": "1rem" })}" data-v-df7b2633><img${ssrRenderAttr("src", _imports_0$1)} alt="" style="${ssrRenderStyle({ "width": "35px", "height": "35px", "margin-right": "1rem" })}" data-v-df7b2633><img${ssrRenderAttr("src", _imports_3)} alt="" style="${ssrRenderStyle({ "width": "40px", "height": "50px" })}" data-v-df7b2633>`);
      if (unref(phoneMenu)) {
        _push(`<div class="phoneMenu" data-v-df7b2633><div class="${ssrRenderClass([{ active: unref(routerPath) == "family-mart" }, "link"])}" data-v-df7b2633>\u5168\u5BB6\u8A18\u5E33\u672C(WebView)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "go-your-studio" }, "link"])}" data-v-df7b2633>\u53BB\u4F60\u7684\u5DE5\u4F5C\u5BA4(\u79DF\u501F\u5834\u5730)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "crest-rma-web" }, "link"])}" data-v-df7b2633>\u516B\u6D0BRMA(\u9001\u4FEE\u5E73\u53F0)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "charming-web" }, "link"])}" data-v-df7b2633>\u78A9\u7F8E\u7259\u91AB(\u5F62\u8C61\u5B98\u7DB2)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "tongxin-xili-web" }, "link"])}" data-v-df7b2633>\u5354\u529B\u570B\u969B(\u5F62\u8C61\u5B98\u7DB2)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "bremsinn-web" }, "link"])}" data-v-df7b2633>\u614E\u884C\u79D1\u6280(\u5F62\u8C61\u5B98\u7DB2)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "gaocheung-web" }, "link"])}" data-v-df7b2633>\u9AD8\u5F37\u5EFA\u8A2D(\u5F62\u8C61\u5B98\u7DB2)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "sinnigtool" }, "link"])}" data-v-df7b2633>\u7DB2\u8DEF\u5C0F\u5DE5\u5177(\u5C0F\u5DE5\u5177)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "wintech-web" }, "link"])}" data-v-df7b2633>\u6210\u6D69\u7BA1\u7406\u5E73\u53F0(\u76E3\u6E2C\u5E73\u53F0)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "km5257" }, "link"])}" data-v-df7b2633>\u8D85\u7FA4\u7279\u7522\u884C(\u8CFC\u7269\u5E73\u53F0)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "gamer-store" }, "link"])}" data-v-df7b2633>GamerStore(\u8CFC\u7269\u5E73\u53F0)</div><div class="${ssrRenderClass([{ active: unref(routerPath) == "personal-web" }, "link"])}" data-v-df7b2633>\u500B\u4EBA\u7DB2\u7AD9</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
      if (unref(settingDisplay)) {
        _push(`<div class="fullScreen" data-v-df7b2633></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_van_dialog, {
        show: unref(dialogShow),
        "onUpdate:show": ($event) => isRef(dialogShow) ? dialogShow.value = $event : null,
        title: "\u806F\u7D61\u8CC7\u8A0A"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialogContact" data-v-df7b2633${_scopeId}><div data-v-df7b2633${_scopeId}>\u59D3\u540D\uFF1A\u5F35\u5141\u8C6A</div><div data-v-df7b2633${_scopeId}>\u96FB\u8A71\uFF1A0909786383</div><div data-v-df7b2633${_scopeId}>Email\uFF1Ak950212@gmail.com</div></div>`);
          } else {
            return [
              createVNode("div", { class: "dialogContact" }, [
                createVNode("div", null, "\u59D3\u540D\uFF1A\u5F35\u5141\u8C6A"),
                createVNode("div", null, "\u96FB\u8A71\uFF1A0909786383"),
                createVNode("div", null, "Email\uFF1Ak950212@gmail.com")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-df7b2633"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACPSURBVHgB7ZJbDYAwDEVbghBwgIRJmAQcII2gACQgAQfgoJSEDx6ha8q+YCdp1qVr73YzgN9ARI6j55jpTC315crhnpcWDGTKcw0YUb2AqS77kaM75O+gO07bq7XIjGiR8EM814o9HxBxAgukw0kzYli0SEWUitv1IADbI87IQs0PA0qhpheIQRJIAkngC6wC02keu77nIQAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADnSURBVHgB7ZTtDYIwEIavxv8yQjeQERhBJ1An0BFgAuMEwASyAWwiI7BBfRtKchxiDPSHGp7kTa9cr9cPrkR/gzEmhErTYltNPsGED9OnIA+smB0I34Y8J8iFLycPKN7BsezQhFCllKroG8CiAqsxv2IDr9SuviPHLjIXfBdxJyiCziymhjLEJDSyklL8RbH7rs2Q1IyT8nlXNI3jOx+SRHMTWG7Q3rWSS2esaRoJzjp2duHu6cD8286YugNZ5ZXo67kJmk8HzrmDJcGSoIU/drZY+KvYoJga59O9IKVq3n8ROxjzuzwBDQud37xv0qcAAAAASUVORK5CYII=";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="footer-stack" data-v-62d380ff></div><div class="footer" data-v-62d380ff><div class="content container" data-v-62d380ff><div class="item" data-v-62d380ff><div class="title" data-v-62d380ff>\u91CD\u9EDE\u5C08\u6848</div><div class="link" data-v-62d380ff>\u5168\u5BB6\u8A18\u5E33\u672C</div><div class="link" data-v-62d380ff>\u53BB\u4F60\u7684\u5DE5\u4F5C\u5BA4</div><div class="link" data-v-62d380ff>\u96FB\u5546\u7DB2\u7AD9(\u5DE5\u4F5C\u524D)</div><div class="link" data-v-62d380ff>\u500B\u4EBA\u7DB2\u7AD9(\u5DE5\u4F5C\u524D)</div></div><div class="item" data-v-62d380ff><div class="title" data-v-62d380ff>\u5DE5\u4F5C\u7D93\u6B77</div><div class="link" data-v-62d380ff>\u614E\u884C\u79D1\u6280 23.12-25.08</div></div><div class="item" data-v-62d380ff><div class="title" data-v-62d380ff>\u95DC\u65BC\u6211</div><div class="link" data-v-62d380ff>\u500B\u4EBA\u7C21\u4ECB</div></div><div class="item" data-v-62d380ff><div class="title" data-v-62d380ff>\u806F\u7D61\u8CC7\u8A0A</div><div class="link" data-v-62d380ff>\u5730\u5740\uFF1A<span style="${ssrRenderStyle({ "font-weight": "bold" })}" data-v-62d380ff>\u53F0\u5317\u5E02\u4FE1\u7FA9\u5340XXX</span></div><div class="link" data-v-62d380ff>\u96FB\u8A71\uFF1A<span style="${ssrRenderStyle({ "font-weight": "bold" })}" data-v-62d380ff>09 0978 6383</span></div></div><div class="item item-desk" data-v-62d380ff><div class="title" data-v-62d380ff>\u793E\u7FA4\u5E73\u53F0</div><div data-v-62d380ff><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ "margin-right": "1rem" })}" data-v-62d380ff> <img${ssrRenderAttr("src", _imports_1)} alt="" data-v-62d380ff></div></div></div><div class="footer-text py-2" data-v-62d380ff><div data-v-62d380ff>\u6B64\u70BA\u500B\u4EBA\u7DF4\u7FD2\u4F5C\u54C1 \u7121\u5546\u696D\u7528\u9014</div><div data-v-62d380ff>2025.09</div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-62d380ff"]]);

export { _imports_0$1 as _, __nuxt_component_0 as a, __nuxt_component_1 as b, createNamespace as c, makeNumericProp as d, makeNumberProp as e, getSizeStyle as g, isObject as i, makeStringProp as m, numericProp as n, stdin_default as s, truthProp as t };
//# sourceMappingURL=Footer-DjWCjm0y.mjs.map
