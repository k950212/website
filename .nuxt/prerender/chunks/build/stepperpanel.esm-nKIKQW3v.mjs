import { s as script$2 } from './basecomponent.esm-DGNIWB7w.mjs';
import { renderSlot } from 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue@3.5.11_typescript@5.4.4/node_modules/vue/index.mjs';
import './server.mjs';
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

var StepperPanelStyle = {};
var script$1 = {
  name: "BaseStepperPanel",
  "extends": script$2,
  props: {
    header: null
  },
  style: StepperPanelStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "StepperPanel",
  "extends": script$1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
script.render = render;

export { script as default };
//# sourceMappingURL=stepperpanel.esm-nKIKQW3v.mjs.map
