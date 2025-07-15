// ✅ 推荐写法：在服务器组件（页面文件）中定义 metadata
export const metadata = {
  title: "Metadata 演示",
  description: "演示 Client Components 中 metadata 的推荐写法",
  keywords: ["Next.js", "metadata", "client components"],
};

import { ClientComponentDemo } from "./client-demo";

export default function MetadataDemo() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        📝 Metadata 写法演示
      </h1>
      
      <div className="space-y-8">
        {/* 说明区域 */}
        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
            💡 关键概念
          </h2>
          <div className="space-y-3 text-blue-800 dark:text-blue-200">
            <p>• <strong>服务器组件</strong>：可以导出 metadata（如这个页面文件）</p>
            <p>• <strong>客户端组件</strong>：不能直接导出 metadata</p>
            <p>• <strong>推荐做法</strong>：在页面级别定义 metadata，客户端组件只负责交互</p>
          </div>
        </div>

        {/* 错误写法示例 */}
        <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-red-900 dark:text-red-100">
            ❌ 错误写法
          </h2>
          <pre className="bg-red-100 dark:bg-red-800 p-4 rounded text-sm overflow-x-auto">
{`'use client';

// ❌ 这样做会报错！客户端组件不能导出 metadata
export const metadata = {
  title: "错误示例"
};

export function MyComponent() {
  return <div>内容</div>;
}`}
          </pre>
        </div>

        {/* 正确写法示例 */}
        <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-100">
            ✅ 正确写法
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">
                1. 页面文件 (page.tsx) - 服务器组件
              </h3>
              <pre className="bg-green-100 dark:bg-green-800 p-4 rounded text-sm overflow-x-auto">
{`// ✅ 在服务器组件中定义 metadata
export const metadata = {
  title: "我的页面",
  description: "页面描述"
};

import { MyClientComponent } from "./my-client-component";

export default function MyPage() {
  return <MyClientComponent />;
}`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">
                2. 客户端组件文件 - 只负责交互逻辑
              </h3>
              <pre className="bg-green-100 dark:bg-green-800 p-4 rounded text-sm overflow-x-auto">
{`'use client';

// ✅ 客户端组件专注于交互，不处理 metadata
export function MyClientComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      点击次数: {count}
    </button>
  );
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* 实际演示 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            🎮 实际演示
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            下面的组件是客户端组件，但页面的 metadata 在上方的服务器组件中定义：
          </p>
          
          <ClientComponentDemo />
        </div>
      </div>
    </div>
  );
} 