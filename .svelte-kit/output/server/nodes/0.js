import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B5dyDOS2.js","_app/immutable/chunks/Cg_OskrB.js","_app/immutable/chunks/Cmzs3Z2P.js","_app/immutable/chunks/ChGHewGx.js","_app/immutable/chunks/9e4Q5obw.js"];
export const stylesheets = ["_app/immutable/assets/0.BHVvX56L.css"];
export const fonts = [];
