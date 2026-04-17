export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // Serve static assets from the bound ASSETS
    return env.ASSETS.fetch(request);
  },
};
