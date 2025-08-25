import { s as script$2 } from './basecomponent.esm-DGNIWB7w.mjs';
import './server.mjs';
import 'file:///Users/yunhao/Project/website/node_modules/.pnpm/vue@3.5.11_typescript@5.4.4/node_modules/vue/index.mjs';
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

var ColumnStyle = {};
var script$1 = {
  name: "BaseColumn",
  "extends": script$2,
  props: {
    columnKey: {
      type: null,
      "default": null
    },
    field: {
      type: [String, Function],
      "default": null
    },
    sortField: {
      type: [String, Function],
      "default": null
    },
    filterField: {
      type: [String, Function],
      "default": null
    },
    dataType: {
      type: String,
      "default": "text"
    },
    sortable: {
      type: Boolean,
      "default": false
    },
    header: {
      type: null,
      "default": null
    },
    footer: {
      type: null,
      "default": null
    },
    style: {
      type: null,
      "default": null
    },
    "class": {
      type: String,
      "default": null
    },
    headerStyle: {
      type: null,
      "default": null
    },
    headerClass: {
      type: String,
      "default": null
    },
    bodyStyle: {
      type: null,
      "default": null
    },
    bodyClass: {
      type: String,
      "default": null
    },
    footerStyle: {
      type: null,
      "default": null
    },
    footerClass: {
      type: String,
      "default": null
    },
    showFilterMenu: {
      type: Boolean,
      "default": true
    },
    showFilterOperator: {
      type: Boolean,
      "default": true
    },
    showClearButton: {
      type: Boolean,
      "default": true
    },
    showApplyButton: {
      type: Boolean,
      "default": true
    },
    showFilterMatchModes: {
      type: Boolean,
      "default": true
    },
    showAddButton: {
      type: Boolean,
      "default": true
    },
    filterMatchModeOptions: {
      type: Array,
      "default": null
    },
    maxConstraints: {
      type: Number,
      "default": 2
    },
    excludeGlobalFilter: {
      type: Boolean,
      "default": false
    },
    filterHeaderClass: {
      type: String,
      "default": null
    },
    filterHeaderStyle: {
      type: null,
      "default": null
    },
    filterMenuClass: {
      type: String,
      "default": null
    },
    filterMenuStyle: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    expander: {
      type: Boolean,
      "default": false
    },
    colspan: {
      type: Number,
      "default": null
    },
    rowspan: {
      type: Number,
      "default": null
    },
    rowReorder: {
      type: Boolean,
      "default": false
    },
    rowReorderIcon: {
      type: String,
      "default": void 0
    },
    reorderableColumn: {
      type: Boolean,
      "default": true
    },
    rowEditor: {
      type: Boolean,
      "default": false
    },
    frozen: {
      type: Boolean,
      "default": false
    },
    alignFrozen: {
      type: String,
      "default": "left"
    },
    exportable: {
      type: Boolean,
      "default": true
    },
    exportHeader: {
      type: String,
      "default": null
    },
    exportFooter: {
      type: String,
      "default": null
    },
    filterMatchMode: {
      type: String,
      "default": null
    },
    hidden: {
      type: Boolean,
      "default": false
    }
  },
  style: ColumnStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Column",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$columns"],
  mounted: function mounted() {
    var _this$$columns;
    (_this$$columns = this.$columns) === null || _this$$columns === void 0 || _this$$columns.add(this.$);
  },
  unmounted: function unmounted() {
    var _this$$columns2;
    (_this$$columns2 = this.$columns) === null || _this$$columns2 === void 0 || _this$$columns2["delete"](this.$);
  },
  render: function render() {
    return null;
  }
};

export { script as default };
//# sourceMappingURL=column.esm-DT6fxo1k.mjs.map
