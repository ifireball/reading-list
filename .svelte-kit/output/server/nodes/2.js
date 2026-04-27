import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.CRwHF2AX.js","_app/immutable/chunks/Cg_OskrB.js","_app/immutable/chunks/Cmzs3Z2P.js","_app/immutable/chunks/Ca6FMlwT.js","_app/immutable/chunks/9e4Q5obw.js"];
export const stylesheets = ["_app/immutable/assets/2.Bu9JyeQZ.css"];
export const fonts = [];
