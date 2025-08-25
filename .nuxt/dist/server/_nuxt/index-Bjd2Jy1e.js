import { a as __nuxt_component_0, b as __nuxt_component_1 } from "./Footer-DjWCjm0y.js";
import { _ as _export_sfc, f as useRoute, u as useRouter } from "../server.mjs";
import { unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { S as Swiper, a as SwiperSlide, P as Pagination } from "./entry-styles-6.mjs-A-wj0gTj.js";
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
const _imports_0 = "" + __buildAssetsURL("family1-1.BfftGBQD.png");
const _imports_1 = "" + __buildAssetsURL("family1-2.CXTcoIaz.png");
const _imports_2 = "" + __buildAssetsURL("family1-3._4ouB445.png");
const _imports_3 = "" + __buildAssetsURL("family2-1.B1y1umGO.png");
const _imports_4 = "" + __buildAssetsURL("family2-2.D2X_a7By.png");
const _imports_5 = "" + __buildAssetsURL("family2-3.nt8oQMqn.png");
const _imports_6 = "" + __buildAssetsURL("family2-4.DcQtzug4.png");
const _imports_7 = "" + __buildAssetsURL("family2-5.C1xPAPvT.png");
const _imports_8 = "" + __buildAssetsURL("family2-6.DHl-bCDl.png");
const _imports_9 = "" + __buildAssetsURL("family2-7.BSBWXyP-.png");
const _imports_10 = "" + __buildAssetsURL("family2-8.CzLPcxlJ.png");
const _imports_11 = "" + __buildAssetsURL("family3-1.Cr46HoHr.png");
const _imports_12 = "" + __buildAssetsURL("family3-2.DgDqiX-l.png");
const _imports_13 = "" + __buildAssetsURL("family3-3.BThz9nJ8.png");
const _imports_14 = "" + __buildAssetsURL("family3-4.CktcwMC3.png");
const _imports_15 = "" + __buildAssetsURL("family3-5.Ca_WueZw.png");
const _imports_16 = "" + __buildAssetsURL("family3-6.0itlVUeZ.png");
const _imports_17 = "" + __buildAssetsURL("family4-1.CdC64u9b.png");
const _imports_18 = "" + __buildAssetsURL("family4-2.BrT3vfPr.png");
const _imports_19 = "" + __buildAssetsURL("family4-3.BtO3fqNX.png");
const _imports_20 = "" + __buildAssetsURL("family4-4.U0TlkWyW.png");
const _imports_21 = "" + __buildAssetsURL("family4-5.js7i4TwM.png");
const _imports_22 = "" + __buildAssetsURL("family4-6.B8q9Tml8.png");
const _imports_23 = "" + __buildAssetsURL("family4-7.B9JQlfGk.png");
const _imports_24 = "" + __buildAssetsURL("family4-8.UCqwSHA0.png");
const _imports_25 = "" + __buildAssetsURL("family5-1.Co6Xcd_b.png");
const _imports_26 = "" + __buildAssetsURL("family5-2.ST-vvomg.png");
const _imports_27 = "" + __buildAssetsURL("family5-3.B6R3_Ecz.png");
const _imports_28 = "" + __buildAssetsURL("family5-4.BcwY0AFu.png");
const _imports_29 = "" + __buildAssetsURL("family5-5.BOTLMFql.png");
const _imports_30 = "" + __buildAssetsURL("family5-6.JA03ih58.png");
const _imports_31 = "" + __buildAssetsURL("family5-7.C9kbAQxY.png");
const _imports_32 = "" + __buildAssetsURL("family5-8.BLOpo7qY.png");
const _imports_33 = "" + __buildAssetsURL("family5-9.wLdzbvQ6.png");
const _imports_34 = "" + __buildAssetsURL("family5-10.DIH_FYBm.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const modules = [Pagination];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<div id="familyPage" class="container" data-v-39ba0ad3><div class="project row" data-v-39ba0ad3><div class="col-xl-5 col-md-12 left" data-v-39ba0ad3><div class="img" data-v-39ba0ad3>`);
      _push(ssrRenderComponent(unref(Swiper), {
        pagination: {
          clickable: true
        },
        modules,
        class: "mySwiper",
        loop: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-xl-7 col-md-12 right" data-v-39ba0ad3><div class="m-3" data-v-39ba0ad3><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>專案名稱：</span>全家記帳本</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>負責工作：</span>畫面切版(90%)、api串接(90%)、js function撰寫(80%)、測試、修bug</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>使用套件：</span>bootstrap、chart.js、echarts、jquery、sass、swiper、vant</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>開發時間：</span>113.6-114.2</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>維護時間(處理bug)：</span>114.3-至今</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>功能：</span>記帳、記帳分類 、發票、發票分類、發票對獎開獎、消費分析、圖表數據、載具連動、掃描發票</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>平台：</span>webView 在全家app中記帳本功能</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>開發環境：</span>vite vue3 Composition API、node.js v16.20.2、npm 8.19.4</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>網址：</span><span class="link" data-v-39ba0ad3>uat</span></div></div></div></div><div class="project row" data-v-39ba0ad3><div class="col-xl-7 col-md-12 right" data-v-39ba0ad3><div class="m-3" data-v-39ba0ad3><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>記帳明細頁(列表)：</span>依日期顯示每筆記帳，可以使用年月去篩選區間記帳，也可以使用日歷去查看單日記帳，日歷顯示橘點表示當日有記帳．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>發票明細(詳細)：</span>顯示Title&amp;發票號碼&amp;金額&amp;時間&amp;明細等等，可針對整筆記帳去選擇主分類，對各筆明細選擇主分類與子分類，輸入備註．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>主分類&amp;子分類：</span>除了主分類為現有的無法新增，子分類可以額外新增子分類，給使用者自訂分類．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>搜尋：</span>以關鍵字搜尋現有的發票＆記帳</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>消費分析頁(類別分析)：</span>依照月、年、自訂區間去顯示所有消費的圖表與細項</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>消費分析頁(排行)：</span>依照消費的金額排序店家，依照產品的金額排序</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>我的發票頁(列表)：</span>依日期區間顯示發票，可以區段選擇日期顯示發票．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>我的發票(詳細)：</span>顯示公司名、載具名稱、消費時間、一中獎情形顯示額外icon</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>手動新增發票(掃描需在app端操作)：</span>手動輸入</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>手動新增繳費：</span>手動輸入</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>手動新增記帳：</span>手動輸入</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>手動新增收入：</span>手動輸入</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>我的載具：</span>列出載具與條碼</div></div></div><div class="col-xl-5 col-md-12 left" data-v-39ba0ad3><div class="img" data-v-39ba0ad3>`);
      _push(ssrRenderComponent(unref(Swiper), {
        pagination: {
          clickable: true
        },
        modules,
        class: "mySwiper",
        loop: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_3)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_3,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_4)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_4,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_5)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_5,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_6)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_6,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_7)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_7,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_8)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_8,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_9)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_9,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_10)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_10,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_11)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_11,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_12)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_12,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_13)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_13,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_14)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_14,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_15)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_15,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_16)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_16,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_17)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_17,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_18)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_18,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_19)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_19,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_20)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_20,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_21)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_21,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_22)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_22,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_23)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_23,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_24)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_24,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_3,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_4,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_5,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_6,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_7,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_8,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_9,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_10,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_11,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_12,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_13,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_14,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_15,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_16,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_17,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_18,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_19,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_20,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_21,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_22,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_23,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_24,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="project row" data-v-39ba0ad3><div class="col-xl-5 col-md-12 left" data-v-39ba0ad3><div class="img" data-v-39ba0ad3>`);
      _push(ssrRenderComponent(unref(Swiper), {
        pagination: {
          clickable: true
        },
        modules,
        class: "mySwiper",
        loop: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_25)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_25,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_26)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_26,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_27)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_27,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_28)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_28,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_29)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_29,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_30)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_30,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_31)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_31,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_32)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_32,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_33)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_33,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-img" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_34)} alt="" data-v-39ba0ad3${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_34,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_25,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_26,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_27,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_28,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_29,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_30,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_31,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_32,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_33,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-img" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_34,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-xl-7 col-md-12 right" data-v-39ba0ad3><div class="m-3" data-v-39ba0ad3><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>睡前打卡頁：</span>每天可在活動期間內到這頁，下注全家點數報名，指定時間再度打卡即可參加最終抽獎．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>任務中心頁：</span>載具綁定任務、邀請好友任務、發票累積任務、店家獎品任務 領取與邀請．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>邀請好友任務：</span>分享出連結，好友點擊後會到登入頁並帶入好友邀請碼．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>綁定載句任務：</span>完成綁定後，記帳本才會提取您最新的發票，並有更多額外功能．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>發票累積任務：</span>依照使用者最近的發票比例去估算每階段要求發票張數，達到指定發票數會獲得點數，全部完成會獲得神秘大獎．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>店家獎項任務：</span>後台可新增多個店家任務，有達成次數、消費金額、購買指定商品等等，完成可獲得點數或獎品．</div><div data-v-39ba0ad3><span class="bold" data-v-39ba0ad3>獲獎紀錄：</span>完成的任務獲得點數or獎品均會記錄在此．</div></div></div></div><div class="detail" data-v-39ba0ad3></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/family-mart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-39ba0ad3"]]);
export {
  index as default
};
//# sourceMappingURL=index-Bjd2Jy1e.js.map
