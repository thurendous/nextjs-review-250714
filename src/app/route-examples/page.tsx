import Link from "next/link";

export default function RouteExamples() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Next.js 路由模式对比</h1>
      
      <h2>1. 静态路由</h2>
      <p>文件: <code>/about/page.tsx</code></p>
      <p>匹配: <code>/about</code></p>
      <Link href="/about">👉 访问 /about</Link>
      
      <h2>2. 动态路由 [id]</h2>
      <p>文件: <code>/products/[productId]/page.tsx</code></p>
      <p>匹配: <code>/products/1</code>, <code>/products/abc</code></p>
      <p>不匹配: <code>/products</code> (需要参数)</p>
      <Link href="/products/123">👉 访问 /products/123</Link>
      
      <h2>3. 捕获所有路由 [...slug]</h2>
      <p>文件: <code>/blog/[...slug]/page.tsx</code></p>
      <p>匹配: <code>/blog/a</code>, <code>/blog/a/b</code>, <code>/blog/a/b/c</code></p>
      <p>不匹配: <code>/blog</code> (至少需要一个参数)</p>
      <Link href="/blog/2023/my-post">👉 访问 /blog/2023/my-post</Link>
      
      <h2>4. 可选捕获所有路由 [[...slug]]</h2>
      <p>文件: <code>/docs/[[...slug]]/page.tsx</code></p>
      <p>匹配: <code>/docs</code>, <code>/docs/guide</code>, <code>/docs/api/auth</code></p>
      <p>这是最灵活的路由模式!</p>
      
      <div style={{ marginTop: "20px" }}>
        <h3>测试 [[...slug]] 路由:</h3>
        <ul>
          <li><Link href="/docs">👉 /docs (根页面)</Link></li>
          <li><Link href="/docs/getting-started">👉 /docs/getting-started (单段)</Link></li>
          <li><Link href="/docs/api/authentication">👉 /docs/api/authentication (两段)</Link></li>
          <li><Link href="/docs/guides/deployment/vercel/advanced">👉 /docs/guides/deployment/vercel/advanced (多段)</Link></li>
        </ul>
      </div>
    </div>
  );
} 
