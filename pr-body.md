🎯 **What:**
The vulnerability fixed is a potential Cross-Site Scripting (XSS) vulnerability via unescaped HTML. Svelte's `{@html notes}` in `src/lib/components/Item.svelte` renders raw HTML, and previously the Markdown parser used to populate `notes` (`remark-html` in `src/lib/load-data.js`) did not sanitize the HTML output.

⚠️ **Risk:**
If left unfixed, this vulnerability could allow an attacker who controls the YAML data to inject arbitrary HTML or JavaScript (e.g., `<script>alert(1)</script>`) into the application. Since `{@html}` bypasses Svelte's built-in XSS protections, the injected script would be executed in the user's browser, potentially leading to session hijacking, defacement, or unauthorized actions on behalf of the user.

🛡️ **Solution:**
The fix addresses the vulnerability by enabling sanitization in the Markdown parser. By passing `{ sanitize: true }` to `remark-html` when instantiating the plugin in `src/lib/load-data.js`, the parsed HTML is now sanitized before it is ever stored or passed to the Svelte components. This strips out dangerous tags and attributes (like `<script>`) while preserving safe formatting (like `<strong>` and `<em>`). A test case was also added to ensure that `<script>` tags are successfully removed.
