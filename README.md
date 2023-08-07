# Next.js Template

What you get "out of the box"

- Next.js
- Tailwind CSS
- Jest tests
- Sandworm
- GitHub Actions

### Tailwind CSS

Opinionated choice, yes. It works great for my needs, makes changing styles quick. And...it's found a place embedded in the "new Next.js" project questions...so that seems a good, Vercel-approved decision.

### Jest

Unit test your code.

### Sandworm

Security and license checks for your dependencies.

### GitHub Actions

Jest, Sandworm (others to come?) are configured to automatically run on pull requests with the preconfigured workflows. 

**Want deployments, too?**&mdash;Create a Vercel account, and install it in your GitHub profile, to add easy deployments to this automation!

## "Getting Started": the same one from Next.js

Below, you can read the same `README` generated after running `npx create-next-app ...`. (Make sure to install dependencies first, that small edit is there.)

### Getting Started

Install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

--- 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
