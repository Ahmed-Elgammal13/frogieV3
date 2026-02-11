import { createBareServer } from "@tomphttp/bare-server-node";

export default {
  async fetch(request, env, ctx) {
    // Serve static files
    try {
      return await env.ASSETS.fetch(request);
    } catch (err) {
      return new Response("Asset not found", { status: 404 });
    }
  }
};
