// The "database" for our mini blog — just a plain array of posts.
// Each post has a `slug` which is used in the URL: /blog/<slug>

export const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-09-01",
    excerpt: "The very first post. A gentle start to the mini blog.",
    body: `Welcome to the Mini Blog! This is the first post.

Everything here is static — the posts live in a plain JavaScript file
(lib/posts.js). No database, no API, just data.`,
  },
  {
    slug: "file-based-routing",
    title: "Next.js File-Based Routing",
    date: "2026-09-10",
    excerpt: "How folders and files become URLs in the Next.js App Router.",
    body: `In the App Router, the folder structure IS your routing.

- app/page.js        ->  /
- app/blog/[slug]/page.js  ->  /blog/anything

The square brackets make a "dynamic" segment. Whatever you put in the URL
becomes a parameter your page can read.`,
  },
  {
    slug: "keeping-it-simple",
    title: "Keeping It Simple",
    date: "2026-09-20",
    excerpt: "Why a tiny project is the best way to learn a new idea.",
    body: `Small projects are the fastest way to learn.

This blog has three posts, two routes, and no dependencies beyond Next.js
and React. That is on purpose — once the routing clicks, you can add
anything you like.`,
  },
];

// Find one post by its slug. Returns undefined if not found.
export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
