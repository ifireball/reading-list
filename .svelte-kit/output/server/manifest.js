export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["github-mark.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.C8EYGkuu.js",app:"_app/immutable/entry/app.PlAMkvTb.js",imports:["_app/immutable/entry/start.C8EYGkuu.js","_app/immutable/chunks/Hm8C1qgH.js","_app/immutable/chunks/Cmzs3Z2P.js","_app/immutable/chunks/D4QwWmPh.js","_app/immutable/entry/app.PlAMkvTb.js","_app/immutable/chunks/Cmzs3Z2P.js","_app/immutable/chunks/Cg_OskrB.js","_app/immutable/chunks/D4QwWmPh.js","_app/immutable/chunks/ChGHewGx.js","_app/immutable/chunks/Ca6FMlwT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {

		},
		routes: [

		],
		prerendered_routes: new Set(["/","/__data.json"]),
		matchers: async () => {

			return {  };
		},
		server_assets: {}
	}
}
})();
