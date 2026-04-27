import { G as bind_props, J as ensure_array_like, K as head } from "../../chunks/renderer.js";
import { a as attr, e as escape_html } from "../../chunks/attributes.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Item($$renderer, $$props) {
  let title, url, notes;
  let item = $$props["item"];
  ({ title, url, notes } = item);
  $$renderer.push(`<article><h3><a${attr("href", url)}>${escape_html(title)}</a></h3> <div>${html(notes)}</div></article>`);
  bind_props($$props, { item });
}
function Column($$renderer, $$props) {
  let title = $$props["title"];
  let items = $$props["items"];
  $$renderer.push(`<section class="root"><h2>${escape_html(title)}</h2> <!--[-->`);
  const each_array = ensure_array_like(items);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    Item($$renderer, { item });
  }
  $$renderer.push(`<!--]--></section>`);
  bind_props($$props, { title, items });
}
function Columns($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const COLUMNS = ["To Read", "Reading", "Read"];
    $$renderer2.push(`<div class="columns svelte-1rn2kbv"><!--[-->`);
    const each_array = ensure_array_like(COLUMNS);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let col = each_array[$$index];
      Column($$renderer2, {
        title: col,
        items: data.filter(({ status }) => status.toLowerCase() === col.toLowerCase())
      });
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { data });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>My reading list</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Barak Korren's reading list"/>`);
    });
    Columns($$renderer2, { data: data.data });
  });
}
export {
  _page as default
};
