import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fakepixel Skyblock Guide","description":"","frontmatter":{"layout":"home","title":"Fakepixel Skyblock Guide","hero":{"name":"Fakepixel Skyblock Guide","text":"Step-by-step progression guide for Skyblock on Fakepixel","tagline":"Optimize your stats, gear, and grind path from Early to End Game","image":{"src":"/logo.webp","alt":"Logo"},"actions":[{"theme":"brand","text":"Get Started","link":"/index"},{"theme":"alt","text":"GitHub","link":"https://github.com/UnTamed-Fury/phub"}]},"features":[{"title":"Stage-Based Progression","details":"Structured into Early, Mid, Late, and End Game guides."},{"title":"Gear & Stat Optimizer","details":"Learn what armor, weapons, and pets you should aim for."},{"title":"Skill & Money Guide","details":"Efficient XP and coin strategies tailored to Fakepixel balance."}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
