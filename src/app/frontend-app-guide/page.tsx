import Link from "next/link";

export default function FrontendAppGuide() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "900px", margin: "0 auto" }}>
      <h1>🚀 使用 Next.js 构建纯前端应用完整指南</h1>
      
      <div style={{ backgroundColor: "#e8f5e8", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h2>✅ 答案：完全可以！</h2>
        <p><strong>Next.js 非常适合构建纯前端应用</strong>，通过静态导出功能可以生成纯静态文件，无需服务器运行。</p>
      </div>

      <h2>📋 配置步骤</h2>
      
      <h3>1. 修改 next.config.ts</h3>
      <div style={{ backgroundColor: "#f8f8f8", padding: "15px", borderRadius: "5px", marginBottom: "15px" }}>
        <pre>{`import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用静态导出
  output: 'export',
  
  // 禁用图片优化（静态导出不支持）
  images: {
    unoptimized: true
  },
  
  // 可选：设置基础路径（如果部署到子目录）
  // basePath: '/my-app',
  
  // 可选：设置资源前缀
  // assetPrefix: '/my-app/',
  
  // 禁用 trailing slash（可选）
  trailingSlash: true
};

export default nextConfig;`}</pre>
      </div>

      <h3>2. 更新 package.json 脚本</h3>
      <div style={{ backgroundColor: "#f8f8f8", padding: "15px", borderRadius: "5px", marginBottom: "15px" }}>
        <pre>{`{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "lint": "next lint"
  }
}`}</pre>
      </div>

      <h3>3. 构建和部署</h3>
      <div style={{ backgroundColor: "#f8f8f8", padding: "15px", borderRadius: "5px", marginBottom: "15px" }}>
        <pre>{`# 构建静态文件
npm run build

# 静态文件会生成在 'out' 目录中
# 可以直接部署到任何静态托管服务`}</pre>
      </div>

      <h2>🎯 适用场景</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "20px" }}>
        <div style={{ backgroundColor: "#f0f8ff", padding: "15px", borderRadius: "5px" }}>
          <h4>✅ 完美适合：</h4>
          <ul>
            <li>个人博客/作品集</li>
            <li>企业官网</li>
            <li>文档网站</li>
            <li>Landing Pages</li>
            <li>SPA应用</li>
            <li>电商前端</li>
            <li>Dashboard应用</li>
          </ul>
        </div>
        <div style={{ backgroundColor: "#fff5f5", padding: "15px", borderRadius: "5px" }}>
          <h4>❌ 需要考虑：</h4>
          <ul>
            <li>需要服务端渲染的SEO</li>
            <li>实时数据更新</li>
            <li>服务端API路由</li>
            <li>数据库直接操作</li>
            <li>文件上传处理</li>
          </ul>
        </div>
      </div>

      <h2>💡 纯前端应用架构建议</h2>
      
      <h3>📁 推荐项目结构</h3>
      <div style={{ backgroundColor: "#f8f8f8", padding: "15px", borderRadius: "5px", marginBottom: "15px" }}>
        <pre>{`src/app/
├── _components/         # 共享组件
│   ├── ui/             # UI组件
│   ├── layout/         # 布局组件
│   └── forms/          # 表单组件
├── _hooks/             # 自定义Hooks
├── _lib/               # 工具函数
├── _types/             # TypeScript类型
├── _store/             # 状态管理
├── _styles/            # 样式文件
├── (dashboard)/        # 路由组
│   ├── page.tsx       # /dashboard
│   ├── users/         # /dashboard/users
│   └── settings/      # /dashboard/settings
└── globals.css`}</pre>
      </div>

      <h3>🔧 推荐技术栈</h3>
      <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px", marginBottom: "15px" }}>
        <h4>状态管理：</h4>
        <ul>
          <li><strong>Zustand</strong> - 轻量级状态管理</li>
          <li><strong>Redux Toolkit</strong> - 复杂状态管理</li>
          <li><strong>React Context + useReducer</strong> - 简单状态</li>
        </ul>
        
        <h4>数据获取：</h4>
        <ul>
          <li><strong>SWR</strong> - 数据获取和缓存</li>
          <li><strong>React Query</strong> - 服务端状态管理</li>
          <li><strong>Axios</strong> - HTTP客户端</li>
        </ul>

        <h4>UI框架：</h4>
        <ul>
          <li><strong>Tailwind CSS</strong> - 原子化CSS</li>
          <li><strong>Chakra UI</strong> - 组件库</li>
          <li><strong>Material-UI</strong> - Material Design</li>
        </ul>
      </div>

      <h2>🚀 部署选项</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", marginBottom: "20px" }}>
        <div style={{ backgroundColor: "#f0f8ff", padding: "15px", borderRadius: "5px" }}>
          <h4>🌐 Vercel</h4>
          <p>Next.js官方推荐，自动部署，性能优化</p>
          <code>vercel --prod</code>
        </div>
        
        <div style={{ backgroundColor: "#f0f8ff", padding: "15px", borderRadius: "5px" }}>
          <h4>🌍 Netlify</h4>
          <p>简单易用，CI/CD集成，CDN加速</p>
          <code>netlify deploy --prod</code>
        </div>

        <div style={{ backgroundColor: "#f0f8ff", padding: "15px", borderRadius: "5px" }}>
          <h4>📄 GitHub Pages</h4>
          <p>免费托管，适合开源项目</p>
          <code>gh-pages -d out</code>
        </div>

        <div style={{ backgroundColor: "#f0f8ff", padding: "15px", borderRadius: "5px" }}>
          <h4>☁️ AWS S3 + CloudFront</h4>
          <p>高可用，全球CDN，企业级</p>
          <code>aws s3 sync out/ s3://bucket</code>
        </div>
      </div>

      <h2>⚡ 性能优化建议</h2>
      <div style={{ backgroundColor: "#fffbf0", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h4>1. 代码分割</h4>
        <pre style={{ backgroundColor: "#f8f8f8", padding: "10px", borderRadius: "3px" }}>{`// 动态导入组件
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});`}</pre>

        <h4>2. 图片优化</h4>
        <pre style={{ backgroundColor: "#f8f8f8", padding: "10px", borderRadius: "3px" }}>{`// 虽然静态导出不支持Next.js Image优化
// 但可以使用第三方服务或预处理图片
<img 
  src="/optimized-image.webp" 
  alt="description"
  loading="lazy"
/>`}</pre>

        <h4>3. 字体优化</h4>
        <pre style={{ backgroundColor: "#f8f8f8", padding: "10px", borderRadius: "3px" }}>{`// 使用 next/font 优化字体加载
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });`}</pre>
      </div>

      <h2>🔥 实战示例</h2>
      <div style={{ backgroundColor: "#f0f8ff", padding: "15px", borderRadius: "5px" }}>
        <h4>创建一个简单的 SPA 应用：</h4>
        <ol>
          <li>配置 <code>next.config.ts</code> 启用静态导出</li>
          <li>创建页面和组件</li>
          <li>使用 Client-side 数据获取</li>
          <li>构建并部署到静态托管</li>
        </ol>
        <p><strong>结果：</strong>完全运行在浏览器中的现代化应用！</p>
      </div>

      <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#e8f5e8", borderRadius: "5px" }}>
        <h3>🎉 总结</h3>
        <p>
          <strong>Next.js 是构建纯前端应用的绝佳选择！</strong>
          它提供了现代化的开发体验，同时保持了部署的灵活性。
          你可以享受 React 生态系统的全部优势，同时获得静态网站的性能和可靠性。
        </p>
        
        <div style={{ marginTop: "15px" }}>
          <h4>🔗 相关链接：</h4>
          <ul>
            <li><Link href="/route-examples">👉 路由系统演示</Link></li>
            <li><Link href="/utils-demo">👉 工具函数演示</Link></li>
            <li><Link href="/private-folders-demo">👉 项目结构指南</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 