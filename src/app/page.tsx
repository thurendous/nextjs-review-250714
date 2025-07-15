import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>
        <Link href="/products">Products</Link>
      </p>
      <p>
        <Link href="/dashboard">Dashboard</Link>
      </p>
      <p>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      </p>
      <p>
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      </p>
      {/* <p>
        <Link href="/login">Login</Link>
      </p>
      <p>
        <Link href="/register">Register</Link>
      </p>
      <p>
        <Link href="/forgot-password">Forgot Password</Link>
      </p>
      <p>
        <Link href="/blog">Blog</Link>
      </p> */}
    </div>
  );
}
