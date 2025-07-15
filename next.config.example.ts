import type { NextConfig } from "next";

// 纯前端应用配置示例
const nextConfig: NextConfig = {
  // 🔥 关键配置：启用静态导出
  output: 'export',
  
  // 📷 禁用图片优化（静态导出不支持服务端图片优化）
  images: {
    unoptimized: true
  },
  
  // 🌐 如果部署到子目录，设置基础路径
  // basePath: '/my-app',
  
  // 📦 设置资源前缀（CDN 等）
  // assetPrefix: 'https://cdn.example.com',
  
  // 🛣️ URL末尾添加斜杠
  trailingSlash: true,
  
  // ⚡ 编译器优化
  compiler: {
    // 移除 console.log（生产环境）
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 🔧 实验性功能
  experimental: {
    // 优化打包大小
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },
  
  // 📝 TypeScript 配置
  typescript: {
    // 构建时忽略类型错误（不推荐，但可以加快构建）
    // ignoreBuildErrors: true,
  },
  
  // 🎨 Sass 配置
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig; 