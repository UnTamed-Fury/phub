import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Early Mid Game","description":"","frontmatter":{},"headers":[],"relativePath":"docs/stages/early-mid-game.md","filePath":"docs/stages/early-mid-game.md"}');
const _sfc_main = { name: "docs/stages/early-mid-game.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="early-mid-game" tabindex="-1">Early Mid Game <a class="header-anchor" href="#early-mid-game" aria-label="Permalink to &quot;Early Mid Game&quot;">​</a></h1><p><em>Work in progress</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/stages/early-mid-game.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const earlyMidGame = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  earlyMidGame as default
};
