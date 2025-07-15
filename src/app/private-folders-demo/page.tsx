import { formatDate } from '../_lib/utils';

export default function PrivateFoldersDemo() {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">私有文件夹演示</h1>
      
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">💡 什么是私有文件夹？</h2>
          <p className="text-gray-700">
            以下划线 (_) 开头的文件夹在 Next.js 中被称为私有文件夹，它们不会创建路由段。
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🔧 实际演示</h2>
          <p className="mb-2">当前时间（使用 _lib/utils.ts 中的函数）:</p>
          <p className="font-mono bg-white p-2 rounded border">
            {formattedDate}
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">📁 文件结构</h2>
          <pre className="bg-white p-3 rounded border font-mono text-sm">
{`app/
├── _lib/                    # 私有文件夹
│   ├── utils.ts            # 工具函数
│   └── constants.ts        # 常量
├── private-folders-demo/    # 公开路由
│   └── page.tsx            # 当前页面
└── other-pages/            # 其他公开路由`}
          </pre>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">⚠️ 重要提示</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>_lib 文件夹不会创建 /lib 路由</li>
            <li>私有文件夹可以包含组件、工具函数、常量等</li>
            <li>有助于保持项目结构清晰</li>
            <li>私有文件夹内的文件仍然可以被导入和使用</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 
