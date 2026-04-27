import { a as attr, e as escape_html } from "../../chunks/attributes.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    $$renderer2.push(`<header class="header svelte-12qhfyh"><h1 class="svelte-12qhfyh">My reading list</h1> <a href="https://github.com/ifireball/reading-list" class="svelte-12qhfyh"><img src="/github-mark.svg" alt="GitHub" title="Fork me on GitHub"${attr("width", 40)}${attr("height", 40)} class="svelte-12qhfyh"/></a></header> <main class="main svelte-12qhfyh">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> <footer class="footer svelte-12qhfyh"><p>Copyright © <time>${escape_html((/* @__PURE__ */ new Date()).getFullYear())}</time> Barak Korren.</p></footer>`);
  });
}
export {
  _layout as default
};
