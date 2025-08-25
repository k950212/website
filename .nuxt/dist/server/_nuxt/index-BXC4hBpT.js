import { c as createNamespace, n as numericProp, m as makeStringProp, d as makeNumericProp, t as truthProp, e as makeNumberProp, g as getSizeStyle, i as isObject, a as __nuxt_component_0, b as __nuxt_component_1, s as stdin_default$1 } from "./Footer-DjWCjm0y.js";
import { defineComponent, computed, watch, createVNode, mergeProps, useSSRContext, ref, unref, withCtx, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./goYourStudio1-ClRB0IYx.js";
import { _ as _imports_1$1 } from "./charming1-B8m6oD8b.js";
import { _ as _imports_1$2 } from "./tongxin1-N1VCSqp_.js";
import { _ as _imports_3$1, a as _imports_4$1 } from "./bremsinn1-CxzbOf01.js";
import { _ as _imports_5$1 } from "./gaocheung1-BY8D8eGS.js";
import { _ as _imports_3$2 } from "./wintech3-IPBaMTK3.js";
import { _ as _imports_1$3 } from "./km52571-CunEgni2.js";
import { _ as _imports_8$1 } from "./gamerStore1-BhK2w6eC.js";
import { S as Swiper, a as SwiperSlide, P as Pagination, N as Navigation, A as Autoplay } from "./entry-styles-6.mjs-A-wj0gTj.js";
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
const [name, bem] = createNamespace("circle");
let uid = 0;
const format = (rate) => Math.min(Math.max(+rate, 0), 100);
function getPath(clockwise, viewBoxSize) {
  const sweepFlag = clockwise ? 1 : 0;
  return `M ${viewBoxSize / 2} ${viewBoxSize / 2} m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}
const circleProps = {
  text: String,
  size: numericProp,
  fill: makeStringProp("none"),
  rate: makeNumericProp(100),
  speed: makeNumericProp(0),
  color: [String, Object],
  clockwise: truthProp,
  layerColor: String,
  currentRate: makeNumberProp(0),
  strokeWidth: makeNumericProp(40),
  strokeLinecap: String,
  startPosition: makeStringProp("top")
};
var stdin_default = defineComponent({
  name,
  props: circleProps,
  emits: ["update:currentRate"],
  setup(props, {
    emit,
    slots
  }) {
    const id = `van-circle-${uid++}`;
    const viewBoxSize = computed(() => +props.strokeWidth + 1e3);
    const path = computed(() => getPath(props.clockwise, viewBoxSize.value));
    const svgStyle = computed(() => {
      const ROTATE_ANGLE_MAP = {
        top: 0,
        right: 90,
        bottom: 180,
        left: 270
      };
      const angleValue = ROTATE_ANGLE_MAP[props.startPosition];
      if (angleValue) {
        return {
          transform: `rotate(${angleValue}deg)`
        };
      }
    });
    watch(() => props.rate, (rate) => {
      const startRate = props.currentRate;
      const endRate = format(rate);
      Math.abs((startRate - endRate) * 1e3 / +props.speed);
      if (props.speed)
        ;
      else {
        emit("update:currentRate", endRate);
      }
    }, {
      immediate: true
    });
    const renderHover = () => {
      const PERIMETER = 3140;
      const {
        strokeWidth,
        currentRate,
        strokeLinecap
      } = props;
      const offset = PERIMETER * currentRate / 100;
      const color = isObject(props.color) ? `url(#${id})` : props.color;
      const style = {
        stroke: color,
        strokeWidth: `${+strokeWidth + 1}px`,
        strokeLinecap,
        strokeDasharray: `${offset}px ${PERIMETER}px`
      };
      return createVNode("path", {
        "d": path.value,
        "style": style,
        "class": bem("hover"),
        "stroke": color
      }, null);
    };
    const renderLayer = () => {
      const style = {
        fill: props.fill,
        stroke: props.layerColor,
        strokeWidth: `${props.strokeWidth}px`
      };
      return createVNode("path", {
        "class": bem("layer"),
        "style": style,
        "d": path.value
      }, null);
    };
    const renderGradient = () => {
      const {
        color
      } = props;
      if (!isObject(color)) {
        return;
      }
      const Stops = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b)).map((key, index2) => createVNode("stop", {
        "key": index2,
        "offset": key,
        "stop-color": color[key]
      }, null));
      return createVNode("defs", null, [createVNode("linearGradient", {
        "id": id,
        "x1": "100%",
        "y1": "0%",
        "x2": "0%",
        "y2": "0%"
      }, [Stops])]);
    };
    const renderText = () => {
      if (slots.default) {
        return slots.default();
      }
      if (props.text) {
        return createVNode("div", {
          "class": bem("text")
        }, [props.text]);
      }
    };
    return () => createVNode("div", {
      "class": bem(),
      "style": getSizeStyle(props.size)
    }, [createVNode("svg", {
      "viewBox": `0 0 ${viewBoxSize.value} ${viewBoxSize.value}`,
      "style": svgStyle.value
    }, [renderGradient(), renderLayer(), renderHover()]), renderText()]);
  }
});
const _imports_9$1 = "" + __buildAssetsURL("king.C3sfZ8zp.png");
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAABkCAYAAABdPHirAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOzSURBVHgB7d3PaxRnHMfx7zMsS5quIU0Ljcs25FJv6gheC2tbelX/gqZ/QSmFXvuTHtpToT333EPRFgq9SAKlNw+Tm+BFMGgOiiHGGEIyj/OsrpjEfIxOVh/neb8g2R8ZkuzOO8/zzAR2nT2S5/3cyqxfXZ00pCtzRVFcuji86cKnEyf6Xztz3xjw0DWX+fNFsVC4/PiHc9753w3YKURyKvOZnTVgr1mzVp6ZedYceLrtcjYzQGg9eeP06dy++/4rQ5rm5/+3n3/6bcd9rd0bdbvThjQd6XT23McUA4lAIBEIJAKBRCCQCAQSgUAiEEgEAolAIBEIJAKBRCCQCAQSgUAiEEgEAolAIBEIJAKBRCCQCAQSgUAiEEgEAolAILWsppu31+y/4rrdXd+0w3RkvG0f5O/Z0bc7hlenViAhjrkf/jn0OIb+uHTF/vzxvKVgc3PTVldX9/16u922iYmJwfWyLG1lZWVwOTQ+Pj74OGy1AxlVHMPvf/PWmh19p/mjSNjh6+vrcptOp2NZltnGxsaemEJg0QVyrDdVTQFvVjvyno3C+723kogjmJqaGowS+2m1WoM4grGxMZuc3Pm6P+G+UagVSKdaJ/z65Sd29fodW7t/uCNJ5422nTr2rqUiBLB7p+8nhHLQbeuqvUgNi0gWks3FYS6k2iPI8vKybW1tHWjbMDROT08/nksRv9qBhNXzk4dbzxJiUosxxKV2IGFECJEc6IdVCzHieL3UDiTscHZ6c730KaapwugYPpqm1iMKZ/TCIhUPA+n1etY0tQ4nwtTSxL+aF9HU56HWowqHq91u98CL1CZo6lSyn1qPNByyLi0tWWrCkduo/vcRG85YvYCUTvTVGkHCUDszM5PUUUyIg0CeQ2pPWGrYs5AIBBKBQCIQSAQCiUAgEQgkAoFEIJAIBBKBQCIQSAQCiUAgEQgkAoFEIJAIBBKBQCIQSAQCiUAgEQgkAoFEIJAIBBKBQCIQSAQCiUAgEQgkAoG04wVkbtxYtr//+teQpsuXF/fc506ePDNv3voG7OK8+4wpBhKBQCIQSAQCqeWc/8KcvZx3yHsOvnQXqovofq9RcOZ+say8aNHxhbMI5cc/OuddecFS4WxhcXH+jEUoyinGZ/5TS0l1miHP+1GOltEFMniivD9nqSmzOYtQfCPIdpZeHBXv/FmLUHSBJDe9DA2mmY/7FpmoAqmml9mkT/uXZd8iE9cIsp31LWHe/OcWmejeW6s6J/CtJSws0otiYcUi8QAa3cwh3up6LwAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "data:image/png;base64,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";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAABkCAYAAACGh9KJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT4SURBVHgB7d3fTttWHAfw33HMBhLkzxMsfYKld4DGZJ5guRljkyjhYqzqDeUJSJ8AuJkYuwDKplXaBeEJMFpVRdrF8gb1GyRLWDOWHJ/9jsO6rg0Vtpdfq/D9SFESBwIxX+xzjv07VvQaz1v2SOsikZMnUi0CiJj81X1AGafh+0+CoV/mLSxXvE84RABvEeVk/qvS8Be85SIB3MAbQbLh8RaWygQQg7fwecXeu9EzrT3/l58PCcaW9/Akf/niwlMUlkyoWsadqNX3vgwoDZMJbPNnEKKoEZ1ct9stEozE5ORkS6l0HZzZ+z8VL190zkipgDtLATn0sQp72/Prx9Vn+yuPKCH/6RPfW/ji4VWIwkS/5MXFxUYYhtVer5cqhHA9XrfUbrcDfriZzWZrFJMNEAfmzJA5qn93r/rv8oMib0nOZu8fn9f3VnxKTLUcSqjT6WxxgHb4IQI0ekW+nfA69ygu3fPsFqi+v1p9dXF9by0gQ7vK0BallChEzWYzb4ypEojidR77D66U8ZQJz4e+n6Nr/KYepZQoRK7rlgjehfjr3VCL1PA2r+N8YJenHlBOFKK0DT1IhrdEAcVkMk6Nv2/V9s7eeFGbDVLmnFJKFKLp6ekG3/kE0k4pJttoNqROuXf22/yDH6MtmQ3U3PrjbWPCMhn12dz6D9uUQuKGtdZ6Lcl/BiTm53K5KiVQ31+p2N6Z0fqEw2M4UE3enZS4TXSXb3dIhWVe/tz25CiBxONEhUIh4Ab2YiaT8ThMJd7F5Qj+d7xuf3ccpzYzM+NTCle9s6rt2k9OUsvfWXvZJPEqB3cvJ5wqDwU856eKkrDHQQhuvWjsKAbPK+ftoY+r3ZnJ2wUEt1o0dhSHnixTJuMPQpS5PCT9YYUAbmhwxoem/5xXNDiSPzgqC/A2UVY+Xar+81y9/iKFYYVsryvTq/l+DeNB8FKUD23K9ljrq2d9qOu/OCzxqxiZhgHDA8xGNcj9s4GNCwAAAAAAAAAAAAAAAAAAAAAAAAAAjLFk1Y4J2Rrwv/7oYG7IEXIyKniaatKq+MRCNPfN8QYZs0Mwekr5RrlrqedkvKHEEzrEMfv14woCJMjYia36ByREJETKUasEsjhI8w8OREq+RELEH6hIIC4MXZH5FWRCFE19C9Icpy9SZCgSIqPMEYEspWrPvl1rkACRENX37h0aMokn3YaYot5Zf5OEiI4T2UmUVOiWjDGYC2lENOnGr9/LbIEAAN4fsXZnnrdUJu1gV3QbZMi/9uqKAAAAAAAAAAAAAAAAAAAwGmInpXW73WK/398IwxDFiyOkBuezH2Wz2UMSIhIiG6Ber3fGD4sEIowxm7lcTqTWTyRE7XbbFtJVCCS1tNZ3CoXCyCs+ZIoXlcJ10+TlXdcdn+JFnJg/3qRCdEogitd5wB2Z8ak74x5Z1X4oAjHchHgk0R6KfhYJaTabRcdxqvzhPjKozR8ZXr8Nvu3OzMz4BAAAADeF4kUYDsWLAAAAAAAAAAAAAAAAALGJToZuz7XudHDRvFGydWfSJ6SJhYjDs8UhqhJICCYmJhanpqYCEiBVd1bhO7GLuEHEz2aziyRAqu5sg0Ca12w2UXcG6bjuOF00j/fRBOL6/X5AAqRCtEsg7bBQKAQkQCRE3MCr8S4NF82T42utx/OiedzQE5tk4Lbi9RtIde0BAN4fqDuD4WLUnf0Nte7txcayPfQAAAAASUVORK5CYII=";
const _imports_5 = "" + __buildAssetsURL("skill_api.DhcxHm8-.png");
const _imports_6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20version='1.1'%20viewBox='0%200%20261.76%20226.69'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='matrix(1.3333%200%200%20-1.3333%20-76.311%20313.34)'%3e%3cg%20transform='translate(178.06%20235.01)'%3e%3cpath%20d='m0%200-22.669-39.264-22.669%2039.264h-75.491l98.16-170.02%2098.16%20170.02z'%20fill='%2341b883'/%3e%3c/g%3e%3cg%20transform='translate(178.06%20235.01)'%3e%3cpath%20d='m0%200-22.669-39.264-22.669%2039.264h-36.227l58.896-102.01%2058.896%20102.01z'%20fill='%2334495e'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _imports_7 = "" + __buildAssetsURL("logo_javascript.BjiGfaT-.png");
const _imports_8 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3ctitle%3eHTML5%20Logo%3c/title%3e%3cpath%20d='M108.4%200h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206%2023h-20.3V0h63.7v23H229v46h-23M259.5%200h24.1l14.8%2024.3L313.2%200h24.1v69h-23V34.8l-16.1%2024.8l-16.1-24.8v34.2h-22.6M348.7%200h23v46.2h32.6V69h-55.6'/%3e%3cpath%20fill='%23e44d26'%20d='M107.6%20471l-33-370.4h362.8l-33%20370.2L255.7%20512'/%3e%3cpath%20fill='%23f16529'%20d='M256%20480.5V131H404.3L376%20447'/%3e%3cpath%20fill='%23ebebeb'%20d='M142%20176.3h114v45.4h-64.2l4.2%2046.5h60v45.3H154.4M156.4%20336.3H202l3.2%2036.3%2050.8%2013.6v47.4l-93.2-26'/%3e%3cpath%20fill='%23fff'%20d='M369.6%20176.3H255.8v45.4h109.6M361.3%20268.2H255.8v45.4h56l-5.3%2059-50.7%2013.6v47.2l93-25.8'/%3e%3c/svg%3e";
const _imports_9 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20with%20Inkscape%20(http://www.inkscape.org/)%20--%3e%3csvg%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20width='102.3716mm'%20height='144.49777mm'%20viewBox='0%200%20362.73401%20511.99998'%20id='svg3476'%20version='1.1'%20inkscape:version='0.91%20r13725'%20sodipodi:docname='CSS3.svg'%3e%3cdefs%20id='defs3478'%20/%3e%3csodipodi:namedview%20id='base'%20pagecolor='%23ffffff'%20bordercolor='%23666666'%20borderopacity='1.0'%20inkscape:pageopacity='0.0'%20inkscape:pageshadow='2'%20inkscape:zoom='0.35'%20inkscape:cx='181.367'%20inkscape:cy='256'%20inkscape:document-units='px'%20inkscape:current-layer='layer1'%20showgrid='false'%20fit-margin-top='0'%20fit-margin-left='0'%20fit-margin-right='0'%20fit-margin-bottom='0'%20inkscape:window-width='1366'%20inkscape:window-height='704'%20inkscape:window-x='0'%20inkscape:window-y='27'%20inkscape:window-maximized='1'%20/%3e%3cmetadata%20id='metadata3481'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:format%3eimage/svg+xml%3c/dc:format%3e%3cdc:type%20rdf:resource='http://purl.org/dc/dcmitype/StillImage'%20/%3e%3cdc:title%3e%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3cg%20inkscape:label='Calque%201'%20inkscape:groupmode='layer'%20id='layer1'%20transform='translate(-193.633,-276.3622)'%3e%3cg%20id='g3013'%20transform='translate(119,276.3622)'%3e%3cpolygon%20id='polygon2989'%20points='437.367,100.62%20404.321,470.819%20255.778,512%20107.644,470.877%2074.633,100.62%20'%20style='fill:%23264de4'%20/%3e%3cpolygon%20id='polygon2991'%20points='376.03,447.246%20404.27,130.894%20256,130.894%20256,480.523%20'%20style='fill:%232965f1'%20/%3e%3cpolygon%20id='polygon2993'%20points='150.31,268.217%20154.38,313.627%20256,313.627%20256,268.217%20'%20style='fill:%23ebebeb'%20/%3e%3cpolygon%20id='polygon2995'%20points='256,176.305%20255.843,176.305%20142.132,176.305%20146.26,221.716%20256,221.716%20'%20style='fill:%23ebebeb'%20/%3e%3cpolygon%20id='polygon2997'%20points='256,433.399%20256,386.153%20255.801,386.206%20205.227,372.55%20201.994,336.333%20177.419,336.333%20156.409,336.333%20162.771,407.634%20255.791,433.457%20'%20style='fill:%23ebebeb'%20/%3e%3cpath%20id='path2999'%20d='m%20160,0%2055,0%200,23%20-32,0%200,23%2032,0%200,23%20-55,0%20z'%20inkscape:connector-curvature='0'%20/%3e%3cpath%20id='path3001'%20d='m%20226,0%2055,0%200,20%20-32,0%200,4%2032,0%200,46%20-55,0%200,-21%2032,0%200,-4%20-32,0%20z'%20inkscape:connector-curvature='0'%20/%3e%3cpath%20id='path3003'%20d='m%20292,0%2055,0%200,20%20-32,0%200,4%2032,0%200,46%20-55,0%200,-21%2032,0%200,-4%20-32,0%20z'%20inkscape:connector-curvature='0'%20/%3e%3cpolygon%20id='polygon3005'%20points='311.761,313.627%20306.49,372.521%20255.843,386.191%20255.843,433.435%20348.937,407.634%20349.62,399.962%20360.291,280.411%20361.399,268.217%20369.597,176.305%20255.843,176.305%20255.843,221.716%20319.831,221.716%20315.699,268.217%20255.843,268.217%20255.843,313.627%20'%20style='fill:%23ffffff'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "skill" }, _attrs))} data-v-eb9ad393><div class="title" data-v-eb9ad393><div data-v-eb9ad393>專業能力</div></div><div class="container" data-v-eb9ad393><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>打造</div><div data-v-eb9ad393>專屬網站</div></div></div><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>RWD</div><div data-v-eb9ad393>手機裝置</div></div></div><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>RWD</div><div data-v-eb9ad393>平板裝置</div></div></div><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>後台cms</div><div data-v-eb9ad393>數據管理</div></div></div><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>搜尋引擎</div><div data-v-eb9ad393>SEO/SSR</div></div></div><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>API調用</div><div data-v-eb9ad393>串接應用</div></div></div><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>前端框架</div><div data-v-eb9ad393>Vue.js</div></div></div><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>JavaScript</div><div data-v-eb9ad393>語法</div></div></div><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_8)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>HTML5</div><div data-v-eb9ad393>語義化標籤</div></div></div><div class="box" data-v-eb9ad393><div class="img" data-v-eb9ad393><img${ssrRenderAttr("src", _imports_9)} alt="" data-v-eb9ad393></div><div class="text" data-v-eb9ad393><div data-v-eb9ad393>CSS</div><div data-v-eb9ad393>排版變化</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skill.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Skill = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eb9ad393"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Pagination, Navigation, Autoplay];
    const projectList = ref([
      {
        name: "全家記帳本",
        link: "https://daybook2wu.family.com.tw/mynote/index?Trans_info2=VOOJp0lISGFiKDAx1YUDvfepHSXfdxMLtftabOFvYwyaa4AGvq1qBBZOHyRW2jYyE%2BvQrF6uAgsyZwtH%2BBRKVmS%2FPrTzBk7BR0Zow2C2uwGUfHOYaaGU7LdpCIUXqvG21xqTrQ8BhPWOIavY9DM7RZz3fmQggU6Hv%2Bi1USeOzmLaoXK0T8DrPDfbqOJN0BPB"
      },
      {
        name: "去你的工作室",
        link: "https://goyourstudio.com/book/?openExternalBrowser=1"
      },
      {
        name: "八洋RMA ",
        link: "https://rma.bremsinn.com/home"
      },
      {
        name: "碩美牙醫",
        link: "https://www.charmingdent.com.tw/"
      },
      {
        name: "協力國際",
        link: "https://www.tongxin-xili.com.tw/"
      },
      {
        name: "慎行官網",
        link: "https://www.bremsinn.com/"
      },
      {
        name: "高強建設官網",
        link: ""
      },
      {
        name: "網路小工具",
        link: "https://www.sinnigtool.com/"
      },
      {
        name: "成浩管理平台",
        link: "https://web-wintech.bremsinn.com/overview"
      },
      {
        name: "超群特產購物網",
        link: "https://km5257.bremsinn.com/"
      },
      {
        name: "GamerStore(工作前)",
        link: "https://k950212.github.io/GamerStore/dist/#/"
      },
      {
        name: "個人網站(工作前)",
        link: "https://k950212.github.io/PersonalWebsite/dist/#/"
      }
      // {
      //   name: "EIP系統",
      //   link: "https://eip.bremsinn.com/hr/dashboard",
      // },
      // {
      //   name: "PM系統",
      //   link: "https://pm.bremsinn.com/login",
      // },
    ]);
    const vueRate = ref(0);
    const reactRate = ref(0);
    const cssRate = ref(0);
    const rwdRate = ref(0);
    const jsRate = ref(0);
    const cRate = ref(0);
    ref(0);
    ref(0);
    const swiperRef = ref(null);
    const currentIndex = ref(0);
    const onSwiperInit = (swiper) => {
      swiperRef.value = swiper;
      currentIndex.value = swiper.realIndex;
    };
    const onRealSlideChange = (swiper) => {
      currentIndex.value = swiper.realIndex;
      currentSwiperName.value = swiperNam.value[currentIndex.value].name;
    };
    const currentSwiperName = ref("碩美牙醫");
    const swiperNam = ref([
      { name: "碩美牙醫" },
      { name: "協力國際" },
      { name: "慎行科技官網(新)" },
      { name: "慎行科技官網(舊)" },
      { name: "高強建設官網" },
      { name: "成浩管理平台" },
      { name: "超群特產購物網" },
      { name: "Gamer-Store" },
      { name: "去你的工作室" }
    ]);
    const dialogShow = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_van_circle = stdin_default;
      const _component_Footer = __nuxt_component_1;
      const _component_van_dialog = stdin_default$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<div class="section1" data-v-7f8a8002><div class="title" data-v-7f8a8002>${ssrInterpolate(unref(currentSwiperName))}</div></div><div class="container-fluid swiper-boxs" style="${ssrRenderStyle({ "margin": "0" })}" data-v-7f8a8002>`);
      _push(ssrRenderComponent(unref(Swiper), {
        slidesPerView: 3,
        spaceBetween: 30,
        modules,
        class: "mySwiper",
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        onSwiper: onSwiperInit,
        onRealIndexChange: onRealSlideChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "box" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-7f8a8002${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0$1,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "box" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-7f8a8002${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1$1,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "box" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-7f8a8002${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1$2,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "box" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_3$1)} alt="" data-v-7f8a8002${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_3$1,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "box" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_4$1)} alt="" data-v-7f8a8002${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_4$1,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "box" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_5$1)} alt="" data-v-7f8a8002${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_5$1,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "box" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_3$2)} alt="" data-v-7f8a8002${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_3$2,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "box" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-7f8a8002${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1$3,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "box" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_8$1)} alt="" data-v-7f8a8002${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_8$1,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), { class: "box" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0$1,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "box" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1$1,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "box" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1$2,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "box" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_3$1,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "box" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_4$1,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "box" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_5$1,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "box" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_3$2,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "box" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1$3,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "box" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_8$1,
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
      _push(`</div><div class="section2" data-v-7f8a8002><div class="title" data-v-7f8a8002>Kevin.Chang</div></div><div class="experience container" data-v-7f8a8002><div class="title f20 themeColor mb-2" data-v-7f8a8002>工作經歷</div><div class="company" data-v-7f8a8002>慎行科技有限公司 2023.12 - 2025.08</div></div><div class="project container" data-v-7f8a8002><div class="title f20 themeColor mb-2" data-v-7f8a8002>參與專案</div><div class="d-flex row justify-content-center py-3" data-v-7f8a8002><!--[-->`);
      ssrRenderList(unref(projectList), (item) => {
        _push(`<div class="col-xl-2 col-sm-4 col-6" data-v-7f8a8002><div class="box-wrapper" data-v-7f8a8002><div class="box mb-2" data-v-7f8a8002><div class="fancy-text" data-v-7f8a8002>${ssrInterpolate(item.name)}</div>`);
        if (item.name == "全家記帳本") {
          _push(`<img${ssrRenderAttr("src", _imports_9$1)} alt="" data-v-7f8a8002>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="skill-circle" data-v-7f8a8002><div class="title-main" data-v-7f8a8002><div data-v-7f8a8002>熟練度</div></div><div class="container" data-v-7f8a8002><div class="row" data-v-7f8a8002><div class="col-xl-6 col-sm-12" data-v-7f8a8002><div class="skill-circle-box" data-v-7f8a8002><div class="rate" data-v-7f8a8002>`);
      _push(ssrRenderComponent(_component_van_circle, {
        "current-rate": unref(vueRate),
        "onUpdate:currentRate": ($event) => isRef(vueRate) ? vueRate.value = $event : null,
        rate: 95,
        text: `${unref(vueRate)}%`,
        "stroke-width": 100,
        "start-position": "right",
        "layer-color": "#ffffff",
        color: "#6192d38f"
      }, null, _parent));
      _push(`</div><div class="content" data-v-7f8a8002><div class="title" data-v-7f8a8002>vue.js</div><div data-v-7f8a8002>常使用Nuxt、Vite開發專案 Vue cli 也ok,熟悉 vue3 composition api 與 vue2 options api 寫法.</div></div></div></div><div class="col-xl-6 col-sm-12" data-v-7f8a8002><div class="skill-circle-box" data-v-7f8a8002><div class="rate" data-v-7f8a8002>`);
      _push(ssrRenderComponent(_component_van_circle, {
        "current-rate": unref(reactRate),
        "onUpdate:currentRate": ($event) => isRef(reactRate) ? reactRate.value = $event : null,
        rate: 50,
        text: `${unref(reactRate)}%`,
        "stroke-width": 100,
        "start-position": "right",
        "layer-color": "#ffffff",
        color: "#6192d38f"
      }, null, _parent));
      _push(`</div><div class="content" data-v-7f8a8002><div class="title" data-v-7f8a8002>React.js</div><div data-v-7f8a8002>目前實作案子不多，僅有一兩個將vue3寫法全換成React寫法經驗</div></div></div></div><div class="col-xl-6 col-sm-12" data-v-7f8a8002><div class="skill-circle-box" data-v-7f8a8002><div class="rate" data-v-7f8a8002>`);
      _push(ssrRenderComponent(_component_van_circle, {
        "current-rate": unref(cssRate),
        "onUpdate:currentRate": ($event) => isRef(cssRate) ? cssRate.value = $event : null,
        rate: 100,
        text: `${unref(cssRate)}%`,
        "stroke-width": 100,
        "start-position": "right",
        "layer-color": "#ffffff",
        color: "#6192d38f"
      }, null, _parent));
      _push(`</div><div class="content" data-v-7f8a8002><div class="title" data-v-7f8a8002>html、css</div><div data-v-7f8a8002>html寫過許多靜態與動態網頁,css 寫法為sass 巢狀結構</div></div></div></div><div class="col-xl-6 col-sm-12" data-v-7f8a8002><div class="skill-circle-box" data-v-7f8a8002><div class="rate" data-v-7f8a8002>`);
      _push(ssrRenderComponent(_component_van_circle, {
        "current-rate": unref(rwdRate),
        "onUpdate:currentRate": ($event) => isRef(rwdRate) ? rwdRate.value = $event : null,
        rate: 95,
        text: `${unref(rwdRate)}%`,
        "stroke-width": 100,
        "start-position": "right",
        "layer-color": "#ffffff",
        color: "#6192d38f"
      }, null, _parent));
      _push(`</div><div class="content" data-v-7f8a8002><div class="title" data-v-7f8a8002>RWD</div><div data-v-7f8a8002>桌機、筆電、MAC、平板、手機 RWD實作案子數量多熟悉</div></div></div></div><div class="col-xl-6 col-sm-12" data-v-7f8a8002><div class="skill-circle-box" data-v-7f8a8002><div class="rate" data-v-7f8a8002>`);
      _push(ssrRenderComponent(_component_van_circle, {
        "current-rate": unref(jsRate),
        "onUpdate:currentRate": ($event) => isRef(jsRate) ? jsRate.value = $event : null,
        rate: 90,
        text: `${unref(jsRate)}%`,
        "stroke-width": 100,
        "start-position": "right",
        "layer-color": "#ffffff",
        color: "#6192d38f"
      }, null, _parent));
      _push(`</div><div class="content" data-v-7f8a8002><div class="title" data-v-7f8a8002>javaScript</div><div data-v-7f8a8002>熟悉使用javaScript於資料串接,數值變化.</div></div></div></div><div class="col-xl-6 col-sm-12" data-v-7f8a8002><div class="skill-circle-box" data-v-7f8a8002><div class="rate" data-v-7f8a8002>`);
      _push(ssrRenderComponent(_component_van_circle, {
        "current-rate": unref(cRate),
        "onUpdate:currentRate": ($event) => isRef(cRate) ? cRate.value = $event : null,
        rate: 75,
        text: `${unref(cRate)}%`,
        "stroke-width": 100,
        "start-position": "right",
        "layer-color": "#ffffff",
        color: "#6192d38f"
      }, null, _parent));
      _push(`</div><div class="content" data-v-7f8a8002><div class="title" data-v-7f8a8002>C</div><div data-v-7f8a8002>資工系就讀時以C語言打基礎,在學習更多程式語言</div></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(Skill, null, null, _parent));
      _push(`<div class="home-bottom" data-v-7f8a8002><div class="content container" data-v-7f8a8002><div data-v-7f8a8002><div class="f20" style="${ssrRenderStyle({ "color": "rgba(57, 102, 162, 1)", "font-weight": "700" })}" data-v-7f8a8002>以上個人網站 如有興趣 歡迎聯繫我</div><div class="f42" style="${ssrRenderStyle({ "color": "rgba(20, 40, 68, 1)", "font-weight": "700" })}" data-v-7f8a8002>104 找工作中 前端工程師</div></div><div class="d-flex align-items-center" data-v-7f8a8002><button class="btn word-nowrap" data-v-7f8a8002>立即聯繫</button></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_van_dialog, {
        show: unref(dialogShow),
        "onUpdate:show": ($event) => isRef(dialogShow) ? dialogShow.value = $event : null,
        title: "聯絡資訊"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialogContact" data-v-7f8a8002${_scopeId}><div data-v-7f8a8002${_scopeId}>姓名：張允豪</div><div data-v-7f8a8002${_scopeId}>電話：0909786383</div><div data-v-7f8a8002${_scopeId}>Email：k950212@gmail.com</div></div>`);
          } else {
            return [
              createVNode("div", { class: "dialogContact" }, [
                createVNode("div", null, "姓名：張允豪"),
                createVNode("div", null, "電話：0909786383"),
                createVNode("div", null, "Email：k950212@gmail.com")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f8a8002"]]);
export {
  index as default
};
//# sourceMappingURL=index-BXC4hBpT.js.map
