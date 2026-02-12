import { createBareServer } from "@tomphttp/bare-server-cloudflare";

const bare = createBareServer();

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route Bare proxy traffic
    if (bare.shouldRoute(url)) {
      return bare.routeRequest(request);
    }

    // Otherwise serve static assets
    return env.ASSETS.fetch(request);
  }
};
