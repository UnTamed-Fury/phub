import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"contacts.md","filePath":"contacts.md"}');
const _sfc_main = { name: "contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>If you have suggestions, corrections, or concerns regarding this guide, feel free to reach out through the following channels:</p><h2 id="📧-email" tabindex="-1">📧 Email <a class="header-anchor" href="#📧-email" aria-label="Permalink to &quot;📧 Email&quot;">​</a></h2><ul><li><strong><a href="mailto:skyblock.fury.fp@gmail.com" target="_blank" rel="noreferrer">skyblock.fury.fp@gmail.com</a></strong></li></ul><h2 id="🎮-in-game-fakepixel" tabindex="-1">🎮 In-Game (Fakepixel) <a class="header-anchor" href="#🎮-in-game-fakepixel" aria-label="Permalink to &quot;🎮 In-Game (Fakepixel)&quot;">​</a></h2><ul><li><strong>IGN</strong>: <code>ReincarnatedFury</code></li><li><strong>IGN</strong>: <code>PHUB</code></li></ul><p>Please be respectful and clear in your messages. Constructive feedback is always welcome.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
