import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mid Game","description":"","frontmatter":{},"headers":[],"relativePath":"docs/stages/mid-game.md","filePath":"docs/stages/mid-game.md"}');
const _sfc_main = { name: "docs/stages/mid-game.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mid-game" tabindex="-1">Mid Game <a class="header-anchor" href="#mid-game" aria-label="Permalink to &quot;Mid Game&quot;">​</a></h1><p><em>Work in progress</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/stages/mid-game.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const midGame = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  midGame as default
};
