import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../../../lib/posts";

// Dynamic route — the [slug] folder matches /blog/<anything>.
// `params.slug` holds whatever is in the URL.
export default function PostPage({ params }) {
  const post = getPost(params.slug);

  // Unknown slug -> Next.js 404 page
  if (!post) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        &larr; Back to all posts
      </Link>

      <h1>{post.title}</h1>
      <span className="post-date">{post.date}</span>

      <div className="post-body">{post.body}</div>
    </main>
  );
}

// Pre-build a page for each post's slug (static generation).
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// Set the browser tab title per post.
export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  return { title: post ? `${post.title} — Mini Blog` : "Not found" };
}
