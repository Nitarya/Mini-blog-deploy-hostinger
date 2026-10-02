import Link from "next/link";
import { posts } from "../lib/posts";

// Homepage — lives at "/" because it is app/page.js
export default function HomePage() {
  return (
    <main className="container">
      <h1 className="site-title">Mini Blog</h1>
      <p className="site-subtitle">
        Learning Next.js file-based routing, one post at a time.
      </p>

      {/* One card per post, linking to its dynamic route */}
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="card">
          <h2>{post.title}</h2>
          <span className="date">{post.date}</span>
          <p className="excerpt">{post.excerpt}</p>
        </Link>
      ))}
    </main>
  );
}
