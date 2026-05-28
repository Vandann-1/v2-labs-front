# V2 Labs Frontend

Next.js App Router frontend for the V2 Labs website.

## Local setup

1. Create `.env.local` from [`.env.example`](C:/Users/User/Desktop/v2labs/v2labs%20frontend/v2-labs-front/.env.example:1).
2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

## Deployment on Vercel

- Framework config is in [vercel.json](C:/Users/User/Desktop/v2labs/v2labs%20frontend/v2-labs-front/vercel.json:1)
- Build target is already configured in [next.config.ts](C:/Users/User/Desktop/v2labs/v2labs%20frontend/v2-labs-front/next.config.ts:1)

### Required environment variables

- `NEXT_PUBLIC_API_BASE_URL`

For production, set:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-render-service.onrender.com
```

The contact form sends lead data to the backend and now includes the current page URL as `source_page`.
