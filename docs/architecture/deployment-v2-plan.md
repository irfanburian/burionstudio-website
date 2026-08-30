# V2 Deployment Plan

## Current state

- Cloudflare Worker project: `cool-wind-2ec9`
- Production branch: `main`
- Static assets are served by the Worker.
- Preview builds for `stabilization-2026-08-30` now complete successfully after adding `wrangler.jsonc`.

## Next steps

1. Merge the stabilized deployment configuration into `main`.
2. Verify the production deployment and custom domain.
3. Add `/api/contact` as a server-side Worker endpoint.
4. Keep secrets out of Git and configure them as runtime secrets/variables.
5. Add validation, rate limiting, and spam protection before enabling real mail delivery.
